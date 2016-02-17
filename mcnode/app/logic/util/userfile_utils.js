"use strict";
var path = require('path');
var fs = require('fs');
var config = require(__base + 'config/config');

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

module.exports = {
  userRoot,
  userWorkspace,
  fileInWorkspace,
  fileInGen,
  genRoot,
  fortranRoot,
  createFileTree
};