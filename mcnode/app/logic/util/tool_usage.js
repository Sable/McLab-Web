"use strict";
var child_process = require('child_process');
var path = require('path');
var fs = require('fs');

var config = require(__base + 'config/config');
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');
var sessions = require(__base + 'app/logic/util/session_utils');

var underscore = require('underscore');
var async = require('async');

// Take a jsonSubtree object representing the output (or part of the output) of McLabCore kind analysis
// 'output' is mutated through the function; may want to make this function pure instead
function extractKinds(jsonSubtree, output){
  if (typeof jsonSubtree === 'object'){
    if ('kind' in jsonSubtree){
      let record = {
        name: jsonSubtree.name.name,
        position: {
          startRow: jsonSubtree.name.position.start.line - 1,
          startColumn: jsonSubtree.name.position.start.column - 1,
          endRow: jsonSubtree.name.position.end.line - 1,
          endColumn: jsonSubtree.name.position.end.column
        }
      };
      if(!(jsonSubtree.kind in output)){
        output[jsonSubtree.kind] = [];
      }
      output[jsonSubtree.kind].push(record);
    }
    else{
      for(let key in jsonSubtree){
        extractKinds(jsonSubtree[key], output);
      }
    }
  }
  // If it's an array: extract kinds on every element
  else if (jsonSubtree.constructor === Array){
    for(let item of jsonSubtree){
      extractKinds(item, output)
    }
  }
}

function performKindAnalysis(sessionID, filepath, cb){
  let pathToFile = userfile_utils.fileInWorkspace(sessionID, filepath);
  const command = `java -jar ${config.MCLAB_CORE_JAR_PATH} --json ${pathToFile}`;

  child_process.exec(command, (error, stdout) =>{
    try {
      let jsonTree = JSON.parse(stdout);
      let output = {};
      this.extractKinds(jsonTree, output);
      cb(null, output);
    }
    catch(err){
      cb("Could not do kind analysis", null)
    }
  });
}

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

function compileToFortran(sessionID, body, mainFile, cb){
  let argString;
  try{
    argString = this.buildFortranArgString(body.arg);
  }
  catch (e){
    cb({error: e}, null);
    return;
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
            const toCopy = mainFileDir + '/*.f95'; // pattern of files to copy
            child_process.exec(`mv ${toCopy} ${fortranRootPath}`, function(err){
              const archiveUUID = sessions.createUUID();
              const archiveName = `fortran-package-${archiveUUID}`;
              const archivePath = path.join(genRootPath, archiveName + '.zip');
              const relPathToArchive = path.relative(genRootPath, archivePath);
              const package_path = `files/download/${relPathToArchive}`;

              // Zip the files and return the path to the zip file (relative to /session, since this is the API call to be made)
              child_process.exec(`zip -j ${archivePath} ${fortranRootPath}/*.f95`, function(err){
                cb(null, {package_path: package_path});
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

module.exports = {
  extractKinds,
  performKindAnalysis,
  buildFortranArgString,
  compileToFortran
};