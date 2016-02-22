"use strict";
var path = require('path');

var session_utils = require(__base + 'app/logic/util/session_utils');

// Create new UUID for the user and redirect them to that session
function redirectToSession(req, res) {
  console.log('redirect_to_session request');
  const newUUID = session_utils.createUUID();
  res.redirect('/session/' + newUUID + '/');
}

// Send the user the base index.html page
function homepage(req, res) {
  console.log('index request');
  res.sendFile(path.join(__base + '../html/index.html'));
}

function shortenURL(req, res){
  console.log('shorten URL request');
  const url = req.params.url;
  session_utils.shortenURL(url, function(err, shortenedUrl){
    if(!err){
      res.json({shortenedURL: shortenedUrl});
    }
    else{
      res.status(404).json({msg: 'Could not shorten URL.'});
    }
  });
}

module.exports = {
  redirectToSession,
  homepage,
  shortenURL
};