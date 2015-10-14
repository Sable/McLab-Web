import FileExplorerContainer from './FileExplorerContainer.react';
import CodeContainer from './CodeContainer.react';
import React from 'react';

var TopNav = React.createClass({
  render: function() {
    return (
      <div className="topnav">
        <div className="ml-logo-container">
          <img src="/static/mclab_logo_360.png" className="ml-logo" />
          <div className="mclab-logo-text">MCLAB <strong>WEB</strong></div>
        </div>
        <div className="buttons-container">
          <a className="pure-button topnav-button" href="#">Compile to Fortran</a>
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
          <CodeContainer />
        </div>
      </div>
    );
  }
});

React.render(
  <McLabWeb />,
  document.getElementById('app-container')
);
