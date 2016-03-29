"use strict";
var express = require('express');
var logger = console;
var env = process.env.NODE_ENV || 'development';
var config = require(__base + 'config/config');
var path = require('path');

var bodyParser = require('body-parser');
var multer = require('multer');
var favicon = require('serve-favicon');


module.exports = function (app, config) {
    app.use(bodyParser.json());
    app.use("/html", express.static(path.join(__dirname + '/../../html')));
    app.use("/static", express.static(path.join(__dirname + '/../../static')));
    app.use("/js", express.static(path.join(__dirname + '/../../js')));
    app.use(favicon(path.join(__dirname + '/../../static/favicon.ico')));

    app.use("/docs/vendor", express.static(path.join(__dirname + '/../../docs/vendor')));
    app.use("/docs/", express.static(path.join(__dirname + '/../../docs/')));
    app.use("/docs/css", express.static(path.join(__dirname + '/../../css/')));

    var router = express.Router();

    router.use(function (req, res, next) {
        logger.info(`request to ${req.originalUrl} with method ${req.method} and body ${JSON.stringify(req.body)}`);
        next();
    });

    router.use(function (err, req, res, next) {
        logger.error(err.stack);
        res.status(500).send('Something broke.');
    });

    app.use(router);
};