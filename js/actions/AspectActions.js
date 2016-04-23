import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import React from 'react';
import OpenFileStore from '../stores/OpenFileStore';
import request from 'superagent';
import OnLoadActions from './OnLoadActions';
import TerminalActions from './TerminalActions';

function profileSparsity() {
  const filePath = OpenFileStore.getFilePath();

  if (filePath === null) {
    TerminalActions.printerrln(
      "You need to open a file before profiling it."
    );
    return;
  }

  TerminalActions.println("Analyzing array sparsity on." + filePath + ". This might take a minute.");

  // FIXME: substring(10) is a hack to get rid of 'workspace/'
  const baseURL = window.location.origin;
  const sessionID = OnLoadActions.getSessionID();
  request.get(baseURL +'/aspect/sparsity/' + filePath.substring(10))
    .set({SessionID: sessionID})
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
        try{ 
          const msg = JSON.parse(res.text).msg; 
          for (var i = 0; i<msg.length; i++){
            TerminalActions.println(msg[i]);
          }

        }
        catch (e){ 
          TerminalActions.printerrln("error");
        }
      }
    }
  );

}

export default {
  profileSparsity
}