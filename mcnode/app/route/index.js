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
    app.get('/shortenURL/:url([\\w-]*)/?', session.shortenURL);

    app.post('/files/upload/', multerInstance.any(), userfiles.upload);
    app.post('/files/save/:filepath([\\w-]*)/?', userfiles.saveFile);
    app.post('/files/newfile/:filepath([\\w-]*)/?', userfiles.newFile);
    app.get('/files/filetree/', userfiles.filetree);
    app.get('/files/readfile/:filepath([\\w-]*)/?', userfiles.readFile);
    app.get('^/files/download/:sessionID/:filepath([\\w-]*)/?', userfiles.serveGen);

    app.get('/analysis/kinds/:filepath([\\w-]*)/?', analysis.kindAnalysis);

    app.post('/compile/mc2for/', compile.compileToFortran);

    app.get('/docs/', session.docs);
};

/**
 * @api {get} /  Create a new session
 * @apiName RedirectToCreateNewSession
 * @apiGroup Session
 * @apiDescription Equivalent to a call to /newsession.
 */

/**
 * @api {get} /newsession/ Create a new session
 * @apiName CreateNewSession
 * @apiGroup Session
 * @apiDescription Generates a new sessionID and redirects the user to /session/:sessionID, where they will be provided the HTML.
 */

/**
 * @api {get} /session/:sessionID/ Homepage
 * @apiName GetHomepage
 * @apiGroup Session
 * @apiParam {String} sessionID User's session ID.
 * @apiSuccess {HTML} index The index.html file that is the single HTML file for the site.
 */

/**
 * @api {get} /shortenURL/:url/ Shorten a URL
 * @apiName GetShortenedURL
 * @apiGroup Session
 * @apiParam {String} url URL to shorten.
 *
 * @apiExample {curl} Example usage:
 *     curl localhost:3000/shortenURL/www.google.com/
 *
 * @apiSuccess {String} shortenedURL The shortened URL.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "shortenedURL": "http://goo.gl/fbsS"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Failed to shorten the link."
 *     }
 */

/**
 * @api {post} /files/upload/ Upload a archive file
 * @apiName Upload
 * @apiGroup Files
 * @apiDescription Stores an archive file and unzips the contents into the workspace of the user.
 * @apiParam {Archive} files Archive to upload.
 * @apiHeader {String} SessionID User's session ID.
 */

/**
 * @api {get} /files/filetree/ Get the user's filetree
 * @apiName Filetree
 * @apiGroup Files
 * @apiHeader {String} SessionID User's session ID.
 * @apiDescription Note that there is no error possible for this API call.
 * If the user does not exist or has not uploaded files, this call will simply return the empty object, i.e. {}.
 *
 * @apiExample {curl} Example usage:
 *     curl --header "SessionID: exampleSessionID" localhost:3000/files/filetree/
 *
 * @apiSuccess {Object} filetree Represents the files and directories inside the user's workspace.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "path":"workspace",
 *         "directories":[
 *             {"path":"workspace/demo_matlab","directories":[],
 *             "files":["cholesky.m","readme.txt","testIdentity.m","testMain.m"]
 *             }
 *         ],
 *         "files":[]
 *     }
 */

/**
 * @api {get} /files/readfile/:filepath/ Get the content of a user's file
 * @apiName ReadFile
 * @apiGroup Files
 * @apiParam {String} filepath The path to the file in the user's workspace.
 * @apiHeader {String} SessionID User's session ID.
 *
 *  @apiExample {curl} Example usage:
 *     curl --header "SessionID: exampleSessionID" localhost:3000/files/readfile/demo_matlab/cholesky.m/
 *
 * @apiSuccess {String} data The text of the file.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     function [R] = cholesky(B)
 *       A = testIdentity(B)
 *       [m, n] = size(A);
 *       R = zeros(m, n);
 *       for i = (1 : m)
 *         R(i, i) = sqrt((A(i, i) - sum((abs(R((1 : (i - 1)), i)) .^ 2))));
 *         for j = ((i + 1) : m)
 *           R(i, j) = ((A(i, j) - sum((conj(R((1 : (i - 1)), i)) .* R((1 : (i - 1)), j)))) / R(i, i));
 *         end
 *       end
 *     end
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error":"Failed to read file."
 *     }
 */

/**
 * @api {get} /files/download/:sessionID/:filepath/ Download a file inside the user's gen directory
 * @apiName Download
 * @apiGroup Files
 * @apiParam {String} sessionID User's session ID.
 * @apiParam {String} filepath The path to the file in the user's gen folder.
 *
 * @apiSuccess {File} data The requested file.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error":"Could not find requested file."
 *     }
 */

/**
 * @api {get} /analysis/kinds/:filepath/ Perform kind analysis on a file
 * @apiName KindAnalysis
 * @apiGroup Analysis
 * @apiParam {String} filepath The path to the file in the user's workspace.
 * @apiHeader {String} SessionID User's session ID.
 *
 * @apiExample {curl} Example usage:
 *     curl --header "SessionID: exampleSessionID" localhost:3000/analysis/kinds/demo_matlab/testMain.m
 *
 * @apiSuccess {Object} output The results of kind analysis.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "VAR":[
 *         {
 *           "name":"R",
 *           "position":
 *             {"startRow":1,"startColumn":2,"endRow":1,"endColumn":3}
 *           },
 *         {
 *           "name":"M",
 *           "position": {startRow":1,"startColumn":15,"endRow":1,"endColumn":16}
 *         }
 *       ],
 *       "FUN":[
 *         {
 *           "name":"cholesky",
 *           "position": {"startRow":1,"startColumn":6,"endRow":1,"endColumn":14}
 *         }
 *       ]
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error":"Mclab-core failed to do kind analysis on this file. Is this a valid matlab file?"
 *     }
 */

/**
 * @api {post} /compile/mc2for/ Compile the user's files into Fortran code
 * @apiName Mc2For
 * @apiGroup Compile
 * @apiParam {Object} arg The arguments for compilation {mlClass, numRows, numCols, realComplex}.
 * @apiParam {String} mainFile The main file (entry point) for compilation.
 * @apiHeader {String} SessionID User's session ID.
 *
 * @apiSuccess {String} package_path The path to the resulting archive containing the Fortran files.
 * This can then be downloaded using a serveGen call.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error":"Failed to compile the code into Fortran."
 *     }
 */

/**
 * @api {post} /compile/mcvmjs/ Compile the user's files into Javascript code
 * @apiName McVM.js
 * @apiGroup Compile
 * @apiParam {String} fileName The file to be compiled.
 * @apiHeader {String} SessionID User's session ID.
 *
 * @apiSuccess 200 Empty response.
 */

/**
 * @api {get} /compile/mcvmjs/ Compile the user's files into Javascript code
 * @apiName McVM.js
 * @apiGroup Compile
 * @apiParam {String} fileName The file to be compiled.
 * @apiHeader {String} SessionID User's session ID.
 *
 * @apiSuccess 200 Empty response.
 */

/**
 * @api {get} /docs/ Docs page
 * @apiName GetDocs
 * @apiGroup Docs
 * @apiSuccess {HTML} index The index.html file that contains the documentation.
 */