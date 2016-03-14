"use strict";
var tool_usage = require(__base + 'app/logic/util/tool_usage');

// Compile the file at given filepath, and with given arguments, to Fortran
// Zip the result and return the path to it
function compileToFortran(req, res) {
  console.log('compile_to_fortran request');
  const sessionID = req.params.sessionID;
  const body = req.body;
  const mainFile = body.mainFile || '';
  tool_usage.compileToFortran(sessionID, body, mainFile, (err, package_path) => {
    if(!err){
      res.json(package_path);
    }
    else{
      res.status(400).json(err);
    }
  });
}

module.exports = {
  compileToFortran
};

