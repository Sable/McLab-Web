import classNames from 'classNames';
import Dispatcher from './Dispatcher';
import {PropTypes, Component} from 'react';

var one_indent = "\u00A0\u00A0";  // Non-breaking spaces

class FileTile extends Component {
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
          action: 'FILE_EXPLORER.SELECTION_CHANGED',
          data: { selection: this.props.path, type: 'FILE' }
        })}
      >
        {indent_string}
        <i className="fa fa-file-text-o fa-fw"></i>
        {' '}
        {this.props.title}
      </div>
    );
  }
}

FileTile.propTypes = {
  title: PropTypes.string.isRequired,
  indent: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
}

module.exports = FileTile;
