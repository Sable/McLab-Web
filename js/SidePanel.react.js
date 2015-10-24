import Dropzone from 'react-dropzone';
import FileExplorerActions from './FileExplorerActions.js'
import SelectedFileStore from './stores/SelectedFileStore';
import FileTile from './FileTile.react';
import FolderTile from './FolderTile.react';
import React from 'react';

const {PropTypes, Component} = React;

class Terminal extends Component {
  render() {
    return <div className="side-panel"></div>;
  }
}

Terminal.propTypes = {
}

export default Terminal;
