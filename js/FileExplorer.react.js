import AT from './constants/AT';
import classnames from 'classnames';
import Dispatcher from './Dispatcher';
import Dropzone from 'react-dropzone';
import FileExplorerActions from './actions/FileExplorerActions.js'
import OnLoadActions from './actions/OnLoadActions.js'
import FileTile from './FileTile.react';
import FolderTile from './FolderTile.react';
import React from 'react';
import request from 'superagent'


const {PropTypes, Component} = React;
const getDirectoryTitle = path => path.split('/').pop();

function joinPaths(path1, path2) {
  const separator = path1[path1.length - 1] === '/' || path2[0] === '/'
    ? ''
    : '/';
  return path1 + separator + path2;
}

class Directory extends Component {
  render() {
    const currentIndent = this.props.indent;
    const tree = this.props.tree;

    const renderedSubdirs = tree.directories.map(
      subtree =>
        <Directory
          tree={subtree}
          indent={currentIndent + 1}
          selection={this.props.selection}
          key={subtree.path}
        />
    );

    const renderedFiles = tree.files.map(
      filename =>
        <FileTile
          title={filename}
          indent={currentIndent + 1}
          path={joinPaths(tree.path, filename)}
          selected={joinPaths(tree.path, filename) === this.props.selection}
          key={joinPaths(tree.path, filename)}
        />
    );

    return (
      <div>
        <FolderTile
          title={getDirectoryTitle(tree.path)}
          indent={currentIndent}
          path={tree.path}
          selected={tree.path === this.props.selection}
        />
        {renderedSubdirs}
        {renderedFiles}
      </div>
    )
  }

}

class FileExplorer extends Component {
  render() {
    let contents;
    let sessionID = OnLoadActions.getSessionID();
    // check if tree is just an empty object
    if (this.props.tree.path) {
      contents = (
        <div className="file-explorer-inner-container">
          <Directory
            tree={this.props.tree}
            indent={0}
            selection={this.props.selection}
          />
        </div>
      );
    } else {
      contents = (
        <div className="file-explorer-upload">
          <Dropzone
            onDrop={
              function(files){
                const baseURL = window.location.origin;
                var req = request.post(baseURL + '/files/upload/')
                      .set({'SessionID': sessionID});
                files.forEach((file)=> {
                    req.attach(file.name, file);
                });
                req.end(() => FileExplorerActions.fetchFileTree(sessionID));
              }
            }
          >
            Drag and drop a zip file to upload!
          </Dropzone>
        </div>
      );
    }

    // TOMAYBEDO: the selection prop looks really ugly ugh
    return (
      <div className={classnames({
          "file-explorer-outer-container": true,
          "file-explorer-outer-selection-mode": this.props.selectionMode,
          })}>
        <div className={classnames({
          "file-explorer-selection-banner": true,
          "file-explorer-selection-banner-open": this.props.selectionMode,
          })}>
          Select file here
          <div
            className="side-panel-close-button"
            title="Close panel"
            onClick={() =>
            Dispatcher.dispatch({action: AT.FILE_EXPLORER.CLOSE_SELECTION_MODE})
          }>
            &times;
          </div>
        </div>
        <div className={classnames({
          "file-explorer": true,
          "file-explorer-inner-selection-mode": this.props.selectionMode,
        })}>
          {contents}
        </div>
      </div>
    );
  }
}

FileExplorer.propTypes = {
  tree: PropTypes.object.isRequired,
  selection: PropTypes.string,
  selectionMode: PropTypes.bool.isRequired,
}

module.exports = {
  FileExplorer: FileExplorer,
  Directory: Directory
};


/*
*/
