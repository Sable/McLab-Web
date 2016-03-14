import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import Immutable from 'immutable';
import OpenFileStore from '../stores/OpenFileStore';
import TerminalActions from './TerminalActions';
import EditorMarkerActions from './EditorMarkerActions';
import request from 'superagent';
import React from 'react';


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
      ),
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
  request.get('analysis/kinds/' + filePath.substring(10))
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
        EditorMarkerActions.setMarkers(
          filePath,
          Immutable.Map({
            "ace-marker-kind-analysis-variable": Immutable.List(
              variables.map(v => v.position)
            ),
            "ace-marker-kind-analysis-function": Immutable.List(
              functions.map(f => f.position)
            )
          })
        );
        EditorMarkerActions.show(filePath);
        Dispatcher.dispatch({
          action: AT.KIND_ANALYSIS.DATA_LOADED,
          data: {filePath, variables, functions},
        })
        Dispatcher.dispatch({action: AT.KIND_ANALYSIS_PANEL.OPEN_PANEL});
        printKindAnalysisSuccess();
      }
    },
  );

}

export default {
  runKindAnalysis,
}


