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
  // POST request to compile the javascript and print to terminal based on the result
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

// Run the compiled Javascript in a webworker
function runCompiledJS(){
  let filename = OpenFileStore.getFilePath();
  let filenameWithoutPath = filename.split('/').slice(-1)[0]; // used later to print output more nicely

  if(filename){
    // Create blob with the contents of the open file
    const contents = FileContentsStore.get(filename).text;
    var blob = new Blob([
      contents
    ]);

    // Create a URL reference to the blob file and create/start the worker using this blob
    var blobURL = window.URL.createObjectURL(blob);
    var worker = new Worker(blobURL);

    // On message from the worker, check if is in error or not and print correspondingly
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

const openPanel = function() {
  Dispatcher.dispatch({
    action: AT.JS_COMPILE_PANEL.OPEN_PANEL
  });
};

export default{
  sendCompilationRequest,
  runCompiledJS,
  openPanel
}