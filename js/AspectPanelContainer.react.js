import {Container} from 'flux/utils';
import AspectPanel from './AspectPanel.react';
import AspectConfigStore from './stores/AspectConfigStore';
import React from 'react';

const { Component } = React;

class AspectPanelContainer extends Component {
  static getStores() {
    return [
      AspectConfigStore,
    ];
  }

  static calculateState(prevState) {
    return {
      mainFilePath: AspectConfigStore.getMainFilePath(),
      unconfirmedMainFilePath: AspectConfigStore.getUnconfirmedMainFilePath(),
    };
  }

  render() {
    return (
      <AspectPanel
         mainFilePath={this.state.mainFilePath}
         unconfirmedMainFilePath={this.state.unconfirmedMainFilePath}     
      />
    );
  }
}

export default Container.create(AspectPanelContainer);