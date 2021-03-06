import classNames from 'classnames';
import Dispatcher from './Dispatcher';
import React from 'react';
import AT from './constants/AT';

const {PropTypes, Component} = React;
const one_indent = "\u00A0\u00A0";  // Non-breaking spaces

class FolderTile extends Component {
  render() {

    var indent_string = '';

    for (var i = 0; i < this.props.indent; i++) {
      indent_string += one_indent;
    }

    return (
      <div
        className={classNames(
          'file-tile',
          {'file-tile-selected': this.props.selected}
        )}
        onClick={() => Dispatcher.dispatch({
          action: AT.FILE_EXPLORER.SELECT_FILE,
          data: { selection: this.props.path, type: 'DIR' }
        })}
      >
        {indent_string}
        <i className="fa fa-folder-open fa-fw"></i>
        {' '}
        {this.props.title}
      </div>
    );
  }
}

FolderTile.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  indent: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,

}

module.exports = FolderTile;
