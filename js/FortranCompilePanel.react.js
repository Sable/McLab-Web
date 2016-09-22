import AT from './constants/AT';
import classnames from 'classnames';
import Dispatcher from './Dispatcher';
import DropdownSelect from './DropdownSelect.react';
import FortranCompileActions from './actions/FortranCompileActions';
import FortranCompileArgumentSelector from './FortranCompileArgumentSelector.react';
import MatlabArgTypes from './constants/MatlabArgTypes';
import React from 'react';
import SidePanelBase from './SidePanelBase.react';

import { DropdownButton, MenuItem } from 'react-bootstrap';

const { PropTypes, Component } = React;

class FortranCompilePanel extends Component {

  render() {

    return (
      <SidePanelBase title="Compile to Fortran">
        <div
          className={classnames(
            "side-panel-card",
            "fortran-compiler-main-file-selector"
          )}
          >
          <div className="side-panel-card-header">
            Main File
          </div>
          {this._getMainFilePath()}
          {this._getMainFileSection()}
          {this._getChangeButton()}
        </div>
        {this._getArgumentCard()}
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
          onClick={FortranCompileActions.beginCompilation}>
          Compile
        </a>
      </div>
    );
  }

  _getArgumentCard() {

    if (!this.props.mainFilePath) {
      return null;
    }

    // This allows for multiple arguments, but really, fortan compiler
    // doesn't support more than one so adding multiple argument is not
    // supported in the UI. For now, this is useful reference for future cases.
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
      <div className="side-panel-card">
        <div className="side-panel-card-header">Argument</div>
        <div>{argumentSelectors}</div>
        <div>{this._getAddArgumentButton()}</div>
      </div>
    );
  }

  _getAddArgumentButton() {
    if (this.props.argumentList.isEmpty()) {
      return (
        <a className="fortran-compiler-select-main-file"
          onClick={() => Dispatcher.dispatch({
            action: AT.FORTRAN_COMPILE_PANEL.ADD_ARGUMENT,
            data: {
              // IMPROVE: Hard coding a default arg here is icky.
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
      );
    }

    return null;
  }

  // TODO: Improve function name
  _getMainFileSection() {
    if (this.props.unconfirmedMainFilePath) {
      return (
        <div>
          <div>{this.props.unconfirmedMainFilePath}</div>
          <a className="fortran-compiler-select-main-file"
            onClick={() => {
              Dispatcher.dispatch({action: AT.FORTRAN_COMPILE_PANEL.CONFIRM_MAIN_FILE});
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

  _getChangeButton() {
    if (this.props.mainFilePath && !this.props.unconfirmedMainFilePath) {
      return (
        <div>
          <a
            className="fortran-compiler-select-main-file"
            onClick={() => {
                Dispatcher.dispatch({action: AT.FILE_EXPLORER.OPEN_SELECTION_MODE});
                Dispatcher.dispatch({action: AT.FORTRAN_COMPILE_PANEL.OPEN_MAIN_FILE_SELECTION_MODE});
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

FortranCompilePanel.propTypes = {
  mainFilePath: PropTypes.string,
  unconfirmedMainFilePath: PropTypes.string,
  argumentList: PropTypes.object,  /* Should get Immutable list of arg types */
}

export default FortranCompilePanel;
