"use strict";
var path = require('path');
var fs = require('fs');

var config = require(__base + 'config/config');
var async = require('async');
var underscore = require('underscore');
var AdmZip = require('adm-zip');


// McLab-Web/user-files/{sessionID}
function userRoot(sessionID){
  const pathToUserRoot = path.join(config.MEDIA_ROOT, sessionID);
  return path.resolve(pathToUserRoot);
}

// McLab-Web/user-files/{sessionID}/workspace
function userWorkspace(sessionID){
  const pathToUserRoot = this.userRoot(sessionID);
  const pathToUserWorkspaceRoot = path.join(pathToUserRoot, config.USER_FILE_FOLDER);
  return path.resolve(pathToUserWorkspaceRoot);
}

// McLab-Web/user-files/{sessionID}/workspace/{filepath}
function fileInWorkspace(sessionID, filepath){
  const pathToUserWorkspaceRoot = this.userWorkspace(sessionID);
  const pathToFileInWorkspace = path.join(pathToUserWorkspaceRoot, filepath);
  return path.resolve(pathToFileInWorkspace);
}

// McLab-Web/user-files/{sessionID}/gen
function genRoot(sessionID){
  const pathToUserRoot = this.userRoot(sessionID);
  const pathToGenRoot = path.join(pathToUserRoot, 'gen');
  return path.resolve(pathToGenRoot);
}

// McLab-Web/user-files/{sessionID}/gen/{filepath}
function fileInGen(sessionID, filename){
  const userGen = this.genRoot(sessionID);
  const pathToFile = path.join(userGen, filename);
  return path.resolve(pathToFile);
}

// McLab-Web/user-files/{sessionID}/gen/fortran-code
function fortranRoot(sessionID){
  const pathToGenRoot = this.genRoot(sessionID);
  const pathToFortranRoot = path.join(pathToGenRoot, 'fortran_code');
  return path.resolve(pathToFortranRoot);
}

// Return JSON representing the directory structure and files in a user's workspace
// TODO: make this async
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
    console.log(fileNames.length);
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

function uploadFile(file, sessionID, cb){
  const userRoot = this.userRoot(sessionID);

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
        const pathToUnzippedFiles = this.userWorkspace(sessionID);
        let zip = new AdmZip(pathToZip);
        zip.extractAllTo(pathToUnzippedFiles);
        cb(null);
      }
    });
  });
}

module.exports = {
  userRoot,
  userWorkspace,
  fileInWorkspace,
  fileInGen,
  genRoot,
  fortranRoot,
  createFileTree,
  uploadFile
};