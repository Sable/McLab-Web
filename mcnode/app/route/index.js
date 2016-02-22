"use strict";
var express = require('express');

var session = require(__base + 'app/logic/tools/session');
var userfiles = require(__base + 'app/logic/tools/userfiles');
var compile = require(__base + 'app/logic/tools/compile');
var analysis = require(__base + 'app/logic/tools/analysis');

// Set up multer; this allows us to get a zip file in a POST request and hold it in memory until it's saved to disk
var multer = require('multer');
var storage = multer.memoryStorage();
var multerInstance = multer({storage: storage});

module.exports = function (app) {
    app.get('/', session.redirectToSession);
    app.get('/newsession/', session.redirectToSession);
    app.get('/session/:sessionID/', session.homepage);
    app.get('/session/:sessionID/shortenURL/:url([\\w-]*)/?', session.shortenURL);

    app.post('/session/:sessionID/files/upload/', multerInstance.any(), userfiles.upload);
    app.get('/session/:sessionID/files/filetree/', userfiles.filetree);
    app.get('/session/:sessionID/files/readfile/:filepath([\\w-]*)/?', userfiles.readFile);
    app.get('^/session/:sessionID/files/download/:filepath([\\w-]*)/?', userfiles.serveGen);

    app.get('/session/:sessionID/analysis/kinds/:filepath([\\w-]*)/?', analysis.kindAnalysis);

    app.post('/session/:sessionID/compile/mc2for/', compile.compileToFortran);
};