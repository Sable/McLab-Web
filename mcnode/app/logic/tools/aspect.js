"use strict";
var aspect_utils = require(__base + 'app/logic/util/aspect_utils');


function profileCode(req, res) {
 	const sessionID = req.header('sessionID');
  const aspect_name = req.header('AspectName');
  const filepath = req.params.filepath;
  	aspect_utils.profileCode(sessionID, filepath, aspect_name, (err, output) =>{
    	if (!err){
      		res.json({msg:output});
    	}
    	else{
    		console.log(err);
      		res.status(400).json({msg: err});
    	}
  });
}


module.exports = {
    profileCode
};