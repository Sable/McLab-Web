import classNames from 'classnames';
import Dispatcher from './Dispatcher';
import React from 'react';
import AT from './constants/AT';
import request from 'superagent';


const {PropTypes, Component} = React;
var one_indent = "\u00A0\u00A0";  // Non-breaking spaces

class FileTile extends Component {

  _onclick() {
    const path = this.props.path;
    Dispatcher.dispatch({
      action: AT.FILE_EXPLORER.SELECT_FILE,
      data: { selection: path, type: 'FILE' }
    });

    // TODO: This is a hack to get rid of 'workspace/'
    // Fix code to make workspace a proper sandbox
    // TODO: wtf why is this logic here. This should be handled by a smart cache
    request.get('readfile/' + path.substring(10),
      function(err, res) {
        if (err) {
          Dispatcher.dispatch({
            action: AT.FILE_CONTENT.DATA_LOADED,
            data: {
              filepath: path,
              success: false,
              error: err,
            }
          });
        } else {
          Dispatcher.dispatch({
            action: AT.FILE_CONTENT.DATA_LOADED,
            data: {
              filepath: path,
              success: true,
              fileContents: res.text,
            },
          })
        }
      },
    );

  }

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
        onClick={ this._onclick.bind(this) }
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
