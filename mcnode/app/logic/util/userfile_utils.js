"use strict";
var path = require('path');

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
function fileInUserRoot(sessionID, filename){
  const userRoot = this.userRoot(sessionID);
  const pathToFile = path.join(userRoot, filename);
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
  const pathToWorkspace = this.userWorkspace(sessionID);
  const pathToMcVM = path.join(pathToWorkspace, '/generated-JS');
  return path.resolve(pathToMcVM);
}

module.exports = {
  userRoot,
  userWorkspace,
  fileInWorkspace,
  fileInUserRoot,
  genRoot,
  fortranRoot,
  mcvmRoot
};