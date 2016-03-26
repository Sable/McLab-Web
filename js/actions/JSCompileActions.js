import request from 'superagent';
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
      .end(function(err, res) {
        if(!err){
          console.log('mcvmjs request replied with no error');
          console.log(res);
          FileExplorerActions.fetchFileTree(sessionID);
        }
        else{
          console.log('mcvmjs request replied with no error');
        }
      });
}

//"workspace/generated-JS/mainFile.js";
function runCompiledJS(){
  const filename = OpenFileStore.getFilePath();
  if(filename){
    const contents = FileContentsStore.get(filename).text;
    var blob = new Blob([
      contents
    ]);

    // Obtain a blob URL reference to our worker 'file'.
    var blobURL = window.URL.createObjectURL(blob);
    var worker = new Worker(blobURL);
    worker.onmessage = (message) => {
      TerminalActions.println('JavaScript output: ' + message.data);
    };
    //worker.postMessage('asd'); // Start the worker.
  }
}

export default{
  sendCompilationRequest,
  runCompiledJS
}