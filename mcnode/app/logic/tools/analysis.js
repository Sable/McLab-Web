"use strict";
var tool_usage = require(__base + 'app/logic/util/tool_usage');

// Perform kind analysis on the file given in filepath and return the results as JSON
function kindAnalysis(req, res) {
  console.log('kind_analysis request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;
  tool_usage.performKindAnalysis(sessionID, filepath, (err, output) =>{
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