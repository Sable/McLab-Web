import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import React from 'react';

function println(content) {
  Dispatcher.dispatch({
    action: AT.TERMINAL.ADD_NEW_LINE,
    data: {newLine: content},
  })
}

function printerrln(content) {
  Dispatcher.dispatch({
    action: AT.TERMINAL.ADD_NEW_LINE,
    data: {newLine: <span className="terminal-error-color"> {content} </span>},
  })
}

export default {
  println,
  printerrln,
}
