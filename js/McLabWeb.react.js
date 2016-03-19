import FileExplorerContainer from './FileExplorerContainer.react';
import CodeContainer from './CodeContainer.react';
import TerminalContainer from './TerminalContainer.react';
import TopNavContainer from './TopNavContainer.react';
import SidePanelContainer from './SidePanelContainer.react';
import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import Dispatcher from './Dispatcher';
import AT from './constants/AT';
import OnLoadActions from './actions/OnLoadActions';

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

  componentDidMount(){
    OnLoadActions.retrieveShortenedLink();
  }
});

ReactDOM.render(
  <McLabWeb />,
  document.getElementById('app-container')
);
