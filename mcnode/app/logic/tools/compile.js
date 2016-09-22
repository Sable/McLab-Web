"use strict";
var path = require('path');
var fs = require('fs');
var child_process = require('child_process');

var config = require(__base + 'config/config');
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');
var sessions = require(__base + 'app/logic/util/session_utils');

// Takes object representing Mc2For command line arguments; returns a formatted argument string.
// Throws an exception if the arguments are not valid; the compilation would fail anyways, but this protects us against
// an injection attack.
function buildFortranArgString(arg){
  const mlClass = arg.mlClass;
  const numRows = arg.numRows;
  const numCols = arg.numCols;
  const realComplex = arg.realComplex;

  const argsAreValid = validateArgs(mlClass, numRows, numCols, realComplex);
  if (argsAreValid){
    return `'${mlClass}&${numRows}*${numCols}&${realComplex}'`;
  }
  else{
    throw "Fortran compilation arguments are invalid.";
  }
}

// Checks if arguments for compilation are valid; returns true if they are valid, false otherwise
function validateArgs(mlClass, numRows, numCols, realComplex){
  // Confirm that mlClass and realComplex args are within the possible range of values
  const ML_CLASS_POSSIBLE_VALUES = ['LOGICAL', 'CHAR', 'SINGLE', 'DOUBLE', 'INT8', 'UINT8', 'INT16', 'UINT16', 'INT32',
  'INT64', 'UINT64'];
  const REAL_COMPLEX_POSSIBLE_VALUES = ['REAL', 'COMPLEX'];
  if((ML_CLASS_POSSIBLE_VALUES.indexOf(mlClass) == -1) || (REAL_COMPLEX_POSSIBLE_VALUES.indexOf(realComplex) == -1)){
    return false;
  }

  // Confirm that the row/cols arguments are actually numbers; if they are parsed as NaN, they are not numbers
  const numRowsAsInt = parseInt(numRows);
  const numColsAsInt = parseInt(numCols);
  if(isNaN(numRowsAsInt) || isNaN(numColsAsInt)){
    return false;
  }

  return true;
}

// Compile files using Mc2For, the McLab Fortran compiler.
// Creates an archive file with the compiled .f95 files, and returns (through the callback) a link to the archive.
// The archive can then be download using the serveGen function in userfiles.js
function applyMc2For(sessionID, body, mainFile, cb){
  let argString;
  try{
    argString = buildFortranArgString(body.arg);
  }
  catch (e){
    cb({error: e}, null);
    return;
  }
  const mainFilePath = userfile_utils.fileInWorkspace(sessionID, mainFile); // path to entry point file to be compiled
  const mainFileDir = path.dirname(mainFilePath); // directory of this file
  const genRootPath = userfile_utils.genRoot(sessionID);
  const userRoot = userfile_utils.userRoot(sessionID);
  const fortranRootPath = userfile_utils.fortranRoot(sessionID);

  const command = `java -jar ${config.MC2FOR_PATH} ${mainFilePath} -args ${argString} -codegen`;

  // Compile the files; this will produce Fortran (.f95) files in the same directory as the Matlab files
  child_process.exec(command, (err) => {
    if(!err){
      // Make a gen folder for the user; if it exists already, just ignore the error
      fs.mkdir(genRootPath, (err) => {
        // Remove the fortran-code subfolder, if it exists, and make a new one
        child_process.exec('rm -r ' + fortranRootPath, (err) => {
          fs.mkdir(fortranRootPath, (err) => {
            // Read all the files in the directory where our .f95 files are located
            const toCopy = mainFileDir + '/*.f95'; // pattern of files to copy
            child_process.exec(`mv ${toCopy} ${fortranRootPath}`, (err) => {
              const archiveUUID = sessions.createUUID();
              const archiveName = `fortran-package-${archiveUUID}`;
              const archivePath = path.join(genRootPath, archiveName + '.zip');
              const relPathToArchive = path.relative(userRoot, archivePath);

              // Zip the files and return the path to the zip file
              child_process.exec(`zip -j ${archivePath} ${fortranRootPath}/*.f95`, (err) =>{
                cb(null, {package_path: relPathToArchive});
              });
            });
          });
        });
      });
    }
    else {
      cb({error: 'Failed to compile this project.'}, null);
    }
  });
}

// Compile the file at given filepath, and with given arguments, to Fortran
// Zip the result and return the path to it
function compileToFortran(req, res) {
  const sessionID = req.header('SessionID');
  const body = req.body;
  const mainFile = body.mainFile || '';
  applyMc2For(sessionID, body, mainFile, (err, package_path) => {
    if(!err){
      res.json(package_path);
    }
    else{
      res.status(404).json({msg: "Failed to compile the code into Fortran."});
    }
  });
}

module.exports = {
  compileToFortran
};

