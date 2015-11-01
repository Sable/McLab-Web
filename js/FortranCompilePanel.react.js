import AT from './constants/AT';
import classnames from 'classnames';
import Dispatcher from './Dispatcher';
import DropdownSelect from './DropdownSelect.react';
import FortranCompileArgumentSelector from './FortranCompileArgumentSelector.react';
import MatlabArgTypes from './constants/MatlabArgTypes';
import React from 'react';
import SidePanelBase from './SidePanelBase.react';

import { DropdownButton, MenuItem } from 'react-bootstrap';

const { PropTypes, Component } = React;

class FortranCompilePanel extends Component {

  render() {
    let argumentSelectors = [];
    let count = 0;
    for (let arg of this.props.argumentList) {
      argumentSelectors.push(
        <FortranCompileArgumentSelector
          key={'argselector-' + count}
          argIndex={count}
          mlClass={arg.mlClass}
          numRows={arg.numRows}
          numCols={arg.numCols}
          realComplex={arg.realComplex}
        />
      );
      count += 1;
    }

    return (
      <SidePanelBase title="Compile to Fortran">
        <div
          className={classnames(
            "side-panel-card",
            "fortran-compiler-main-file-selector"
          )}
          >
          <div className="side-panel-card-header">
            Main File:
          </div>
          {this._getMainFilePath()}
          {this._getMainFileSection()}
        </div>
        <div className="side-panel-card">
          <div className="side-panel-card-header">
            Arguments:
              <a onClick={() => Dispatcher.dispatch({
                  action: AT.FORTRAN_COMPILE_PANEL.ADD_ARGUMENT,
                  data: {
                    // IMPROVE: Hard coding a default arg here is not icky.
                    arg: {
                      mlClass: MatlabArgTypes.MatlabClass.DOUBLE,
                      numRows: "1",
                      numCols: "1",
                      realComplex: MatlabArgTypes.MatlabRealComplex.REAL,
                    }
                  }
                })}
                >
                Add argument
              </a>
              {argumentSelectors}
          </div>
        </div>
        <a
          className="pure-button topnav-button"
          onClick={() => Dispatcher.dispatch({
            action: AT.TERMINAL.ADD_NEW_LINE,
            data: {
              newLine: "Sent request to server for compilation. Compiled files should be ready in a few seconds."
            }
          })}>
          Compile
        </a>
      </SidePanelBase>
    );
  }

  // TODO: Improve function name
  _getMainFileSection() {
    if (this.props.unconfirmedMainFilePath) {
      return (
        <div>
          <div>{this.props.unconfirmedMainFilePath}</div>
          <a onClick={() => {
              Dispatcher.dispatch({action: AT.FORTRAN_COMPILE_PANEL.CONFIRM_MAIN_FILE});
              Dispatcher.dispatch({action: AT.FILE_EXPLORER.CLOSE_SELECTION_MODE});
            }}
            >
            Confirm
          </a>
        </div>
      );
    }
  }

  _getMainFilePath() {
    if (this.props.mainFilePath) {
      return (
        <div>
          {' '  + this.props.mainFilePath}
          <a
            className="fortran-compiler-select-main-file"
            onClick={() => {
                Dispatcher.dispatch({action: AT.FILE_EXPLORER.OPEN_SELECTION_MODE});
                Dispatcher.dispatch({action: AT.FORTRAN_COMPILE_PANEL.OPEN_MAIN_FILE_SELECTION_MODE});
              }
            }
            >
            {'       ' + 'Change' }
          </a>
        </div>
      )
    } else {
      return (
        <a
          className="fortran-compiler-select-main-file"
          onClick={() => {
              Dispatcher.dispatch({action: AT.FILE_EXPLORER.OPEN_SELECTION_MODE});
              Dispatcher.dispatch({action: AT.FORTRAN_COMPILE_PANEL.OPEN_MAIN_FILE_SELECTION_MODE});
            }
          }
          >
          Select Main File
        </a>
      );
    }
  }
}

FortranCompilePanel.propTypes = {
  mainFilePath: PropTypes.string,
  unconfirmedMainFilePath: PropTypes.string,
  argumentList: PropTypes.object,  /* Should get Immutable list of arg types */
}

export default FortranCompilePanel;
