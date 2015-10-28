import {Container} from 'flux/utils';
import FortranCompilePanel from './FortranCompilePanel.react';
import FortranCompileConfigStore from './stores/FortranCompileConfigStore';
import React from 'react';

const { Component } = React;

class FortranCompilePanelContainer extends Component {
  static getStores() {
    return [
      FortranCompileConfigStore,
    ];
  }

  static calculateState(prevState) {
    return {

    };
  }

  render() {
    return (
      <FortranCompilePanel
         argumentList={[]}
      />
    );
  }
}

export default Container.create(FortranCompilePanelContainer);
