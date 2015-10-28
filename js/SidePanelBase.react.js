import AT from './constants/AT';
import classnames from 'classnames';
import Dispatcher from './Dispatcher';
import React from 'react';

const {PropTypes, Component} = React;

class SidePanelBase extends Component {
  render() {
    return (
      <div className="side-panel-container">
        <div className="side-panel-header">
          {this.props.title}
          <div
            className="side-panel-close-button"
            title="Close panel"
            onClick={() =>
            Dispatcher.dispatch({action: AT.SIDE_PANEL.CLOSE_PANEL})
          }>
            &times;
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

SidePanelBase.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SidePanelBase;
