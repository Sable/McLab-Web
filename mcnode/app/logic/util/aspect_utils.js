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
var array_sparsity = require(__base + 'app/logic/util/aspects/array_sparsity');


function parse(matlab_out, aspect_name, cb){
  switch(aspect_name){ 
    case "sparsity": 
    array_sparsity.parse_sparsity(matlab_out, (err, output) => { 
      if (!err){
        cb(null, output);
      } else {
        cb("The output from the " + aspect_name + " aspect was not as expected.  Please send an email to emily.sager@mail.mcgill.ca", null);
      }
      
    });
    break; 
    default: 
      cb("There is no aspect " + aspect_name + ". please make sure the aspect name is correct. ");
  }
}


function profileCode(sessionID, filename, aspect_name, cb){
  var matlab_out = ""; 
  var matlab_err = false;  
	
  let workspace_dir = userfile_utils.userWorkspace(sessionID);
  const get_all_files = `ls ${workspace_dir}`;
  var all_files = [];
  var successful_weave = true;
  child_process.exec(get_all_files, (err, stdout)=>{
    if(!err){
      all_files = str(stdout).lines();
      for(var i = 0; i<all_files.length; i++){
        if (str(all_files[i]).endsWith('.m')){
          let pathToFile = userfile_utils.fileInWorkspace(sessionID, all_files[i]);
          const copy_files_for_profiling = `cp ${pathToFile} ${all_files[i]}`
          const weave_command = `java -jar user-files/amc.jar user-files/AMC/aspects/${aspect_name}.m ${all_files[i]}`;
          child_process.exec(copy_files_for_profiling, (err, stdout)=>{
            if(err){
              successful_weave = false;
              cb("Could not copy files.", null);
            }
            else { 
              child_process.exec(weave_command, (err, stdout) =>{
                if(err){
                  successful_weave = false;
                  cb("Could not weave the files.", null);
                } 
              });
            }
          });
        }
      }
    }
  });
  const launch_matlab = `${config.MATLAB}`; 
    if(successful_weave) {
      const matlab = child_process.spawn(launch_matlab, ['nodesktop']);
      matlab.on('error', (err) => {
        console.log('Failed to start matlab.');
      });
      var matlab_command = 'cd weaved; ' + str(filename).chompRight('.m') + '; quit';
      matlab.stdin.write(matlab_command);
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
          parse(matlab_out, aspect_name, (parse_err, output) => { 
            if (!parse_err){
              cb(null, output);
            }
            else {
              cb(parse_err, null);
            }
         });       
        } else {
            cb("There was a matlab error.", null);
        }
      });
    }
}

module.exports = {
  profileCode
};
