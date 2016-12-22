"use strict";
const fs = require('fs');
var path = require('path');
var request = require('superagent');

var config = require(__base + 'config/config');
var session_utils = require(__base + 'app/logic/util/session_utils');
var userfile_utils = require(__base + 'app/logic/util/userfile_utils');

// Create new UUID for the user and redirect them to that session
function redirectToSession(req, res) {
  const newUUID = session_utils.createUUID();
  res.redirect('/session/' + newUUID + '/');
}

// Send the user the base index.html page
function homepage(req, res) {
  res.sendFile(path.join(__base + '../html/index.html'));
}

// Send a request to the Google API shortener
// If this isn't working, you need to set up an API key
function getShortenedURL(url, cb){
  request
      .post('https://www.googleapis.com/urlshortener/v1/url')
      .query({'key': config.LINK_SHORTENER_API_KEY})
      .send({longUrl: url})
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if(!err){
          cb(null, res.body.id);
        }
        else{
          cb("Could not shorten URL", null);
        }
  });
}

function shortenURL(req, res){
  const url = req.params.url;
  getShortenedURL(url, (err, shortenedUrl) => {
    if(!err){
      res.json({shortenedURL: shortenedUrl});
    }
    else{
      res.status(404).json({error: 'Failed to shorten the link.'});
    }
  });
}

function docs(req, res){
  res.sendFile(path.join(__base + '../docs/index.html'));
}

module.exports = {
  redirectToSession,
  homepage,
  shortenURL,
  docs
};