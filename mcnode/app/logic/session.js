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
function index(req, res) {
  console.log('index request');
  res.sendFile(path.join(__dirname + '/../../../html/index.html'));
}

module.exports = {
  redirectToSession,
  index
};