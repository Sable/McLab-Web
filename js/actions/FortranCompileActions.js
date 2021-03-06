import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import FortranCompileConfigStore from '../stores/FortranCompileConfigStore';
import React from 'react';
import request from 'superagent';
import TerminalActions from './TerminalActions';
import OnLoadActions from './OnLoadActions';

function beginCompilation() {
  const mainFile = FortranCompileConfigStore.getMainFilePath();
  const arg = FortranCompileConfigStore.getArgumentList().get(0, null);

  TerminalActions.println(
    "Sent request to server for compilation." +
    " Compiled files should be ready in a few seconds."
  );

  const postArg = arg
    ? {
      numRows: arg.numRows,
      numCols: arg.numCols,
      realComplex: arg.realComplex.key,
      mlClass: arg.mlClass.key
    }
    : null;

  // ffs fix the workspace hack
  const postBody = {
    mainFile: mainFile.substring(10),
    arg: postArg
  };

  const baseURL = window.location.origin;
  const sessionID = OnLoadActions.getSessionID();
    request.post(baseURL + '/compile/mc2for/')
    .set({'SessionID': sessionID})
    .send(postBody)
    .end((err, res) =>{
      if (err) {
        try {
          const msg = JSON.parse(res.text).msg;
          TerminalActions.printerrln(msg);
        } catch (e) {
          TerminalActions.printerrln(
            <div>
              { "Failed to compile :( " }
              { "This could be due to a network issue. " }
              { "If you believe this is a bug please open an issue " }
              <a href="https://github.com/Sable/McLab-Web/issues">here</a>
              { " or send us an email."}
            </div>
          );
        }
      } else {
        const package_path = JSON.parse(res.text)['package_path'];
        const path_to_print = `${baseURL}/files/download/${sessionID}/${package_path}`;
        TerminalActions.println(
          <div>Compilation complete! {' '}
            <a href={path_to_print}>
              Click here to download the compiled package
            </a>
          </div>
        );
      }
    }
  );

}

export default {
  beginCompilation
}
