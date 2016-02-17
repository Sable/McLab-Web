"use strict";
var child_process = require('child_process');

var config = require(__base + 'config/config');
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');
var tool_usage = require(__base + 'app/logic/util/tool_usage');

// Perform kind analysis on the file given in filepath and return the results as JSON
function kindAnalysis(req, res) {
  console.log('kind_analysis request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;

  let pathToFile = userfile_utils.fileInWorkspace(sessionID, filepath);
  const command = `java -jar ${config.MCLAB_CORE_JAR_PATH} --json ${pathToFile}`;

  child_process.exec(command, function(error, stdout){
    try {
      let jsonTree = JSON.parse(stdout);
      let output = {};
      tool_usage.extractKinds(jsonTree, output);
      res.json(output);
    }
    catch(err){
      res.status(400).json({msg: 'Mclab-core failed to do kind analysis on this file. Is this a valid matlab file?'});
    }
  });
}

module.exports = {
    kindAnalysis
};