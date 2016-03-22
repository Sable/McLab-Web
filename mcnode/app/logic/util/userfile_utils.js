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

// McLab-Web/user-files/{sessionID}/gen/mcvm-code
function mcvmRoot(sessionID){
  const pathToGenRoot = this.genRoot(sessionID);
  const pathToMcVM = path.join(pathToGenRoot, 'mcvm_code');
  return path.resolve(pathToMcVM);
}

module.exports = {
  userRoot,
  userWorkspace,
  fileInWorkspace,
  fileInGen,
  genRoot,
  fortranRoot,
  mcvmRoot
};