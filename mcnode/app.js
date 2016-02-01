"use strict";
let express = require('express');
let path = require('path');
let crypto = require('crypto');
let config = require('./config');
let fs = require('fs');
let unzip = require('unzip');
let async = require('async');
var bodyParser = require('body-parser')

let multer  = require('multer');
let storage = multer.memoryStorage();
let multerInstance = multer({storage: storage});


let app = express();
app.use(bodyParser.json());

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

function getUserRoot(sessionID){
  return path.join(config.MEDIA_ROOT, sessionID);
}

function getUserFileRoot(sessionID){
  const userRoot = getUserRoot(sessionID);
  return path.join(userRoot, config.USER_FILE_FOLDER);
}

function errorResponse400(res){
  res.status(400).send({error: 'Something broke'});
}

function errorResponse404(res){
  res.status(404).send({error: 'Something broke'});
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
  console.log('upload request');
  if (req.files) {
    const file = req.files[0];
    const userRoot = getUserRoot(req.params.sessionID);

    fs.mkdir(userRoot, function(){
      const pathToZip = path.join(userRoot, file.fieldname);
      fs.writeFile(pathToZip, file.buffer, function(err){
        if(err){
          console.log("write failed");
          console.log(err);
        }
        else{
          const pathToUnzippedFiles = getUserFileRoot(req.params.sessionID);
          fs.createReadStream(pathToZip).pipe(unzip.Extract({path: pathToUnzippedFiles}));
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
  const userFileRoot = getUserFileRoot(req.params.sessionID);
  const userRoot = getUserRoot(req.params.sessionID);
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
  const userFileRoot = getUserFileRoot(req.params.sessionID);
  const fileToRead = path.join(userFileRoot, req.body.path);
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
  res.send('Kind analysis page; session ID is ' + req.params.sessionID + ', filepath is ' + req.params.filepath);
  //TODO
};

let compile_to_fortan = function (req, res) {
  console.log('compile_to_fortran request');

  const body = req.body;
  res.send('Compile to fortran page; session ID is ' + req.params.sessionID);
  //TODO
};

let serve_gen = function (req, res) {
  console.log('serve_gen request');
  res.send('Serve gen page; session ID is ' + req.params.sessionID + ', filepath is ' + req.params.filepath);
  //TODO
};

app.get('/', redirect_to_session);
app.get('/session/:sessionID/', index);
app.post('/session/:sessionID/upload/', multerInstance.any(), upload);
app.get('/session/:sessionID/filetree/', filetree);
app.post('/session/:sessionID/readfile/', readfile);
app.post('/session/:sessionID/', kind_analysis);
app.post('/session/:sessionID/compile-to-fortran/', compile_to_fortan);
app.post('/session/:sessionID/gen/', serve_gen);