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

class KindAnalysisPanel extends Component {

  render() {

    return (
      <SidePanelBase title="Kind Analysis Results">
        Look at all these results!
      </SidePanelBase>
    );
  }

}

KindAnalysisPanel.propTypes = {
  mainFilePath: PropTypes.string,
  unconfirmedMainFilePath: PropTypes.string,
  argumentList: PropTypes.object,  /* Should get Immutable list of arg types */
}

export default KindAnalysisPanel;
