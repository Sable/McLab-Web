import ActiveSidePanelStore from './stores/ActiveSidePanelStore';
import {Container} from 'flux/utils';
import SidePanel from './SidePanel.react';
import React from 'react';

const { Component } = React;

class SidePanelContainer extends Component {
  static getStores() {
    return [
      ActiveSidePanelStore,
    ];
  }

  static calculateState(prevState) {
    return {
      activePanel: ActiveSidePanelStore.getActivePanel(),
    };
  }

  render() {
    return (
      <SidePanel activePanel={this.state.activePanel} />
    );
  }
}

export default Container.create(SidePanelContainer);
