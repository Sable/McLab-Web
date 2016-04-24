"use strict";
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');
var sessions = require(__base + 'app/logic/util/session_utils');
var underscore = require('underscore');
var str = require('string');

function parse_sparsity(matlab_out, cb){
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
    } else {
      logging_info = false;
    }
    if(!matlab_heading && !logging_info){
      if(str(line).contains("|")){
        str(line).replaceAll('|', ' ');
      }
      if (!append) { 
        parsed.push(line);
      } else { 
        parsed[j] += lines[i];
        j++;
      }
    } 
  }
  //console.log(parsed);
  cb(null, parsed);
}

module.exports = {
  parse_sparsity
};