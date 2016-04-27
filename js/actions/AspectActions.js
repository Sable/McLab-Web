import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import React from 'react';
import OpenFileStore from '../stores/OpenFileStore';
import request from 'superagent';
import OnLoadActions from './OnLoadActions';
import TerminalActions from './TerminalActions';
import AspectConfigStore from '../stores/AspectConfigStore'

function profileCode(aspect) {
  const filePath = OpenFileStore.getFilePath();
 
  

  if (filePath === null) {
    TerminalActions.printerrln(
      "You need to open a file before profiling it."
    );
    return;
  }
  const mainFile = AspectConfigStore.getMainFilePath();
  TerminalActions.println("Analyzing array sparsity on." + mainFile + ". This might take a minute.");

  // FIXME: substring(10) is a hack to get rid of 'workspace/'
  const baseURL = window.location.origin;
  const sessionID = OnLoadActions.getSessionID();
  request.get(baseURL +'/aspect/' + mainFile.substring(10))
    .set({SessionID: sessionID, AspectName: aspect})
    .end(function(err, res) {
      if (err) {
        try {
          const msg = JSON.parse(res.text).msg;
          TerminalActions.printerrln(msg);
        } catch (e) {
          TerminalActions.printerrln(
            <div>
              { "We failed to profile sparsity on " + mainFile + " :( " }
              { "This could be due to a network issue. " }
              { "If you believe this is a bug please send an email to " }
              <a href="mailto:emily.sager@mail.mcgill.ca">
                emily.sager@mail.mcgill.ca
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
  profileCode
}