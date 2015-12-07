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
window.debug_SelectedFileStore = require('./stores/SelectedFileStore');
