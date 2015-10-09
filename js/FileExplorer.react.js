import SelectedFileStore from './stores/SelectedFileStore';
import FileTile from './FileTile.react';
import FolderTile from './FolderTile.react';

const getDirectoryTitle = path => path.split('/').pop();

function joinPaths(path1, path2) {
  const separator = path1[path1.length - 1] === '/' || path2[0] === '/'
    ? ''
    : '/';
  return path1 + separator + path2;
}

class Directory extends React.Component {
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

class FileExplorer extends React.Component {
  render() {
    // TOMAYBEDO: the selection prop looks really ugly ugh
    return (
      <div className="file-explorer">
        <Directory
          tree={this.props.tree}
          indent={0}
          selection={this.props.selection}
        />
      </div>
    );
  }
}

FileExplorer.propTypes = {
  tree: React.PropTypes.object.isRequired,
  selection: React.PropTypes.string.isRequired,
}

module.exports = {
  FileExplorer: FileExplorer,
  Directory: Directory
};
