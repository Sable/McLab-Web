"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var logic = require('../logic/main.js');

// Sets up multer; this allows us to get a zip file in a POST request and hold it in memory until it's saved to disk
var multer  = require('multer');
var storage = multer.memoryStorage();
var multerInstance = multer({storage: storage});

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use("/html", express.static(path.join(__dirname + '/../../html')));
    app.use("/static", express.static(path.join(__dirname + '/../../static')));
    app.use("/js", express.static(path.join(__dirname + '/../../js')));

    app.get('/', logic.redirectToSession);
    app.get('/session/:sessionID/', logic.index);
    app.post('/session/:sessionID/upload/', multerInstance.any(), logic.upload);
    app.get('/session/:sessionID/filetree/', logic.filetree);
    app.get('/session/:sessionID/readfile/:filepath([\\w-]*)/?', logic.readfile);
    app.get('/session/:sessionID/kind-analysis/:filepath([\\w-]*)/?', logic.kindAnalysis);
    app.post('/session/:sessionID/compile-to-fortran/', logic.compileToFortran);
    app.get('^/session/:sessionID/gen/:filepath([\\w-]*)/?', logic.serveGen);
};