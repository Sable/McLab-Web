import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import React from 'react';
import request from 'superagent';
import TerminalActions from './TerminalActions';

function profileSparsity() {
  const filePath = OpenFileStore.getFilePath();

  if (filePath === null) {
    TerminalActions.printerrln(
      "You need to open a file before profiling it."
    );
    return;
  }

  TerminalActions.println("Analyzing array sparsity on " + filePath);

  // FIXME: substring(10) is a hack to get rid of 'workspace/'
  request.get('aspect/sparsity' + filePath.substring(10))
    .end(function(err, res) {
      if (err) {
        try {
          const msg = JSON.parse(res.text).msg;
          TerminalActions.printerrln(msg);
        } catch (e) {
          TerminalActions.printerrln(
            <div>
              { "We failed to profile sparsity on " + filePath + " :( " }
              { "This could be due to a network issue. " }
              { "If you believe this is a bug please send an email to " }
              <a href="mailto:deepanjan.roy@mail.mcgill.ca">
                deepanjan.roy@mail.mcgill.ca
              </a>
            </div>
          );
        }
      } else {
        //TODO 
      }
    },
  );

}

export default {
  profileSparsity
}