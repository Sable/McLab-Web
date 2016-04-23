"use strict";
var aspect_utils = require(__base + 'app/logic/util/aspect_utils');


function profileSparsity(req, res) {
 	console.log('profile sparsity request');
 	const sessionID = req.header('sessionID');
  const filepath = req.params.filepath;
  	aspect_utils.profileSparsity(sessionID, filepath, (err, output) =>{
    	if (!err){
      		res.json({msg:output});
    	}
    	else{
    		console.log(err);
      		res.status(400).json({msg: 'Error'});
    	}
  });
}


module.exports = {
    profileSparsity
};