import AT from './constants/AT';
import classnames from 'classnames';
import Dispatcher from './Dispatcher';
import DropdownSelect from './DropdownSelect.react';
import AspectActions from './actions/AspectActions';
import React from 'react';
import SidePanelBase from './SidePanelBase.react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const { PropTypes, Component } = React;

class AspectPanel extends Component {

  render() {

    return (
      <SidePanelBase title="Run Profiler">
        <div
          className={classnames(
            "side-panel-card",
            "aspect-main-file-selector"
          )}
          >
          <div className="side-panel-card-header">
            Main File
          </div>
          {this._getMainFilePath()}
          {this._getMainFileSection()}
          {this._getChangeButton()}
        </div>
        {this._getCompileButton()}
      </SidePanelBase>
    );
  }

  _getCompileButton() {
    if (!this.props.mainFilePath) {
      return null;
    }

    return (
      <div className="fortran-compile-final-button-container">
        <a
          className="pure-button side-panel-button"
          onClick={AspectActions.profileCode("sparsity")}>
          Profile Array Sparsity
        </a>
      </div>
    );
  }

 _getMainFileSection() {
    if (this.props.unconfirmedMainFilePath) {
      return (
        <div>
          <div>{this.props.unconfirmedMainFilePath}</div>
          <a className="fortran-compiler-select-main-file"
            onClick={() => {
              Dispatcher.dispatch({action: AT.ASPECT_PANEL.CONFIRM_MAIN_FILE});
              Dispatcher.dispatch({action: AT.FILE_EXPLORER.CLOSE_SELECTION_MODE});
            }}
            >
            <strong>Confirm</strong>
          </a>
        </div>
      );
    }
  }

  _getMainFilePath() {
    if (this.props.mainFilePath  && !this.props.unconfirmedMainFilePath) {
      return (
        <div>
          {' '  + this.props.mainFilePath}
        </div>
      )
    } else if (this.props.unconfirmedMainFilePath) {
      return null;
    } else {
      return (
        <a
          className="aspect-select-main-file"
          onClick={() => {
              Dispatcher.dispatch({action: AT.FILE_EXPLORER.OPEN_SELECTION_MODE});
              Dispatcher.dispatch({action: AT.ASPECT_PANEL.OPEN_MAIN_FILE_SELECTION_MODE});
            }
          }
          >
          Select Main File
        </a>
      );
    }
  }

  _getChangeButton() {
    if (this.props.mainFilePath && !this.props.unconfirmedMainFilePath) {
      return (
        <div>
          <a
            className="aspect-select-main-file"
            onClick={() => {
                Dispatcher.dispatch({action: AT.FILE_EXPLORER.OPEN_SELECTION_MODE});
                Dispatcher.dispatch({action: AT.ASPECT_PANEL.OPEN_MAIN_FILE_SELECTION_MODE});
              }
            }
            >
            {'Change' }
          </a>
        </div>
      )
    }
    return null;
  }
}

AspectPanel.propTypes = {
  mainFilePath: PropTypes.string,
  unconfirmedMainFilePath: PropTypes.string,
  argumentList: PropTypes.object,  /* Should get Immutable list of arg types */
}

export default AspectPanel;