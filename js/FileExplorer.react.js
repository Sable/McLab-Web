import Dropzone from 'react-dropzone';
import FileExplorerActions from './FileExplorerActions.js'
import SelectedFileStore from './stores/SelectedFileStore';
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
                var req = request.post('upload/');
                files.forEach((file)=> {
                    req.attach(file.name, file);
                });
                req.end(() => FileExplorerActions.fetchFileTree());
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
      <div className="file-explorer">
        {contents}
      </div>
    );
  }
}

FileExplorer.propTypes = {
  tree: PropTypes.object.isRequired,
  selection: PropTypes.string.isRequired,
}

module.exports = {
  FileExplorer: FileExplorer,
  Directory: Directory
};
