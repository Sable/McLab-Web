import React from 'react';

const {PropTypes, Component} = React;

class CodeTopBar extends Component {
  render() {
    return (
      <div className="code-top-bar">
        <div className="title-container">
          {this.props.selectionPath}
        </div>
      </div>
    );
  }
}

CodeTopBar.propTypes = {
  selectionPath: PropTypes.string,
};

export default CodeTopBar;
