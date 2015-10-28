import AT from './constants/AT';
import classnames from 'classnames';
import Dispatcher from './Dispatcher';
import DropdownSelect from './DropdownSelect.react';
import FortranCompileArgumentSelector from './FortranCompileArgumentSelector.react';
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
          onClick={() =>
            Dispatcher.dispatch({action: AT.FILE_EXPLORER.OPEN_SELECTION_MODE})
          }
        >
          <div className="side-panel-card-header">
            Main File:
          </div>
          <a className="fortran-compiler-select-main-file">
            Select Main File
          </a>
        </div>
        <div className="side-panel-card">
          <div className="side-panel-card-header">
            Arguments:
              <FortranCompileArgumentSelector />
          </div>
        </div>
      </SidePanelBase>
    );
  }
}

FortranCompilePanel.propTypes = {
  mainFilePath: PropTypes.string,
  unconfirmedMainFilePath: PropTypes.string,
  argumentList: PropTypes.arrayOf(PropTypes.object),
}

export default FortranCompilePanel;
