"use strict";

var path = require('path');
var fs = require('fs');
var crypto = require('crypto');
var config = require('../config/config');

// McLab-Web/user-files/{sessionID}
function pathToUserRoot(sessionID){
  const pathToUserRoot = path.join(config.MEDIA_ROOT, sessionID);
  return path.resolve(pathToUserRoot);
}

// McLab-Web/user-files/{sessionID}/workspace
function pathToUserWorkspace(sessionID){
  const pathToUserRoot = this.pathToUserRoot(sessionID);
  const pathToUserWorkspaceRoot = path.join(pathToUserRoot, config.USER_FILE_FOLDER);
  return path.resolve(pathToUserWorkspaceRoot);
}

// McLab-Web/user-files/{sessionID}/workspace/{filepath}
function pathToFileInWorkspace(sessionID, filepath){
  const pathToUserWorkspaceRoot = this.pathToUserWorkspace(sessionID);
  const pathToFileInWorkspace = path.join(pathToUserWorkspaceRoot, filepath);
  return path.resolve(pathToFileInWorkspace);
}

// McLab-Web/user-files/{sessionID}/gen
function pathToGenRoot(sessionID){
  const pathToUserRoot = this.pathToUserRoot(sessionID);
  const pathToGenRoot = path.join(pathToUserRoot, 'gen');
  return path.resolve(pathToGenRoot);
}

// McLab-Web/user-files/{sessionID}/gen/{filepath}
function pathToFileInGen(sessionID, filename){
  const userGen = this.pathToGenRoot(sessionID);
  const pathToFile = path.join(userGen, filename);
  return path.resolve(pathToFile);
}

// McLab-Web/user-files/{sessionID}/gen/fortran-code
function pathToFortranRoot(sessionID){
  const pathToGenRoot = this.pathToGenRoot(sessionID);
  const pathToFortranRoot = path.join(pathToGenRoot, 'fortran_code');
  return path.resolve(pathToFortranRoot);
}



function errorResponse400(res, msg){
  msg = msg || 'Something broke';
  res.status(400).json({msg: msg});
}

function errorResponse404(res, msg){
  msg = msg || 'Something broke';
  res.status(404).json({msg: msg});
}



// Credit: http://stackoverflow.com/a/2117523
function createUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  let r = crypto.randomBytes(1)[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
  return v.toString(16);
  });
}



// Return JSON representing the directory structure and files in a user's workspace
// TODO: make this async
// This will be difficult because it's recursive
function createFileTree(dirPath, startPath){
  // A filetree is the path to the filetree (relative to workspace), the directories inside, and the files inside
  // The directories themselves will be filetrees
  let fileTree = {
    path: path.relative(startPath, dirPath),
    directories: [],
    files: []
  };

  // Get the list of files (directories or normal files) in the current folder and use stat to determine file or dir
  // Flter out .DS_STORE and __MACOSX, which are generated on OSX
  let fileNames = fs.readdirSync(dirPath);
  fileNames.map(function(fileName){
    let stat = fs.statSync(path.join(dirPath, fileName));
    if(stat.isFile() && fileName !== '.DS_Store'){
      fileTree.files.push(fileName);
    }
    else if(stat.isDirectory() && fileName !== '__MACOSX'){
      fileTree.directories.push(createFileTree(path.join(dirPath, fileName), startPath)); // Recursive call for directories
    }
  });
  return fileTree;
}

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

// Takes object representing Mc2For command line arguments; returns a formatted argument string
function buildFortranArgString(arg){
  const mlClass = arg.mlClass;
  const numRows = arg.numRows;
  const numCols = arg.numCols;
  const realComplex = arg.realComplex;
  return `'${mlClass}&${numRows}*${numCols}&${realComplex}'`;
}

module.exports = {
    pathToUserRoot,
    pathToUserWorkspace,
    pathToFileInWorkspace,
    pathToFileInGen,
    pathToGenRoot,
    pathToFortranRoot,
    errorResponse400,
    errorResponse404,
    createUUID,
    createFileTree,
    extractKinds,
    buildFortranArgString
};