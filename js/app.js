console.log("Starting McLab Web");
require('./McLabWeb.react');


// Debug stuff
import React from 'react';

import Dispatcher from './Dispatcher'
window.debug_dispatcher = Dispatcher;

import AT from './constants/AT'
window.debug_AT = AT;

import TerminalBufferStore from './stores/TerminalBufferStore'
window.debug_TerminalBufferStore = TerminalBufferStore;

const hm = <div>Look a link: <a href="http://google.com">Google</a></div>;
// You could technically pass in a react container here. The possibilities are endless
// debug_dispatcher.dispatch({action: debug_AT.TERMINAL.ADD_NEW_LINE, data: { newLine: hm } } );
// debug_dispatcher.dispatch({action: debug_AT.TERMINAL.ADD_NEW_LINE, data: { newLine: "Hellow World!" } } );
