"use strict";
var express = require('express');
var path = require('path');
var crypto = require('crypto');
var fs = require('fs');
var child_process = require('child_process');

var config = require('./config');

var bodyParser = require('body-parser');
var AdmZip = require('adm-zip');
var async = require('async');

var multer  = require('multer');
var storage = multer.memoryStorage();
var multerInstance = multer({storage: storage});


var app = express();
app.use(bodyParser.json())
app.use("/html", express.static(path.join(__dirname + '/../html')));
app.use("/static", express.static(path.join(__dirname + '/../static')));
app.use("/js", express.static(path.join(__dirname + '/../js')));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// Credit: http://stackoverflow.com/a/2117523
function createUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  let r = crypto.randomBytes(1)[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
  return v.toString(16);
  });
}

function getPathToUserRoot(sessionID){
  const pathToUserRoot = path.join(config.get('MEDIA_ROOT'), sessionID);
  return path.resolve(pathToUserRoot);
}

function getPathToUserWorkspaceRoot(sessionID){
  const pathToUserRoot = getPathToUserRoot(sessionID);
  const pathToUserWorkspaceRoot = path.join(pathToUserRoot, config.get('USER_FILE_FOLDER'));
  return path.resolve(pathToUserWorkspaceRoot);
}

function getPathToFileInWorkspace(sessionID, filename){
  const pathToUserWorkspaceRoot = getPathToUserWorkspaceRoot(sessionID);
  const pathToFileInWorkspace = path.join(pathToUserWorkspaceRoot, filename);
  return path.resolve(pathToFileInWorkspace);
}

function getPathToFileInGen(sessionID, filename){
  const userGen = getPathToGenRoot(sessionID);
  const pathToFile = path.join(userGen, filename);
  return path.resolve(pathToFile);
}


function getPathToGenRoot(sessionID){
  const pathToUserRoot = getPathToUserRoot(sessionID);
  const pathToGenRoot = path.join(pathToUserRoot, 'gen');
  return path.resolve(pathToGenRoot);
}

function getPathToFortranRoot(sessionID){
  const pathToGenRoot = getPathToGenRoot(sessionID);
  const pathToFortranRoot = path.join(pathToGenRoot, 'fortran_code');
  return path.resolve(pathToFortranRoot);
}

function errorResponse400(res, msg){
  msg = msg || 'Something broke';
  res.status(400).json({msg: msg});
}

function errorResponse404(res, msg){
  msg = msg || 'Something broke';
  res.status(404).json({msg: msg});
}

let redirect_to_session = function (req, res) {
  console.log('redirect_to_session request');
  const newUUID = createUUID();
  res.redirect('/session/' + newUUID + '/');
};

let index = function (req, res) {
  console.log('index request');
  res.sendFile(path.join(__dirname + '/../html/index.html'));
};

let upload = function (req, res) {
  let sessionID = req.params.sessionID;
  console.log('upload request');
  if (req.files) {
    const file = req.files[0];
    const userRoot = getPathToUserRoot(sessionID);

    fs.mkdir(userRoot, function(){
      const pathToZip = path.join(userRoot, file.fieldname);
      fs.writeFile(pathToZip, file.buffer, function(err){
        if(err){
          console.log("write failed");
          console.log(err);
        }
        else{
          const pathToUnzippedFiles = getPathToUserWorkspaceRoot(sessionID);
          let zip = new AdmZip(pathToZip);
          zip.extractAllTo(pathToUnzippedFiles);
          res.send('');
        }
      });
    });
  }
  else{
    errorResponse400(res);
  }
};

let filetree = function (req, res) {
  console.log('filetree request');
  const sessionID = req.params.sessionID;
  const userFileRoot = getPathToUserWorkspaceRoot(sessionID);
  const userRoot = getPathToUserRoot(sessionID);
  fs.access(userFileRoot, function(err) {
    if (!err) {
      let fileTree = createFileTree(userFileRoot, userRoot);
      res.json(fileTree);
    } else {
      res.json({});
    }
  });
};

// TODO: make this async
function createFileTree(dirPath, startPath){
  let fileTree = {
    path: path.relative(startPath, dirPath),
    directories: [],
    files: []
  };

  let fileNames = fs.readdirSync(dirPath);
  fileNames.map(function(fileName){
    let stat = fs.statSync(path.join(dirPath, fileName));
    if(stat.isFile() && fileName !== '.DS_Store'){
      fileTree.files.push(fileName);
    }
    else if(stat.isDirectory() && fileName !== '__MACOSX'){
      fileTree.directories.push(createFileTree(path.join(dirPath, fileName), startPath));
    }
  });
  return fileTree;
}

