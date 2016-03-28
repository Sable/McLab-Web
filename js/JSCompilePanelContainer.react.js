import {Container} from 'flux/utils';
import JSCompilePanel from './JSCompilePanel.react';
import OpenFileStore from './stores/OpenFileStore';
import FileTreeStore from './stores/FileTreeStore';
import OnLoadActions from './actions/OnLoadActions';
import React from 'react';

const { Component } = React;

class JSCompilePanelContainer extends Component {
  static getStores() {
    return [
      OpenFileStore,
      FileTreeStore
    ];
  }

  static calculateState(prevState) {
    const openFile = OpenFileStore.getFilePath();
    let fileIsOpen = false;
    let fileType = null;
    let pathToDownload = null;
    if (openFile) {
      fileIsOpen = true;
      if (openFile.indexOf('.js') > -1) {
        fileType = 'js';
      }
      if (openFile.indexOf('.m') > -1) {
        fileType = 'matlab';
      }

      const baseURL = window.location.origin;
      const sessionID = OnLoadActions.getSessionID();
      pathToDownload = baseURL + '/session/' + sessionID +  '/files/download/' + openFile;
    }
    return {fileIsOpen: fileIsOpen, fileType: fileType, pathToDownload: pathToDownload}
  }

  render() {
    return (
      <JSCompilePanel
          fileIsOpen={this.state.fileIsOpen}
          fileType={this.state.fileType}
          pathToDownload={this.state.pathToDownload}
      />
    );
  }
}

export default Container.create(JSCompilePanelContainer);
