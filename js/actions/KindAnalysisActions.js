import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import Immutable from 'immutable';
import OpenFileStore from '../stores/OpenFileStore';
import TerminalActions from './TerminalActions';
import OnLoadActions from './OnLoadActions';
import EditorMarkerActions from './EditorMarkerActions';
import request from 'superagent';
import React from 'react';
import BuiltinFuncs from '../constants/MatlabBuiltinFunctions';
import MT from '../constants/MarkerTypes';

function printKindAnalysisSuccess() {
  Dispatcher.dispatch({
    action: AT.TERMINAL.ADD_NEW_LINE,
    data: {
      newLine: (
        <div>
          Kind analysis complete!
          Variables are highlighted in {' '}
          <span
            className="ace-marker-kind-analysis-variable"
            style={{position: "static"}}>
            blue
          </span>
          {' '}and functions are highlighted in {' '}
          <span
            className="ace-marker-kind-analysis-function"
            style={{position: "static"}}>
            green
          </span>
          .{'\n'}Press ESC (when the editor is in focus) to hide highlights.
        </div>
      )
    }
  });
}

function runKindAnalysis() {
  const filePath = OpenFileStore.getFilePath();

  if (filePath === null) {
    TerminalActions.printerrln(
      "You need to open a file before running kind analysis"
    );
    return;
  }

  TerminalActions.println("Starting kind analysis on " + filePath);

  // FIXME: substring(10) is a hack to get rid of 'workspace/'
  const baseURL = window.location.origin;
  const sessionID = OnLoadActions.getSessionID();
    console.log(baseURL + '/analysis/kinds/' + filePath.substring(10));
  request.get(baseURL + '/analysis/kinds/' + filePath.substring(10))
      .set({SessionID: sessionID})
    .end(function(err, res) {
      if (err) {
        try {
          const msg = JSON.parse(res.text).error;
          TerminalActions.printerrln(msg);
        } catch (e) {
          TerminalActions.printerrln(
            <div>
              { "We failed to run kind analysis on " + filePath + " :( " }
              { "This could be due to a network issue. " }
              { "If you believe this is a bug please send an email to " }
              <a href="mailto:deepanjan.roy@mail.mcgill.ca">
                deepanjan.roy@mail.mcgill.ca
              </a>
            </div>
          );
        }
      } else {
        const data = JSON.parse(res.text);
        const variables = data['VAR'] || [];
        const functions = data['FUN'] || [];
        const undefinedFunctions = functions.filter(func => !BuiltinFuncs.includes(func.name));

        EditorMarkerActions.setMarkers(
          filePath,
            Immutable.Map({
                [MT.FUNC_UNDEFINED]: Immutable.List(undefinedFunctions)
            })
        );
        EditorMarkerActions.show(filePath);
        Dispatcher.dispatch({
          action: AT.KIND_ANALYSIS.DATA_LOADED,
          data: {filePath, variables, functions}
        });
        Dispatcher.dispatch({action: AT.KIND_ANALYSIS_PANEL.OPEN_PANEL});
        printKindAnalysisSuccess();
      }
    }
  );

}

export default {
  runKindAnalysis
}


