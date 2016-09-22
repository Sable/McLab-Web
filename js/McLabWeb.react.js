import FileExplorerContainer from './FileExplorerContainer.react';
import CodeContainer from './CodeContainer.react';
import TopNavContainer from './TopNavContainer.react';
import SidePanelContainer from './SidePanelContainer.react';
import TerminalContainer from './TerminalContainer.react';
import React from 'react';
import ReactDOM from 'react-dom';

var McLabWeb = React.createClass({
  render: function() {
    return (
      <div>
        <TopNavContainer />
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
  },
});

ReactDOM.render(
  <McLabWeb />,
  document.getElementById('app-container')
);
