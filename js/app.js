console.log("Starting McLab Web");
require('./McLabWeb.react');


// Bootstrap select
$('.selectpicker').selectpicker();


// Debug stuff
import React from 'react';

import Dispatcher from './Dispatcher';
window.debug_dispatcher = Dispatcher;

import AT from './constants/AT';
window.debug_AT = AT;

import TerminalBufferStore from './stores/TerminalBufferStore';
window.debug_TerminalBufferStore = TerminalBufferStore;

import FileExplorerSelectionModeStore from './stores/FileExplorerSelectionModeStore';
window.debug_FileExplorerSelectionModeStore = FileExplorerSelectionModeStore;

import EditorMarkerStore from './stores/EditorMarkerStore';
window.debug_EditorMarkerStore = EditorMarkerStore;

window.debug_Immutable = require('immutable');

const hm = <div>Look a link: <a href="http://google.com">Google</a></div>;
// You could technically pass in a react container here. The possibilities are endless
// debug_dispatcher.dispatch({action: debug_AT.TERMINAL.ADD_NEW_LINE, data: { newLine: hm } } );
// debug_dispatcher.dispatch({action: debug_AT.TERMINAL.ADD_NEW_LINE, data: { newLine: "Hellow World!" } } );


// markers
debug_dispatcher.dispatch({ action: debug_AT.EDITOR.ADD_MARKERS,
  data: {
    filepath: "workspace/397_a3/examples/badA.m",
    markers: debug_Immutable.Map({
      "ace-marker-kind-analysis-function": debug_Immutable.List([
        {
          startRow: 0,
          startColumn: 9,
          endRow: 0,
          endColumn: 10,
        },
        {
          startRow: 5,
          startColumn: 2,
          endRow: 9,
          endColumn: 9,
        },
      ]),
      "ace-marker-kind-analysis-variable": debug_Immutable.List([
        {
          startRow: 10,
          startColumn: 0,
          endRow: 10,
          endColumn: 1,
        },
        {
          startRow:23,
          startColumn: 0,
          endRow: 23,
          endColumn: 7,
        },
      ]),
    }),
  },
})

debug_dispatcher.dispatch({
  action: debug_AT.EDITOR.MARKER_VISIBILITY.TURN_ON,
  data: {filepath: 'workspace/397_a3/examples/badA.m'},
});

debug_dispatcher.dispatch({
  action: debug_AT.FILE_EXPLORER.SELECT_FILE,
  data: {
    selection: 'workspace/397_a3/examples/badA.m',
    type: 'FILE'
  }
})

debug_dispatcher.dispatch({
  action: debug_AT.TERMINAL.ADD_NEW_LINE,
  data: {
    newLine: (
      <div>
        Kind analysis complete!
        Variables are highlighted in {' '}
        <span
          className="ace-marker-kind-analysis-variable"
          style={{position: "static"}}>
          orange
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
})
