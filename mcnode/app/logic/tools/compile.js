"use strict";
var path = require('path');
var fs = require('fs');
var child_process = require('child_process');
var underscore = require('underscore');
var async = require('async');

var config = require(__base + 'config/config');
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');
var tool_analysis = require(__base + 'app/logic/util/tool_usage');
var sessions = require(__base + 'app/logic/util/session_utils');

// Compile the file at given filepath, and with given arguments, to Fortran
// Zip the result and return the path to it
// TODO: fix this abomination of a function
function compileToFortran(req, res) {
  console.log('compile_to_fortran request');
  const sessionID = req.params.sessionID;
  const body = req.body;
  const mainFile = body.mainFile || '';
  let argString;
  try{
    argString = tool_analysis.buildFortranArgString(body.arg);
  }
  catch (e){
    res.status(400).json({msg: e});
  }
  const mainFilePath = userfile_utils.fileInWorkspace(sessionID, mainFile); // path to entry point file to be compiled
  const mainFileDir = path.dirname(mainFilePath); // directory of this file
  const genRootPath = userfile_utils.genRoot(sessionID);
  const fortranRootPath = userfile_utils.fortranRoot(sessionID);

  const command = `java -jar ${config.MC2FOR_PATH} ${mainFilePath} -args ${argString} -codegen`;

  // Compile the files; this will produce Fortran (.f95) files in the same directory as the Matlab files
  child_process.exec(command, function(err){
    if(!err){
      // Make a gen folder for the user; if it exists already, just ignore the error
      fs.mkdir(genRootPath, function(err){
        // Remove the fortran-code subfolder, if it exists, and make a new one
        child_process.exec('rm -r ' + fortranRootPath, function (err) {
          fs.mkdir(fortranRootPath, function(err){
            // Read all the files in the directory where our .f95 files are located
            fs.readdir(mainFileDir, function (err, files) {
              let fortranFiles = []; // names of the .f95 files
              for (let fileInDir of files) {
                if (fileInDir.slice(-4) == '.f95') {
                  fortranFiles.push(fileInDir);
                }
              }

              let fortranFilePathList = []; // paths to the .f95 files
              for (let fortranFile of fortranFiles) {
                fortranFilePathList.push(path.join(mainFileDir, fortranFile));
              }

              let finalFilePaths = []; // paths where each .f95 file should end up
              for (let fortranFile of fortranFiles) {
                finalFilePaths.push(path.join(fortranRootPath, fortranFile))
              }

              // Hacky way of renaming a list of files asynchronously
              let rename = function(index, cb){
                fs.rename(fortranFilePathList[index], finalFilePaths[index], function(){
                  cb();
                });
              };
              var rangeOverFiles = underscore.range(fortranFilePathList.length);
              //const zippedFilePaths = underscore.zip(fortranFilePathList, finalFilePaths);
              async.each(rangeOverFiles, rename, function(err){
                // create a UUID and name for the archive to be created out of these files
                const archiveUUID = sessions.createUUID();
                const archiveName = `fortran-package-${archiveUUID}`;
                const archivePath = path.join(genRootPath, archiveName + '.zip');
                const relPathToArchive = path.relative(genRootPath, archivePath);
                const package_path = `files/download/${relPathToArchive}`;

                // Zip the files and return the path to the zip file (relative to /session, since this is the API call to be made)
                child_process.exec(`zip -j ${archivePath} ${fortranRootPath}/*.f95`, function(err){

                  res.json({
                    package_path: package_path
                  });
                });
              });
            });
          });
        });
      });
    }
    else {
      res.status(400).json({msg: 'Failed to compile this project.'});
    }
  });
}

module.exports = {
  compileToFortran
};