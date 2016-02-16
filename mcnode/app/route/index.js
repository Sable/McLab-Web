"use strict";
var express = require('express');

var session = require(__base + 'app/logic/session');
var userfiles = require(__base + 'app/logic/userfiles');
var compile = require(__base + 'app/logic/compile');
var analysis = require(__base + 'app/logic/analysis');

// Set up multer; this allows us to get a zip file in a POST request and hold it in memory until it's saved to disk
var multer = require('multer');
var storage = multer.memoryStorage();
var multerInstance = multer({storage: storage});

module.exports = function (app) {
    app.get('/', session.redirectToSession);
    app.get('/newsession/', session.redirectToSession);
    app.get('/session/:sessionID/', session.index);
    app.post('/session/:sessionID/upload/', multerInstance.any(), userfiles.upload);
    app.get('/session/:sessionID/filetree/', userfiles.filetree);
    app.get('/session/:sessionID/analysis/readfile/:filepath([\\w-]*)/?', userfiles.readFile);
    app.get('/session/:sessionID/analysis/kinds/:filepath([\\w-]*)/?', analysis.kindAnalysis);
    app.post('/session/:sessionID/compile/mc2for/', compile.compileToFortran);
    app.get('^/session/:sessionID/download/:filepath([\\w-]*)/?', userfiles.serveGen);
};