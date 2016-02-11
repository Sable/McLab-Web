"use strict";
var path = require('path');
var fs = require('fs');
var child_process = require('child_process');

var AdmZip = require('adm-zip');
var async = require('async');

var config = require('../../config/config');
var util = require('./util');

// Create new UUID for the user and redirect them to that session
function redirectToSession(req, res) {
  console.log('redirect_to_session request');
  const newUUID = util.createUUID();
  res.redirect('/session/' + newUUID + '/');
}

// Send the user the base index.html page
function index(req, res) {
  console.log('index request');
  res.sendFile(path.join(__dirname + '/../../../html/index.html'));
}

// Upload a ZIP file to the user's directory
function upload(req, res) {
  const sessionID = req.params.sessionID;
  console.log('upload request');
  if (req.files) {
    // Grab the file and the path to the user's directory
    const file = req.files[0];
    const userRoot = util.pathToUserRoot(sessionID);

    // Create the user directory; if it already exists, does nothing, and we just ignore the error
    fs.mkdir(userRoot, function(){
      const pathToZip = path.join(userRoot, file.fieldname);
      // Attempt to write the zip file to the user's root
      fs.writeFile(pathToZip, file.buffer, function(err){
        if(err){
          console.log("write failed");
          console.log(err);
          util.errorResponse400(res);
        }
        else{
          // Extract the files in the zip to the user's workspace
          const pathToUnzippedFiles = util.pathToUserWorkspace(sessionID);
          let zip = new AdmZip(pathToZip);
          zip.extractAllTo(pathToUnzippedFiles);
          res.send('');
        }
      });
    });
  }
  else{
    util.errorResponse400(res);
  }
}

// Return JSON representing the user's filetree (files and directories)
function filetree(req, res) {
  console.log('filetree request');
  const sessionID = req.params.sessionID;
  const userFileRoot = util.pathToUserWorkspace(sessionID);
  const userRoot = util.pathToUserRoot(sessionID);
  fs.access(userFileRoot, function(err) {
    if (!err) {
      let fileTree = util.createFileTree(userFileRoot, userRoot);
      res.json(fileTree);
    } else {
      res.json({});
    }
  });
}

// Return the contents of a given file (given filepath param)
function readfile(req, res) {
  console.log('readfile request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;
  const fileToRead = util.pathToFileInWorkspace(sessionID, filepath);

  fs.readFile(fileToRead, function(err, data) {
    if (!err) {
      res.send(data);
    } else {
      util.errorResponse404(res);
    }
  });
}

// Perform kind analysis on the file given in filepath and return the results as JSON
function kindAnalysis(req, res) {
  console.log('kind_analysis request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;

  let pathToFile = util.pathToFileInWorkspace(sessionID, filepath);
  const command = `java -jar ${config.MCLAB_CORE_JAR_PATH} --json ${pathToFile}`;

  child_process.exec(command, function(error, stdout){
    try {
      let jsonTree = JSON.parse(stdout);
      let output = {};
      util.extractKinds(jsonTree, output);
      res.json(output);
    }
    catch(err){
      util.errorResponse400(res, 'Mclab-core failed to do kind analysis on this file. Is this a valid matlab file?');
    }
  });
}

// Compile the file at given filepath, and with given arguments, to Fortran
// Zip the result and return the path to it
// TODO: fix this abomination of a function
function compileToFortran(req, res) {
  console.log('compile_to_fortran request');
  const sessionID = req.params.sessionID;
  const body = req.body;
  const mainFile = body.mainFile || '';

  const argString = util.buildFortranArgString(body.arg);
  const mainFilePath = util.pathToFileInWorkspace(sessionID, mainFile); // path to entry point file to be compiled
  const mainFileDir = path.dirname(mainFilePath); // directory of this file
  const genRootPath = util.pathToGenRoot(sessionID);
  const fortranRootPath = util.pathToFortranRoot(sessionID);

  const command = `java -jar ${config.MC2FOR_PATH} ${mainFilePath} -args ${argString} -codegen`;

  // Compile the files; this will produce Fotran (.f95) files in the same directory as the Matlab files
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

              // move (using rename) each file to its final location (in gen/fortran-code, rather than workspace)
              for (let i = 0; i < fortranFilePathList.length; i++) {
                fs.renameSync(fortranFilePathList[i], finalFilePaths[i]);
              }

              // create a UUID and name for the archive to be created out of these files
              const archiveUUID = util.createUUID();
              const archiveName = `fortran-package-${archiveUUID}`;
              const archivePath = path.join(genRootPath, archiveName + '.zip');

              // Zip the files and return the path to the zip file (relative to /session, since this is the API call to be made)
              child_process.exec(`zip -j ${archivePath} ${fortranRootPath}/*.f95`, function(err){
                const relPathToArchive = path.relative(config.MEDIA_ROOT, archivePath);
                res.json({
                  package_path: `/session/${relPathToArchive}/`
                });
              });
            });
          });
        });
      });
    }
    else {
      util.errorResponse400(res, 'Failed to compile this project.');
    }
  });
}

// Return the zip file in the user's generated file folder at the given path.
function serveGen(req, res) {
  console.log('serve_gen request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;
  const pathToFile = util.pathToFileInGen(sessionID, filepath);
  const fileName = path.relative(util.pathToGenRoot(sessionID), pathToFile);

  res.set({
    'Content-Type': 'application/zip',
    'Content-Disposition': `attachment; filename=${fileName}`
  });
  res.sendFile(pathToFile);
}

module.exports = {
    redirectToSession,
    index,
    upload,
    filetree,
    readfile,
    kindAnalysis,
    compileToFortran,
    serveGen
};