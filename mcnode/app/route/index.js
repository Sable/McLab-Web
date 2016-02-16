"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var logic = require('../logic/main.js');

// Set up multer; this allows us to get a zip file in a POST request and hold it in memory until it's saved to disk
var multer = require('multer');
var storage = multer.memoryStorage();
var multerInstance = multer({storage: storage});

module.exports = function (app) {
    app.get('/', logic.redirectToSession);
    app.get('/newsession/', logic.redirectToSession);
    app.get('/session/:sessionID/', logic.index);
    app.post('/session/:sessionID/upload/', multerInstance.any(), logic.upload);
    app.get('/session/:sessionID/filetree/', logic.filetree);
    app.get('/session/:sessionID/analysis/readfile/:filepath([\\w-]*)/?', logic.readfile);
    app.get('/session/:sessionID/analysis/kinds/:filepath([\\w-]*)/?', logic.kindAnalysis);
    app.post('/session/:sessionID/compile/mc2for/', logic.compileToFortran);
    app.get('^/session/:sessionID/download/:filepath([\\w-]*)/?', logic.serveGen);
};