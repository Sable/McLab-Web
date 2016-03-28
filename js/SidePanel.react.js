import React from 'react';
import SidePanelKeys from './constants/SidePanelKeys';
import FortranCompilePanelContainer from './FortranCompilePanelContainer.react';
import KindAnalysisPanelContainer from './KindAnalysisPanelContainer.react';
import JSCompilePanelContainer from './JSCompilePanelContainer.react';

const {PropTypes, Component} = React;

const keyToModuleMap = new Map([
  [SidePanelKeys.FORTRAN_COMPILE_PANEL, FortranCompilePanelContainer],
  [SidePanelKeys.KIND_ANALYSIS_PANEL, KindAnalysisPanelContainer],
  [SidePanelKeys.JS_COMPILE_PANEL, JSCompilePanelContainer],
]);

class SidePanel extends Component {
  render() {
    if (!this.props.activePanel) {
      return null;
    }

    const PanelContainer = keyToModuleMap.get(this.props.activePanel);

    return <PanelContainer />;
  }
}

export default SidePanel;
