import FileExplorerContainer from './FileExplorerContainer.react';
import CodeContainer from './CodeContainer.react';
import TerminalContainer from './TerminalContainer.react';
import React from 'react';
import Dispatcher from './Dispatcher';
import AT from './constants/AT';

// TODO: Make it a ES6 React class
var TopNav = React.createClass({
  render: function() {

    const fortranOnClick =
      () => Dispatcher.dispatch({
        action: AT.TERMINAL.ADD_NEW_LINE,
        data: {
          newLine: <span style={{color:"green"}}>Please select a main file</span>,
        },
      });

    return (
      <div className="topnav">
        <div className="ml-logo-container">
          <img src="/static/mclab_logo_360.png" className="ml-logo" />
          <div className="mclab-logo-text">MCLAB <strong>WEB</strong></div>
        </  div>
        <div className="buttons-container">
          <a className="pure-button topnav-button" onClick={fortranOnClick}>Compile to Fortran</a>
          <a className="pure-button topnav-button" href="/">New Session</a>
        </div>
      </div>
    );
  }
});

var McLabWeb = React.createClass({
  render: function() {
    return (
      <div>
        <TopNav />
        <div className="body-container">
          <FileExplorerContainer />
          <div className="inner-body">
            <CodeContainer />
            <TerminalContainer />
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <McLabWeb />,
  document.getElementById('app-container')
);