let readfile = function (req, res) {
  console.log('readfile request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;
  const userFileRoot = getPathToUserWorkspaceRoot(sessionID);
  const fileToRead = path.join(userFileRoot, filepath);
  fs.readFile(fileToRead, function(err, data) {
    if (!err) {
      res.send(data);
    } else {
      errorResponse404(res);
    }
  });
};

let kind_analysis = function (req, res) {
  console.log('kind_analysis request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;

  let pathToFile = getPathToFileInWorkspace(sessionID, filepath);
  const command = `java -jar ${config.get('MCLAB_CORE_JAR_PATH')} --json ${pathToFile}`;
  child_process.exec(command, function(error, stdout, stderror){
    try {
      let jsonTree = JSON.parse(stdout);
      let output = {};
      extractKinds(jsonTree, output);
      res.json(output);
    }
    catch(err){
      errorResponse400(res, 'Mclab-core failed to do kind analysis on this file. Is this a valid matlab file?');
    }
  });
};


function extractKinds(jsonSubtree, output){
  if (typeof jsonSubtree === 'object'){
    if ('kind' in jsonSubtree){
      let record = {
        name: jsonSubtree.name.name,
        position: {
          startRow: jsonSubtree.name.position.start.line - 1,
          startColumn: jsonSubtree.name.position.start.column - 1,
          endRow: jsonSubtree.name.position.end.line - 1,
          endColumn: jsonSubtree.name.position.end.column
        }
      };
      if(!(jsonSubtree.kind in output)){
        output[jsonSubtree.kind] = [];
      }
      output[jsonSubtree.kind].push(record);
    }
    else{
      for(let key in jsonSubtree){
        extractKinds(jsonSubtree[key], output);
      }
    }
  }
  else if (jsonSubtree.constructor === Array){
    for(let item of jsonSubtree){
      extractKinds(item, output)
    }
  }
}

let compile_to_fortan = function (req, res) {
  console.log('compile_to_fortran request');
  const sessionID = req.params.sessionID;
  const body = req.body;
  const mainFile = body.mainFile || '';

  const argString = buildFortranArgString(body.arg);
  const mainFilePath = getPathToFileInWorkspace(sessionID, mainFile);
  const mainFileDir = path.dirname(mainFilePath);
  const genRootPath = getPathToGenRoot(sessionID);
  const fortranRootPath = getPathToFortranRoot(sessionID);

  const command = `java -jar ${config.get('MC2FOR_PATH')} ${mainFilePath} -args ${argString} -codegen`;

  child_process.exec(command, function(err){
    if(!err){
      fs.mkdir(genRootPath, function(err){
        child_process.exec('rm -r ' + fortranRootPath, function (err) {
          fs.mkdir(fortranRootPath, function(err){
            fs.readdir(mainFileDir, function (err, files) {
              let fortranFiles = [];
              for (let fileInDir of files) {
                if (fileInDir.slice(-4) == '.f95') {
                  fortranFiles.push(fileInDir);
                }
              }

              let fortranFilePathList = [];
              for (let fortranFile of fortranFiles) {
                fortranFilePathList.push(path.join(mainFileDir, fortranFile));
              }

              let finalFilePaths = [];
              for (let fortranFile of fortranFiles) {
                finalFilePaths.push(path.join(fortranRootPath, fortranFile))
              }
              for (let i = 0; i < fortranFilePathList.length; i++) {
                fs.renameSync(fortranFilePathList[i], finalFilePaths[i]);
              }
              const archiveUUID = createUUID();
              const archiveName = `fortran-package-${archiveUUID}`;
              const archivePath = path.join(genRootPath, archiveName + '.zip');

              child_process.exec(`zip -j ${archivePath} ${fortranRootPath}/*.f95`, function(err){
                const relPathToArchive = path.relative(config.get('MEDIA_ROOT'), archivePath);
                res.json({
                  package_path: `/session/${relPathToArchive}/`
                });
              });
            });
          });
        });
      });
    }

    else {
      errorResponse400(res, 'Failed to compile this project.');
    }
  });
};

function buildFortranArgString(arg){
  const mlClass = arg.mlClass;
  const numRows = arg.numRows;
  const numCols = arg.numCols;
  const realComplex = arg.realComplex;
  return `'${mlClass}&${numRows}*${numCols}&${realComplex}'`;
}

let serve_gen = function (req, res) {
  console.log('serve_gen request');
  const sessionID = req.params.sessionID;
  const filepath = req.params.filepath;
  const pathToFile = getPathToFileInGen(sessionID, filepath);
  const fileName = path.relative(getPathToGenRoot(sessionID), pathToFile);

  res.set({
    'Content-Type': 'application/zip',
    'Content-Disposition': `attachment; filename=${fileName}`
  });
  res.sendFile(pathToFile);
};

app.get('/', redirect_to_session);
app.get('/session/:sessionID/', index);
app.post('/session/:sessionID/upload/', multerInstance.any(), upload);
app.get('/session/:sessionID/filetree/', filetree);
app.get('/session/:sessionID/readfile/:filepath([\\w-]*)/?', readfile);
app.get('/session/:sessionID/kind-analysis/:filepath([\\w-]*)/?', kind_analysis);
app.post('/session/:sessionID/compile-to-fortran/', compile_to_fortan);
app.get('^/session/:sessionID/gen/:filepath([\\w-]*)/?', serve_gen);
