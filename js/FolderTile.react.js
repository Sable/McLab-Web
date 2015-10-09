import classNames from 'classNames';
import Dispatcher from './Dispatcher';

var one_indent = "\u00A0\u00A0";  // Non-breaking spaces

class FolderTile extends React.Component {
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
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  indent: React.PropTypes.number.isRequired,
  selected: React.PropTypes.bool.isRequired,

}

module.exports = FolderTile;
