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
        // do logging
        logger.info('Something is happening.');
        next(); // make sure we go to the next routes and don't stop here
    });

    router.use(function (err, req, res, next) {
        // log it
        // send emails if you want
        logger.error(err.stack);

        // error page
        res.status(500).send(err.stack);
    });

    // assume 404 since no middleware responded
    router.use(function (req, res, next) {
        res.status(404).send(Error.notFoundError('Resource not found'));
    });
};