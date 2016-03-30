"use strict";
var child_process = require('child_process');
var path = require('path');
var fs = require('fs');

var config = require(__base + 'config/config');
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');
var sessions = require(__base + 'app/logic/util/session_utils');

var underscore = require('underscore');
var async = require('async');


function profileSparsity(sessionID, filename, cb){
  var matlab_out = ""; 
  var matlab_err = false;  
	let pathToFile = userfile_utils.fileInWorkspace(sessionID, filename);
  const copy_files_for_profiling = `cp ${pathToFile} ${filename}`
 	const weave_command = `java -jar user-files/amc.jar user-files/AMC/aspects/sparsity.m ${filename}`;
 	const launch_matlab = `${config.MATLAB}`; 
 	console.log(copy_files_for_profiling);
  console.log(weave_command);
  child_process.exec(copy_files_for_profiling, (err, stdout)=>{
    if(err){
      cb("Could not copy files", null);
    }
    else { 
      child_process.exec(weave_command, (err, stdout) =>{
        if(err){
          console.log(stdout);
          console.log(err);
          cb("Could not weave", null);
        }
        else{ 
          const matlab = child_process.spawn(launch_matlab, ['nodesktop']);
          matlab.on('error', (err) => {
            console.log('Failed to start matlab.');
          });
          matlab.stdin.write('cd weaved; program; quit');
          matlab.stdin.end();
          matlab.stdout.on('data', (data) => {
            matlab_out+=data; 
          });
          matlab.stderr.on('data', (data) => {
            matlab_err = true; 
            console.log(`matlab: ${data}`);
          });
          matlab.on('close', (close) =>{
            if (!matlab_err){ 
             let output =  matlab_out;
             cb(null, output);
            }
            else{
              cb("There was a matlab error.", null);
            }
          });
        }
      });
    }
  });
}

module.exports = {
  profileSparsity
};
