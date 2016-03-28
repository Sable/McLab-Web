"use strict";
var fs = require('fs');
var child_process = require('child_process');
var path = require('path');

var userfile_utils = require(__base + 'app/logic/util/userfile_utils');

var async = require('async');

// Return the contents of a given file (given filepath param)
function readFile(req, res) {
  console.log('readfile request');
  const sessionID = req.header('SessionID');
  const filepath = req.params.filepath;
  const fileToRead = userfile_utils.fileInWorkspace(sessionID, filepath);

  fs.readFile(fileToRead, function(err, data) {
    if (!err) {
      res.send(data);
    } else {
      res.status(404).json({msg: 'Failed to read file.'});
    }
  });
}

const tar_gz_regex = new RegExp('.*\.tar\.gz$');
const zip_regex = new RegExp('.*\.zip$');

function uploadFile(file, sessionID, cb){
  const userRoot = userfile_utils.userRoot(sessionID);
  // Create the user directory; if it already exists, does nothing, and we just ignore the error
  fs.mkdir(userRoot, () => {
    const pathToZip = path.join(userRoot, file.fieldname);
    // Attempt to write the zip file to the user's root
    fs.writeFile(pathToZip, file.buffer, (err) =>{
      if(err){
        console.log("write failed");
        console.log(err);
        cb({Message: "Write failed"});
      }
      else{
        // Extract the files in the zip to the user's workspace
        const pathToUnzippedFiles = userfile_utils.userWorkspace(sessionID);
        fs.mkdir(pathToUnzippedFiles, () =>{
          if (tar_gz_regex.test(pathToZip)){
            child_process.exec(`tar -xzf ${pathToZip} -C ${pathToUnzippedFiles} `, (err, stdout) => {
              if (err){
                cb('Could not extract .tar.gz.')
              }
              else{
                cb(null);
              }
            });
          }
          else if (zip_regex.test(pathToZip)){
            child_process.exec(`unzip ${pathToZip} -d ${pathToUnzippedFiles} `, (err, stdout) => {
              if (err){
                cb('Could not extract .zip')
              }
              else{
                cb(null);
              }
            });
          }
          else {
            cb('Was not zip or tar.gz');
          }
        });
      }
    });
  });
}

// Upload a ZIP file to the user's directory
function upload(req, res) {
  console.log('upload request');
  const sessionID = req.header('SessionID');
  if (req.files) {
    // Grab the file and the path to the user's directory
    const file = req.files[0];
    uploadFile(file, sessionID, function(err){
      if(!err){
        res.send('');
      }
      else{
        res.status(400).json({msg: 'Write failed'});
      }
    });
  }
  else{
    res.status(400).json({msg: 'Upload failed'});
  }
}

// Return JSON representing the directory structure and files in a user's workspace
// This will be difficult because it's recursive
function createFileTree(startPath, dirPath, cb){
  // A filetree is the path to the filetree (relative to workspace), the directories inside, and the files inside
  // The directories themselves will be filetrees
  let fileTree = {
    path: path.relative(startPath, dirPath),
    directories: [],
    files: []
  };

  // Get the list of files (directories or normal files) in the current folder and use stat to determine file or dir
  // Filter out .DS_STORE and __MACOSX, which are generated on OSX
  fs.readdir(dirPath, function(err, fileNames){

    let fileNamesWithPath = [];
    for (let fileName of fileNames){
      fileNamesWithPath.push(path.join(dirPath, fileName));
    }

    async.map(fileNamesWithPath, fs.stat, function(err, results){
      let dirNames = [];
      for(let i=0; i<results.length; i++){
        const stat = results[i];
        const fileName = fileNames[i];

        if(stat.isFile() && fileName !== '.DS_Store'){
          fileTree.files.push(fileName);
        }
        else if(stat.isDirectory() && fileName !== '__MACOSX'){
          dirNames.push(fileNamesWithPath[i]);
        }
      }
      let createFileTreeBound = createFileTree.bind(null, startPath);

      async.map(dirNames, createFileTreeBound, function(err, results){
        for (let subFileTree of results){
          fileTree.directories.push(subFileTree);
        }
        cb(null, fileTree);
      });
    });
  });
}

// Return JSON representing the user's filetree (files and directories)
function filetree(req, res) {
  console.log('filetree request');
  const sessionID = req.header('SessionID');
  const userFileRoot = userfile_utils.userWorkspace(sessionID);
  const userRoot = userfile_utils.userRoot(sessionID);
  fs.access(userFileRoot, function(err) {
    if (!err) {
      createFileTree(userRoot, userFileRoot, function(err, fileTree){
        res.json(fileTree);
      });
    } else {
      res.json({});
    }
  });
}

// Return the zip file in the user's folder at the given path.
function serveGen(req, res) {
  console.log('serve_gen request');
  //const sessionID = req.header('SessionID');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;
  const pathToFile = userfile_utils.fileInUserRoot(sessionID, filepath);
  const fileName = path.relative(userfile_utils.userRoot(sessionID), pathToFile);
  const fileNameToSend = fileName.replace('gen-', '');

  //res.set({
  //  'Content-Type': 'application/zip',
  //  'Content-Disposition': `attachment; filename=${fileNameToSend}`
  //});
  fs.exists(pathToFile, (exists) =>{
    if(exists){
      res.sendFile(pathToFile);
    }
    else{
      res.status(404).json({error: "Could not find requested file."});
    }
  });

}

module.exports = {
    readFile,
    upload,
    filetree,
    serveGen
};