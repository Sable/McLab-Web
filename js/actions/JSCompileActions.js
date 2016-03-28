import AT from '../constants/AT';
import request from 'superagent';
import React from 'react';
import OnLoadActions from './OnLoadActions';
import FileExplorerActions from './FileExplorerActions';
import TerminalActions from './TerminalActions';
import Dispatcher from '../Dispatcher';
import FileContentsStore from '../stores/FileContentsStore';
import OpenFileStore from '../stores/OpenFileStore';

function sendCompilationRequest(){
  const fileName = OpenFileStore.getFilePath();
  const postBody = {fileName: fileName.substring(10)}; // workspace hack

  const baseURL = window.location.origin;
  const sessionID = OnLoadActions.getSessionID();
  request.post(baseURL + '/compile/mcvmjs')
      .set({'SessionID': sessionID})
      .send(postBody)
      .end((err, res) =>{
        if(!err){
          TerminalActions.println(
              <div>
                File {fileName} was successfully compiled to JavaScript.
              </div>);
          FileExplorerActions.fetchFileTree(sessionID);
        }
        else{
          TerminalActions.printerrln(
              <div>
                McVM did not successfully compile the file {fileName}.
              </div>
          );
        }
      });
}

//"workspace/generated-JS/mainFile.js";
function runCompiledJS(){
  let filename = OpenFileStore.getFilePath();
  let filenameWithoutPath = filename.split('/').slice(-1)[0];
  if(filename){
    const contents = FileContentsStore.get(filename).text;
    var blob = new Blob([
      contents
    ]);

    // Obtain a blob URL reference to our worker 'file'.
    var blobURL = window.URL.createObjectURL(blob);
    var worker = new Worker(blobURL);
    worker.onmessage = (message) => {
      let data = message.data;
      if (typeof data === 'object' && 'err' in data){
        TerminalActions.printerrln('Running ' + filenameWithoutPath + ' failed. The error was: ');
        TerminalActions.printerrln(data.err);
      }
      else{
        TerminalActions.println(filenameWithoutPath + ' output: ' + data);
      }
    };
  }
}

function downloadCompiledJS(){
  const fileName = OpenFileStore.getFilePath();

  const baseURL = window.location.origin;
  const sessionID = OnLoadActions.getSessionID();
  const stringToDownload = baseURL + '/session/' + sessionID +  '/files/download/' + fileName;
  request.get(baseURL + '/session/' + sessionID +  '/files/download/' + fileName)
      .end((err, res) =>{
        if(!err){
          console.log('no error')
        }
        else{
          console.log('error'
          );
        }
      });
}

const openPanel = function() {
  Dispatcher.dispatch({
    action: AT.JS_COMPILE_PANEL.OPEN_PANEL
  });
};

export default{
  sendCompilationRequest,
  runCompiledJS,
  downloadCompiledJS,
  openPanel
}