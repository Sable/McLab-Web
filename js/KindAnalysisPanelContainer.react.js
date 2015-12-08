import {Container} from 'flux/utils';
import FortranCompilePanel from './FortranCompilePanel.react';
import FortranCompileConfigStore from './stores/FortranCompileConfigStore';
import React from 'react';

const { Component } = React;

class KindAnalysisPanelContainer extends Component {
  static getStores() {
    return [
      FortranCompileConfigStore,
    ];
  }

  static calculateState(prevState) {
    return {
      mainFilePath: FortranCompileConfigStore.getMainFilePath(),
      unconfirmedMainFilePath: FortranCompileConfigStore.getUnconfirmedMainFilePath(),
      argumentList: FortranCompileConfigStore.getArgumentList(),
    };
  }

  render() {
    return (
      <FortranCompilePanel
         mainFilePath={this.state.mainFilePath}
         unconfirmedMainFilePath={this.state.unconfirmedMainFilePath}
         argumentList={this.state.argumentList}
      />
    );
  }
}

export default Container.create(KindAnalysisPanelContainer);
