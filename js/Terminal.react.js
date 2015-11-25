import classnames from 'classnames';
import React from 'react';

const {PropTypes, Component} = React;

class TerminalLine extends Component {
  render() {
    return (
      <div className="terminal-line">
        {this.props.children}
      </div>
    );
  }
}


class Terminal extends Component {
  render() {

    let count = 0;

    const lines = this.props.buffer.map(
      x => <TerminalLine key={"line-" + (++count)}> <div>{x}</div> </TerminalLine>
    );

    return (
      <div className={classnames({
        "terminal": true,
        "side-panel-open": true,
      })}>
        {lines}
      </div>
    );
  }
}

Terminal.propTypes = {
  buffer: PropTypes.object.isRequired, // Immutable list of lines
}

export default Terminal;
