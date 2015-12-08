import {Container} from 'flux/utils';
import KindAnalysisPanel from './KindAnalysisPanel.react';
import KindAnalysisResultStore from './stores/KindAnalysisResultStore';
import OpenFileStore from './stores/OpenFileStore';
import React from 'react';

const { Component } = React;

class KindAnalysisPanelContainer extends Component {
  static getStores() {
    return [
      OpenFileStore,
      KindAnalysisResultStore,
    ];
  }

  static calculateState(prevState) {
    const openFile = OpenFileStore.getFilePath();
    if (!openFile) {
      return {
        variables: null,
        functions: null,
      };
    }

    const results = KindAnalysisResultStore.get(openFile);

    if (!results) {
      return {
        variables: null,
        functions: null,
      };
    }

    return {
      variables: results['variables'],
      functions: results['functions'],
    };
  }

  render() {
    return (
      <KindAnalysisPanel
         variables={this.state.variables}
         functions={this.state.functions}
      />
    );
  }
}

export default Container.create(KindAnalysisPanelContainer);
