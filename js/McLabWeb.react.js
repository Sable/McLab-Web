import FileExplorerContainer from './FileExplorerContainer.react';
import CodeContainer from './CodeContainer.react';
import TerminalContainer from './TerminalContainer.react';
import SidePanelContainer from './SidePanelContainer.react'
import React from 'react';
import ReactDOM from 'react-dom';
import Dispatcher from './Dispatcher';
import AT from './constants/AT';


// TODO: Make it a ES6 React class
var TopNav = React.createClass({
  render: function() {

    const fortranOnClick =
      () => Dispatcher.dispatch({
        action: AT.FORTRAN_COMPILE_PANEL.OPEN_PANEL,
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
          <SidePanelContainer />
          <div className="middle-container">
            <CodeContainer />
            <TerminalContainer />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <McLabWeb />,
  document.getElementById('app-container')
);
