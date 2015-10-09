class CodeTopBar extends React.Component {
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
  selectionPath: React.PropTypes.string.isRequired,
  selectionType: React.PropTypes.string.isRequired,
};

export default CodeTopBar;
