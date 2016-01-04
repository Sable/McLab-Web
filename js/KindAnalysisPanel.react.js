import AT from './constants/AT';
import classnames from 'classnames';
import Dispatcher from './Dispatcher';
import DropdownSelect from './DropdownSelect.react';
import FortranCompileActions from './actions/FortranCompileActions';
import FortranCompileArgumentSelector from './FortranCompileArgumentSelector.react';
import KindAnalysisActions from './actions/KindAnalysisActions';
import MatlabArgTypes from './constants/MatlabArgTypes';
import React from 'react';
import SidePanelBase from './SidePanelBase.react';


const { PropTypes, Component } = React;

class KindAnalysisPanel extends Component {

  _collect(collection) {
    const map = new Map();
    for (let sym of collection) {
      if (!map.has(sym.name)) {
        map.set(sym.name, []);
      }
      map.get(sym.name).push(sym.position);
    }
    return map;
  }

  _renderSymbol(symName, positionList) {
    if (positionList.length === 0) {
      return null;
    }
    const renderedPositions = [];
    let count = 0;

    for (let pos of positionList) {
      const lineno = pos.startRow + 1;
      const startColumn = pos.startColumn + 1;
      const endColumn = pos.endColumn + 1;
      renderedPositions.push(
        <div key={`${symName}-${count}`}
          className="kind-analysis-panel-sym-position">
          {`Line ${lineno}, Column ${startColumn}-${endColumn}`}
        </div>
      );
      count += 1;
    }

    return (
      <div>
        <div className="kind-analysis-panel-sym-name">
          {symName}
        </div>
        <div className="kind-analysis-panel-sym-position-container">
          {renderedPositions}
        </div>
      </div>
    );
  }

  _renderSymbolList(kind, symPositions) {
    const renderedList = [];
    const symMap = this._collect(symPositions);
    for (let p of symMap) {
      const symName = p[0];
      const positionList = p[1];
      renderedList.push(
        <div className="kind-analysis-panel-sym-container"
          key={"sym-" + symName}>
          {this._renderSymbol(symName, positionList)}
        </div>
      );
    }

    if (renderedList.length === 0) {
      return null;
    }

    return (
      <div>
        <div className="kind-analysis-panel-kind-name">
          {kind}
        </div>
        <div className="kind-analaysis-panel-sym-list-container">
          {renderedList}
        </div>
      </div>
    );
  }

  render() {
    if(!this.props.variables && !this.props.functions) {
      return (
        <SidePanelBase title="Kind Analysis Results">
          <div className="side-panel-card">
            No results to show here.
            <a className="cursor-pointer"
              onClick={KindAnalysisActions.runKindAnalysis}>
              {' '}Run kind analysis on this file.
            </a>
          </div>
        </SidePanelBase>
      );
    }

    const varSection = this.props.variables
      ? this._renderSymbolList("Variables", this.props.variables)
      : [];

    const funSection = this.props.functions
      ? this._renderSymbolList("Functions", this.props.functions)
      : [];

    return (
      <SidePanelBase title="Kind Analysis Results">
        <div className="side-panel-card">
          {varSection}
          {funSection}
        </div>
      </SidePanelBase>
    );
  }

}

KindAnalysisPanel.propTypes = {
  variables: PropTypes.arrayOf(PropTypes.object),
  functions: PropTypes.arrayOf(PropTypes.object),
}

export default KindAnalysisPanel;
