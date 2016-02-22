"use strict";
var express = require('express');

//logging config
var logger = console;

// Load configurations according to the selected environment
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
global.__base = __dirname + '/'; // used to deal with ugly imports in files down the directory tree

var app = express();

// express settings
require('./config/express')(app, config);

// Bootstrap routes
require('./app/route')(app);

//start app on mentioned port
app.listen(config.app.port);

logger.info('listening on port ' + config.app.port);