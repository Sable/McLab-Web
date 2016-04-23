"use strict";
var child_process = require('child_process');
var path = require('path');
var fs = require('fs');

var config = require(__base + 'config/config');
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');
var sessions = require(__base + 'app/logic/util/session_utils');

var underscore = require('underscore');
var async = require('async');
var str = require('string');


function parse(matlab_out, cb){
  var parsed = []; 
  var lines = str(matlab_out).lines(); 
  var len = lines.length;  
  var matlab_heading = true; 
  var append = false;  
  var j = 0; 
  var logging_info = false; 
  for(var i = 0; i <len; i++){
    var line = lines[i];
    if(matlab_heading) { 
     if (str(line).contains("tracking sparsities")) { 
        matlab_heading = false; 
      } 
    }
    if (str(line).contains("Columns")){
      append = true; 
      logging_info = true;
      j = 0;
    }
    else {
      logging_info = false;
    }
    if(!matlab_heading && !logging_info){
      if(str(line).contains("|")){
        str(line).replaceAll('|', ' ');
      }
      if (!append) { 
        parsed.push(line);
      }
      else { 
        parsed[j] += lines[i];
        j++;
      }
    } 
  }
  cb(null, parsed);
}

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
              parse(matlab_out, (err, output) => { 
                if (!err){
                  cb(null, output);
                }
                else {
                  cb("Could not profile code");
                }
             });       
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
