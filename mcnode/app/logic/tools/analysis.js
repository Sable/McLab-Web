"use strict";
var child_process = require('child_process');

var config = require(__base + 'config/config');
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');

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
      extractKinds(jsonTree, output);
      cb(null, output);
    }
    catch(err){
      cb("Could not do kind analysis", null)
    }
  });
}

// Perform kind analysis on the file given in filepath and return the results as JSON
function kindAnalysis(req, res) {
  console.log('kind_analysis request');
  const sessionID = req.header('sessionID')
  const filepath = req.params.filepath;
  performKindAnalysis(sessionID, filepath, (err, output) =>{
    if (!err){
      res.json(output);
    }
    else{
      res.status(400).json({error: 'Mclab-core failed to do kind analysis on this file. Is this a valid matlab file?'});
    }
  });
}

module.exports = {
    kindAnalysis
};