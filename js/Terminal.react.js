import Dropzone from 'react-dropzone';
import FileExplorerActions from './FileExplorerActions.js'
import SelectedFileStore from './stores/SelectedFileStore';
import FileTile from './FileTile.react';
import FolderTile from './FolderTile.react';
import {PropTypes, Component} from 'react';

function newCoutner() {
  let count = 0;
  return () => ++count;
}

class TerminalLine extends Component {
  render() {
    return (
      <div className="terminal-line">
        {this.props.children}
      </div>
    );
  }
}

TerminalLine.propTypes = {
  line: PropTypes.object.isRequired,
}


class Terminal extends Component {
  render() {

    let count = 0;

    const lines = this.props.buffer.map(
      x => <TerminalLine key={"line-" + (++count)}> <div>{x}</div> </TerminalLine>
    );

    return (
      <div className="terminal">
        {lines}
      </div>
    );
  }
}

Terminal.propTypes = {
  buffer: PropTypes.object.isRequired, // Immutable list of lines
}

export default Terminal;
