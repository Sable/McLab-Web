"use strict";
var crypto = require('crypto');
var request = require('superagent');
var config = require(__base + 'config/config');


// Credit: http://stackoverflow.com/a/2117523
function createUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  let r = crypto.randomBytes(1)[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
  return v.toString(16);
  });
}

function shortenURL(url, cb){
  request
      .post('https://www.googleapis.com/urlshortener/v1/url')
      .query({'key': config.LINK_SHORTENER_API_KEY})
      .send({longUrl: url})
      .set('Content-Type', 'application/json')
      .end(function(err, res){
        if(!err){
          cb(null, res.body.id);
        }
        else{
          cb("Could not shorten URL", null);
        }
  });
}

module.exports = {
  createUUID,
  shortenURL
};