"use strict";
var fs = require('fs');
var child_process = require('child_process');
var path = require('path');

var config = require(__base + 'config/config');
var AdmZip = require('adm-zip');

var userfile_utils = require(__base + 'app/logic/util/userfile_utils');
var tool_usage = require(__base + 'app/logic/util/tool_usage');

// Return the contents of a given file (given filepath param)
function readFile(req, res) {
  console.log('readfile request');
  const sessionID = req.params.sessionID;
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

// Upload a ZIP file to the user's directory
function upload(req, res) {
  const sessionID = req.params.sessionID;
  console.log('upload request');
  if (req.files) {
    // Grab the file and the path to the user's directory
    const file = req.files[0];
    const userRoot = userfile_utils.userRoot(sessionID);

    // Create the user directory; if it already exists, does nothing, and we just ignore the error
    fs.mkdir(userRoot, function(){
      const pathToZip = path.join(userRoot, file.fieldname);
      // Attempt to write the zip file to the user's root
      fs.writeFile(pathToZip, file.buffer, function(err){
        if(err){
          console.log("write failed");
          console.log(err);
          res.status(400).json({msg: 'Write failed'});
        }
        else{
          // Extract the files in the zip to the user's workspace
          const pathToUnzippedFiles = userfile_utils.userWorkspace(sessionID);
          let zip = new AdmZip(pathToZip);
          zip.extractAllTo(pathToUnzippedFiles);
          res.send('');
        }
      });
    });
  }
  else{
    res.status(400).json({msg: 'Upload failed'});
  }
}

// Return JSON representing the user's filetree (files and directories)
function filetree(req, res) {
  console.log('filetree request');
  const sessionID = req.params.sessionID;
  const userFileRoot = userfile_utils.userWorkspace(sessionID);
  const userRoot = userfile_utils.userRoot(sessionID);
  fs.access(userFileRoot, function(err) {
    if (!err) {
      userfile_utils.createFileTree(userRoot, userFileRoot, function(err, fileTree){
        res.json(fileTree);
      });
      //res.json(userfile_utils.createFileTree(userFileRoot, userRoot));
    } else {
      res.json({});
    }
  });
}

// Return the zip file in the user's generated file folder at the given path.
function serveGen(req, res) {
  console.log('serve_gen request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;
  const pathToFile = userfile_utils.fileInGen(sessionID, filepath);
  const fileName = path.relative(userfile_utils.genRoot(sessionID), pathToFile);

  res.set({
    'Content-Type': 'application/zip',
    'Content-Disposition': `attachment; filename=${fileName}`
  });
  res.sendFile(pathToFile);
}

module.exports = {
    readFile,
    upload,
    filetree,
    serveGen
};