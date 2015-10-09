(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AceEditor = (function (_React$Component) {
  _inherits(AceEditor, _React$Component);

  function AceEditor() {
    _classCallCheck(this, AceEditor);

    _get(Object.getPrototypeOf(AceEditor.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(AceEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var editor = ace.edit("editor");
      editor.setTheme("ace/theme/tomorrow");
      editor.getSession().setMode("ace/mode/matlab");
      editor.setReadOnly(true);
      editor.setAnimatedScroll(true);
      editor.setShowPrintMargin(false);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "ace-container" },
        React.createElement(
          "div",
          { id: "editor" },
          "% Herein lies lots of matlab code"
        )
      );
    }
  }]);

  return AceEditor;
})(React.Component);

AceEditor.propTypes = {
  selectionPath: React.PropTypes.string.isRequired,
  selectionType: React.PropTypes.string.isRequired
};

exports["default"] = AceEditor;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _storesSelectedFileStore = require('./stores/SelectedFileStore');

var _storesSelectedFileStore2 = _interopRequireDefault(_storesSelectedFileStore);

var _FileExplorerReact = require('./FileExplorer.react');

var _CodeTopBarReact = require('./CodeTopBar.react');

var _CodeTopBarReact2 = _interopRequireDefault(_CodeTopBarReact);

var _AceEditorReact = require('./AceEditor.react');

var _AceEditorReact2 = _interopRequireDefault(_AceEditorReact);

var _fluxUtils = require('flux/utils');

var CodeContainer = (function (_React$Component) {
  _inherits(CodeContainer, _React$Component);

  function CodeContainer() {
    _classCallCheck(this, CodeContainer);

    _get(Object.getPrototypeOf(CodeContainer.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CodeContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'code-container' },
        React.createElement(_CodeTopBarReact2['default'], {
          selectionPath: this.state.selectionPath,
          selectionType: this.state.selectionType
        }),
        React.createElement(_AceEditorReact2['default'], {
          selectionPath: this.state.selectionPath,
          selectionType: this.state.selectionType
        })
      );
    }
  }], [{
    key: 'getStores',
    value: function getStores() {
      return [_storesSelectedFileStore2['default']];
    }
  }, {
    key: 'calculateState',
    value: function calculateState(prevState) {
      var selectionType = _storesSelectedFileStore2['default'].getSelectionType();
      if (selectionType === 'DIR') {
        return prevState;
      }

      return {
        selectionPath: _storesSelectedFileStore2['default'].getSelectionPath(),
        selectionType: _storesSelectedFileStore2['default'].getSelectionType()
      };
    }
  }]);

  return CodeContainer;
})(React.Component);

exports['default'] = _fluxUtils.Container.create(CodeContainer);
module.exports = exports['default'];

},{"./AceEditor.react":1,"./CodeTopBar.react":3,"./FileExplorer.react":5,"./stores/SelectedFileStore":11,"flux/utils":31}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeTopBar = (function (_React$Component) {
  _inherits(CodeTopBar, _React$Component);

  function CodeTopBar() {
    _classCallCheck(this, CodeTopBar);

    _get(Object.getPrototypeOf(CodeTopBar.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(CodeTopBar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "code-top-bar" },
        React.createElement(
          "div",
          { className: "title-container" },
          this.props.selectionPath
        )
      );
    }
  }]);

  return CodeTopBar;
})(React.Component);

CodeTopBar.propTypes = {
  selectionPath: React.PropTypes.string.isRequired,
  selectionType: React.PropTypes.string.isRequired
};

exports["default"] = CodeTopBar;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
// var Dispatcher = require('flux').Dispatcher;

'use strict';

var _flux = require('flux');

module.exports = new _flux.Dispatcher();

},{"flux":13}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _storesSelectedFileStore = require('./stores/SelectedFileStore');

var _storesSelectedFileStore2 = _interopRequireDefault(_storesSelectedFileStore);

var _FileTileReact = require('./FileTile.react');

var _FileTileReact2 = _interopRequireDefault(_FileTileReact);

var _FolderTileReact = require('./FolderTile.react');

var _FolderTileReact2 = _interopRequireDefault(_FolderTileReact);

var getDirectoryTitle = function getDirectoryTitle(path) {
  return path.split('/').pop();
};

function joinPaths(path1, path2) {
  var separator = path1[path1.length - 1] === '/' || path2[0] === '/' ? '' : '/';
  return path1 + separator + path2;
}

var Directory = (function (_React$Component) {
  _inherits(Directory, _React$Component);

  function Directory() {
    _classCallCheck(this, Directory);

    _get(Object.getPrototypeOf(Directory.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Directory, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var currentIndent = this.props.indent;
      var tree = this.props.tree;

      var renderedSubdirs = tree.directories.map(function (subtree) {
        return React.createElement(Directory, {
          tree: subtree,
          indent: currentIndent + 1,
          selection: _this.props.selection,
          key: subtree.path
        });
      });

      var renderedFiles = tree.files.map(function (filename) {
        return React.createElement(_FileTileReact2['default'], {
          title: filename,
          indent: currentIndent + 1,
          path: joinPaths(tree.path, filename),
          selected: joinPaths(tree.path, filename) === _this.props.selection,
          key: joinPaths(tree.path, filename)
        });
      });

      return React.createElement(
        'div',
        null,
        React.createElement(_FolderTileReact2['default'], {
          title: getDirectoryTitle(tree.path),
          indent: currentIndent,
          path: tree.path,
          selected: tree.path === this.props.selection
        }),
        renderedSubdirs,
        renderedFiles
      );
    }
  }]);

  return Directory;
})(React.Component);

var FileExplorer = (function (_React$Component2) {
  _inherits(FileExplorer, _React$Component2);

  function FileExplorer() {
    _classCallCheck(this, FileExplorer);

    _get(Object.getPrototypeOf(FileExplorer.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FileExplorer, [{
    key: 'render',
    value: function render() {
      // TOMAYBEDO: the selection prop looks really ugly ugh
      return React.createElement(
        'div',
        { className: 'file-explorer' },
        React.createElement(Directory, {
          tree: this.props.tree,
          indent: 0,
          selection: this.props.selection
        })
      );
    }
  }]);

  return FileExplorer;
})(React.Component);

FileExplorer.propTypes = {
  tree: React.PropTypes.object.isRequired,
  selection: React.PropTypes.string.isRequired
};

module.exports = {
  FileExplorer: FileExplorer,
  Directory: Directory
};

},{"./FileTile.react":7,"./FolderTile.react":8,"./stores/SelectedFileStore":11}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _storesSelectedFileStore = require('./stores/SelectedFileStore');

var _storesSelectedFileStore2 = _interopRequireDefault(_storesSelectedFileStore);

var _FileExplorerReact = require('./FileExplorer.react');

var _fluxUtils = require('flux/utils');

var FileExplorerContainer = (function (_React$Component) {
  _inherits(FileExplorerContainer, _React$Component);

  function FileExplorerContainer() {
    _classCallCheck(this, FileExplorerContainer);

    _get(Object.getPrototypeOf(FileExplorerContainer.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FileExplorerContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(_FileExplorerReact.FileExplorer, {
        tree: this.state.tree,
        selection: this.state.selection
      });
    }
  }], [{
    key: 'getStores',
    value: function getStores() {
      return [_storesSelectedFileStore2['default']];
    }
  }, {
    key: 'calculateState',
    value: function calculateState(prevState) {
      return {
        tree: {
          path: "Workspace",
          directories: [{
            path: 'Workspace/foo',
            directories: [{
              path: 'Workspace/foo/bar',
              directories: [],
              files: []
            }],
            files: ["one", "two", "three"]
          }],
          files: ['cholesky.m', 'This title is so long it doesn\'t fit into this tiny sidebar', 'pagerank.m']
        },
        selection: _storesSelectedFileStore2['default'].getSelectionPath()
      };
    }
  }]);

  return FileExplorerContainer;
})(React.Component);

exports['default'] = _fluxUtils.Container.create(FileExplorerContainer);
module.exports = exports['default'];

},{"./FileExplorer.react":5,"./stores/SelectedFileStore":11,"flux/utils":31}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _classNames = require('classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var one_indent = '  '; // Non-breaking spaces

var FileTile = (function (_React$Component) {
  _inherits(FileTile, _React$Component);

  function FileTile() {
    _classCallCheck(this, FileTile);

    _get(Object.getPrototypeOf(FileTile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FileTile, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var indent_string = '';

      for (var i = 0; i < this.props.indent; i++) {
        indent_string += one_indent;
      }

      return React.createElement(
        'div',
        {
          className: (0, _classNames2['default'])('file-tile', { 'file-tile-selected': this.props.selected }),
          onClick: function () {
            return _Dispatcher2['default'].dispatch({
              action: 'FILE_EXPLORER.SELECTION_CHANGED',
              data: { selection: _this.props.path, type: 'FILE' }
            });
          }
        },
        indent_string,
        React.createElement('i', { className: 'fa fa-file-text-o fa-fw' }),
        ' ',
        this.props.title
      );
    }
  }]);

  return FileTile;
})(React.Component);

FileTile.propTypes = {
  title: React.PropTypes.string.isRequired,
  indent: React.PropTypes.number.isRequired,
  path: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired
};

module.exports = FileTile;

},{"./Dispatcher":4,"classNames":12}],8:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _classNames = require('classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var one_indent = '  '; // Non-breaking spaces

var FolderTile = (function (_React$Component) {
  _inherits(FolderTile, _React$Component);

  function FolderTile() {
    _classCallCheck(this, FolderTile);

    _get(Object.getPrototypeOf(FolderTile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FolderTile, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var indent_string = '';

      for (var i = 0; i < this.props.indent; i++) {
        indent_string += one_indent;
      }

      return React.createElement(
        'div',
        {
          className: (0, _classNames2['default'])('file-tile', { 'file-tile-selected': this.props.selected }),
          onClick: function () {
            return _Dispatcher2['default'].dispatch({
              action: 'FILE_EXPLORER.SELECTION_CHANGED',
              data: { selection: _this.props.path, type: 'DIR' }
            });
          }
        },
        indent_string,
        React.createElement('i', { className: 'fa fa-folder-open fa-fw' }),
        ' ',
        this.props.title
      );
    }
  }]);

  return FolderTile;
})(React.Component);

FolderTile.propTypes = {
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  indent: React.PropTypes.number.isRequired,
  selected: React.PropTypes.bool.isRequired

};

module.exports = FolderTile;

},{"./Dispatcher":4,"classNames":12}],9:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FileExplorerContainerReact = require('./FileExplorerContainer.react');

var _FileExplorerContainerReact2 = _interopRequireDefault(_FileExplorerContainerReact);

var _CodeContainerReact = require('./CodeContainer.react');

var _CodeContainerReact2 = _interopRequireDefault(_CodeContainerReact);

var TopNav = React.createClass({
  displayName: 'TopNav',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'topnav' },
      React.createElement(
        'div',
        { className: 'ml-logo-container' },
        React.createElement('img', { src: 'mclab_logo_360.png', className: 'ml-logo' }),
        React.createElement(
          'div',
          { className: 'mclab-logo-text' },
          'MCLAB ',
          React.createElement(
            'strong',
            null,
            'WEB'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'buttons-container' },
        React.createElement(
          'a',
          { className: 'pure-button topnav-button', href: '#' },
          'Compile to Fortran'
        )
      )
    );
  }
});

var McLabWeb = React.createClass({
  displayName: 'McLabWeb',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(TopNav, null),
      React.createElement(
        'div',
        { className: 'body-container' },
        React.createElement(_FileExplorerContainerReact2['default'], null),
        React.createElement(_CodeContainerReact2['default'], null)
      )
    );
  }
});

React.render(React.createElement(McLabWeb, null), document.getElementById('app-container'));

},{"./CodeContainer.react":2,"./FileExplorerContainer.react":6}],10:[function(require,module,exports){
'use strict';

var flux = require('flux');
window.flux = flux;

console.log("HEllosdfs");

require('./McLabWeb.react');

},{"./McLabWeb.react":9,"flux":13}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('flux/utils');

var Store = _require.Store;

var Dispatcher = require('../Dispatcher');

var SelectedFileStore = (function (_Store) {
  _inherits(SelectedFileStore, _Store);

  function SelectedFileStore(dispatcher) {
    _classCallCheck(this, SelectedFileStore);

    _get(Object.getPrototypeOf(SelectedFileStore.prototype), 'constructor', this).call(this, dispatcher);
    this._selectionPath = null;
    this._selectionType = null;
  }

  _createClass(SelectedFileStore, [{
    key: '__onDispatch',
    value: function __onDispatch(payload) {
      switch (payload.action) {
        case "FILE_EXPLORER.SELECTION_CHANGED":
          this._selectionPath = payload.data.selection;
          this._selectionType = payload.data.type;
          this.__emitChange();
      }
    }
  }, {
    key: 'getSelectionPath',
    value: function getSelectionPath() {
      return this._selectionPath;
    }
  }, {
    key: 'getSelectionType',
    value: function getSelectionType() {
      return this._selectionType;
    }
  }]);

  return SelectedFileStore;
})(Store);

module.exports = new SelectedFileStore(Dispatcher);

},{"../Dispatcher":4,"flux/utils":31}],12:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],13:[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = require('./lib/Dispatcher');

},{"./lib/Dispatcher":14}],14:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */

'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = require('fbjs/lib/invariant');

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
        continue;
      }
      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9EaXNwYXRjaGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRGlzcGF0Y2hlclxuICogXG4gKiBAcHJldmVudE11bmdlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG52YXIgX3ByZWZpeCA9ICdJRF8nO1xuXG4vKipcbiAqIERpc3BhdGNoZXIgaXMgdXNlZCB0byBicm9hZGNhc3QgcGF5bG9hZHMgdG8gcmVnaXN0ZXJlZCBjYWxsYmFja3MuIFRoaXMgaXNcbiAqIGRpZmZlcmVudCBmcm9tIGdlbmVyaWMgcHViLXN1YiBzeXN0ZW1zIGluIHR3byB3YXlzOlxuICpcbiAqICAgMSkgQ2FsbGJhY2tzIGFyZSBub3Qgc3Vic2NyaWJlZCB0byBwYXJ0aWN1bGFyIGV2ZW50cy4gRXZlcnkgcGF5bG9hZCBpc1xuICogICAgICBkaXNwYXRjaGVkIHRvIGV2ZXJ5IHJlZ2lzdGVyZWQgY2FsbGJhY2suXG4gKiAgIDIpIENhbGxiYWNrcyBjYW4gYmUgZGVmZXJyZWQgaW4gd2hvbGUgb3IgcGFydCB1bnRpbCBvdGhlciBjYWxsYmFja3MgaGF2ZVxuICogICAgICBiZWVuIGV4ZWN1dGVkLlxuICpcbiAqIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGlzIGh5cG90aGV0aWNhbCBmbGlnaHQgZGVzdGluYXRpb24gZm9ybSwgd2hpY2hcbiAqIHNlbGVjdHMgYSBkZWZhdWx0IGNpdHkgd2hlbiBhIGNvdW50cnkgaXMgc2VsZWN0ZWQ6XG4gKlxuICogICB2YXIgZmxpZ2h0RGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB3aGljaCBjb3VudHJ5IGlzIHNlbGVjdGVkXG4gKiAgIHZhciBDb3VudHJ5U3RvcmUgPSB7Y291bnRyeTogbnVsbH07XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB3aGljaCBjaXR5IGlzIHNlbGVjdGVkXG4gKiAgIHZhciBDaXR5U3RvcmUgPSB7Y2l0eTogbnVsbH07XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgYmFzZSBmbGlnaHQgcHJpY2Ugb2YgdGhlIHNlbGVjdGVkIGNpdHlcbiAqICAgdmFyIEZsaWdodFByaWNlU3RvcmUgPSB7cHJpY2U6IG51bGx9XG4gKlxuICogV2hlbiBhIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0ZWQgY2l0eSwgd2UgZGlzcGF0Y2ggdGhlIHBheWxvYWQ6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAqICAgICBhY3Rpb25UeXBlOiAnY2l0eS11cGRhdGUnLFxuICogICAgIHNlbGVjdGVkQ2l0eTogJ3BhcmlzJ1xuICogICB9KTtcbiAqXG4gKiBUaGlzIHBheWxvYWQgaXMgZGlnZXN0ZWQgYnkgYENpdHlTdG9yZWA6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY2l0eS11cGRhdGUnKSB7XG4gKiAgICAgICBDaXR5U3RvcmUuY2l0eSA9IHBheWxvYWQuc2VsZWN0ZWRDaXR5O1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogV2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgY291bnRyeSwgd2UgZGlzcGF0Y2ggdGhlIHBheWxvYWQ6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAqICAgICBhY3Rpb25UeXBlOiAnY291bnRyeS11cGRhdGUnLFxuICogICAgIHNlbGVjdGVkQ291bnRyeTogJ2F1c3RyYWxpYSdcbiAqICAgfSk7XG4gKlxuICogVGhpcyBwYXlsb2FkIGlzIGRpZ2VzdGVkIGJ5IGJvdGggc3RvcmVzOlxuICpcbiAqICAgQ291bnRyeVN0b3JlLmRpc3BhdGNoVG9rZW4gPSBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY291bnRyeS11cGRhdGUnKSB7XG4gKiAgICAgICBDb3VudHJ5U3RvcmUuY291bnRyeSA9IHBheWxvYWQuc2VsZWN0ZWRDb3VudHJ5O1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogV2hlbiB0aGUgY2FsbGJhY2sgdG8gdXBkYXRlIGBDb3VudHJ5U3RvcmVgIGlzIHJlZ2lzdGVyZWQsIHdlIHNhdmUgYSByZWZlcmVuY2VcbiAqIHRvIHRoZSByZXR1cm5lZCB0b2tlbi4gVXNpbmcgdGhpcyB0b2tlbiB3aXRoIGB3YWl0Rm9yKClgLCB3ZSBjYW4gZ3VhcmFudGVlXG4gKiB0aGF0IGBDb3VudHJ5U3RvcmVgIGlzIHVwZGF0ZWQgYmVmb3JlIHRoZSBjYWxsYmFjayB0aGF0IHVwZGF0ZXMgYENpdHlTdG9yZWBcbiAqIG5lZWRzIHRvIHF1ZXJ5IGl0cyBkYXRhLlxuICpcbiAqICAgQ2l0eVN0b3JlLmRpc3BhdGNoVG9rZW4gPSBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY291bnRyeS11cGRhdGUnKSB7XG4gKiAgICAgICAvLyBgQ291bnRyeVN0b3JlLmNvdW50cnlgIG1heSBub3QgYmUgdXBkYXRlZC5cbiAqICAgICAgIGZsaWdodERpc3BhdGNoZXIud2FpdEZvcihbQ291bnRyeVN0b3JlLmRpc3BhdGNoVG9rZW5dKTtcbiAqICAgICAgIC8vIGBDb3VudHJ5U3RvcmUuY291bnRyeWAgaXMgbm93IGd1YXJhbnRlZWQgdG8gYmUgdXBkYXRlZC5cbiAqXG4gKiAgICAgICAvLyBTZWxlY3QgdGhlIGRlZmF1bHQgY2l0eSBmb3IgdGhlIG5ldyBjb3VudHJ5XG4gKiAgICAgICBDaXR5U3RvcmUuY2l0eSA9IGdldERlZmF1bHRDaXR5Rm9yQ291bnRyeShDb3VudHJ5U3RvcmUuY291bnRyeSk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBUaGUgdXNhZ2Ugb2YgYHdhaXRGb3IoKWAgY2FuIGJlIGNoYWluZWQsIGZvciBleGFtcGxlOlxuICpcbiAqICAgRmxpZ2h0UHJpY2VTdG9yZS5kaXNwYXRjaFRva2VuID1cbiAqICAgICBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICAgIHN3aXRjaCAocGF5bG9hZC5hY3Rpb25UeXBlKSB7XG4gKiAgICAgICAgIGNhc2UgJ2NvdW50cnktdXBkYXRlJzpcbiAqICAgICAgICAgY2FzZSAnY2l0eS11cGRhdGUnOlxuICogICAgICAgICAgIGZsaWdodERpc3BhdGNoZXIud2FpdEZvcihbQ2l0eVN0b3JlLmRpc3BhdGNoVG9rZW5dKTtcbiAqICAgICAgICAgICBGbGlnaHRQcmljZVN0b3JlLnByaWNlID1cbiAqICAgICAgICAgICAgIGdldEZsaWdodFByaWNlU3RvcmUoQ291bnRyeVN0b3JlLmNvdW50cnksIENpdHlTdG9yZS5jaXR5KTtcbiAqICAgICAgICAgICBicmVhaztcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFRoZSBgY291bnRyeS11cGRhdGVgIHBheWxvYWQgd2lsbCBiZSBndWFyYW50ZWVkIHRvIGludm9rZSB0aGUgc3RvcmVzJ1xuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MgaW4gb3JkZXI6IGBDb3VudHJ5U3RvcmVgLCBgQ2l0eVN0b3JlYCwgdGhlblxuICogYEZsaWdodFByaWNlU3RvcmVgLlxuICovXG5cbnZhciBEaXNwYXRjaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlzcGF0Y2hlcik7XG5cbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICB0aGlzLl9pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNIYW5kbGVkID0ge307XG4gICAgdGhpcy5faXNQZW5kaW5nID0ge307XG4gICAgdGhpcy5fbGFzdElEID0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIHdpdGggZXZlcnkgZGlzcGF0Y2hlZCBwYXlsb2FkLiBSZXR1cm5zXG4gICAqIGEgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB3aXRoIGB3YWl0Rm9yKClgLlxuICAgKi9cblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKGNhbGxiYWNrKSB7XG4gICAgdmFyIGlkID0gX3ByZWZpeCArIHRoaXMuX2xhc3RJRCsrO1xuICAgIHRoaXMuX2NhbGxiYWNrc1tpZF0gPSBjYWxsYmFjaztcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjYWxsYmFjayBiYXNlZCBvbiBpdHMgdG9rZW4uXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyKGlkKSB7XG4gICAgIXRoaXMuX2NhbGxiYWNrc1tpZF0gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGlzcGF0Y2hlci51bnJlZ2lzdGVyKC4uLik6IGAlc2AgZG9lcyBub3QgbWFwIHRvIGEgcmVnaXN0ZXJlZCBjYWxsYmFjay4nLCBpZCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbaWRdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXYWl0cyBmb3IgdGhlIGNhbGxiYWNrcyBzcGVjaWZpZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgY29udGludWluZyBleGVjdXRpb25cbiAgICogb2YgdGhlIGN1cnJlbnQgY2FsbGJhY2suIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIHVzZWQgYnkgYSBjYWxsYmFjayBpblxuICAgKiByZXNwb25zZSB0byBhIGRpc3BhdGNoZWQgcGF5bG9hZC5cbiAgICovXG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUud2FpdEZvciA9IGZ1bmN0aW9uIHdhaXRGb3IoaWRzKSB7XG4gICAgIXRoaXMuX2lzRGlzcGF0Y2hpbmcgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IE11c3QgYmUgaW52b2tlZCB3aGlsZSBkaXNwYXRjaGluZy4nKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGlkcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgIHZhciBpZCA9IGlkc1tpaV07XG4gICAgICBpZiAodGhpcy5faXNQZW5kaW5nW2lkXSkge1xuICAgICAgICAhdGhpcy5faXNIYW5kbGVkW2lkXSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogQ2lyY3VsYXIgZGVwZW5kZW5jeSBkZXRlY3RlZCB3aGlsZSAnICsgJ3dhaXRpbmcgZm9yIGAlc2AuJywgaWQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAhdGhpcy5fY2FsbGJhY2tzW2lkXSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogYCVzYCBkb2VzIG5vdCBtYXAgdG8gYSByZWdpc3RlcmVkIGNhbGxiYWNrLicsIGlkKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnZva2VDYWxsYmFjayhpZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgcGF5bG9hZCB0byBhbGwgcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2gocGF5bG9hZCkge1xuICAgICEhdGhpcy5faXNEaXNwYXRjaGluZyA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdEaXNwYXRjaC5kaXNwYXRjaCguLi4pOiBDYW5ub3QgZGlzcGF0Y2ggaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zdGFydERpc3BhdGNoaW5nKHBheWxvYWQpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLl9jYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUGVuZGluZ1tpZF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnZva2VDYWxsYmFjayhpZCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3N0b3BEaXNwYXRjaGluZygpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhpcyBEaXNwYXRjaGVyIGN1cnJlbnRseSBkaXNwYXRjaGluZy5cbiAgICovXG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaXNEaXNwYXRjaGluZyA9IGZ1bmN0aW9uIGlzRGlzcGF0Y2hpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzcGF0Y2hpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGwgdGhlIGNhbGxiYWNrIHN0b3JlZCB3aXRoIHRoZSBnaXZlbiBpZC4gQWxzbyBkbyBzb21lIGludGVybmFsXG4gICAqIGJvb2trZWVwaW5nLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuX2ludm9rZUNhbGxiYWNrID0gZnVuY3Rpb24gX2ludm9rZUNhbGxiYWNrKGlkKSB7XG4gICAgdGhpcy5faXNQZW5kaW5nW2lkXSA9IHRydWU7XG4gICAgdGhpcy5fY2FsbGJhY2tzW2lkXSh0aGlzLl9wZW5kaW5nUGF5bG9hZCk7XG4gICAgdGhpcy5faXNIYW5kbGVkW2lkXSA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB1cCBib29ra2VlcGluZyBuZWVkZWQgd2hlbiBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLl9zdGFydERpc3BhdGNoaW5nID0gZnVuY3Rpb24gX3N0YXJ0RGlzcGF0Y2hpbmcocGF5bG9hZCkge1xuICAgIGZvciAodmFyIGlkIGluIHRoaXMuX2NhbGxiYWNrcykge1xuICAgICAgdGhpcy5faXNQZW5kaW5nW2lkXSA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNIYW5kbGVkW2lkXSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9wZW5kaW5nUGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgdGhpcy5faXNEaXNwYXRjaGluZyA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFyIGJvb2trZWVwaW5nIHVzZWQgZm9yIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuX3N0b3BEaXNwYXRjaGluZyA9IGZ1bmN0aW9uIF9zdG9wRGlzcGF0Y2hpbmcoKSB7XG4gICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdQYXlsb2FkO1xuICAgIHRoaXMuX2lzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gRGlzcGF0Y2hlcjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGF0Y2hlcjsiXX0=
},{"_process":32,"fbjs/lib/invariant":28}],15:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FluxContainer
 * 
 */
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FluxStoreGroup = require('./FluxStoreGroup');

var invariant = require('fbjs/lib/invariant');
var shallowEqual = require('fbjs/lib/shallowEqual');

var DEFAULT_OPTIONS = {
  pure: true,
  withProps: false
};

/**
 * A FluxContainer is used to subscribe a react component to multiple stores.
 * The stores that are used must be returned from a static `getStores()` method.
 *
 * The component receives information from the stores via state. The state
 * is generated using a static `calculateState()` method that each container
 * must implement. A simple container may look like:
 */
function create(Base, options) {
  enforceInterface(Base);

  // Construct the options using default, override with user values as necessary
  var realOptions = _extends({}, DEFAULT_OPTIONS, options || {});

  var FluxContainerClass = (function (_Base) {
    _inherits(FluxContainerClass, _Base);

    function FluxContainerClass(props) {
      _classCallCheck(this, FluxContainerClass);

      _Base.call(this, props);
      this.state = realOptions.withProps ? Base.calculateState(null, props) : Base.calculateState(null, undefined);
    }

    // Make sure we override shouldComponentUpdate only if the pure option is
    // specified. We can't override this above because we don't want to override
    // the default behavior on accident. Super works weird with react ES6 classes
    // right now

    FluxContainerClass.prototype.componentDidMount = function componentDidMount() {
      var _this = this;

      if (_Base.prototype.componentDidMount) {
        _Base.prototype.componentDidMount.call(this);
      }

      var stores = Base.getStores();

      // This tracks when any store has changed and we may need to update.
      var changed = false;
      var setChanged = function () {
        changed = true;
      };

      // This adds subscriptions to stores. When a store changes all we do is
      // set changed to true.
      this._fluxContainerSubscriptions = stores.map(function (store) {
        return store.addListener(setChanged);
      });

      // This callback is called after the dispatch of the relevant stores. If
      // any have reported a change we update the state, then reset changed.
      var callback = function () {
        if (changed) {
          _this.setState(function (prevState) {
            return realOptions.withProps ? Base.calculateState(prevState, _this.props) : Base.calculateState(prevState, undefined);
          });
        }
        changed = false;
      };
      this._fluxContainerStoreGroup = new FluxStoreGroup(stores, callback);
    };

    FluxContainerClass.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
      if (_Base.prototype.componentWillReceiveProps) {
        _Base.prototype.componentWillReceiveProps.call(this, nextProps, nextContext);
      }

      // Don't do anything else if the container is not configured to use props
      if (!realOptions.withProps) {
        return;
      }

      // If it's pure we can potentially optimize out the calculate state
      if (realOptions.pure && shallowEqual(this.props, nextProps)) {
        return;
      }

      // Finally update the state using the new props
      this.setState(function (prevState) {
        return Base.calculateState(prevState, nextProps);
      });
    };

    FluxContainerClass.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_Base.prototype.componentWillUnmount) {
        _Base.prototype.componentWillUnmount.call(this);
      }

      this._fluxContainerStoreGroup.release();
      for (var _iterator = this._fluxContainerSubscriptions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var subscription = _ref;

        subscription.remove();
      }
      this._fluxContainerSubscriptions = [];
    };

    return FluxContainerClass;
  })(Base);

  var container = realOptions.pure ? createPureContainer(FluxContainerClass) : FluxContainerClass;

  // Update the name of the container before returning
  var componentName = Base.displayName || Base.name;
  container.displayName = 'FluxContainer(' + componentName + ')';

  return container;
}

// TODO: typecheck this better
function createPureContainer(FluxContainerBase) {
  var PureFluxContainerClass = (function (_FluxContainerBase) {
    _inherits(PureFluxContainerClass, _FluxContainerBase);

    function PureFluxContainerClass() {
      _classCallCheck(this, PureFluxContainerClass);

      _FluxContainerBase.apply(this, arguments);
    }

    PureFluxContainerClass.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    };

    return PureFluxContainerClass;
  })(FluxContainerBase);

  return PureFluxContainerClass;
}

function enforceInterface(o) {
  !o.getStores ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxContainer must implement `static getStores()`') : invariant(false) : undefined;
  !o.calculateState ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxContainer must implement `static calculateState()`') : invariant(false) : undefined;
}

module.exports = { create: create };
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9GbHV4Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRmx1eENvbnRhaW5lclxuICogXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBGbHV4U3RvcmVHcm91cCA9IHJlcXVpcmUoJy4vRmx1eFN0b3JlR3JvdXAnKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHNoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJ2ZianMvbGliL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwdXJlOiB0cnVlLFxuICB3aXRoUHJvcHM6IGZhbHNlXG59O1xuXG4vKipcbiAqIEEgRmx1eENvbnRhaW5lciBpcyB1c2VkIHRvIHN1YnNjcmliZSBhIHJlYWN0IGNvbXBvbmVudCB0byBtdWx0aXBsZSBzdG9yZXMuXG4gKiBUaGUgc3RvcmVzIHRoYXQgYXJlIHVzZWQgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgc3RhdGljIGBnZXRTdG9yZXMoKWAgbWV0aG9kLlxuICpcbiAqIFRoZSBjb21wb25lbnQgcmVjZWl2ZXMgaW5mb3JtYXRpb24gZnJvbSB0aGUgc3RvcmVzIHZpYSBzdGF0ZS4gVGhlIHN0YXRlXG4gKiBpcyBnZW5lcmF0ZWQgdXNpbmcgYSBzdGF0aWMgYGNhbGN1bGF0ZVN0YXRlKClgIG1ldGhvZCB0aGF0IGVhY2ggY29udGFpbmVyXG4gKiBtdXN0IGltcGxlbWVudC4gQSBzaW1wbGUgY29udGFpbmVyIG1heSBsb29rIGxpa2U6XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShCYXNlLCBvcHRpb25zKSB7XG4gIGVuZm9yY2VJbnRlcmZhY2UoQmFzZSk7XG5cbiAgLy8gQ29uc3RydWN0IHRoZSBvcHRpb25zIHVzaW5nIGRlZmF1bHQsIG92ZXJyaWRlIHdpdGggdXNlciB2YWx1ZXMgYXMgbmVjZXNzYXJ5XG4gIHZhciByZWFsT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMgfHwge30pO1xuXG4gIHZhciBGbHV4Q29udGFpbmVyQ2xhc3MgPSAoZnVuY3Rpb24gKF9CYXNlKSB7XG4gICAgX2luaGVyaXRzKEZsdXhDb250YWluZXJDbGFzcywgX0Jhc2UpO1xuXG4gICAgZnVuY3Rpb24gRmx1eENvbnRhaW5lckNsYXNzKHByb3BzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmx1eENvbnRhaW5lckNsYXNzKTtcblxuICAgICAgX0Jhc2UuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0gcmVhbE9wdGlvbnMud2l0aFByb3BzID8gQmFzZS5jYWxjdWxhdGVTdGF0ZShudWxsLCBwcm9wcykgOiBCYXNlLmNhbGN1bGF0ZVN0YXRlKG51bGwsIHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIG92ZXJyaWRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSBvbmx5IGlmIHRoZSBwdXJlIG9wdGlvbiBpc1xuICAgIC8vIHNwZWNpZmllZC4gV2UgY2FuJ3Qgb3ZlcnJpZGUgdGhpcyBhYm92ZSBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gb3ZlcnJpZGVcbiAgICAvLyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvbiBhY2NpZGVudC4gU3VwZXIgd29ya3Mgd2VpcmQgd2l0aCByZWFjdCBFUzYgY2xhc3Nlc1xuICAgIC8vIHJpZ2h0IG5vd1xuXG4gICAgRmx1eENvbnRhaW5lckNsYXNzLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKF9CYXNlLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgICBfQmFzZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0b3JlcyA9IEJhc2UuZ2V0U3RvcmVzKCk7XG5cbiAgICAgIC8vIFRoaXMgdHJhY2tzIHdoZW4gYW55IHN0b3JlIGhhcyBjaGFuZ2VkIGFuZCB3ZSBtYXkgbmVlZCB0byB1cGRhdGUuXG4gICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIHNldENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfTtcblxuICAgICAgLy8gVGhpcyBhZGRzIHN1YnNjcmlwdGlvbnMgdG8gc3RvcmVzLiBXaGVuIGEgc3RvcmUgY2hhbmdlcyBhbGwgd2UgZG8gaXNcbiAgICAgIC8vIHNldCBjaGFuZ2VkIHRvIHRydWUuXG4gICAgICB0aGlzLl9mbHV4Q29udGFpbmVyU3Vic2NyaXB0aW9ucyA9IHN0b3Jlcy5tYXAoZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5hZGRMaXN0ZW5lcihzZXRDaGFuZ2VkKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGlzIGNhbGxiYWNrIGlzIGNhbGxlZCBhZnRlciB0aGUgZGlzcGF0Y2ggb2YgdGhlIHJlbGV2YW50IHN0b3Jlcy4gSWZcbiAgICAgIC8vIGFueSBoYXZlIHJlcG9ydGVkIGEgY2hhbmdlIHdlIHVwZGF0ZSB0aGUgc3RhdGUsIHRoZW4gcmVzZXQgY2hhbmdlZC5cbiAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhbE9wdGlvbnMud2l0aFByb3BzID8gQmFzZS5jYWxjdWxhdGVTdGF0ZShwcmV2U3RhdGUsIF90aGlzLnByb3BzKSA6IEJhc2UuY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlLCB1bmRlZmluZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9mbHV4Q29udGFpbmVyU3RvcmVHcm91cCA9IG5ldyBGbHV4U3RvcmVHcm91cChzdG9yZXMsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgRmx1eENvbnRhaW5lckNsYXNzLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAgICBpZiAoX0Jhc2UucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMpIHtcbiAgICAgICAgX0Jhc2UucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuY2FsbCh0aGlzLCBuZXh0UHJvcHMsIG5leHRDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgZWxzZSBpZiB0aGUgY29udGFpbmVyIGlzIG5vdCBjb25maWd1cmVkIHRvIHVzZSBwcm9wc1xuICAgICAgaWYgKCFyZWFsT3B0aW9ucy53aXRoUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIHB1cmUgd2UgY2FuIHBvdGVudGlhbGx5IG9wdGltaXplIG91dCB0aGUgY2FsY3VsYXRlIHN0YXRlXG4gICAgICBpZiAocmVhbE9wdGlvbnMucHVyZSAmJiBzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmFsbHkgdXBkYXRlIHRoZSBzdGF0ZSB1c2luZyB0aGUgbmV3IHByb3BzXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIEJhc2UuY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlLCBuZXh0UHJvcHMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEZsdXhDb250YWluZXJDbGFzcy5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmIChfQmFzZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICAgICAgX0Jhc2UucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2ZsdXhDb250YWluZXJTdG9yZUdyb3VwLnJlbGVhc2UoKTtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuX2ZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfcmVmO1xuXG4gICAgICAgIHN1YnNjcmlwdGlvbi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zID0gW107XG4gICAgfTtcblxuICAgIHJldHVybiBGbHV4Q29udGFpbmVyQ2xhc3M7XG4gIH0pKEJhc2UpO1xuXG4gIHZhciBjb250YWluZXIgPSByZWFsT3B0aW9ucy5wdXJlID8gY3JlYXRlUHVyZUNvbnRhaW5lcihGbHV4Q29udGFpbmVyQ2xhc3MpIDogRmx1eENvbnRhaW5lckNsYXNzO1xuXG4gIC8vIFVwZGF0ZSB0aGUgbmFtZSBvZiB0aGUgY29udGFpbmVyIGJlZm9yZSByZXR1cm5pbmdcbiAgdmFyIGNvbXBvbmVudE5hbWUgPSBCYXNlLmRpc3BsYXlOYW1lIHx8IEJhc2UubmFtZTtcbiAgY29udGFpbmVyLmRpc3BsYXlOYW1lID0gJ0ZsdXhDb250YWluZXIoJyArIGNvbXBvbmVudE5hbWUgKyAnKSc7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gVE9ETzogdHlwZWNoZWNrIHRoaXMgYmV0dGVyXG5mdW5jdGlvbiBjcmVhdGVQdXJlQ29udGFpbmVyKEZsdXhDb250YWluZXJCYXNlKSB7XG4gIHZhciBQdXJlRmx1eENvbnRhaW5lckNsYXNzID0gKGZ1bmN0aW9uIChfRmx1eENvbnRhaW5lckJhc2UpIHtcbiAgICBfaW5oZXJpdHMoUHVyZUZsdXhDb250YWluZXJDbGFzcywgX0ZsdXhDb250YWluZXJCYXNlKTtcblxuICAgIGZ1bmN0aW9uIFB1cmVGbHV4Q29udGFpbmVyQ2xhc3MoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVyZUZsdXhDb250YWluZXJDbGFzcyk7XG5cbiAgICAgIF9GbHV4Q29udGFpbmVyQmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIFB1cmVGbHV4Q29udGFpbmVyQ2xhc3MucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQdXJlRmx1eENvbnRhaW5lckNsYXNzO1xuICB9KShGbHV4Q29udGFpbmVyQmFzZSk7XG5cbiAgcmV0dXJuIFB1cmVGbHV4Q29udGFpbmVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIGVuZm9yY2VJbnRlcmZhY2Uobykge1xuICAhby5nZXRTdG9yZXMgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ29tcG9uZW50cyB0aGF0IHVzZSBGbHV4Q29udGFpbmVyIG11c3QgaW1wbGVtZW50IGBzdGF0aWMgZ2V0U3RvcmVzKClgJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAhby5jYWxjdWxhdGVTdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDb21wb25lbnRzIHRoYXQgdXNlIEZsdXhDb250YWluZXIgbXVzdCBpbXBsZW1lbnQgYHN0YXRpYyBjYWxjdWxhdGVTdGF0ZSgpYCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNyZWF0ZTogY3JlYXRlIH07Il19
},{"./FluxStoreGroup":20,"_process":32,"fbjs/lib/invariant":28,"fbjs/lib/shallowEqual":29}],16:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FluxMapStore
 * 
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FluxReduceStore = require('./FluxReduceStore');
var Immutable = require('immutable');

var invariant = require('fbjs/lib/invariant');

/**
 * This is a simple store. It allows caching key value pairs. An implementation
 * of a store using this might look like:
 *
 *   class FooStore extends FluxMapStore {
 *     reduce(state, action) {
 *       switch (action.type) {
 *         case 'foo':
 *           return state.set(action.id, action.foo);
 *         case 'bar':
 *           return state.delete(action.id);
 *         default:
 *           return state;
 *       }
 *     }
 *   }
 *
 */

var FluxMapStore = (function (_FluxReduceStore) {
  _inherits(FluxMapStore, _FluxReduceStore);

  function FluxMapStore() {
    _classCallCheck(this, FluxMapStore);

    _FluxReduceStore.apply(this, arguments);
  }

  FluxMapStore.prototype.getInitialState = function getInitialState() {
    return Immutable.Map();
  };

  /**
   * Access the value at the given key. throws an error if the key does not
   * exist in the cache.
   */

  FluxMapStore.prototype.at = function at(key) {
    !this.has(key) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected store to have key %s', key) : invariant(false) : undefined;
    return this.get(key);
  };

  /**
   * Check if the cache has a particular key
   */

  FluxMapStore.prototype.has = function has(key) {
    return this.getState().has(key);
  };

  /**
   * Get the value of a particular key. Returns undefined if the key does not
   * exist in the cache.
   */

  FluxMapStore.prototype.get = function get(key) {
    return this.getState().get(key);
  };

  /**
   * Gets an array of keys and puts the values in a map if they exist, it allows
   * providing a previous result to update instead of generating a new map.
   *
   * Providing a previous result allows the possibility of keeping the same
   * reference if the keys did not change.
   */

  FluxMapStore.prototype.getAll = function getAll(keys, prev) {
    var _this = this;

    var newKeys = Immutable.Set(keys);
    var start = prev || Immutable.Map();
    return start.withMutations(function (map) {
      // remove any old keys that are not in new keys or are no longer in
      // the cache
      for (var _iterator = start, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var entry = _ref;
        var oldKey = entry[0];

        if (!newKeys.has(oldKey) || !_this.has(oldKey)) {
          map['delete'](oldKey);
        }
      }

      // then add all of the new keys that exist in the cache
      for (var _iterator2 = newKeys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var key = _ref2;

        if (_this.has(key)) {
          map.set(key, _this.at(key));
        }
      }
    });
  };

  return FluxMapStore;
})(FluxReduceStore);

module.exports = FluxMapStore;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9GbHV4TWFwU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGbHV4TWFwU3RvcmVcbiAqIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBGbHV4UmVkdWNlU3RvcmUgPSByZXF1aXJlKCcuL0ZsdXhSZWR1Y2VTdG9yZScpO1xudmFyIEltbXV0YWJsZSA9IHJlcXVpcmUoJ2ltbXV0YWJsZScpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbi8qKlxuICogVGhpcyBpcyBhIHNpbXBsZSBzdG9yZS4gSXQgYWxsb3dzIGNhY2hpbmcga2V5IHZhbHVlIHBhaXJzLiBBbiBpbXBsZW1lbnRhdGlvblxuICogb2YgYSBzdG9yZSB1c2luZyB0aGlzIG1pZ2h0IGxvb2sgbGlrZTpcbiAqXG4gKiAgIGNsYXNzIEZvb1N0b3JlIGV4dGVuZHMgRmx1eE1hcFN0b3JlIHtcbiAqICAgICByZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuICogICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICogICAgICAgICBjYXNlICdmb28nOlxuICogICAgICAgICAgIHJldHVybiBzdGF0ZS5zZXQoYWN0aW9uLmlkLCBhY3Rpb24uZm9vKTtcbiAqICAgICAgICAgY2FzZSAnYmFyJzpcbiAqICAgICAgICAgICByZXR1cm4gc3RhdGUuZGVsZXRlKGFjdGlvbi5pZCk7XG4gKiAgICAgICAgIGRlZmF1bHQ6XG4gKiAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfVxuICpcbiAqL1xuXG52YXIgRmx1eE1hcFN0b3JlID0gKGZ1bmN0aW9uIChfRmx1eFJlZHVjZVN0b3JlKSB7XG4gIF9pbmhlcml0cyhGbHV4TWFwU3RvcmUsIF9GbHV4UmVkdWNlU3RvcmUpO1xuXG4gIGZ1bmN0aW9uIEZsdXhNYXBTdG9yZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmx1eE1hcFN0b3JlKTtcblxuICAgIF9GbHV4UmVkdWNlU3RvcmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEZsdXhNYXBTdG9yZS5wcm90b3R5cGUuZ2V0SW5pdGlhbFN0YXRlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiBJbW11dGFibGUuTWFwKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFjY2VzcyB0aGUgdmFsdWUgYXQgdGhlIGdpdmVuIGtleS4gdGhyb3dzIGFuIGVycm9yIGlmIHRoZSBrZXkgZG9lcyBub3RcbiAgICogZXhpc3QgaW4gdGhlIGNhY2hlLlxuICAgKi9cblxuICBGbHV4TWFwU3RvcmUucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gYXQoa2V5KSB7XG4gICAgIXRoaXMuaGFzKGtleSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRXhwZWN0ZWQgc3RvcmUgdG8gaGF2ZSBrZXkgJXMnLCBrZXkpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGNhY2hlIGhhcyBhIHBhcnRpY3VsYXIga2V5XG4gICAqL1xuXG4gIEZsdXhNYXBTdG9yZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzKGtleSkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXRlKCkuaGFzKGtleSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgYSBwYXJ0aWN1bGFyIGtleS4gUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlIGtleSBkb2VzIG5vdFxuICAgKiBleGlzdCBpbiB0aGUgY2FjaGUuXG4gICAqL1xuXG4gIEZsdXhNYXBTdG9yZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXRlKCkuZ2V0KGtleSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gYXJyYXkgb2Yga2V5cyBhbmQgcHV0cyB0aGUgdmFsdWVzIGluIGEgbWFwIGlmIHRoZXkgZXhpc3QsIGl0IGFsbG93c1xuICAgKiBwcm92aWRpbmcgYSBwcmV2aW91cyByZXN1bHQgdG8gdXBkYXRlIGluc3RlYWQgb2YgZ2VuZXJhdGluZyBhIG5ldyBtYXAuXG4gICAqXG4gICAqIFByb3ZpZGluZyBhIHByZXZpb3VzIHJlc3VsdCBhbGxvd3MgdGhlIHBvc3NpYmlsaXR5IG9mIGtlZXBpbmcgdGhlIHNhbWVcbiAgICogcmVmZXJlbmNlIGlmIHRoZSBrZXlzIGRpZCBub3QgY2hhbmdlLlxuICAgKi9cblxuICBGbHV4TWFwU3RvcmUucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uIGdldEFsbChrZXlzLCBwcmV2KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBuZXdLZXlzID0gSW1tdXRhYmxlLlNldChrZXlzKTtcbiAgICB2YXIgc3RhcnQgPSBwcmV2IHx8IEltbXV0YWJsZS5NYXAoKTtcbiAgICByZXR1cm4gc3RhcnQud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAobWFwKSB7XG4gICAgICAvLyByZW1vdmUgYW55IG9sZCBrZXlzIHRoYXQgYXJlIG5vdCBpbiBuZXcga2V5cyBvciBhcmUgbm8gbG9uZ2VyIGluXG4gICAgICAvLyB0aGUgY2FjaGVcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHN0YXJ0LCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlbnRyeSA9IF9yZWY7XG4gICAgICAgIHZhciBvbGRLZXkgPSBlbnRyeVswXTtcblxuICAgICAgICBpZiAoIW5ld0tleXMuaGFzKG9sZEtleSkgfHwgIV90aGlzLmhhcyhvbGRLZXkpKSB7XG4gICAgICAgICAgbWFwWydkZWxldGUnXShvbGRLZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZW4gYWRkIGFsbCBvZiB0aGUgbmV3IGtleXMgdGhhdCBleGlzdCBpbiB0aGUgY2FjaGVcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBuZXdLZXlzLCBfaXNBcnJheTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIpLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6IF9pdGVyYXRvcjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgIGlmIChfaXNBcnJheTIpIHtcbiAgICAgICAgICBpZiAoX2kyID49IF9pdGVyYXRvcjIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9pMiA9IF9pdGVyYXRvcjIubmV4dCgpO1xuICAgICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5ID0gX3JlZjI7XG5cbiAgICAgICAgaWYgKF90aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgbWFwLnNldChrZXksIF90aGlzLmF0KGtleSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEZsdXhNYXBTdG9yZTtcbn0pKEZsdXhSZWR1Y2VTdG9yZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1eE1hcFN0b3JlOyJdfQ==
},{"./FluxReduceStore":18,"_process":32,"fbjs/lib/invariant":28,"immutable":30}],17:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FluxMixinLegacy
 * 
 */

'use strict';

var FluxStoreGroup = require('./FluxStoreGroup');

var invariant = require('fbjs/lib/invariant');

/**
 * `FluxContainer` should be preferred over this mixin, but it requires using
 * react with classes. So this mixin is provided where it is not yet possible
 * to convert a container to be a class.
 *
 * This mixin should be used for React components that have state based purely
 * on stores. `this.props` will not be available inside of `calculateState()`.
 *
 * This mixin will only `setState` not replace it, so you should always return
 * every key in your state unless you know what you are doing. Consider this:
 *
 *   var Foo = React.createClass({
 *     mixins: [
 *       FluxMixinLegacy([FooStore])
 *     ],
 *
 *     statics: {
 *       calculateState(prevState) {
 *         if (!prevState) {
 *           return {
 *             foo: FooStore.getFoo(),
 *           };
 *         }
 *
 *         return {
 *           bar: FooStore.getBar(),
 *         };
 *       }
 *     },
 *   });
 *
 * On the second calculateState when prevState is not null, the state will be
 * updated to contain the previous foo AND the bar that was just returned. Only
 * returning bar will not delete foo.
 *
 */
function FluxMixinLegacy(stores) {
  return {
    getInitialState: function () {
      enforceInterface(this);
      return this.constructor.calculateState(null);
    },

    componentDidMount: function () {
      var _this = this;

      // This tracks when any store has changed and we may need to update.
      var changed = false;
      var setChanged = function () {
        changed = true;
      };

      // This adds subscriptions to stores. When a store changes all we do is
      // set changed to true.
      this._fluxMixinSubscriptions = stores.map(function (store) {
        return store.addListener(setChanged);
      });

      // This callback is called after the dispatch of the relevant stores. If
      // any have reported a change we update the state, then reset changed.
      var callback = function () {
        if (changed) {
          _this.setState(function (prevState) {
            return _this.constructor.calculateState(_this.state);
          });
        }
        changed = false;
      };
      this._fluxMixinStoreGroup = new FluxStoreGroup(stores, callback);
    },

    componentWillUnmount: function () {
      this._fluxMixinStoreGroup.release();
      for (var _iterator = this._fluxMixinSubscriptions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var subscription = _ref;

        subscription.remove();
      }
      this._fluxMixinSubscriptions = [];
    }
  };
}

function enforceInterface(o) {
  !o.constructor.calculateState ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxMixinLegacy must implement ' + '`calculateState()` on the statics object') : invariant(false) : undefined;
}

module.exports = FluxMixinLegacy;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9GbHV4TWl4aW5MZWdhY3kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGbHV4TWl4aW5MZWdhY3lcbiAqIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEZsdXhTdG9yZUdyb3VwID0gcmVxdWlyZSgnLi9GbHV4U3RvcmVHcm91cCcpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbi8qKlxuICogYEZsdXhDb250YWluZXJgIHNob3VsZCBiZSBwcmVmZXJyZWQgb3ZlciB0aGlzIG1peGluLCBidXQgaXQgcmVxdWlyZXMgdXNpbmdcbiAqIHJlYWN0IHdpdGggY2xhc3Nlcy4gU28gdGhpcyBtaXhpbiBpcyBwcm92aWRlZCB3aGVyZSBpdCBpcyBub3QgeWV0IHBvc3NpYmxlXG4gKiB0byBjb252ZXJ0IGEgY29udGFpbmVyIHRvIGJlIGEgY2xhc3MuXG4gKlxuICogVGhpcyBtaXhpbiBzaG91bGQgYmUgdXNlZCBmb3IgUmVhY3QgY29tcG9uZW50cyB0aGF0IGhhdmUgc3RhdGUgYmFzZWQgcHVyZWx5XG4gKiBvbiBzdG9yZXMuIGB0aGlzLnByb3BzYCB3aWxsIG5vdCBiZSBhdmFpbGFibGUgaW5zaWRlIG9mIGBjYWxjdWxhdGVTdGF0ZSgpYC5cbiAqXG4gKiBUaGlzIG1peGluIHdpbGwgb25seSBgc2V0U3RhdGVgIG5vdCByZXBsYWNlIGl0LCBzbyB5b3Ugc2hvdWxkIGFsd2F5cyByZXR1cm5cbiAqIGV2ZXJ5IGtleSBpbiB5b3VyIHN0YXRlIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuIENvbnNpZGVyIHRoaXM6XG4gKlxuICogICB2YXIgRm9vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIG1peGluczogW1xuICogICAgICAgRmx1eE1peGluTGVnYWN5KFtGb29TdG9yZV0pXG4gKiAgICAgXSxcbiAqXG4gKiAgICAgc3RhdGljczoge1xuICogICAgICAgY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlKSB7XG4gKiAgICAgICAgIGlmICghcHJldlN0YXRlKSB7XG4gKiAgICAgICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAgICAgIGZvbzogRm9vU3RvcmUuZ2V0Rm9vKCksXG4gKiAgICAgICAgICAgfTtcbiAqICAgICAgICAgfVxuICpcbiAqICAgICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAgICBiYXI6IEZvb1N0b3JlLmdldEJhcigpLFxuICogICAgICAgICB9O1xuICogICAgICAgfVxuICogICAgIH0sXG4gKiAgIH0pO1xuICpcbiAqIE9uIHRoZSBzZWNvbmQgY2FsY3VsYXRlU3RhdGUgd2hlbiBwcmV2U3RhdGUgaXMgbm90IG51bGwsIHRoZSBzdGF0ZSB3aWxsIGJlXG4gKiB1cGRhdGVkIHRvIGNvbnRhaW4gdGhlIHByZXZpb3VzIGZvbyBBTkQgdGhlIGJhciB0aGF0IHdhcyBqdXN0IHJldHVybmVkLiBPbmx5XG4gKiByZXR1cm5pbmcgYmFyIHdpbGwgbm90IGRlbGV0ZSBmb28uXG4gKlxuICovXG5mdW5jdGlvbiBGbHV4TWl4aW5MZWdhY3koc3RvcmVzKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBlbmZvcmNlSW50ZXJmYWNlKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY2FsY3VsYXRlU3RhdGUobnVsbCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAvLyBUaGlzIHRyYWNrcyB3aGVuIGFueSBzdG9yZSBoYXMgY2hhbmdlZCBhbmQgd2UgbWF5IG5lZWQgdG8gdXBkYXRlLlxuICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHZhciBzZXRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFRoaXMgYWRkcyBzdWJzY3JpcHRpb25zIHRvIHN0b3Jlcy4gV2hlbiBhIHN0b3JlIGNoYW5nZXMgYWxsIHdlIGRvIGlzXG4gICAgICAvLyBzZXQgY2hhbmdlZCB0byB0cnVlLlxuICAgICAgdGhpcy5fZmx1eE1peGluU3Vic2NyaXB0aW9ucyA9IHN0b3Jlcy5tYXAoZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5hZGRMaXN0ZW5lcihzZXRDaGFuZ2VkKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGlzIGNhbGxiYWNrIGlzIGNhbGxlZCBhZnRlciB0aGUgZGlzcGF0Y2ggb2YgdGhlIHJlbGV2YW50IHN0b3Jlcy4gSWZcbiAgICAgIC8vIGFueSBoYXZlIHJlcG9ydGVkIGEgY2hhbmdlIHdlIHVwZGF0ZSB0aGUgc3RhdGUsIHRoZW4gcmVzZXQgY2hhbmdlZC5cbiAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29uc3RydWN0b3IuY2FsY3VsYXRlU3RhdGUoX3RoaXMuc3RhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9mbHV4TWl4aW5TdG9yZUdyb3VwID0gbmV3IEZsdXhTdG9yZUdyb3VwKHN0b3JlcywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fZmx1eE1peGluU3RvcmVHcm91cC5yZWxlYXNlKCk7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLl9mbHV4TWl4aW5TdWJzY3JpcHRpb25zLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfcmVmO1xuXG4gICAgICAgIHN1YnNjcmlwdGlvbi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZsdXhNaXhpblN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuZm9yY2VJbnRlcmZhY2Uobykge1xuICAhby5jb25zdHJ1Y3Rvci5jYWxjdWxhdGVTdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDb21wb25lbnRzIHRoYXQgdXNlIEZsdXhNaXhpbkxlZ2FjeSBtdXN0IGltcGxlbWVudCAnICsgJ2BjYWxjdWxhdGVTdGF0ZSgpYCBvbiB0aGUgc3RhdGljcyBvYmplY3QnKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1eE1peGluTGVnYWN5OyJdfQ==
},{"./FluxStoreGroup":20,"_process":32,"fbjs/lib/invariant":28}],18:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FluxReduceStore
 * 
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FluxStore = require('./FluxStore');

var abstractMethod = require('./abstractMethod');
var invariant = require('fbjs/lib/invariant');

var FluxReduceStore = (function (_FluxStore) {
  _inherits(FluxReduceStore, _FluxStore);

  function FluxReduceStore(dispatcher) {
    _classCallCheck(this, FluxReduceStore);

    _FluxStore.call(this, dispatcher);
    this._state = this.getInitialState();
  }

  /**
   * Getter that exposes the entire state of this store. If your state is not
   * immutable you should override this and not expose _state directly.
   */

  FluxReduceStore.prototype.getState = function getState() {
    return this._state;
  };

  /**
   * Constructs the initial state for this store. This is called once during
   * construction of the store.
   */

  FluxReduceStore.prototype.getInitialState = function getInitialState() {
    return abstractMethod('FluxReduceStore', 'getInitialState');
  };

  /**
   * Used to reduce a stream of actions coming from the dispatcher into a
   * single state object
   */

  FluxReduceStore.prototype.reduce = function reduce(state, action) {
    return abstractMethod('FluxReduceStore', 'reduce');
  };

  /**
   * Checks if two versions of state are the same. You do not need to override
   * this if your state is immutable.
   */

  FluxReduceStore.prototype.areEqual = function areEqual(one, two) {
    return one === two;
  };

  /**
   * Use reduce and track _state instead of using __onDispatch
   */

  FluxReduceStore.prototype.__invokeOnDispatch = function __invokeOnDispatch(action) {
    this.__changed = false;

    // reduce the stream of incoming actions to state, update when necessary
    var startingState = this._state;
    var endingState = this.reduce(startingState, action);

    // This means your ending state should never be undefined
    !(endingState !== undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s returned undefined from reduce(...), did you forget to return ' + 'state in the default case? (use null if this was intentional)', this.constructor.name) : invariant(false) : undefined;

    if (!this.areEqual(startingState, endingState)) {
      this._state = endingState;

      // `__emitChange()` sets `this.__changed` to true and then the actual
      // change will be fired from the emitter at the end of the dispatch, this
      // is required in order to support methods like `hasChanged()`
      this.__emitChange();
    }

    if (this.__changed) {
      this.__emitter.emit(this.__changeEvent);
    }
  };

  return FluxReduceStore;
})(FluxStore);

module.exports = FluxReduceStore;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9GbHV4UmVkdWNlU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRmx1eFJlZHVjZVN0b3JlXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRmx1eFN0b3JlID0gcmVxdWlyZSgnLi9GbHV4U3RvcmUnKTtcblxudmFyIGFic3RyYWN0TWV0aG9kID0gcmVxdWlyZSgnLi9hYnN0cmFjdE1ldGhvZCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG52YXIgRmx1eFJlZHVjZVN0b3JlID0gKGZ1bmN0aW9uIChfRmx1eFN0b3JlKSB7XG4gIF9pbmhlcml0cyhGbHV4UmVkdWNlU3RvcmUsIF9GbHV4U3RvcmUpO1xuXG4gIGZ1bmN0aW9uIEZsdXhSZWR1Y2VTdG9yZShkaXNwYXRjaGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZsdXhSZWR1Y2VTdG9yZSk7XG5cbiAgICBfRmx1eFN0b3JlLmNhbGwodGhpcywgZGlzcGF0Y2hlcik7XG4gICAgdGhpcy5fc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciB0aGF0IGV4cG9zZXMgdGhlIGVudGlyZSBzdGF0ZSBvZiB0aGlzIHN0b3JlLiBJZiB5b3VyIHN0YXRlIGlzIG5vdFxuICAgKiBpbW11dGFibGUgeW91IHNob3VsZCBvdmVycmlkZSB0aGlzIGFuZCBub3QgZXhwb3NlIF9zdGF0ZSBkaXJlY3RseS5cbiAgICovXG5cbiAgRmx1eFJlZHVjZVN0b3JlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RydWN0cyB0aGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhpcyBzdG9yZS4gVGhpcyBpcyBjYWxsZWQgb25jZSBkdXJpbmdcbiAgICogY29uc3RydWN0aW9uIG9mIHRoZSBzdG9yZS5cbiAgICovXG5cbiAgRmx1eFJlZHVjZVN0b3JlLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0TWV0aG9kKCdGbHV4UmVkdWNlU3RvcmUnLCAnZ2V0SW5pdGlhbFN0YXRlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gcmVkdWNlIGEgc3RyZWFtIG9mIGFjdGlvbnMgY29taW5nIGZyb20gdGhlIGRpc3BhdGNoZXIgaW50byBhXG4gICAqIHNpbmdsZSBzdGF0ZSBvYmplY3RcbiAgICovXG5cbiAgRmx1eFJlZHVjZVN0b3JlLnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiByZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiBhYnN0cmFjdE1ldGhvZCgnRmx1eFJlZHVjZVN0b3JlJywgJ3JlZHVjZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHdvIHZlcnNpb25zIG9mIHN0YXRlIGFyZSB0aGUgc2FtZS4gWW91IGRvIG5vdCBuZWVkIHRvIG92ZXJyaWRlXG4gICAqIHRoaXMgaWYgeW91ciBzdGF0ZSBpcyBpbW11dGFibGUuXG4gICAqL1xuXG4gIEZsdXhSZWR1Y2VTdG9yZS5wcm90b3R5cGUuYXJlRXF1YWwgPSBmdW5jdGlvbiBhcmVFcXVhbChvbmUsIHR3bykge1xuICAgIHJldHVybiBvbmUgPT09IHR3bztcbiAgfTtcblxuICAvKipcbiAgICogVXNlIHJlZHVjZSBhbmQgdHJhY2sgX3N0YXRlIGluc3RlYWQgb2YgdXNpbmcgX19vbkRpc3BhdGNoXG4gICAqL1xuXG4gIEZsdXhSZWR1Y2VTdG9yZS5wcm90b3R5cGUuX19pbnZva2VPbkRpc3BhdGNoID0gZnVuY3Rpb24gX19pbnZva2VPbkRpc3BhdGNoKGFjdGlvbikge1xuICAgIHRoaXMuX19jaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyByZWR1Y2UgdGhlIHN0cmVhbSBvZiBpbmNvbWluZyBhY3Rpb25zIHRvIHN0YXRlLCB1cGRhdGUgd2hlbiBuZWNlc3NhcnlcbiAgICB2YXIgc3RhcnRpbmdTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgIHZhciBlbmRpbmdTdGF0ZSA9IHRoaXMucmVkdWNlKHN0YXJ0aW5nU3RhdGUsIGFjdGlvbik7XG5cbiAgICAvLyBUaGlzIG1lYW5zIHlvdXIgZW5kaW5nIHN0YXRlIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWRcbiAgICAhKGVuZGluZ1N0YXRlICE9PSB1bmRlZmluZWQpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJyVzIHJldHVybmVkIHVuZGVmaW5lZCBmcm9tIHJlZHVjZSguLi4pLCBkaWQgeW91IGZvcmdldCB0byByZXR1cm4gJyArICdzdGF0ZSBpbiB0aGUgZGVmYXVsdCBjYXNlPyAodXNlIG51bGwgaWYgdGhpcyB3YXMgaW50ZW50aW9uYWwpJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXRoaXMuYXJlRXF1YWwoc3RhcnRpbmdTdGF0ZSwgZW5kaW5nU3RhdGUpKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IGVuZGluZ1N0YXRlO1xuXG4gICAgICAvLyBgX19lbWl0Q2hhbmdlKClgIHNldHMgYHRoaXMuX19jaGFuZ2VkYCB0byB0cnVlIGFuZCB0aGVuIHRoZSBhY3R1YWxcbiAgICAgIC8vIGNoYW5nZSB3aWxsIGJlIGZpcmVkIGZyb20gdGhlIGVtaXR0ZXIgYXQgdGhlIGVuZCBvZiB0aGUgZGlzcGF0Y2gsIHRoaXNcbiAgICAgIC8vIGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHN1cHBvcnQgbWV0aG9kcyBsaWtlIGBoYXNDaGFuZ2VkKClgXG4gICAgICB0aGlzLl9fZW1pdENoYW5nZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fY2hhbmdlZCkge1xuICAgICAgdGhpcy5fX2VtaXR0ZXIuZW1pdCh0aGlzLl9fY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRmx1eFJlZHVjZVN0b3JlO1xufSkoRmx1eFN0b3JlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbHV4UmVkdWNlU3RvcmU7Il19
},{"./FluxStore":19,"./abstractMethod":21,"_process":32,"fbjs/lib/invariant":28}],19:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FluxStore
 * 
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _require = require('fbemitter');

var EventEmitter = _require.EventEmitter;

var invariant = require('fbjs/lib/invariant');

/**
 * This class should be extended by the stores in your application, like so:
 *
 * var FluxStore = require('FluxStore');
 * var MyDispatcher = require('MyDispatcher');
 *
 * var _foo;
 *
 * class MyStore extends FluxStore {
 *
 *   getFoo() {
 *     return _foo;
 *   }
 *
 *   __onDispatch = function(action) {
 *     switch(action.type) {
 *
 *       case 'an-action':
 *         changeState(action.someData);
 *         this.__emitChange();
 *         break;
 *
 *       case 'another-action':
 *         changeStateAnotherWay(action.otherData);
 *         this.__emitChange();
 *         break;
 *
 *       default:
 *         // no op
 *     }
 *   }
 *
 * }
 *
 * module.exports = new MyStore(MyDispatcher);
 */

var FluxStore = (function () {

  /**
   * @public
   * @param {Dispatcher} dispatcher
   */

  function FluxStore(dispatcher) {
    var _this = this;

    _classCallCheck(this, FluxStore);

    this.__className = this.constructor.name;

    this.__changed = false;
    this.__changeEvent = 'change';
    this.__dispatcher = dispatcher;
    this.__emitter = new EventEmitter();
    this._dispatchToken = dispatcher.register(function (payload) {
      _this.__invokeOnDispatch(payload);
    });
  }

  /**
   * @public
   * @param {function} callback
   * @return {object} EmitterSubscription that can be used with
   *   SubscriptionsHandler or directly used to release the subscription.
   */

  FluxStore.prototype.addListener = function addListener(callback) {
    return this.__emitter.addListener(this.__changeEvent, callback);
  };

  /**
   * @public
   * @return {Dispatcher} The dispatcher that this store is registered with.
   */

  FluxStore.prototype.getDispatcher = function getDispatcher() {
    return this.__dispatcher;
  };

  /**
   * @public
   * @return {string} A string the dispatcher uses to identify each store's
   *   registered callback. This is used with the dispatcher's waitFor method
   *   to declaratively depend on other stores updating themselves first.
   */

  FluxStore.prototype.getDispatchToken = function getDispatchToken() {
    return this._dispatchToken;
  };

  /**
   * @public
   * @return {boolean} Whether the store has changed during the most recent
   *   dispatch.
   */

  FluxStore.prototype.hasChanged = function hasChanged() {
    !this.__dispatcher.isDispatching() ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.hasChanged(): Must be invoked while dispatching.', this.__className) : invariant(false) : undefined;
    return this.__changed;
  };

  /**
   * @protected
   * Emit an event notifying listeners that the state of the store has changed.
   */

  FluxStore.prototype.__emitChange = function __emitChange() {
    !this.__dispatcher.isDispatching() ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.__emitChange(): Must be invoked while dispatching.', this.__className) : invariant(false) : undefined;
    this.__changed = true;
  };

  /**
   * This method encapsulates all logic for invoking __onDispatch. It should
   * be used for things like catching changes and emitting them after the
   * subclass has handled a payload.
   *
   * @protected
   * @param {object} payload The data dispatched by the dispatcher, describing
   *   something that has happened in the real world: the user clicked, the
   *   server responded, time passed, etc.
   */

  FluxStore.prototype.__invokeOnDispatch = function __invokeOnDispatch(payload) {
    this.__changed = false;
    this.__onDispatch(payload);
    if (this.__changed) {
      this.__emitter.emit(this.__changeEvent);
    }
  };

  /**
   * The callback that will be registered with the dispatcher during
   * instantiation. Subclasses must override this method. This callback is the
   * only way the store receives new data.
   *
   * @protected
   * @override
   * @param {object} payload The data dispatched by the dispatcher, describing
   *   something that has happened in the real world: the user clicked, the
   *   server responded, time passed, etc.
   */

  FluxStore.prototype.__onDispatch = function __onDispatch(payload) {
    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s has not overridden FluxStore.__onDispatch(), which is required', this.__className) : invariant(false) : undefined;
  };

  return FluxStore;
})();

module.exports = FluxStore;

// private

// protected, available to subclasses
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9GbHV4U3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGbHV4U3RvcmVcbiAqIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ2ZiZW1pdHRlcicpO1xuXG52YXIgRXZlbnRFbWl0dGVyID0gX3JlcXVpcmUuRXZlbnRFbWl0dGVyO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBzaG91bGQgYmUgZXh0ZW5kZWQgYnkgdGhlIHN0b3JlcyBpbiB5b3VyIGFwcGxpY2F0aW9uLCBsaWtlIHNvOlxuICpcbiAqIHZhciBGbHV4U3RvcmUgPSByZXF1aXJlKCdGbHV4U3RvcmUnKTtcbiAqIHZhciBNeURpc3BhdGNoZXIgPSByZXF1aXJlKCdNeURpc3BhdGNoZXInKTtcbiAqXG4gKiB2YXIgX2ZvbztcbiAqXG4gKiBjbGFzcyBNeVN0b3JlIGV4dGVuZHMgRmx1eFN0b3JlIHtcbiAqXG4gKiAgIGdldEZvbygpIHtcbiAqICAgICByZXR1cm4gX2ZvbztcbiAqICAgfVxuICpcbiAqICAgX19vbkRpc3BhdGNoID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gKiAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gKlxuICogICAgICAgY2FzZSAnYW4tYWN0aW9uJzpcbiAqICAgICAgICAgY2hhbmdlU3RhdGUoYWN0aW9uLnNvbWVEYXRhKTtcbiAqICAgICAgICAgdGhpcy5fX2VtaXRDaGFuZ2UoKTtcbiAqICAgICAgICAgYnJlYWs7XG4gKlxuICogICAgICAgY2FzZSAnYW5vdGhlci1hY3Rpb24nOlxuICogICAgICAgICBjaGFuZ2VTdGF0ZUFub3RoZXJXYXkoYWN0aW9uLm90aGVyRGF0YSk7XG4gKiAgICAgICAgIHRoaXMuX19lbWl0Q2hhbmdlKCk7XG4gKiAgICAgICAgIGJyZWFrO1xuICpcbiAqICAgICAgIGRlZmF1bHQ6XG4gKiAgICAgICAgIC8vIG5vIG9wXG4gKiAgICAgfVxuICogICB9XG4gKlxuICogfVxuICpcbiAqIG1vZHVsZS5leHBvcnRzID0gbmV3IE15U3RvcmUoTXlEaXNwYXRjaGVyKTtcbiAqL1xuXG52YXIgRmx1eFN0b3JlID0gKGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge0Rpc3BhdGNoZXJ9IGRpc3BhdGNoZXJcbiAgICovXG5cbiAgZnVuY3Rpb24gRmx1eFN0b3JlKGRpc3BhdGNoZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZsdXhTdG9yZSk7XG5cbiAgICB0aGlzLl9fY2xhc3NOYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgdGhpcy5fX2NoYW5nZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2hhbmdlRXZlbnQgPSAnY2hhbmdlJztcbiAgICB0aGlzLl9fZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgdGhpcy5fX2VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5fZGlzcGF0Y2hUb2tlbiA9IGRpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgIF90aGlzLl9faW52b2tlT25EaXNwYXRjaChwYXlsb2FkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge29iamVjdH0gRW1pdHRlclN1YnNjcmlwdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHdpdGhcbiAgICogICBTdWJzY3JpcHRpb25zSGFuZGxlciBvciBkaXJlY3RseSB1c2VkIHRvIHJlbGVhc2UgdGhlIHN1YnNjcmlwdGlvbi5cbiAgICovXG5cbiAgRmx1eFN0b3JlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbWl0dGVyLmFkZExpc3RlbmVyKHRoaXMuX19jaGFuZ2VFdmVudCwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm4ge0Rpc3BhdGNoZXJ9IFRoZSBkaXNwYXRjaGVyIHRoYXQgdGhpcyBzdG9yZSBpcyByZWdpc3RlcmVkIHdpdGguXG4gICAqL1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuZ2V0RGlzcGF0Y2hlciA9IGZ1bmN0aW9uIGdldERpc3BhdGNoZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kaXNwYXRjaGVyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgdGhlIGRpc3BhdGNoZXIgdXNlcyB0byBpZGVudGlmeSBlYWNoIHN0b3JlJ3NcbiAgICogICByZWdpc3RlcmVkIGNhbGxiYWNrLiBUaGlzIGlzIHVzZWQgd2l0aCB0aGUgZGlzcGF0Y2hlcidzIHdhaXRGb3IgbWV0aG9kXG4gICAqICAgdG8gZGVjbGFyYXRpdmVseSBkZXBlbmQgb24gb3RoZXIgc3RvcmVzIHVwZGF0aW5nIHRoZW1zZWx2ZXMgZmlyc3QuXG4gICAqL1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuZ2V0RGlzcGF0Y2hUb2tlbiA9IGZ1bmN0aW9uIGdldERpc3BhdGNoVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BhdGNoVG9rZW47XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgc3RvcmUgaGFzIGNoYW5nZWQgZHVyaW5nIHRoZSBtb3N0IHJlY2VudFxuICAgKiAgIGRpc3BhdGNoLlxuICAgKi9cblxuICBGbHV4U3RvcmUucHJvdG90eXBlLmhhc0NoYW5nZWQgPSBmdW5jdGlvbiBoYXNDaGFuZ2VkKCkge1xuICAgICF0aGlzLl9fZGlzcGF0Y2hlci5pc0Rpc3BhdGNoaW5nKCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnJXMuaGFzQ2hhbmdlZCgpOiBNdXN0IGJlIGludm9rZWQgd2hpbGUgZGlzcGF0Y2hpbmcuJywgdGhpcy5fX2NsYXNzTmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLl9fY2hhbmdlZDtcbiAgfTtcblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBFbWl0IGFuIGV2ZW50IG5vdGlmeWluZyBsaXN0ZW5lcnMgdGhhdCB0aGUgc3RhdGUgb2YgdGhlIHN0b3JlIGhhcyBjaGFuZ2VkLlxuICAgKi9cblxuICBGbHV4U3RvcmUucHJvdG90eXBlLl9fZW1pdENoYW5nZSA9IGZ1bmN0aW9uIF9fZW1pdENoYW5nZSgpIHtcbiAgICAhdGhpcy5fX2Rpc3BhdGNoZXIuaXNEaXNwYXRjaGluZygpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJyVzLl9fZW1pdENoYW5nZSgpOiBNdXN0IGJlIGludm9rZWQgd2hpbGUgZGlzcGF0Y2hpbmcuJywgdGhpcy5fX2NsYXNzTmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuX19jaGFuZ2VkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgZW5jYXBzdWxhdGVzIGFsbCBsb2dpYyBmb3IgaW52b2tpbmcgX19vbkRpc3BhdGNoLiBJdCBzaG91bGRcbiAgICogYmUgdXNlZCBmb3IgdGhpbmdzIGxpa2UgY2F0Y2hpbmcgY2hhbmdlcyBhbmQgZW1pdHRpbmcgdGhlbSBhZnRlciB0aGVcbiAgICogc3ViY2xhc3MgaGFzIGhhbmRsZWQgYSBwYXlsb2FkLlxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXlsb2FkIFRoZSBkYXRhIGRpc3BhdGNoZWQgYnkgdGhlIGRpc3BhdGNoZXIsIGRlc2NyaWJpbmdcbiAgICogICBzb21ldGhpbmcgdGhhdCBoYXMgaGFwcGVuZWQgaW4gdGhlIHJlYWwgd29ybGQ6IHRoZSB1c2VyIGNsaWNrZWQsIHRoZVxuICAgKiAgIHNlcnZlciByZXNwb25kZWQsIHRpbWUgcGFzc2VkLCBldGMuXG4gICAqL1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuX19pbnZva2VPbkRpc3BhdGNoID0gZnVuY3Rpb24gX19pbnZva2VPbkRpc3BhdGNoKHBheWxvYWQpIHtcbiAgICB0aGlzLl9fY2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19vbkRpc3BhdGNoKHBheWxvYWQpO1xuICAgIGlmICh0aGlzLl9fY2hhbmdlZCkge1xuICAgICAgdGhpcy5fX2VtaXR0ZXIuZW1pdCh0aGlzLl9fY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSByZWdpc3RlcmVkIHdpdGggdGhlIGRpc3BhdGNoZXIgZHVyaW5nXG4gICAqIGluc3RhbnRpYXRpb24uIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZC4gVGhpcyBjYWxsYmFjayBpcyB0aGVcbiAgICogb25seSB3YXkgdGhlIHN0b3JlIHJlY2VpdmVzIG5ldyBkYXRhLlxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBvdmVycmlkZVxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF5bG9hZCBUaGUgZGF0YSBkaXNwYXRjaGVkIGJ5IHRoZSBkaXNwYXRjaGVyLCBkZXNjcmliaW5nXG4gICAqICAgc29tZXRoaW5nIHRoYXQgaGFzIGhhcHBlbmVkIGluIHRoZSByZWFsIHdvcmxkOiB0aGUgdXNlciBjbGlja2VkLCB0aGVcbiAgICogICBzZXJ2ZXIgcmVzcG9uZGVkLCB0aW1lIHBhc3NlZCwgZXRjLlxuICAgKi9cblxuICBGbHV4U3RvcmUucHJvdG90eXBlLl9fb25EaXNwYXRjaCA9IGZ1bmN0aW9uIF9fb25EaXNwYXRjaChwYXlsb2FkKSB7XG4gICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJyVzIGhhcyBub3Qgb3ZlcnJpZGRlbiBGbHV4U3RvcmUuX19vbkRpc3BhdGNoKCksIHdoaWNoIGlzIHJlcXVpcmVkJywgdGhpcy5fX2NsYXNzTmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJldHVybiBGbHV4U3RvcmU7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsdXhTdG9yZTtcblxuLy8gcHJpdmF0ZVxuXG4vLyBwcm90ZWN0ZWQsIGF2YWlsYWJsZSB0byBzdWJjbGFzc2VzIl19
},{"_process":32,"fbemitter":22,"fbjs/lib/invariant":28}],20:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FluxStoreGroup
 * 
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = require('fbjs/lib/invariant');

/**
 * FluxStoreGroup allows you to execute a callback on every dispatch after
 * waiting for each of the given stores.
 */

var FluxStoreGroup = (function () {
  function FluxStoreGroup(stores, callback) {
    var _this = this;

    _classCallCheck(this, FluxStoreGroup);

    this._dispatcher = _getUniformDispatcher(stores);

    // precompute store tokens
    var storeTokens = stores.map(function (store) {
      return store.getDispatchToken();
    });

    // register with the dispatcher
    this._dispatchToken = this._dispatcher.register(function (payload) {
      _this._dispatcher.waitFor(storeTokens);
      callback();
    });
  }

  FluxStoreGroup.prototype.release = function release() {
    this._dispatcher.unregister(this._dispatchToken);
  };

  return FluxStoreGroup;
})();

function _getUniformDispatcher(stores) {
  !(stores && stores.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must provide at least one store to FluxStoreGroup') : invariant(false) : undefined;
  var dispatcher = stores[0].getDispatcher();
  if (process.env.NODE_ENV !== 'production') {
    for (var _iterator = stores, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var store = _ref;

      !(store.getDispatcher() === dispatcher) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'All stores in a FluxStoreGroup must use the same dispatcher') : invariant(false) : undefined;
    }
  }
  return dispatcher;
}

module.exports = FluxStoreGroup;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9GbHV4U3RvcmVHcm91cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZsdXhTdG9yZUdyb3VwXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbi8qKlxuICogRmx1eFN0b3JlR3JvdXAgYWxsb3dzIHlvdSB0byBleGVjdXRlIGEgY2FsbGJhY2sgb24gZXZlcnkgZGlzcGF0Y2ggYWZ0ZXJcbiAqIHdhaXRpbmcgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHN0b3Jlcy5cbiAqL1xuXG52YXIgRmx1eFN0b3JlR3JvdXAgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGbHV4U3RvcmVHcm91cChzdG9yZXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbHV4U3RvcmVHcm91cCk7XG5cbiAgICB0aGlzLl9kaXNwYXRjaGVyID0gX2dldFVuaWZvcm1EaXNwYXRjaGVyKHN0b3Jlcyk7XG5cbiAgICAvLyBwcmVjb21wdXRlIHN0b3JlIHRva2Vuc1xuICAgIHZhciBzdG9yZVRva2VucyA9IHN0b3Jlcy5tYXAoZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICByZXR1cm4gc3RvcmUuZ2V0RGlzcGF0Y2hUb2tlbigpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVnaXN0ZXIgd2l0aCB0aGUgZGlzcGF0Y2hlclxuICAgIHRoaXMuX2Rpc3BhdGNoVG9rZW4gPSB0aGlzLl9kaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICBfdGhpcy5fZGlzcGF0Y2hlci53YWl0Rm9yKHN0b3JlVG9rZW5zKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBGbHV4U3RvcmVHcm91cC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIHJlbGVhc2UoKSB7XG4gICAgdGhpcy5fZGlzcGF0Y2hlci51bnJlZ2lzdGVyKHRoaXMuX2Rpc3BhdGNoVG9rZW4pO1xuICB9O1xuXG4gIHJldHVybiBGbHV4U3RvcmVHcm91cDtcbn0pKCk7XG5cbmZ1bmN0aW9uIF9nZXRVbmlmb3JtRGlzcGF0Y2hlcihzdG9yZXMpIHtcbiAgIShzdG9yZXMgJiYgc3RvcmVzLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnTXVzdCBwcm92aWRlIGF0IGxlYXN0IG9uZSBzdG9yZSB0byBGbHV4U3RvcmVHcm91cCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgdmFyIGRpc3BhdGNoZXIgPSBzdG9yZXNbMF0uZ2V0RGlzcGF0Y2hlcigpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHN0b3JlcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0b3JlID0gX3JlZjtcblxuICAgICAgIShzdG9yZS5nZXREaXNwYXRjaGVyKCkgPT09IGRpc3BhdGNoZXIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0FsbCBzdG9yZXMgaW4gYSBGbHV4U3RvcmVHcm91cCBtdXN0IHVzZSB0aGUgc2FtZSBkaXNwYXRjaGVyJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbHV4U3RvcmVHcm91cDsiXX0=
},{"_process":32,"fbjs/lib/invariant":28}],21:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule abstractMethod
 * 
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

function abstractMethod(className, methodName) {
  !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Subclasses of %s must override %s() with their own implementation.', className, methodName) : invariant(false) : undefined;
}

module.exports = abstractMethod;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9hYnN0cmFjdE1ldGhvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGFic3RyYWN0TWV0aG9kXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuZnVuY3Rpb24gYWJzdHJhY3RNZXRob2QoY2xhc3NOYW1lLCBtZXRob2ROYW1lKSB7XG4gICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdTdWJjbGFzc2VzIG9mICVzIG11c3Qgb3ZlcnJpZGUgJXMoKSB3aXRoIHRoZWlyIG93biBpbXBsZW1lbnRhdGlvbi4nLCBjbGFzc05hbWUsIG1ldGhvZE5hbWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhYnN0cmFjdE1ldGhvZDsiXX0=
},{"_process":32,"fbjs/lib/invariant":28}],22:[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var fbemitter = {
  EventEmitter: require('./lib/BaseEventEmitter')
};

module.exports = fbemitter;

},{"./lib/BaseEventEmitter":23}],23:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BaseEventEmitter
 * @typechecks
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EmitterSubscription = require('./EmitterSubscription');
var EventSubscriptionVendor = require('./EventSubscriptionVendor');

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');

/**
 * @class BaseEventEmitter
 * @description
 * An EventEmitter is responsible for managing a set of listeners and publishing
 * events to them when it is told that such events happened. In addition to the
 * data for the given event it also sends a event control object which allows
 * the listeners/handlers to prevent the default behavior of the given event.
 *
 * The emitter is designed to be generic enough to support all the different
 * contexts in which one might want to emit events. It is a simple multicast
 * mechanism on top of which extra functionality can be composed. For example, a
 * more advanced emitter may use an EventHolder and EventFactory.
 */

var BaseEventEmitter = (function () {
  /**
   * @constructor
   */

  function BaseEventEmitter() {
    _classCallCheck(this, BaseEventEmitter);

    this._subscriber = new EventSubscriptionVendor();
    this._currentSubscription = null;
  }

  /**
   * Adds a listener to be invoked when events of the specified type are
   * emitted. An optional calling context may be provided. The data arguments
   * emitted will be passed to the listener function.
   *
   * TODO: Annotate the listener arg's type. This is tricky because listeners
   *       can be invoked with varargs.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
  };

  /**
   * Similar to addListener, except that the listener is removed after it is
   * invoked once.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke only once when the
   *   specified event is emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
    var emitter = this;
    return this.addListener(eventType, function () {
      emitter.removeCurrentListener();
      listener.apply(context, arguments);
    });
  };

  /**
   * Removes all of the registered listeners, including those registered as
   * listener maps.
   *
   * @param {?string} eventType - Optional name of the event whose registered
   *   listeners to remove
   */

  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
    this._subscriber.removeAllSubscriptions(eventType);
  };

  /**
   * Provides an API that can be called during an eventing cycle to remove the
   * last listener that was invoked. This allows a developer to provide an event
   * object that can remove the listener (or listener map) during the
   * invocation.
   *
   * If it is called when not inside of an emitting cycle it will throw.
   *
   * @throws {Error} When called not during an eventing cycle
   *
   * @example
   *   var subscription = emitter.addListenerMap({
   *     someEvent: function(data, event) {
   *       console.log(data);
   *       emitter.removeCurrentListener();
   *     }
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   *   emitter.emit('someEvent', 'def'); // does not log anything
   */

  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
    !!!this._currentSubscription ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : invariant(false) : undefined;
    this._subscriber.removeSubscription(this._currentSubscription);
  };

  /**
   * Returns an array of listeners that are currently registered for the given
   * event.
   *
   * @param {string} eventType - Name of the event to query
   * @return {array}
   */

  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
      return subscription.listener;
    }) : [];
  };

  /**
   * Emits an event of the given type with the given data. All handlers of that
   * particular type will be notified.
   *
   * @param {string} eventType - Name of the event to emit
   * @param {*} Arbitrary arguments to be passed to each registered listener
   *
   * @example
   *   emitter.addListener('someEvent', function(message) {
   *     console.log(message);
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   */

  BaseEventEmitter.prototype.emit = function emit(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    if (subscriptions) {
      var keys = Object.keys(subscriptions);
      for (var ii = 0; ii < keys.length; ii++) {
        var key = keys[ii];
        var subscription = subscriptions[key];
        // The subscription may have been removed during this event loop.
        if (subscription) {
          this._currentSubscription = subscription;
          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
        }
      }
      this._currentSubscription = null;
    }
  };

  /**
   * Provides a hook to override how the emitter emits an event to a specific
   * subscription. This allows you to set up logging and error boundaries
   * specific to your environment.
   *
   * @param {EmitterSubscription} subscription
   * @param {string} eventType
   * @param {*} Arbitrary arguments to be passed to each registered listener
   */

  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
    var args = Array.prototype.slice.call(arguments, 2);
    subscription.listener.apply(subscription.context, args);
  };

  return BaseEventEmitter;
})();

module.exports = BaseEventEmitter;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L25vZGVfbW9kdWxlcy9mYmVtaXR0ZXIvbGliL0Jhc2VFdmVudEVtaXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgQmFzZUV2ZW50RW1pdHRlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgRW1pdHRlclN1YnNjcmlwdGlvbiA9IHJlcXVpcmUoJy4vRW1pdHRlclN1YnNjcmlwdGlvbicpO1xudmFyIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yID0gcmVxdWlyZSgnLi9FdmVudFN1YnNjcmlwdGlvblZlbmRvcicpO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuLyoqXG4gKiBAY2xhc3MgQmFzZUV2ZW50RW1pdHRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBBbiBFdmVudEVtaXR0ZXIgaXMgcmVzcG9uc2libGUgZm9yIG1hbmFnaW5nIGEgc2V0IG9mIGxpc3RlbmVycyBhbmQgcHVibGlzaGluZ1xuICogZXZlbnRzIHRvIHRoZW0gd2hlbiBpdCBpcyB0b2xkIHRoYXQgc3VjaCBldmVudHMgaGFwcGVuZWQuIEluIGFkZGl0aW9uIHRvIHRoZVxuICogZGF0YSBmb3IgdGhlIGdpdmVuIGV2ZW50IGl0IGFsc28gc2VuZHMgYSBldmVudCBjb250cm9sIG9iamVjdCB3aGljaCBhbGxvd3NcbiAqIHRoZSBsaXN0ZW5lcnMvaGFuZGxlcnMgdG8gcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgZ2l2ZW4gZXZlbnQuXG4gKlxuICogVGhlIGVtaXR0ZXIgaXMgZGVzaWduZWQgdG8gYmUgZ2VuZXJpYyBlbm91Z2ggdG8gc3VwcG9ydCBhbGwgdGhlIGRpZmZlcmVudFxuICogY29udGV4dHMgaW4gd2hpY2ggb25lIG1pZ2h0IHdhbnQgdG8gZW1pdCBldmVudHMuIEl0IGlzIGEgc2ltcGxlIG11bHRpY2FzdFxuICogbWVjaGFuaXNtIG9uIHRvcCBvZiB3aGljaCBleHRyYSBmdW5jdGlvbmFsaXR5IGNhbiBiZSBjb21wb3NlZC4gRm9yIGV4YW1wbGUsIGFcbiAqIG1vcmUgYWR2YW5jZWQgZW1pdHRlciBtYXkgdXNlIGFuIEV2ZW50SG9sZGVyIGFuZCBFdmVudEZhY3RvcnkuXG4gKi9cblxudmFyIEJhc2VFdmVudEVtaXR0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEJhc2VFdmVudEVtaXR0ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VFdmVudEVtaXR0ZXIpO1xuXG4gICAgdGhpcy5fc3Vic2NyaWJlciA9IG5ldyBFdmVudFN1YnNjcmlwdGlvblZlbmRvcigpO1xuICAgIHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0ZW5lciB0byBiZSBpbnZva2VkIHdoZW4gZXZlbnRzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBhcmVcbiAgICogZW1pdHRlZC4gQW4gb3B0aW9uYWwgY2FsbGluZyBjb250ZXh0IG1heSBiZSBwcm92aWRlZC4gVGhlIGRhdGEgYXJndW1lbnRzXG4gICAqIGVtaXR0ZWQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBUT0RPOiBBbm5vdGF0ZSB0aGUgbGlzdGVuZXIgYXJnJ3MgdHlwZS4gVGhpcyBpcyB0cmlja3kgYmVjYXVzZSBsaXN0ZW5lcnNcbiAgICogICAgICAgY2FuIGJlIGludm9rZWQgd2l0aCB2YXJhcmdzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gTmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIC0gRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHNwZWNpZmllZCBldmVudCBpc1xuICAgKiAgIGVtaXR0ZWRcbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IC0gT3B0aW9uYWwgY29udGV4dCBvYmplY3QgdG8gdXNlIHdoZW4gaW52b2tpbmcgdGhlXG4gICAqICAgbGlzdGVuZXJcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihldmVudFR5cGUsIGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZXIuYWRkU3Vic2NyaXB0aW9uKGV2ZW50VHlwZSwgbmV3IEVtaXR0ZXJTdWJzY3JpcHRpb24odGhpcy5fc3Vic2NyaWJlciwgbGlzdGVuZXIsIGNvbnRleHQpKTtcbiAgfTtcblxuICAvKipcbiAgICogU2ltaWxhciB0byBhZGRMaXN0ZW5lciwgZXhjZXB0IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlbW92ZWQgYWZ0ZXIgaXQgaXNcbiAgICogaW52b2tlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gTmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIC0gRnVuY3Rpb24gdG8gaW52b2tlIG9ubHkgb25jZSB3aGVuIHRoZVxuICAgKiAgIHNwZWNpZmllZCBldmVudCBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCAtIE9wdGlvbmFsIGNvbnRleHQgb2JqZWN0IHRvIHVzZSB3aGVuIGludm9raW5nIHRoZVxuICAgKiAgIGxpc3RlbmVyXG4gICAqL1xuXG4gIEJhc2VFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50VHlwZSwgbGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgZW1pdHRlciA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoZXZlbnRUeXBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUN1cnJlbnRMaXN0ZW5lcigpO1xuICAgICAgbGlzdGVuZXIuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgb2YgdGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLCBpbmNsdWRpbmcgdGhvc2UgcmVnaXN0ZXJlZCBhc1xuICAgKiBsaXN0ZW5lciBtYXBzLlxuICAgKlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGV2ZW50VHlwZSAtIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGV2ZW50IHdob3NlIHJlZ2lzdGVyZWRcbiAgICogICBsaXN0ZW5lcnMgdG8gcmVtb3ZlXG4gICAqL1xuXG4gIEJhc2VFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyLnJlbW92ZUFsbFN1YnNjcmlwdGlvbnMoZXZlbnRUeXBlKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgYW4gQVBJIHRoYXQgY2FuIGJlIGNhbGxlZCBkdXJpbmcgYW4gZXZlbnRpbmcgY3ljbGUgdG8gcmVtb3ZlIHRoZVxuICAgKiBsYXN0IGxpc3RlbmVyIHRoYXQgd2FzIGludm9rZWQuIFRoaXMgYWxsb3dzIGEgZGV2ZWxvcGVyIHRvIHByb3ZpZGUgYW4gZXZlbnRcbiAgICogb2JqZWN0IHRoYXQgY2FuIHJlbW92ZSB0aGUgbGlzdGVuZXIgKG9yIGxpc3RlbmVyIG1hcCkgZHVyaW5nIHRoZVxuICAgKiBpbnZvY2F0aW9uLlxuICAgKlxuICAgKiBJZiBpdCBpcyBjYWxsZWQgd2hlbiBub3QgaW5zaWRlIG9mIGFuIGVtaXR0aW5nIGN5Y2xlIGl0IHdpbGwgdGhyb3cuXG4gICAqXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBXaGVuIGNhbGxlZCBub3QgZHVyaW5nIGFuIGV2ZW50aW5nIGN5Y2xlXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgdmFyIHN1YnNjcmlwdGlvbiA9IGVtaXR0ZXIuYWRkTGlzdGVuZXJNYXAoe1xuICAgKiAgICAgc29tZUV2ZW50OiBmdW5jdGlvbihkYXRhLCBldmVudCkge1xuICAgKiAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICogICAgICAgZW1pdHRlci5yZW1vdmVDdXJyZW50TGlzdGVuZXIoKTtcbiAgICogICAgIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogICBlbWl0dGVyLmVtaXQoJ3NvbWVFdmVudCcsICdhYmMnKTsgLy8gbG9ncyAnYWJjJ1xuICAgKiAgIGVtaXR0ZXIuZW1pdCgnc29tZUV2ZW50JywgJ2RlZicpOyAvLyBkb2VzIG5vdCBsb2cgYW55dGhpbmdcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQ3VycmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlQ3VycmVudExpc3RlbmVyKCkge1xuICAgICEhIXRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnTm90IGluIGFuIGVtaXR0aW5nIGN5Y2xlOyB0aGVyZSBpcyBubyBjdXJyZW50IHN1YnNjcmlwdGlvbicpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zdWJzY3JpYmVyLnJlbW92ZVN1YnNjcmlwdGlvbih0aGlzLl9jdXJyZW50U3Vic2NyaXB0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgdGhhdCBhcmUgY3VycmVudGx5IHJlZ2lzdGVyZWQgZm9yIHRoZSBnaXZlblxuICAgKiBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSAtIE5hbWUgb2YgdGhlIGV2ZW50IHRvIHF1ZXJ5XG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cblxuICBCYXNlRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnRUeXBlKSAvKiBUT0RPOiBBcnJheTxFdmVudFN1YnNjcmlwdGlvbj4gKi97XG4gICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpYmVyLmdldFN1YnNjcmlwdGlvbnNGb3JUeXBlKGV2ZW50VHlwZSk7XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbnMgPyBzdWJzY3JpcHRpb25zLmZpbHRlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSkubWFwKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybiBzdWJzY3JpcHRpb24ubGlzdGVuZXI7XG4gICAgfSkgOiBbXTtcbiAgfTtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgb2YgdGhlIGdpdmVuIHR5cGUgd2l0aCB0aGUgZ2l2ZW4gZGF0YS4gQWxsIGhhbmRsZXJzIG9mIHRoYXRcbiAgICogcGFydGljdWxhciB0eXBlIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBOYW1lIG9mIHRoZSBldmVudCB0byBlbWl0XG4gICAqIEBwYXJhbSB7Kn0gQXJiaXRyYXJ5IGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gZWFjaCByZWdpc3RlcmVkIGxpc3RlbmVyXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgZW1pdHRlci5hZGRMaXN0ZW5lcignc29tZUV2ZW50JywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgKiAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAqICAgfSk7XG4gICAqXG4gICAqICAgZW1pdHRlci5lbWl0KCdzb21lRXZlbnQnLCAnYWJjJyk7IC8vIGxvZ3MgJ2FiYydcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnRUeXBlKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpYmVyLmdldFN1YnNjcmlwdGlvbnNGb3JUeXBlKGV2ZW50VHlwZSk7XG4gICAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3Vic2NyaXB0aW9ucyk7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwga2V5cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaWldO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uc1trZXldO1xuICAgICAgICAvLyBUaGUgc3Vic2NyaXB0aW9uIG1heSBoYXZlIGJlZW4gcmVtb3ZlZCBkdXJpbmcgdGhpcyBldmVudCBsb29wLlxuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICB0aGlzLl9fZW1pdFRvU3Vic2NyaXB0aW9uLmFwcGx5KHRoaXMsIFtzdWJzY3JpcHRpb25dLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBob29rIHRvIG92ZXJyaWRlIGhvdyB0aGUgZW1pdHRlciBlbWl0cyBhbiBldmVudCB0byBhIHNwZWNpZmljXG4gICAqIHN1YnNjcmlwdGlvbi4gVGhpcyBhbGxvd3MgeW91IHRvIHNldCB1cCBsb2dnaW5nIGFuZCBlcnJvciBib3VuZGFyaWVzXG4gICAqIHNwZWNpZmljIHRvIHlvdXIgZW52aXJvbm1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RW1pdHRlclN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAgICogQHBhcmFtIHsqfSBBcmJpdHJhcnkgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byBlYWNoIHJlZ2lzdGVyZWQgbGlzdGVuZXJcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUuX19lbWl0VG9TdWJzY3JpcHRpb24gPSBmdW5jdGlvbiBfX2VtaXRUb1N1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIGV2ZW50VHlwZSkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICBzdWJzY3JpcHRpb24ubGlzdGVuZXIuYXBwbHkoc3Vic2NyaXB0aW9uLmNvbnRleHQsIGFyZ3MpO1xuICB9O1xuXG4gIHJldHVybiBCYXNlRXZlbnRFbWl0dGVyO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlRXZlbnRFbWl0dGVyOyJdfQ==
},{"./EmitterSubscription":24,"./EventSubscriptionVendor":26,"_process":32,"fbjs/lib/emptyFunction":27,"fbjs/lib/invariant":28}],24:[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EmitterSubscription
 * @typechecks
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSubscription = require('./EventSubscription');

/**
 * EmitterSubscription represents a subscription with listener and context data.
 */

var EmitterSubscription = (function (_EventSubscription) {
  _inherits(EmitterSubscription, _EventSubscription);

  /**
   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  function EmitterSubscription(subscriber, listener, context) {
    _classCallCheck(this, EmitterSubscription);

    _EventSubscription.call(this, subscriber);
    this.listener = listener;
    this.context = context;
  }

  return EmitterSubscription;
})(EventSubscription);

module.exports = EmitterSubscription;
},{"./EventSubscription":25}],25:[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EventSubscription
 * @typechecks
 */

'use strict';

/**
 * EventSubscription represents a subscription to a particular event. It can
 * remove its own subscription.
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventSubscription = (function () {

  /**
   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
   *   this subscription.
   */

  function EventSubscription(subscriber) {
    _classCallCheck(this, EventSubscription);

    this.subscriber = subscriber;
  }

  /**
   * Removes this subscription from the subscriber that controls it.
   */

  EventSubscription.prototype.remove = function remove() {
    this.subscriber.removeSubscription(this);
  };

  return EventSubscription;
})();

module.exports = EventSubscription;
},{}],26:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EventSubscriptionVendor
 * @typechecks
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = require('fbjs/lib/invariant');

/**
 * EventSubscriptionVendor stores a set of EventSubscriptions that are
 * subscribed to a particular event type.
 */

var EventSubscriptionVendor = (function () {
  function EventSubscriptionVendor() {
    _classCallCheck(this, EventSubscriptionVendor);

    this._subscriptionsForType = {};
    this._currentSubscription = null;
  }

  /**
   * Adds a subscription keyed by an event type.
   *
   * @param {string} eventType
   * @param {EventSubscription} subscription
   */

  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
    !(subscription.subscriber === this) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : invariant(false) : undefined;
    if (!this._subscriptionsForType[eventType]) {
      this._subscriptionsForType[eventType] = [];
    }
    var key = this._subscriptionsForType[eventType].length;
    this._subscriptionsForType[eventType].push(subscription);
    subscription.eventType = eventType;
    subscription.key = key;
    return subscription;
  };

  /**
   * Removes a bulk set of the subscriptions.
   *
   * @param {?string} eventType - Optional name of the event type whose
   *   registered supscriptions to remove, if null remove all subscriptions.
   */

  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
    if (eventType === undefined) {
      this._subscriptionsForType = {};
    } else {
      delete this._subscriptionsForType[eventType];
    }
  };

  /**
   * Removes a specific subscription. Instead of calling this function, call
   * `subscription.remove()` directly.
   *
   * @param {object} subscription
   */

  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
    var eventType = subscription.eventType;
    var key = subscription.key;

    var subscriptionsForType = this._subscriptionsForType[eventType];
    if (subscriptionsForType) {
      delete subscriptionsForType[key];
    }
  };

  /**
   * Returns the array of subscriptions that are currently registered for the
   * given event type.
   *
   * Note: This array can be potentially sparse as subscriptions are deleted
   * from it when they are removed.
   *
   * TODO: This returns a nullable array. wat?
   *
   * @param {string} eventType
   * @return {?array}
   */

  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
    return this._subscriptionsForType[eventType];
  };

  return EventSubscriptionVendor;
})();

module.exports = EventSubscriptionVendor;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L25vZGVfbW9kdWxlcy9mYmVtaXR0ZXIvbGliL0V2ZW50U3Vic2NyaXB0aW9uVmVuZG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICogXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXZlbnRTdWJzY3JpcHRpb25WZW5kb3JcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yIHN0b3JlcyBhIHNldCBvZiBFdmVudFN1YnNjcmlwdGlvbnMgdGhhdCBhcmVcbiAqIHN1YnNjcmliZWQgdG8gYSBwYXJ0aWN1bGFyIGV2ZW50IHR5cGUuXG4gKi9cblxudmFyIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRTdWJzY3JpcHRpb25WZW5kb3IoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yKTtcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlID0ge307XG4gICAgdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHN1YnNjcmlwdGlvbiBrZXllZCBieSBhbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gICAqIEBwYXJhbSB7RXZlbnRTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvblxuICAgKi9cblxuICBFdmVudFN1YnNjcmlwdGlvblZlbmRvci5wcm90b3R5cGUuYWRkU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gYWRkU3Vic2NyaXB0aW9uKGV2ZW50VHlwZSwgc3Vic2NyaXB0aW9uKSB7XG4gICAgIShzdWJzY3JpcHRpb24uc3Vic2NyaWJlciA9PT0gdGhpcykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnVGhlIHN1YnNjcmliZXIgb2YgdGhlIHN1YnNjcmlwdGlvbiBpcyBpbmNvcnJlY3RseSBzZXQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIGlmICghdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXSkge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXSA9IFtdO1xuICAgIH1cbiAgICB2YXIga2V5ID0gdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXS5sZW5ndGg7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXS5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgc3Vic2NyaXB0aW9uLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICBzdWJzY3JpcHRpb24ua2V5ID0ga2V5O1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBidWxrIHNldCBvZiB0aGUgc3Vic2NyaXB0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBldmVudFR5cGUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBldmVudCB0eXBlIHdob3NlXG4gICAqICAgcmVnaXN0ZXJlZCBzdXBzY3JpcHRpb25zIHRvIHJlbW92ZSwgaWYgbnVsbCByZW1vdmUgYWxsIHN1YnNjcmlwdGlvbnMuXG4gICAqL1xuXG4gIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yLnByb3RvdHlwZS5yZW1vdmVBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gcmVtb3ZlQWxsU3Vic2NyaXB0aW9ucyhldmVudFR5cGUpIHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9zdWJzY3JpcHRpb25zRm9yVHlwZVtldmVudFR5cGVdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi4gSW5zdGVhZCBvZiBjYWxsaW5nIHRoaXMgZnVuY3Rpb24sIGNhbGxcbiAgICogYHN1YnNjcmlwdGlvbi5yZW1vdmUoKWAgZGlyZWN0bHkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdWJzY3JpcHRpb25cbiAgICovXG5cbiAgRXZlbnRTdWJzY3JpcHRpb25WZW5kb3IucHJvdG90eXBlLnJlbW92ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIHJlbW92ZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICB2YXIgZXZlbnRUeXBlID0gc3Vic2NyaXB0aW9uLmV2ZW50VHlwZTtcbiAgICB2YXIga2V5ID0gc3Vic2NyaXB0aW9uLmtleTtcblxuICAgIHZhciBzdWJzY3JpcHRpb25zRm9yVHlwZSA9IHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlW2V2ZW50VHlwZV07XG4gICAgaWYgKHN1YnNjcmlwdGlvbnNGb3JUeXBlKSB7XG4gICAgICBkZWxldGUgc3Vic2NyaXB0aW9uc0ZvclR5cGVba2V5XTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFycmF5IG9mIHN1YnNjcmlwdGlvbnMgdGhhdCBhcmUgY3VycmVudGx5IHJlZ2lzdGVyZWQgZm9yIHRoZVxuICAgKiBnaXZlbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGFycmF5IGNhbiBiZSBwb3RlbnRpYWxseSBzcGFyc2UgYXMgc3Vic2NyaXB0aW9ucyBhcmUgZGVsZXRlZFxuICAgKiBmcm9tIGl0IHdoZW4gdGhleSBhcmUgcmVtb3ZlZC5cbiAgICpcbiAgICogVE9ETzogVGhpcyByZXR1cm5zIGEgbnVsbGFibGUgYXJyYXkuIHdhdD9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICAgKiBAcmV0dXJuIHs/YXJyYXl9XG4gICAqL1xuXG4gIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yLnByb3RvdHlwZS5nZXRTdWJzY3JpcHRpb25zRm9yVHlwZSA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnNGb3JUeXBlKGV2ZW50VHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zRm9yVHlwZVtldmVudFR5cGVdO1xuICB9O1xuXG4gIHJldHVybiBFdmVudFN1YnNjcmlwdGlvblZlbmRvcjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRTdWJzY3JpcHRpb25WZW5kb3I7Il19
},{"_process":32,"fbjs/lib/invariant":28}],27:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

"use strict";

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],28:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mbHV4L25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdJbnZhcmlhbnQgVmlvbGF0aW9uOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDsiXX0=
},{"_process":32}],29:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],30:[function(require,module,exports){
/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.Immutable = factory()
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    // However note that we're currently calling ToNumber() instead of ToUint32()
    // which should be improved in the future, as floating point numbers should
    // not be accepted as an array index.
    if (typeof index !== 'number') {
      var numIndex = +index;
      if ('' + numIndex !== index) {
        return NaN;
      }
      index = numIndex;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function src_Iterator__Iterator(next) {
      this.next = next;
    }

    src_Iterator__Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  src_Iterator__Iterator.KEYS = ITERATE_KEYS;
  src_Iterator__Iterator.VALUES = ITERATE_VALUES;
  src_Iterator__Iterator.ENTRIES = ITERATE_ENTRIES;

  src_Iterator__Iterator.prototype.inspect =
  src_Iterator__Iterator.prototype.toSource = function () { return this.toString(); }
  src_Iterator__Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  // #pragma Root Sequences

  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new src_Iterator__Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new src_Iterator__Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new src_Iterator__Iterator(iteratorDone);
      }
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new src_Iterator__Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  var src_Math__imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    return hashJSObj(o);
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new src_Iterator__Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new src_Iterator__Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = src_Map__Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : src_Map__Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new src_Iterator__Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new src_Iterator__Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new src_Iterator__Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(src_Map__Map, KeyedCollection);

    // @pragma Construction

    function src_Map__Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    src_Map__Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    src_Map__Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    src_Map__Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    src_Map__Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    src_Map__Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    src_Map__Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    src_Map__Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    src_Map__Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    src_Map__Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    src_Map__Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    src_Map__Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    src_Map__Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    src_Map__Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger(undefined), arguments);
    };

    src_Map__Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMerger(merger), iters);
    };

    src_Map__Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    src_Map__Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    src_Map__Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    src_Map__Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    src_Map__Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    src_Map__Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    src_Map__Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    src_Map__Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    src_Map__Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    src_Map__Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  src_Map__Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = src_Map__Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, src_Iterator__Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(merger) {
    return function(existing, value, key) 
      {return existing && existing.mergeDeepWith && isIterable(value) ?
        existing.mergeDeepWith(merger, value) :
        merger ? merger(existing, value, key) : value};
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger(undefined), arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMerger(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new src_Iterator__Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, src_Map__Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new src_Iterator__Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  createClass(src_Set__Set, SetCollection);

    // @pragma Construction

    function src_Set__Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    src_Set__Set.of = function(/*...values*/) {
      return this(arguments);
    };

    src_Set__Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    src_Set__Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    src_Set__Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    src_Set__Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    src_Set__Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    src_Set__Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    src_Set__Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    src_Set__Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    src_Set__Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    src_Set__Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    src_Set__Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    src_Set__Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    src_Set__Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    src_Set__Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    src_Set__Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    src_Set__Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    src_Set__Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  src_Set__Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = src_Set__Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, src_Set__Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = src_Map__Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step > 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new src_Iterator__Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new src_Iterator__Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = src_Iterator__Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return src_Map__Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return src_Set__Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    findEntry: function(predicate, context) {
      var found;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findLastEntry: function(predicate, context) {
      return this.toSeq().reverse().findEntry(predicate, context);
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  // Temporary warning about using length
  (function () {
    try {
      Object.defineProperty(IterablePrototype, 'length', {
        get: function () {
          if (!Iterable.noLengthWarning) {
            var stack;
            try {
              throw new Error();
            } catch (error) {
              stack = error.stack;
            }
            if (stack.indexOf('_wrapObject') === -1) {
              console && console.warn && console.warn(
                'iterable.length has been deprecated, '+
                'use iterable.size or iterable.count(). '+
                'This warning will become a silent error in a future version. ' +
                stack
              );
              return this.size;
            }
          }
        }
      });
    } catch (e) {}
  })();



  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLastKey: function(predicate, context) {
      return this.toSeq().reverse().findKey(predicate, context);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    lastKeyOf: function(searchValue) {
      return this.findLastKey(function(value ) {return is(value, searchValue)});
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.toKeyedSeq().keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      return this.toSeq().reverse().indexOf(searchValue);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var key = this.toKeyedSeq().findLastKey(predicate, context);
      return key === undefined ? -1 : key;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : value;
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = src_Math__imul(h, 0xCC9E2D51);
    h = src_Math__imul(h << 15 | h >>> -15, 0x1B873593);
    h = src_Math__imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = src_Math__imul(h ^ h >>> 16, 0x85EBCA6B);
    h = src_Math__imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: src_Map__Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: src_Set__Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));
},{}],31:[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Container = require('./lib/FluxContainer');
module.exports.MapStore = require('./lib/FluxMapStore');
module.exports.Mixin = require('./lib/FluxMixinLegacy');
module.exports.ReduceStore = require('./lib/FluxReduceStore');
module.exports.Store = require('./lib/FluxStore');

},{"./lib/FluxContainer":15,"./lib/FluxMapStore":16,"./lib/FluxMixinLegacy":17,"./lib/FluxReduceStore":18,"./lib/FluxStore":19}],32:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[10])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2Ryb3kvY29kZS9tY3dlYi9qcy9BY2VFZGl0b3IucmVhY3QuanMiLCIvVXNlcnMvZHJveS9jb2RlL21jd2ViL2pzL0NvZGVDb250YWluZXIucmVhY3QuanMiLCIvVXNlcnMvZHJveS9jb2RlL21jd2ViL2pzL0NvZGVUb3BCYXIucmVhY3QuanMiLCIvVXNlcnMvZHJveS9jb2RlL21jd2ViL2pzL0Rpc3BhdGNoZXIuanMiLCIvVXNlcnMvZHJveS9jb2RlL21jd2ViL2pzL0ZpbGVFeHBsb3Jlci5yZWFjdC5qcyIsIi9Vc2Vycy9kcm95L2NvZGUvbWN3ZWIvanMvRmlsZUV4cGxvcmVyQ29udGFpbmVyLnJlYWN0LmpzIiwiL1VzZXJzL2Ryb3kvY29kZS9tY3dlYi9qcy9GaWxlVGlsZS5yZWFjdC5qcyIsIi9Vc2Vycy9kcm95L2NvZGUvbWN3ZWIvanMvRm9sZGVyVGlsZS5yZWFjdC5qcyIsIi9Vc2Vycy9kcm95L2NvZGUvbWN3ZWIvanMvTWNMYWJXZWIucmVhY3QuanMiLCIvVXNlcnMvZHJveS9jb2RlL21jd2ViL2pzL2FwcC5qcyIsIi9Vc2Vycy9kcm95L2NvZGUvbWN3ZWIvanMvc3RvcmVzL1NlbGVjdGVkRmlsZVN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2NsYXNzTmFtZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmx1eC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9EaXNwYXRjaGVyLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvbGliL0ZsdXhDb250YWluZXIuanMiLCJub2RlX21vZHVsZXMvZmx1eC9saWIvRmx1eE1hcFN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvbGliL0ZsdXhNaXhpbkxlZ2FjeS5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9GbHV4UmVkdWNlU3RvcmUuanMiLCJub2RlX21vZHVsZXMvZmx1eC9saWIvRmx1eFN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvbGliL0ZsdXhTdG9yZUdyb3VwLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvbGliL2Fic3RyYWN0TWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvbm9kZV9tb2R1bGVzL2ZiZW1pdHRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L25vZGVfbW9kdWxlcy9mYmVtaXR0ZXIvbGliL0Jhc2VFdmVudEVtaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZmx1eC9ub2RlX21vZHVsZXMvZmJlbWl0dGVyL2xpYi9FbWl0dGVyU3Vic2NyaXB0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvbm9kZV9tb2R1bGVzL2ZiZW1pdHRlci9saWIvRXZlbnRTdWJzY3JpcHRpb24uanMiLCJub2RlX21vZHVsZXMvZmx1eC9ub2RlX21vZHVsZXMvZmJlbWl0dGVyL2xpYi9FdmVudFN1YnNjcmlwdGlvblZlbmRvci5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L25vZGVfbW9kdWxlcy9mYmpzL2xpYi9zaGFsbG93RXF1YWwuanMiLCJub2RlX21vZHVsZXMvZmx1eC9ub2RlX21vZHVsZXMvaW1tdXRhYmxlL2Rpc3QvaW1tdXRhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lDQU0sU0FBUztZQUFULFNBQVM7O1dBQVQsU0FBUzswQkFBVCxTQUFTOzsrQkFBVCxTQUFTOzs7ZUFBVCxTQUFTOztXQUVJLDZCQUFHO0FBQ2xCLFVBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsWUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RDLFlBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMvQyxZQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLFlBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixZQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7OztXQUVLLGtCQUFHO0FBQ1AsYUFDRTs7VUFBSyxTQUFTLEVBQUMsZUFBZTtRQUM1Qjs7WUFBSyxFQUFFLEVBQUMsUUFBUTs7U0FFVjtPQUNGLENBQ047S0FDSDs7O1NBbkJHLFNBQVM7R0FBUyxLQUFLLENBQUMsU0FBUzs7QUF1QnZDLFNBQVMsQ0FBQyxTQUFTLEdBQUc7QUFDcEIsZUFBYSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDaEQsZUFBYSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7Q0FDakQsQ0FBQzs7cUJBRWEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNDNUJNLDRCQUE0Qjs7OztpQ0FDL0Isc0JBQXNCOzsrQkFDMUIsb0JBQW9COzs7OzhCQUNyQixtQkFBbUI7Ozs7eUJBQ2pCLFlBQVk7O0lBRTlCLGFBQWE7WUFBYixhQUFhOztXQUFiLGFBQWE7MEJBQWIsYUFBYTs7K0JBQWIsYUFBYTs7O2VBQWIsYUFBYTs7V0FpQlgsa0JBQUc7QUFDUCxhQUNFOztVQUFLLFNBQVMsRUFBQyxnQkFBZ0I7UUFDN0I7QUFDRSx1QkFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxBQUFDO0FBQ3hDLHVCQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEFBQUM7VUFDeEM7UUFDRjtBQUNFLHVCQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEFBQUM7QUFDeEMsdUJBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQUFBQztVQUN4QztPQUNFLENBQ047S0FDSDs7O1dBN0JlLHFCQUFHO0FBQ2pCLGFBQU8sc0NBQW1CLENBQUM7S0FDNUI7OztXQUVvQix3QkFBQyxTQUFTLEVBQUU7QUFDL0IsVUFBTSxhQUFhLEdBQUcscUNBQWtCLGdCQUFnQixFQUFFLENBQUM7QUFDM0QsVUFBSSxhQUFhLEtBQUssS0FBSyxFQUFFO0FBQzNCLGVBQU8sU0FBUyxDQUFDO09BQ2xCOztBQUVELGFBQU87QUFDTCxxQkFBYSxFQUFFLHFDQUFrQixnQkFBZ0IsRUFBRTtBQUNuRCxxQkFBYSxFQUFFLHFDQUFrQixnQkFBZ0IsRUFBRTtPQUNwRCxDQUFDO0tBQ0g7OztTQWZHLGFBQWE7R0FBUyxLQUFLLENBQUMsU0FBUzs7cUJBaUM1QixxQkFBVSxNQUFNLENBQUMsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN2Q3hDLFVBQVU7WUFBVixVQUFVOztXQUFWLFVBQVU7MEJBQVYsVUFBVTs7K0JBQVYsVUFBVTs7O2VBQVYsVUFBVTs7V0FDUixrQkFBRztBQUNQLGFBQ0U7O1VBQUssU0FBUyxFQUFDLGNBQWM7UUFDM0I7O1lBQUssU0FBUyxFQUFDLGlCQUFpQjtVQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7U0FDckI7T0FDRixDQUNOO0tBQ0g7OztTQVRHLFVBQVU7R0FBUyxLQUFLLENBQUMsU0FBUzs7QUFZeEMsVUFBVSxDQUFDLFNBQVMsR0FBRztBQUNyQixlQUFhLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUNoRCxlQUFhLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtDQUNqRCxDQUFDOztxQkFFYSxVQUFVOzs7Ozs7OztvQkNmQSxNQUFNOztBQUUvQixNQUFNLENBQUMsT0FBTyxHQUFHLHNCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7dUNDSkosNEJBQTRCOzs7OzZCQUNyQyxrQkFBa0I7Ozs7K0JBQ2hCLG9CQUFvQjs7OztBQUUzQyxJQUFNLGlCQUFpQixHQUFHLFNBQXBCLGlCQUFpQixDQUFHLElBQUk7U0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtDQUFBLENBQUM7O0FBRXhELFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDL0IsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQ2pFLEVBQUUsR0FDRixHQUFHLENBQUM7QUFDUixTQUFPLEtBQUssR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDO0NBQ2xDOztJQUVLLFNBQVM7WUFBVCxTQUFTOztXQUFULFNBQVM7MEJBQVQsU0FBUzs7K0JBQVQsU0FBUzs7O2VBQVQsU0FBUzs7V0FDUCxrQkFBRzs7O0FBQ1AsVUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDeEMsVUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O0FBRTdCLFVBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUMxQyxVQUFBLE9BQU87ZUFDTCxvQkFBQyxTQUFTO0FBQ1IsY0FBSSxFQUFFLE9BQU8sQUFBQztBQUNkLGdCQUFNLEVBQUUsYUFBYSxHQUFHLENBQUMsQUFBQztBQUMxQixtQkFBUyxFQUFFLE1BQUssS0FBSyxDQUFDLFNBQVMsQUFBQztBQUNoQyxhQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQUFBQztVQUNsQjtPQUFBLENBQ0wsQ0FBQzs7QUFFRixVQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDbEMsVUFBQSxRQUFRO2VBQ047QUFDRSxlQUFLLEVBQUUsUUFBUSxBQUFDO0FBQ2hCLGdCQUFNLEVBQUUsYUFBYSxHQUFHLENBQUMsQUFBQztBQUMxQixjQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEFBQUM7QUFDckMsa0JBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxNQUFLLEtBQUssQ0FBQyxTQUFTLEFBQUM7QUFDbEUsYUFBRyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxBQUFDO1VBQ3BDO09BQUEsQ0FDTCxDQUFDOztBQUVGLGFBQ0U7OztRQUNFO0FBQ0UsZUFBSyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztBQUNwQyxnQkFBTSxFQUFFLGFBQWEsQUFBQztBQUN0QixjQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQUFBQztBQUNoQixrQkFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEFBQUM7VUFDN0M7UUFDRCxlQUFlO1FBQ2YsYUFBYTtPQUNWLENBQ1A7S0FDRjs7O1NBdENHLFNBQVM7R0FBUyxLQUFLLENBQUMsU0FBUzs7SUEwQ2pDLFlBQVk7WUFBWixZQUFZOztXQUFaLFlBQVk7MEJBQVosWUFBWTs7K0JBQVosWUFBWTs7O2VBQVosWUFBWTs7V0FDVixrQkFBRzs7QUFFUCxhQUNFOztVQUFLLFNBQVMsRUFBQyxlQUFlO1FBQzVCLG9CQUFDLFNBQVM7QUFDUixjQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEFBQUM7QUFDdEIsZ0JBQU0sRUFBRSxDQUFDLEFBQUM7QUFDVixtQkFBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxBQUFDO1VBQ2hDO09BQ0UsQ0FDTjtLQUNIOzs7U0FaRyxZQUFZO0dBQVMsS0FBSyxDQUFDLFNBQVM7O0FBZTFDLFlBQVksQ0FBQyxTQUFTLEdBQUc7QUFDdkIsTUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDdkMsV0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7Q0FDN0MsQ0FBQTs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsY0FBWSxFQUFFLFlBQVk7QUFDMUIsV0FBUyxFQUFFLFNBQVM7Q0FDckIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0M5RTRCLDRCQUE0Qjs7OztpQ0FDL0Isc0JBQXNCOzt5QkFDekIsWUFBWTs7SUFROUIscUJBQXFCO1lBQXJCLHFCQUFxQjs7V0FBckIscUJBQXFCOzBCQUFyQixxQkFBcUI7OytCQUFyQixxQkFBcUI7OztlQUFyQixxQkFBcUI7O1dBb0NuQixrQkFBRztBQUNQLGFBQ0U7QUFDRSxZQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEFBQUM7QUFDdEIsaUJBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQUFBQztRQUNoQyxDQUNGO0tBQ0g7OztXQTFDZSxxQkFBRztBQUNqQixhQUFPLHNDQUFtQixDQUFDO0tBQzVCOzs7V0FFb0Isd0JBQUMsU0FBUyxFQUFFO0FBQy9CLGFBQU87QUFDTCxZQUFJLEVBQUU7QUFDSixjQUFJLEVBQUUsV0FBVztBQUNqQixxQkFBVyxFQUFFLENBQ1g7QUFDRSxnQkFBSSxFQUFFLGVBQWU7QUFDckIsdUJBQVcsRUFBRSxDQUNYO0FBQ0Usa0JBQUksRUFBRSxtQkFBbUI7QUFDekIseUJBQVcsRUFBRSxFQUFFO0FBQ2YsbUJBQUssRUFBRSxFQUFFO2FBQ1YsQ0FDRjtBQUNELGlCQUFLLEVBQUUsQ0FDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sQ0FDUjtXQUNGLENBQ0Y7QUFDRCxlQUFLLEVBQUUsQ0FDTCxZQUFZLEVBQ1osOERBQThELEVBQzlELFlBQVksQ0FDYjtTQUNGO0FBQ0QsaUJBQVMsRUFBRSxxQ0FBa0IsZ0JBQWdCLEVBQUU7T0FDaEQsQ0FBQztLQUNIOzs7U0FsQ0cscUJBQXFCO0dBQVMsS0FBSyxDQUFDLFNBQVM7O3FCQThDcEMscUJBQVUsTUFBTSxDQUFDLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQ3hEL0IsWUFBWTs7OzswQkFDWixjQUFjOzs7O0FBRXJDLElBQUksVUFBVSxHQUFHLElBQWMsQ0FBQzs7SUFFMUIsUUFBUTtZQUFSLFFBQVE7O1dBQVIsUUFBUTswQkFBUixRQUFROzsrQkFBUixRQUFROzs7ZUFBUixRQUFROztXQUNOLGtCQUFHOzs7QUFFUCxVQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7O0FBRXZCLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQyxxQkFBYSxJQUFJLFVBQVUsQ0FBQztPQUM3Qjs7QUFFRCxhQUNFOzs7QUFDRSxtQkFBUyxFQUFFLDZCQUNULFdBQVcsRUFDWCxFQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQzVDLEFBQUM7QUFDRixpQkFBTyxFQUFFO21CQUFNLHdCQUFXLFFBQVEsQ0FBQztBQUNqQyxvQkFBTSxFQUFFLGlDQUFpQztBQUN6QyxrQkFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQUssS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO2FBQ25ELENBQUM7V0FBQSxBQUFDOztRQUVGLGFBQWE7UUFDZCwyQkFBRyxTQUFTLEVBQUMseUJBQXlCLEdBQUs7UUFDMUMsR0FBRztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztPQUNiLENBQ047S0FDSDs7O1NBMUJHLFFBQVE7R0FBUyxLQUFLLENBQUMsU0FBUzs7QUE2QnRDLFFBQVEsQ0FBQyxTQUFTLEdBQUc7QUFDbkIsT0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDeEMsUUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDekMsTUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDdkMsVUFBUSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7Q0FDMUMsQ0FBQTs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OzBCQ3pDSCxZQUFZOzs7OzBCQUNaLGNBQWM7Ozs7QUFFckMsSUFBSSxVQUFVLEdBQUcsSUFBYyxDQUFDOztJQUUxQixVQUFVO1lBQVYsVUFBVTs7V0FBVixVQUFVOzBCQUFWLFVBQVU7OytCQUFWLFVBQVU7OztlQUFWLFVBQVU7O1dBQ1Isa0JBQUc7OztBQUVQLFVBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQzs7QUFFdkIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFDLHFCQUFhLElBQUksVUFBVSxDQUFDO09BQzdCOztBQUVELGFBQ0U7OztBQUNFLG1CQUFTLEVBQUUsNkJBQ1QsV0FBVyxFQUNYLEVBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FDNUMsQUFBQztBQUNGLGlCQUFPLEVBQUU7bUJBQU0sd0JBQVcsUUFBUSxDQUFDO0FBQ2pDLG9CQUFNLEVBQUUsaUNBQWlDO0FBQ3pDLGtCQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBSyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7YUFDbEQsQ0FBQztXQUFBLEFBQUM7O1FBRUYsYUFBYTtRQUNkLDJCQUFHLFNBQVMsRUFBQyx5QkFBeUIsR0FBSztRQUMxQyxHQUFHO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO09BQ2IsQ0FDTjtLQUNIOzs7U0ExQkcsVUFBVTtHQUFTLEtBQUssQ0FBQyxTQUFTOztBQTZCeEMsVUFBVSxDQUFDLFNBQVMsR0FBRztBQUNyQixPQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUN4QyxNQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUN2QyxRQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUN6QyxVQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7Q0FFMUMsQ0FBQTs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQzs7Ozs7OzswQ0MxQ00sK0JBQStCOzs7O2tDQUN2Qyx1QkFBdUI7Ozs7QUFFakQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzdCLFFBQU0sRUFBRSxrQkFBVztBQUNqQixXQUNFOztRQUFLLFNBQVMsRUFBQyxRQUFRO01BQ3JCOztVQUFLLFNBQVMsRUFBQyxtQkFBbUI7UUFDaEMsNkJBQUssR0FBRyxFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxTQUFTLEdBQUc7UUFDcEQ7O1lBQUssU0FBUyxFQUFDLGlCQUFpQjs7VUFBTzs7OztXQUFvQjtTQUFNO09BQzdEO01BQ047O1VBQUssU0FBUyxFQUFDLG1CQUFtQjtRQUNoQzs7WUFBRyxTQUFTLEVBQUMsMkJBQTJCLEVBQUMsSUFBSSxFQUFDLEdBQUc7O1NBQXVCO09BQ3BFO0tBQ0YsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUVILElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMvQixRQUFNLEVBQUUsa0JBQVc7QUFDakIsV0FDRTs7O01BQ0Usb0JBQUMsTUFBTSxPQUFHO01BQ1Y7O1VBQUssU0FBUyxFQUFDLGdCQUFnQjtRQUM3QixrRUFBeUI7UUFDekIsMERBQWlCO09BQ2I7S0FDRixDQUNOO0dBQ0g7Q0FDRixDQUFDLENBQUM7O0FBRUgsS0FBSyxDQUFDLE1BQU0sQ0FDVixvQkFBQyxRQUFRLE9BQUcsRUFDWixRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUN6QyxDQUFDOzs7OztBQ3BDRixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXpCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O2VDTGQsT0FBTyxDQUFDLFlBQVksQ0FBQzs7SUFBOUIsS0FBSyxZQUFMLEtBQUs7O0FBQ1YsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBOztJQUVuQyxpQkFBaUI7WUFBakIsaUJBQWlCOztBQUVWLFdBRlAsaUJBQWlCLENBRVQsVUFBVSxFQUFFOzBCQUZwQixpQkFBaUI7O0FBR25CLCtCQUhFLGlCQUFpQiw2Q0FHYixVQUFVLEVBQUU7QUFDbEIsUUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDM0IsUUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7R0FDNUI7O2VBTkcsaUJBQWlCOztXQVFULHNCQUFDLE9BQU8sRUFBRTtBQUNwQixjQUFRLE9BQU8sQ0FBQyxNQUFNO0FBQ3BCLGFBQUssaUNBQWlDO0FBQ3BDLGNBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDN0MsY0FBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN4QyxjQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFBQSxPQUN2QjtLQUNGOzs7V0FFZSw0QkFBRztBQUNqQixhQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDNUI7OztXQUVlLDRCQUFHO0FBQ2pCLGFBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUM1Qjs7O1NBdkJHLGlCQUFpQjtHQUFTLEtBQUs7O0FBMEJyQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7OztBQzdCbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIEFjZUVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGVkaXRvciA9IGFjZS5lZGl0KFwiZWRpdG9yXCIpO1xuICAgIGVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS90b21vcnJvd1wiKTtcbiAgICBlZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoXCJhY2UvbW9kZS9tYXRsYWJcIik7XG4gICAgZWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xuICAgIGVkaXRvci5zZXRBbmltYXRlZFNjcm9sbCh0cnVlKTtcbiAgICBlZGl0b3Iuc2V0U2hvd1ByaW50TWFyZ2luKGZhbHNlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJlZGl0b3JcIj5cbiAgICAgICAgICAlIEhlcmVpbiBsaWVzIGxvdHMgb2YgbWF0bGFiIGNvZGVcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuQWNlRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0aW9uUGF0aDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3Rpb25UeXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2VFZGl0b3I7XG4iLCJpbXBvcnQgU2VsZWN0ZWRGaWxlU3RvcmUgZnJvbSAnLi9zdG9yZXMvU2VsZWN0ZWRGaWxlU3RvcmUnO1xuaW1wb3J0IHtGaWxlRXhwbG9yZXJ9IGZyb20gJy4vRmlsZUV4cGxvcmVyLnJlYWN0JztcbmltcG9ydCBDb2RlVG9wQmFyIGZyb20gJy4vQ29kZVRvcEJhci5yZWFjdCc7XG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJy4vQWNlRWRpdG9yLnJlYWN0JztcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdmbHV4L3V0aWxzJztcblxuY2xhc3MgQ29kZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgc3RhdGljIGdldFN0b3JlcygpIHtcbiAgICByZXR1cm4gW1NlbGVjdGVkRmlsZVN0b3JlXTtcbiAgfVxuXG4gIHN0YXRpYyBjYWxjdWxhdGVTdGF0ZShwcmV2U3RhdGUpIHtcbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlID0gU2VsZWN0ZWRGaWxlU3RvcmUuZ2V0U2VsZWN0aW9uVHlwZSgpO1xuICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSAnRElSJykge1xuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0aW9uUGF0aDogU2VsZWN0ZWRGaWxlU3RvcmUuZ2V0U2VsZWN0aW9uUGF0aCgpLFxuICAgICAgc2VsZWN0aW9uVHlwZTogU2VsZWN0ZWRGaWxlU3RvcmUuZ2V0U2VsZWN0aW9uVHlwZSgpLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1jb250YWluZXJcIj5cbiAgICAgICAgPENvZGVUb3BCYXJcbiAgICAgICAgICBzZWxlY3Rpb25QYXRoPXt0aGlzLnN0YXRlLnNlbGVjdGlvblBhdGh9XG4gICAgICAgICAgc2VsZWN0aW9uVHlwZT17dGhpcy5zdGF0ZS5zZWxlY3Rpb25UeXBlfVxuICAgICAgICAvPlxuICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgc2VsZWN0aW9uUGF0aD17dGhpcy5zdGF0ZS5zZWxlY3Rpb25QYXRofVxuICAgICAgICAgIHNlbGVjdGlvblR5cGU9e3RoaXMuc3RhdGUuc2VsZWN0aW9uVHlwZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyLmNyZWF0ZShDb2RlQ29udGFpbmVyKTtcbiIsImNsYXNzIENvZGVUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS10b3AtYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuc2VsZWN0aW9uUGF0aH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNvZGVUb3BCYXIucHJvcFR5cGVzID0ge1xuICBzZWxlY3Rpb25QYXRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGlvblR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVUb3BCYXI7XG4iLCIvLyB2YXIgRGlzcGF0Y2hlciA9IHJlcXVpcmUoJ2ZsdXgnKS5EaXNwYXRjaGVyO1xuXG5pbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gJ2ZsdXgnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEaXNwYXRjaGVyKCk7XG4iLCJpbXBvcnQgU2VsZWN0ZWRGaWxlU3RvcmUgZnJvbSAnLi9zdG9yZXMvU2VsZWN0ZWRGaWxlU3RvcmUnO1xuaW1wb3J0IEZpbGVUaWxlIGZyb20gJy4vRmlsZVRpbGUucmVhY3QnO1xuaW1wb3J0IEZvbGRlclRpbGUgZnJvbSAnLi9Gb2xkZXJUaWxlLnJlYWN0JztcblxuY29uc3QgZ2V0RGlyZWN0b3J5VGl0bGUgPSBwYXRoID0+IHBhdGguc3BsaXQoJy8nKS5wb3AoKTtcblxuZnVuY3Rpb24gam9pblBhdGhzKHBhdGgxLCBwYXRoMikge1xuICBjb25zdCBzZXBhcmF0b3IgPSBwYXRoMVtwYXRoMS5sZW5ndGggLSAxXSA9PT0gJy8nIHx8IHBhdGgyWzBdID09PSAnLydcbiAgICA/ICcnXG4gICAgOiAnLyc7XG4gIHJldHVybiBwYXRoMSArIHNlcGFyYXRvciArIHBhdGgyO1xufVxuXG5jbGFzcyBEaXJlY3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY3VycmVudEluZGVudCA9IHRoaXMucHJvcHMuaW5kZW50O1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLnByb3BzLnRyZWU7XG5cbiAgICBjb25zdCByZW5kZXJlZFN1YmRpcnMgPSB0cmVlLmRpcmVjdG9yaWVzLm1hcChcbiAgICAgIHN1YnRyZWUgPT5cbiAgICAgICAgPERpcmVjdG9yeVxuICAgICAgICAgIHRyZWU9e3N1YnRyZWV9XG4gICAgICAgICAgaW5kZW50PXtjdXJyZW50SW5kZW50ICsgMX1cbiAgICAgICAgICBzZWxlY3Rpb249e3RoaXMucHJvcHMuc2VsZWN0aW9ufVxuICAgICAgICAgIGtleT17c3VidHJlZS5wYXRofVxuICAgICAgICAvPlxuICAgICk7XG5cbiAgICBjb25zdCByZW5kZXJlZEZpbGVzID0gdHJlZS5maWxlcy5tYXAoXG4gICAgICBmaWxlbmFtZSA9PlxuICAgICAgICA8RmlsZVRpbGVcbiAgICAgICAgICB0aXRsZT17ZmlsZW5hbWV9XG4gICAgICAgICAgaW5kZW50PXtjdXJyZW50SW5kZW50ICsgMX1cbiAgICAgICAgICBwYXRoPXtqb2luUGF0aHModHJlZS5wYXRoLCBmaWxlbmFtZSl9XG4gICAgICAgICAgc2VsZWN0ZWQ9e2pvaW5QYXRocyh0cmVlLnBhdGgsIGZpbGVuYW1lKSA9PT0gdGhpcy5wcm9wcy5zZWxlY3Rpb259XG4gICAgICAgICAga2V5PXtqb2luUGF0aHModHJlZS5wYXRoLCBmaWxlbmFtZSl9XG4gICAgICAgIC8+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9sZGVyVGlsZVxuICAgICAgICAgIHRpdGxlPXtnZXREaXJlY3RvcnlUaXRsZSh0cmVlLnBhdGgpfVxuICAgICAgICAgIGluZGVudD17Y3VycmVudEluZGVudH1cbiAgICAgICAgICBwYXRoPXt0cmVlLnBhdGh9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3RyZWUucGF0aCA9PT0gdGhpcy5wcm9wcy5zZWxlY3Rpb259XG4gICAgICAgIC8+XG4gICAgICAgIHtyZW5kZXJlZFN1YmRpcnN9XG4gICAgICAgIHtyZW5kZXJlZEZpbGVzfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuY2xhc3MgRmlsZUV4cGxvcmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIC8vIFRPTUFZQkVETzogdGhlIHNlbGVjdGlvbiBwcm9wIGxvb2tzIHJlYWxseSB1Z2x5IHVnaFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtZXhwbG9yZXJcIj5cbiAgICAgICAgPERpcmVjdG9yeVxuICAgICAgICAgIHRyZWU9e3RoaXMucHJvcHMudHJlZX1cbiAgICAgICAgICBpbmRlbnQ9ezB9XG4gICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnByb3BzLnNlbGVjdGlvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmlsZUV4cGxvcmVyLnByb3BUeXBlcyA9IHtcbiAgdHJlZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZWxlY3Rpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEZpbGVFeHBsb3JlcjogRmlsZUV4cGxvcmVyLFxuICBEaXJlY3Rvcnk6IERpcmVjdG9yeVxufTtcbiIsImltcG9ydCBTZWxlY3RlZEZpbGVTdG9yZSBmcm9tICcuL3N0b3Jlcy9TZWxlY3RlZEZpbGVTdG9yZSc7XG5pbXBvcnQge0ZpbGVFeHBsb3Jlcn0gZnJvbSAnLi9GaWxlRXhwbG9yZXIucmVhY3QnO1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ2ZsdXgvdXRpbHMnO1xuXG5cbnR5cGUgU3RhdGUgPSB7XG4gIHRyZWU6IE9iamVjdCxcbiAgc2VsZWN0aW9uOiBTdHJpbmcsXG59O1xuXG5jbGFzcyBGaWxlRXhwbG9yZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xuICAgIHJldHVybiBbU2VsZWN0ZWRGaWxlU3RvcmVdO1xuICB9XG5cbiAgc3RhdGljIGNhbGN1bGF0ZVN0YXRlKHByZXZTdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmVlOiB7XG4gICAgICAgIHBhdGg6IFwiV29ya3NwYWNlXCIsXG4gICAgICAgIGRpcmVjdG9yaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ1dvcmtzcGFjZS9mb28nLFxuICAgICAgICAgICAgZGlyZWN0b3JpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdXb3Jrc3BhY2UvZm9vL2JhcicsXG4gICAgICAgICAgICAgICAgZGlyZWN0b3JpZXM6IFtdLFxuICAgICAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXG4gICAgICAgICAgICAgIFwib25lXCIsXG4gICAgICAgICAgICAgIFwidHdvXCIsXG4gICAgICAgICAgICAgIFwidGhyZWVcIixcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbGVzOiBbXG4gICAgICAgICAgJ2Nob2xlc2t5Lm0nLFxuICAgICAgICAgICdUaGlzIHRpdGxlIGlzIHNvIGxvbmcgaXQgZG9lc25cXCd0IGZpdCBpbnRvIHRoaXMgdGlueSBzaWRlYmFyJyxcbiAgICAgICAgICAncGFnZXJhbmsubScsXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBzZWxlY3Rpb246IFNlbGVjdGVkRmlsZVN0b3JlLmdldFNlbGVjdGlvblBhdGgoKSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RmlsZUV4cGxvcmVyXG4gICAgICAgIHRyZWU9e3RoaXMuc3RhdGUudHJlZX1cbiAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXIuY3JlYXRlKEZpbGVFeHBsb3JlckNvbnRhaW5lcik7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc05hbWVzJztcbmltcG9ydCBEaXNwYXRjaGVyIGZyb20gJy4vRGlzcGF0Y2hlcic7XG5cbnZhciBvbmVfaW5kZW50ID0gXCJcXHUwMEEwXFx1MDBBMFwiOyAgLy8gTm9uLWJyZWFraW5nIHNwYWNlc1xuXG5jbGFzcyBGaWxlVGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBpbmRlbnRfc3RyaW5nID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuaW5kZW50OyBpKyspIHtcbiAgICAgIGluZGVudF9zdHJpbmcgKz0gb25lX2luZGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgJ2ZpbGUtdGlsZScsXG4gICAgICAgICAgeydmaWxlLXRpbGUtc2VsZWN0ZWQnOiB0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgICAgICBhY3Rpb246ICdGSUxFX0VYUExPUkVSLlNFTEVDVElPTl9DSEFOR0VEJyxcbiAgICAgICAgICBkYXRhOiB7IHNlbGVjdGlvbjogdGhpcy5wcm9wcy5wYXRoLCB0eXBlOiAnRklMRScgfVxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2luZGVudF9zdHJpbmd9XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtdGV4dC1vIGZhLWZ3XCI+PC9pPlxuICAgICAgICB7JyAnfVxuICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmlsZVRpbGUucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbmRlbnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcGF0aDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlVGlsZTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzTmFtZXMnO1xuaW1wb3J0IERpc3BhdGNoZXIgZnJvbSAnLi9EaXNwYXRjaGVyJztcblxudmFyIG9uZV9pbmRlbnQgPSBcIlxcdTAwQTBcXHUwMEEwXCI7ICAvLyBOb24tYnJlYWtpbmcgc3BhY2VzXG5cbmNsYXNzIEZvbGRlclRpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgaW5kZW50X3N0cmluZyA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmluZGVudDsgaSsrKSB7XG4gICAgICBpbmRlbnRfc3RyaW5nICs9IG9uZV9pbmRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICdmaWxlLXRpbGUnLFxuICAgICAgICAgIHsnZmlsZS10aWxlLXNlbGVjdGVkJzogdGhpcy5wcm9wcy5zZWxlY3RlZH1cbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICAgICAgYWN0aW9uOiAnRklMRV9FWFBMT1JFUi5TRUxFQ1RJT05fQ0hBTkdFRCcsXG4gICAgICAgICAgZGF0YTogeyBzZWxlY3Rpb246IHRoaXMucHJvcHMucGF0aCwgdHlwZTogJ0RJUicgfVxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2luZGVudF9zdHJpbmd9XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZvbGRlci1vcGVuIGZhLWZ3XCI+PC9pPlxuICAgICAgICB7JyAnfVxuICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRm9sZGVyVGlsZS5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBhdGg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW5kZW50OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9sZGVyVGlsZTtcbiIsImltcG9ydCBGaWxlRXhwbG9yZXJDb250YWluZXIgZnJvbSAnLi9GaWxlRXhwbG9yZXJDb250YWluZXIucmVhY3QnXG5pbXBvcnQgQ29kZUNvbnRhaW5lciBmcm9tICcuL0NvZGVDb250YWluZXIucmVhY3QnXG5cbnZhciBUb3BOYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wbmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtbG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIm1jbGFiX2xvZ29fMzYwLnBuZ1wiIGNsYXNzTmFtZT1cIm1sLWxvZ29cIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWNsYWItbG9nby10ZXh0XCI+TUNMQUIgPHN0cm9uZz5XRUI8L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvbiB0b3BuYXYtYnV0dG9uXCIgaHJlZj1cIiNcIj5Db21waWxlIHRvIEZvcnRyYW48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBNY0xhYldlYiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRvcE5hdiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZpbGVFeHBsb3JlckNvbnRhaW5lciAvPlxuICAgICAgICAgIDxDb2RlQ29udGFpbmVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblJlYWN0LnJlbmRlcihcbiAgPE1jTGFiV2ViIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpXG4pO1xuIiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4Jyk7XG53aW5kb3cuZmx1eCA9IGZsdXg7XG5cbmNvbnNvbGUubG9nKFwiSEVsbG9zZGZzXCIpO1xuXG5yZXF1aXJlKCcuL01jTGFiV2ViLnJlYWN0Jyk7XG4iLCJ2YXIge1N0b3JlfSA9IHJlcXVpcmUoJ2ZsdXgvdXRpbHMnKTtcbnZhciBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vRGlzcGF0Y2hlcicpXG5cbmNsYXNzIFNlbGVjdGVkRmlsZVN0b3JlIGV4dGVuZHMgU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yKGRpc3BhdGNoZXIpIHtcbiAgICBzdXBlcihkaXNwYXRjaGVyKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25QYXRoID0gbnVsbDtcbiAgICB0aGlzLl9zZWxlY3Rpb25UeXBlID0gbnVsbDtcbiAgfVxuXG4gIF9fb25EaXNwYXRjaChwYXlsb2FkKSB7XG4gICAgc3dpdGNoIChwYXlsb2FkLmFjdGlvbikge1xuICAgICAgY2FzZSBcIkZJTEVfRVhQTE9SRVIuU0VMRUNUSU9OX0NIQU5HRURcIjpcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uUGF0aCA9IHBheWxvYWQuZGF0YS5zZWxlY3Rpb247XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvblR5cGUgPSBwYXlsb2FkLmRhdGEudHlwZTtcbiAgICAgICAgdGhpcy5fX2VtaXRDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3Rpb25QYXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25QYXRoO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uVHlwZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTZWxlY3RlZEZpbGVTdG9yZShEaXNwYXRjaGVyKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vbGliL0Rpc3BhdGNoZXInKTtcbiIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIERpc3BhdGNoZXJcbiAqIFxuICogQHByZXZlbnRNdW5nZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxudmFyIF9wcmVmaXggPSAnSURfJztcblxuLyoqXG4gKiBEaXNwYXRjaGVyIGlzIHVzZWQgdG8gYnJvYWRjYXN0IHBheWxvYWRzIHRvIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLiBUaGlzIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSBnZW5lcmljIHB1Yi1zdWIgc3lzdGVtcyBpbiB0d28gd2F5czpcbiAqXG4gKiAgIDEpIENhbGxiYWNrcyBhcmUgbm90IHN1YnNjcmliZWQgdG8gcGFydGljdWxhciBldmVudHMuIEV2ZXJ5IHBheWxvYWQgaXNcbiAqICAgICAgZGlzcGF0Y2hlZCB0byBldmVyeSByZWdpc3RlcmVkIGNhbGxiYWNrLlxuICogICAyKSBDYWxsYmFja3MgY2FuIGJlIGRlZmVycmVkIGluIHdob2xlIG9yIHBhcnQgdW50aWwgb3RoZXIgY2FsbGJhY2tzIGhhdmVcbiAqICAgICAgYmVlbiBleGVjdXRlZC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhpcyBoeXBvdGhldGljYWwgZmxpZ2h0IGRlc3RpbmF0aW9uIGZvcm0sIHdoaWNoXG4gKiBzZWxlY3RzIGEgZGVmYXVsdCBjaXR5IHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkOlxuICpcbiAqICAgdmFyIGZsaWdodERpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpO1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hpY2ggY291bnRyeSBpcyBzZWxlY3RlZFxuICogICB2YXIgQ291bnRyeVN0b3JlID0ge2NvdW50cnk6IG51bGx9O1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hpY2ggY2l0eSBpcyBzZWxlY3RlZFxuICogICB2YXIgQ2l0eVN0b3JlID0ge2NpdHk6IG51bGx9O1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGJhc2UgZmxpZ2h0IHByaWNlIG9mIHRoZSBzZWxlY3RlZCBjaXR5XG4gKiAgIHZhciBGbGlnaHRQcmljZVN0b3JlID0ge3ByaWNlOiBudWxsfVxuICpcbiAqIFdoZW4gYSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGVkIGNpdHksIHdlIGRpc3BhdGNoIHRoZSBwYXlsb2FkOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gKiAgICAgYWN0aW9uVHlwZTogJ2NpdHktdXBkYXRlJyxcbiAqICAgICBzZWxlY3RlZENpdHk6ICdwYXJpcydcbiAqICAgfSk7XG4gKlxuICogVGhpcyBwYXlsb2FkIGlzIGRpZ2VzdGVkIGJ5IGBDaXR5U3RvcmVgOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NpdHktdXBkYXRlJykge1xuICogICAgICAgQ2l0eVN0b3JlLmNpdHkgPSBwYXlsb2FkLnNlbGVjdGVkQ2l0eTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIGNvdW50cnksIHdlIGRpc3BhdGNoIHRoZSBwYXlsb2FkOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gKiAgICAgYWN0aW9uVHlwZTogJ2NvdW50cnktdXBkYXRlJyxcbiAqICAgICBzZWxlY3RlZENvdW50cnk6ICdhdXN0cmFsaWEnXG4gKiAgIH0pO1xuICpcbiAqIFRoaXMgcGF5bG9hZCBpcyBkaWdlc3RlZCBieSBib3RoIHN0b3JlczpcbiAqXG4gKiAgIENvdW50cnlTdG9yZS5kaXNwYXRjaFRva2VuID0gZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NvdW50cnktdXBkYXRlJykge1xuICogICAgICAgQ291bnRyeVN0b3JlLmNvdW50cnkgPSBwYXlsb2FkLnNlbGVjdGVkQ291bnRyeTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFdoZW4gdGhlIGNhbGxiYWNrIHRvIHVwZGF0ZSBgQ291bnRyeVN0b3JlYCBpcyByZWdpc3RlcmVkLCB3ZSBzYXZlIGEgcmVmZXJlbmNlXG4gKiB0byB0aGUgcmV0dXJuZWQgdG9rZW4uIFVzaW5nIHRoaXMgdG9rZW4gd2l0aCBgd2FpdEZvcigpYCwgd2UgY2FuIGd1YXJhbnRlZVxuICogdGhhdCBgQ291bnRyeVN0b3JlYCBpcyB1cGRhdGVkIGJlZm9yZSB0aGUgY2FsbGJhY2sgdGhhdCB1cGRhdGVzIGBDaXR5U3RvcmVgXG4gKiBuZWVkcyB0byBxdWVyeSBpdHMgZGF0YS5cbiAqXG4gKiAgIENpdHlTdG9yZS5kaXNwYXRjaFRva2VuID0gZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NvdW50cnktdXBkYXRlJykge1xuICogICAgICAgLy8gYENvdW50cnlTdG9yZS5jb3VudHJ5YCBtYXkgbm90IGJlIHVwZGF0ZWQuXG4gKiAgICAgICBmbGlnaHREaXNwYXRjaGVyLndhaXRGb3IoW0NvdW50cnlTdG9yZS5kaXNwYXRjaFRva2VuXSk7XG4gKiAgICAgICAvLyBgQ291bnRyeVN0b3JlLmNvdW50cnlgIGlzIG5vdyBndWFyYW50ZWVkIHRvIGJlIHVwZGF0ZWQuXG4gKlxuICogICAgICAgLy8gU2VsZWN0IHRoZSBkZWZhdWx0IGNpdHkgZm9yIHRoZSBuZXcgY291bnRyeVxuICogICAgICAgQ2l0eVN0b3JlLmNpdHkgPSBnZXREZWZhdWx0Q2l0eUZvckNvdW50cnkoQ291bnRyeVN0b3JlLmNvdW50cnkpO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogVGhlIHVzYWdlIG9mIGB3YWl0Rm9yKClgIGNhbiBiZSBjaGFpbmVkLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIEZsaWdodFByaWNlU3RvcmUuZGlzcGF0Y2hUb2tlbiA9XG4gKiAgICAgZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgICBzd2l0Y2ggKHBheWxvYWQuYWN0aW9uVHlwZSkge1xuICogICAgICAgICBjYXNlICdjb3VudHJ5LXVwZGF0ZSc6XG4gKiAgICAgICAgIGNhc2UgJ2NpdHktdXBkYXRlJzpcbiAqICAgICAgICAgICBmbGlnaHREaXNwYXRjaGVyLndhaXRGb3IoW0NpdHlTdG9yZS5kaXNwYXRjaFRva2VuXSk7XG4gKiAgICAgICAgICAgRmxpZ2h0UHJpY2VTdG9yZS5wcmljZSA9XG4gKiAgICAgICAgICAgICBnZXRGbGlnaHRQcmljZVN0b3JlKENvdW50cnlTdG9yZS5jb3VudHJ5LCBDaXR5U3RvcmUuY2l0eSk7XG4gKiAgICAgICAgICAgYnJlYWs7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBUaGUgYGNvdW50cnktdXBkYXRlYCBwYXlsb2FkIHdpbGwgYmUgZ3VhcmFudGVlZCB0byBpbnZva2UgdGhlIHN0b3JlcydcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGluIG9yZGVyOiBgQ291bnRyeVN0b3JlYCwgYENpdHlTdG9yZWAsIHRoZW5cbiAqIGBGbGlnaHRQcmljZVN0b3JlYC5cbiAqL1xuXG52YXIgRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpc3BhdGNoZXIpO1xuXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgdGhpcy5faXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzSGFuZGxlZCA9IHt9O1xuICAgIHRoaXMuX2lzUGVuZGluZyA9IHt9O1xuICAgIHRoaXMuX2xhc3RJRCA9IDE7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aXRoIGV2ZXJ5IGRpc3BhdGNoZWQgcGF5bG9hZC4gUmV0dXJuc1xuICAgKiBhIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgd2FpdEZvcigpYC5cbiAgICovXG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlcihjYWxsYmFjaykge1xuICAgIHZhciBpZCA9IF9wcmVmaXggKyB0aGlzLl9sYXN0SUQrKztcbiAgICB0aGlzLl9jYWxsYmFja3NbaWRdID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2FsbGJhY2sgYmFzZWQgb24gaXRzIHRva2VuLlxuICAgKi9cblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlcihpZCkge1xuICAgICF0aGlzLl9jYWxsYmFja3NbaWRdID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0Rpc3BhdGNoZXIudW5yZWdpc3RlciguLi4pOiBgJXNgIGRvZXMgbm90IG1hcCB0byBhIHJlZ2lzdGVyZWQgY2FsbGJhY2suJywgaWQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2lkXTtcbiAgfTtcblxuICAvKipcbiAgICogV2FpdHMgZm9yIHRoZSBjYWxsYmFja3Mgc3BlY2lmaWVkIHRvIGJlIGludm9rZWQgYmVmb3JlIGNvbnRpbnVpbmcgZXhlY3V0aW9uXG4gICAqIG9mIHRoZSBjdXJyZW50IGNhbGxiYWNrLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSB1c2VkIGJ5IGEgY2FsbGJhY2sgaW5cbiAgICogcmVzcG9uc2UgdG8gYSBkaXNwYXRjaGVkIHBheWxvYWQuXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLndhaXRGb3IgPSBmdW5jdGlvbiB3YWl0Rm9yKGlkcykge1xuICAgICF0aGlzLl9pc0Rpc3BhdGNoaW5nID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBNdXN0IGJlIGludm9rZWQgd2hpbGUgZGlzcGF0Y2hpbmcuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpZHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICB2YXIgaWQgPSBpZHNbaWldO1xuICAgICAgaWYgKHRoaXMuX2lzUGVuZGluZ1tpZF0pIHtcbiAgICAgICAgIXRoaXMuX2lzSGFuZGxlZFtpZF0gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IENpcmN1bGFyIGRlcGVuZGVuY3kgZGV0ZWN0ZWQgd2hpbGUgJyArICd3YWl0aW5nIGZvciBgJXNgLicsIGlkKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgIXRoaXMuX2NhbGxiYWNrc1tpZF0gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IGAlc2AgZG9lcyBub3QgbWFwIHRvIGEgcmVnaXN0ZXJlZCBjYWxsYmFjay4nLCBpZCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW52b2tlQ2FsbGJhY2soaWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIHBheWxvYWQgdG8gYWxsIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICAgKi9cblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKHBheWxvYWQpIHtcbiAgICAhIXRoaXMuX2lzRGlzcGF0Y2hpbmcgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGlzcGF0Y2guZGlzcGF0Y2goLi4uKTogQ2Fubm90IGRpc3BhdGNoIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc3RhcnREaXNwYXRjaGluZyhwYXlsb2FkKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5fY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1BlbmRpbmdbaWRdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW52b2tlQ2FsbGJhY2soaWQpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdG9wRGlzcGF0Y2hpbmcoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoaXMgRGlzcGF0Y2hlciBjdXJyZW50bHkgZGlzcGF0Y2hpbmcuXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmlzRGlzcGF0Y2hpbmcgPSBmdW5jdGlvbiBpc0Rpc3BhdGNoaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0Rpc3BhdGNoaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsIHRoZSBjYWxsYmFjayBzdG9yZWQgd2l0aCB0aGUgZ2l2ZW4gaWQuIEFsc28gZG8gc29tZSBpbnRlcm5hbFxuICAgKiBib29ra2VlcGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLl9pbnZva2VDYWxsYmFjayA9IGZ1bmN0aW9uIF9pbnZva2VDYWxsYmFjayhpZCkge1xuICAgIHRoaXMuX2lzUGVuZGluZ1tpZF0gPSB0cnVlO1xuICAgIHRoaXMuX2NhbGxiYWNrc1tpZF0odGhpcy5fcGVuZGluZ1BheWxvYWQpO1xuICAgIHRoaXMuX2lzSGFuZGxlZFtpZF0gPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdXAgYm9va2tlZXBpbmcgbmVlZGVkIHdoZW4gZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5fc3RhcnREaXNwYXRjaGluZyA9IGZ1bmN0aW9uIF9zdGFydERpc3BhdGNoaW5nKHBheWxvYWQpIHtcbiAgICBmb3IgKHZhciBpZCBpbiB0aGlzLl9jYWxsYmFja3MpIHtcbiAgICAgIHRoaXMuX2lzUGVuZGluZ1tpZF0gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzSGFuZGxlZFtpZF0gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fcGVuZGluZ1BheWxvYWQgPSBwYXlsb2FkO1xuICAgIHRoaXMuX2lzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhciBib29ra2VlcGluZyB1c2VkIGZvciBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLl9zdG9wRGlzcGF0Y2hpbmcgPSBmdW5jdGlvbiBfc3RvcERpc3BhdGNoaW5nKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUGF5bG9hZDtcbiAgICB0aGlzLl9pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIERpc3BhdGNoZXI7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXI7XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTltYkhWNEwyeHBZaTlFYVhOd1lYUmphR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nUTI5d2VYSnBaMmgwSUNoaktTQXlNREUwTFRJd01UVXNJRVpoWTJWaWIyOXJMQ0JKYm1NdVhHNGdLaUJCYkd3Z2NtbG5hSFJ6SUhKbGMyVnlkbVZrTGx4dUlDcGNiaUFxSUZSb2FYTWdjMjkxY21ObElHTnZaR1VnYVhNZ2JHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFSlRSQzF6ZEhsc1pTQnNhV05sYm5ObElHWnZkVzVrSUdsdUlIUm9aVnh1SUNvZ1RFbERSVTVUUlNCbWFXeGxJR2x1SUhSb1pTQnliMjkwSUdScGNtVmpkRzl5ZVNCdlppQjBhR2x6SUhOdmRYSmpaU0IwY21WbExpQkJiaUJoWkdScGRHbHZibUZzSUdkeVlXNTBYRzRnS2lCdlppQndZWFJsYm5RZ2NtbG5hSFJ6SUdOaGJpQmlaU0JtYjNWdVpDQnBiaUIwYUdVZ1VFRlVSVTVVVXlCbWFXeGxJR2x1SUhSb1pTQnpZVzFsSUdScGNtVmpkRzl5ZVM1Y2JpQXFYRzRnS2lCQWNISnZkbWxrWlhOTmIyUjFiR1VnUkdsemNHRjBZMmhsY2x4dUlDb2dYRzRnS2lCQWNISmxkbVZ1ZEUxMWJtZGxYRzRnS2k5Y2JseHVKM1Z6WlNCemRISnBZM1FuTzF4dVhHNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE8xeHVYRzVtZFc1amRHbHZiaUJmWTJ4aGMzTkRZV3hzUTJobFkyc29hVzV6ZEdGdVkyVXNJRU52Ym5OMGNuVmpkRzl5S1NCN0lHbG1JQ2doS0dsdWMzUmhibU5sSUdsdWMzUmhibU5sYjJZZ1EyOXVjM1J5ZFdOMGIzSXBLU0I3SUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owTmhibTV2ZENCallXeHNJR0VnWTJ4aGMzTWdZWE1nWVNCbWRXNWpkR2x2YmljcE95QjlJSDFjYmx4dWRtRnlJR2x1ZG1GeWFXRnVkQ0E5SUhKbGNYVnBjbVVvSjJaaWFuTXZiR2xpTDJsdWRtRnlhV0Z1ZENjcE8xeHVYRzUyWVhJZ1gzQnlaV1pwZUNBOUlDZEpSRjhuTzF4dVhHNHZLaXBjYmlBcUlFUnBjM0JoZEdOb1pYSWdhWE1nZFhObFpDQjBieUJpY205aFpHTmhjM1FnY0dGNWJHOWhaSE1nZEc4Z2NtVm5hWE4wWlhKbFpDQmpZV3hzWW1GamEzTXVJRlJvYVhNZ2FYTmNiaUFxSUdScFptWmxjbVZ1ZENCbWNtOXRJR2RsYm1WeWFXTWdjSFZpTFhOMVlpQnplWE4wWlcxeklHbHVJSFIzYnlCM1lYbHpPbHh1SUNwY2JpQXFJQ0FnTVNrZ1EyRnNiR0poWTJ0eklHRnlaU0J1YjNRZ2MzVmljMk55YVdKbFpDQjBieUJ3WVhKMGFXTjFiR0Z5SUdWMlpXNTBjeTRnUlhabGNua2djR0Y1Ykc5aFpDQnBjMXh1SUNvZ0lDQWdJQ0JrYVhOd1lYUmphR1ZrSUhSdklHVjJaWEo1SUhKbFoybHpkR1Z5WldRZ1kyRnNiR0poWTJzdVhHNGdLaUFnSURJcElFTmhiR3hpWVdOcmN5QmpZVzRnWW1VZ1pHVm1aWEp5WldRZ2FXNGdkMmh2YkdVZ2IzSWdjR0Z5ZENCMWJuUnBiQ0J2ZEdobGNpQmpZV3hzWW1GamEzTWdhR0YyWlZ4dUlDb2dJQ0FnSUNCaVpXVnVJR1Y0WldOMWRHVmtMbHh1SUNwY2JpQXFJRVp2Y2lCbGVHRnRjR3hsTENCamIyNXphV1JsY2lCMGFHbHpJR2g1Y0c5MGFHVjBhV05oYkNCbWJHbG5hSFFnWkdWemRHbHVZWFJwYjI0Z1ptOXliU3dnZDJocFkyaGNiaUFxSUhObGJHVmpkSE1nWVNCa1pXWmhkV3gwSUdOcGRIa2dkMmhsYmlCaElHTnZkVzUwY25rZ2FYTWdjMlZzWldOMFpXUTZYRzRnS2x4dUlDb2dJQ0IyWVhJZ1pteHBaMmgwUkdsemNHRjBZMmhsY2lBOUlHNWxkeUJFYVhOd1lYUmphR1Z5S0NrN1hHNGdLbHh1SUNvZ0lDQXZMeUJMWldWd2N5QjBjbUZqYXlCdlppQjNhR2xqYUNCamIzVnVkSEo1SUdseklITmxiR1ZqZEdWa1hHNGdLaUFnSUhaaGNpQkRiM1Z1ZEhKNVUzUnZjbVVnUFNCN1kyOTFiblJ5ZVRvZ2JuVnNiSDA3WEc0Z0tseHVJQ29nSUNBdkx5QkxaV1Z3Y3lCMGNtRmpheUJ2WmlCM2FHbGphQ0JqYVhSNUlHbHpJSE5sYkdWamRHVmtYRzRnS2lBZ0lIWmhjaUJEYVhSNVUzUnZjbVVnUFNCN1kybDBlVG9nYm5Wc2JIMDdYRzRnS2x4dUlDb2dJQ0F2THlCTFpXVndjeUIwY21GamF5QnZaaUIwYUdVZ1ltRnpaU0JtYkdsbmFIUWdjSEpwWTJVZ2IyWWdkR2hsSUhObGJHVmpkR1ZrSUdOcGRIbGNiaUFxSUNBZ2RtRnlJRVpzYVdkb2RGQnlhV05sVTNSdmNtVWdQU0I3Y0hKcFkyVTZJRzUxYkd4OVhHNGdLbHh1SUNvZ1YyaGxiaUJoSUhWelpYSWdZMmhoYm1kbGN5QjBhR1VnYzJWc1pXTjBaV1FnWTJsMGVTd2dkMlVnWkdsemNHRjBZMmdnZEdobElIQmhlV3h2WVdRNlhHNGdLbHh1SUNvZ0lDQm1iR2xuYUhSRWFYTndZWFJqYUdWeUxtUnBjM0JoZEdOb0tIdGNiaUFxSUNBZ0lDQmhZM1JwYjI1VWVYQmxPaUFuWTJsMGVTMTFjR1JoZEdVbkxGeHVJQ29nSUNBZ0lITmxiR1ZqZEdWa1EybDBlVG9nSjNCaGNtbHpKMXh1SUNvZ0lDQjlLVHRjYmlBcVhHNGdLaUJVYUdseklIQmhlV3h2WVdRZ2FYTWdaR2xuWlhOMFpXUWdZbmtnWUVOcGRIbFRkRzl5WldBNlhHNGdLbHh1SUNvZ0lDQm1iR2xuYUhSRWFYTndZWFJqYUdWeUxuSmxaMmx6ZEdWeUtHWjFibU4wYVc5dUtIQmhlV3h2WVdRcElIdGNiaUFxSUNBZ0lDQnBaaUFvY0dGNWJHOWhaQzVoWTNScGIyNVVlWEJsSUQwOVBTQW5ZMmwwZVMxMWNHUmhkR1VuS1NCN1hHNGdLaUFnSUNBZ0lDQkRhWFI1VTNSdmNtVXVZMmwwZVNBOUlIQmhlV3h2WVdRdWMyVnNaV04wWldSRGFYUjVPMXh1SUNvZ0lDQWdJSDFjYmlBcUlDQWdmU2s3WEc0Z0tseHVJQ29nVjJobGJpQjBhR1VnZFhObGNpQnpaV3hsWTNSeklHRWdZMjkxYm5SeWVTd2dkMlVnWkdsemNHRjBZMmdnZEdobElIQmhlV3h2WVdRNlhHNGdLbHh1SUNvZ0lDQm1iR2xuYUhSRWFYTndZWFJqYUdWeUxtUnBjM0JoZEdOb0tIdGNiaUFxSUNBZ0lDQmhZM1JwYjI1VWVYQmxPaUFuWTI5MWJuUnllUzExY0dSaGRHVW5MRnh1SUNvZ0lDQWdJSE5sYkdWamRHVmtRMjkxYm5SeWVUb2dKMkYxYzNSeVlXeHBZU2RjYmlBcUlDQWdmU2s3WEc0Z0tseHVJQ29nVkdocGN5QndZWGxzYjJGa0lHbHpJR1JwWjJWemRHVmtJR0o1SUdKdmRHZ2djM1J2Y21Wek9seHVJQ3BjYmlBcUlDQWdRMjkxYm5SeWVWTjBiM0psTG1ScGMzQmhkR05vVkc5clpXNGdQU0JtYkdsbmFIUkVhWE53WVhSamFHVnlMbkpsWjJsemRHVnlLR1oxYm1OMGFXOXVLSEJoZVd4dllXUXBJSHRjYmlBcUlDQWdJQ0JwWmlBb2NHRjViRzloWkM1aFkzUnBiMjVVZVhCbElEMDlQU0FuWTI5MWJuUnllUzExY0dSaGRHVW5LU0I3WEc0Z0tpQWdJQ0FnSUNCRGIzVnVkSEo1VTNSdmNtVXVZMjkxYm5SeWVTQTlJSEJoZVd4dllXUXVjMlZzWldOMFpXUkRiM1Z1ZEhKNU8xeHVJQ29nSUNBZ0lIMWNiaUFxSUNBZ2ZTazdYRzRnS2x4dUlDb2dWMmhsYmlCMGFHVWdZMkZzYkdKaFkyc2dkRzhnZFhCa1lYUmxJR0JEYjNWdWRISjVVM1J2Y21WZ0lHbHpJSEpsWjJsemRHVnlaV1FzSUhkbElITmhkbVVnWVNCeVpXWmxjbVZ1WTJWY2JpQXFJSFJ2SUhSb1pTQnlaWFIxY201bFpDQjBiMnRsYmk0Z1ZYTnBibWNnZEdocGN5QjBiMnRsYmlCM2FYUm9JR0IzWVdsMFJtOXlLQ2xnTENCM1pTQmpZVzRnWjNWaGNtRnVkR1ZsWEc0Z0tpQjBhR0YwSUdCRGIzVnVkSEo1VTNSdmNtVmdJR2x6SUhWd1pHRjBaV1FnWW1WbWIzSmxJSFJvWlNCallXeHNZbUZqYXlCMGFHRjBJSFZ3WkdGMFpYTWdZRU5wZEhsVGRHOXlaV0JjYmlBcUlHNWxaV1J6SUhSdklIRjFaWEo1SUdsMGN5QmtZWFJoTGx4dUlDcGNiaUFxSUNBZ1EybDBlVk4wYjNKbExtUnBjM0JoZEdOb1ZHOXJaVzRnUFNCbWJHbG5hSFJFYVhOd1lYUmphR1Z5TG5KbFoybHpkR1Z5S0daMWJtTjBhVzl1S0hCaGVXeHZZV1FwSUh0Y2JpQXFJQ0FnSUNCcFppQW9jR0Y1Ykc5aFpDNWhZM1JwYjI1VWVYQmxJRDA5UFNBblkyOTFiblJ5ZVMxMWNHUmhkR1VuS1NCN1hHNGdLaUFnSUNBZ0lDQXZMeUJnUTI5MWJuUnllVk4wYjNKbExtTnZkVzUwY25sZ0lHMWhlU0J1YjNRZ1ltVWdkWEJrWVhSbFpDNWNiaUFxSUNBZ0lDQWdJR1pzYVdkb2RFUnBjM0JoZEdOb1pYSXVkMkZwZEVadmNpaGJRMjkxYm5SeWVWTjBiM0psTG1ScGMzQmhkR05vVkc5clpXNWRLVHRjYmlBcUlDQWdJQ0FnSUM4dklHQkRiM1Z1ZEhKNVUzUnZjbVV1WTI5MWJuUnllV0FnYVhNZ2JtOTNJR2QxWVhKaGJuUmxaV1FnZEc4Z1ltVWdkWEJrWVhSbFpDNWNiaUFxWEc0Z0tpQWdJQ0FnSUNBdkx5QlRaV3hsWTNRZ2RHaGxJR1JsWm1GMWJIUWdZMmwwZVNCbWIzSWdkR2hsSUc1bGR5QmpiM1Z1ZEhKNVhHNGdLaUFnSUNBZ0lDQkRhWFI1VTNSdmNtVXVZMmwwZVNBOUlHZGxkRVJsWm1GMWJIUkRhWFI1Um05eVEyOTFiblJ5ZVNoRGIzVnVkSEo1VTNSdmNtVXVZMjkxYm5SeWVTazdYRzRnS2lBZ0lDQWdmVnh1SUNvZ0lDQjlLVHRjYmlBcVhHNGdLaUJVYUdVZ2RYTmhaMlVnYjJZZ1lIZGhhWFJHYjNJb0tXQWdZMkZ1SUdKbElHTm9ZV2x1WldRc0lHWnZjaUJsZUdGdGNHeGxPbHh1SUNwY2JpQXFJQ0FnUm14cFoyaDBVSEpwWTJWVGRHOXlaUzVrYVhOd1lYUmphRlJ2YTJWdUlEMWNiaUFxSUNBZ0lDQm1iR2xuYUhSRWFYTndZWFJqYUdWeUxuSmxaMmx6ZEdWeUtHWjFibU4wYVc5dUtIQmhlV3h2WVdRcElIdGNiaUFxSUNBZ0lDQWdJSE4zYVhSamFDQW9jR0Y1Ykc5aFpDNWhZM1JwYjI1VWVYQmxLU0I3WEc0Z0tpQWdJQ0FnSUNBZ0lHTmhjMlVnSjJOdmRXNTBjbmt0ZFhCa1lYUmxKenBjYmlBcUlDQWdJQ0FnSUNBZ1kyRnpaU0FuWTJsMGVTMTFjR1JoZEdVbk9seHVJQ29nSUNBZ0lDQWdJQ0FnSUdac2FXZG9kRVJwYzNCaGRHTm9aWEl1ZDJGcGRFWnZjaWhiUTJsMGVWTjBiM0psTG1ScGMzQmhkR05vVkc5clpXNWRLVHRjYmlBcUlDQWdJQ0FnSUNBZ0lDQkdiR2xuYUhSUWNtbGpaVk4wYjNKbExuQnlhV05sSUQxY2JpQXFJQ0FnSUNBZ0lDQWdJQ0FnSUdkbGRFWnNhV2RvZEZCeWFXTmxVM1J2Y21Vb1EyOTFiblJ5ZVZOMGIzSmxMbU52ZFc1MGNua3NJRU5wZEhsVGRHOXlaUzVqYVhSNUtUdGNiaUFxSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBcUlDQWdJQ0I5WEc0Z0tpQWdJSDBwTzF4dUlDcGNiaUFxSUZSb1pTQmdZMjkxYm5SeWVTMTFjR1JoZEdWZ0lIQmhlV3h2WVdRZ2QybHNiQ0JpWlNCbmRXRnlZVzUwWldWa0lIUnZJR2x1ZG05clpTQjBhR1VnYzNSdmNtVnpKMXh1SUNvZ2NtVm5hWE4wWlhKbFpDQmpZV3hzWW1GamEzTWdhVzRnYjNKa1pYSTZJR0JEYjNWdWRISjVVM1J2Y21WZ0xDQmdRMmwwZVZOMGIzSmxZQ3dnZEdobGJseHVJQ29nWUVac2FXZG9kRkJ5YVdObFUzUnZjbVZnTGx4dUlDb3ZYRzVjYm5aaGNpQkVhWE53WVhSamFHVnlJRDBnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnWm5WdVkzUnBiMjRnUkdsemNHRjBZMmhsY2lncElIdGNiaUFnSUNCZlkyeGhjM05EWVd4c1EyaGxZMnNvZEdocGN5d2dSR2x6Y0dGMFkyaGxjaWs3WEc1Y2JpQWdJQ0IwYUdsekxsOWpZV3hzWW1GamEzTWdQU0I3ZlR0Y2JpQWdJQ0IwYUdsekxsOXBjMFJwYzNCaGRHTm9hVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdkR2hwY3k1ZmFYTklZVzVrYkdWa0lEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1ZmFYTlFaVzVrYVc1bklEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1ZmJHRnpkRWxFSUQwZ01UdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWldkcGMzUmxjbk1nWVNCallXeHNZbUZqYXlCMGJ5QmlaU0JwYm5admEyVmtJSGRwZEdnZ1pYWmxjbmtnWkdsemNHRjBZMmhsWkNCd1lYbHNiMkZrTGlCU1pYUjFjbTV6WEc0Z0lDQXFJR0VnZEc5clpXNGdkR2hoZENCallXNGdZbVVnZFhObFpDQjNhWFJvSUdCM1lXbDBSbTl5S0NsZ0xseHVJQ0FnS2k5Y2JseHVJQ0JFYVhOd1lYUmphR1Z5TG5CeWIzUnZkSGx3WlM1eVpXZHBjM1JsY2lBOUlHWjFibU4wYVc5dUlISmxaMmx6ZEdWeUtHTmhiR3hpWVdOcktTQjdYRzRnSUNBZ2RtRnlJR2xrSUQwZ1gzQnlaV1pwZUNBcklIUm9hWE11WDJ4aGMzUkpSQ3NyTzF4dUlDQWdJSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHBaRjBnUFNCallXeHNZbUZqYXp0Y2JpQWdJQ0J5WlhSMWNtNGdhV1E3WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlhNZ1lTQmpZV3hzWW1GamF5QmlZWE5sWkNCdmJpQnBkSE1nZEc5clpXNHVYRzRnSUNBcUwxeHVYRzRnSUVScGMzQmhkR05vWlhJdWNISnZkRzkwZVhCbExuVnVjbVZuYVhOMFpYSWdQU0JtZFc1amRHbHZiaUIxYm5KbFoybHpkR1Z5S0dsa0tTQjdYRzRnSUNBZ0lYUm9hWE11WDJOaGJHeGlZV05yYzF0cFpGMGdQeUJ3Y205alpYTnpMbVZ1ZGk1T1QwUkZYMFZPVmlBaFBUMGdKM0J5YjJSMVkzUnBiMjRuSUQ4Z2FXNTJZWEpwWVc1MEtHWmhiSE5sTENBblJHbHpjR0YwWTJobGNpNTFibkpsWjJsemRHVnlLQzR1TGlrNklHQWxjMkFnWkc5bGN5QnViM1FnYldGd0lIUnZJR0VnY21WbmFYTjBaWEpsWkNCallXeHNZbUZqYXk0bkxDQnBaQ2tnT2lCcGJuWmhjbWxoYm5Rb1ptRnNjMlVwSURvZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUdSbGJHVjBaU0IwYUdsekxsOWpZV3hzWW1GamEzTmJhV1JkTzF4dUlDQjlPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlhZV2wwY3lCbWIzSWdkR2hsSUdOaGJHeGlZV05yY3lCemNHVmphV1pwWldRZ2RHOGdZbVVnYVc1MmIydGxaQ0JpWldadmNtVWdZMjl1ZEdsdWRXbHVaeUJsZUdWamRYUnBiMjVjYmlBZ0lDb2diMllnZEdobElHTjFjbkpsYm5RZ1kyRnNiR0poWTJzdUlGUm9hWE1nYldWMGFHOWtJSE5vYjNWc1pDQnZibXg1SUdKbElIVnpaV1FnWW5rZ1lTQmpZV3hzWW1GamF5QnBibHh1SUNBZ0tpQnlaWE53YjI1elpTQjBieUJoSUdScGMzQmhkR05vWldRZ2NHRjViRzloWkM1Y2JpQWdJQ292WEc1Y2JpQWdSR2x6Y0dGMFkyaGxjaTV3Y205MGIzUjVjR1V1ZDJGcGRFWnZjaUE5SUdaMWJtTjBhVzl1SUhkaGFYUkdiM0lvYVdSektTQjdYRzRnSUNBZ0lYUm9hWE11WDJselJHbHpjR0YwWTJocGJtY2dQeUJ3Y205alpYTnpMbVZ1ZGk1T1QwUkZYMFZPVmlBaFBUMGdKM0J5YjJSMVkzUnBiMjRuSUQ4Z2FXNTJZWEpwWVc1MEtHWmhiSE5sTENBblJHbHpjR0YwWTJobGNpNTNZV2wwUm05eUtDNHVMaWs2SUUxMWMzUWdZbVVnYVc1MmIydGxaQ0IzYUdsc1pTQmthWE53WVhSamFHbHVaeTRuS1NBNklHbHVkbUZ5YVdGdWRDaG1ZV3h6WlNrZ09pQjFibVJsWm1sdVpXUTdYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FXa2dQU0F3T3lCcGFTQThJR2xrY3k1c1pXNW5kR2c3SUdscEt5c3BJSHRjYmlBZ0lDQWdJSFpoY2lCcFpDQTlJR2xrYzF0cGFWMDdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWZhWE5RWlc1a2FXNW5XMmxrWFNrZ2UxeHVJQ0FnSUNBZ0lDQWhkR2hwY3k1ZmFYTklZVzVrYkdWa1cybGtYU0EvSUhCeWIyTmxjM011Wlc1MkxrNVBSRVZmUlU1V0lDRTlQU0FuY0hKdlpIVmpkR2x2YmljZ1B5QnBiblpoY21saGJuUW9abUZzYzJVc0lDZEVhWE53WVhSamFHVnlMbmRoYVhSR2IzSW9MaTR1S1RvZ1EybHlZM1ZzWVhJZ1pHVndaVzVrWlc1amVTQmtaWFJsWTNSbFpDQjNhR2xzWlNBbklDc2dKM2RoYVhScGJtY2dabTl5SUdBbGMyQXVKeXdnYVdRcElEb2dhVzUyWVhKcFlXNTBLR1poYkhObEtTQTZJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnWTI5dWRHbHVkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0FoZEdocGN5NWZZMkZzYkdKaFkydHpXMmxrWFNBL0lIQnliMk5sYzNNdVpXNTJMazVQUkVWZlJVNVdJQ0U5UFNBbmNISnZaSFZqZEdsdmJpY2dQeUJwYm5aaGNtbGhiblFvWm1Gc2MyVXNJQ2RFYVhOd1lYUmphR1Z5TG5kaGFYUkdiM0lvTGk0dUtUb2dZQ1Z6WUNCa2IyVnpJRzV2ZENCdFlYQWdkRzhnWVNCeVpXZHBjM1JsY21Wa0lHTmhiR3hpWVdOckxpY3NJR2xrS1NBNklHbHVkbUZ5YVdGdWRDaG1ZV3h6WlNrZ09pQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0lDQjBhR2x6TGw5cGJuWnZhMlZEWVd4c1ltRmpheWhwWkNrN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkVhWE53WVhSamFHVnpJR0VnY0dGNWJHOWhaQ0IwYnlCaGJHd2djbVZuYVhOMFpYSmxaQ0JqWVd4c1ltRmphM011WEc0Z0lDQXFMMXh1WEc0Z0lFUnBjM0JoZEdOb1pYSXVjSEp2ZEc5MGVYQmxMbVJwYzNCaGRHTm9JRDBnWm5WdVkzUnBiMjRnWkdsemNHRjBZMmdvY0dGNWJHOWhaQ2tnZTF4dUlDQWdJQ0VoZEdocGN5NWZhWE5FYVhOd1lYUmphR2x1WnlBL0lIQnliMk5sYzNNdVpXNTJMazVQUkVWZlJVNVdJQ0U5UFNBbmNISnZaSFZqZEdsdmJpY2dQeUJwYm5aaGNtbGhiblFvWm1Gc2MyVXNJQ2RFYVhOd1lYUmphQzVrYVhOd1lYUmphQ2d1TGk0cE9pQkRZVzV1YjNRZ1pHbHpjR0YwWTJnZ2FXNGdkR2hsSUcxcFpHUnNaU0J2WmlCaElHUnBjM0JoZEdOb0xpY3BJRG9nYVc1MllYSnBZVzUwS0daaGJITmxLU0E2SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0IwYUdsekxsOXpkR0Z5ZEVScGMzQmhkR05vYVc1bktIQmhlV3h2WVdRcE8xeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBaQ0JwYmlCMGFHbHpMbDlqWVd4c1ltRmphM01wSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgybHpVR1Z1WkdsdVoxdHBaRjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwYVc1MVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxsOXBiblp2YTJWRFlXeHNZbUZqYXlocFpDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTQm1hVzVoYkd4NUlIdGNiaUFnSUNBZ0lIUm9hWE11WDNOMGIzQkVhWE53WVhSamFHbHVaeWdwTzF4dUlDQWdJSDFjYmlBZ2ZUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1NYTWdkR2hwY3lCRWFYTndZWFJqYUdWeUlHTjFjbkpsYm5Sc2VTQmthWE53WVhSamFHbHVaeTVjYmlBZ0lDb3ZYRzVjYmlBZ1JHbHpjR0YwWTJobGNpNXdjbTkwYjNSNWNHVXVhWE5FYVhOd1lYUmphR2x1WnlBOUlHWjFibU4wYVc5dUlHbHpSR2x6Y0dGMFkyaHBibWNvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgybHpSR2x6Y0dGMFkyaHBibWM3WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFTmhiR3dnZEdobElHTmhiR3hpWVdOcklITjBiM0psWkNCM2FYUm9JSFJvWlNCbmFYWmxiaUJwWkM0Z1FXeHpieUJrYnlCemIyMWxJR2x1ZEdWeWJtRnNYRzRnSUNBcUlHSnZiMnRyWldWd2FXNW5MbHh1SUNBZ0tseHVJQ0FnS2lCQWFXNTBaWEp1WVd4Y2JpQWdJQ292WEc1Y2JpQWdSR2x6Y0dGMFkyaGxjaTV3Y205MGIzUjVjR1V1WDJsdWRtOXJaVU5oYkd4aVlXTnJJRDBnWm5WdVkzUnBiMjRnWDJsdWRtOXJaVU5oYkd4aVlXTnJLR2xrS1NCN1hHNGdJQ0FnZEdocGN5NWZhWE5RWlc1a2FXNW5XMmxrWFNBOUlIUnlkV1U3WEc0Z0lDQWdkR2hwY3k1ZlkyRnNiR0poWTJ0elcybGtYU2gwYUdsekxsOXdaVzVrYVc1blVHRjViRzloWkNrN1hHNGdJQ0FnZEdocGN5NWZhWE5JWVc1a2JHVmtXMmxrWFNBOUlIUnlkV1U3WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTmxkQ0IxY0NCaWIyOXJhMlZsY0dsdVp5QnVaV1ZrWldRZ2QyaGxiaUJrYVhOd1lYUmphR2x1Wnk1Y2JpQWdJQ3BjYmlBZ0lDb2dRR2x1ZEdWeWJtRnNYRzRnSUNBcUwxeHVYRzRnSUVScGMzQmhkR05vWlhJdWNISnZkRzkwZVhCbExsOXpkR0Z5ZEVScGMzQmhkR05vYVc1bklEMGdablZ1WTNScGIyNGdYM04wWVhKMFJHbHpjR0YwWTJocGJtY29jR0Y1Ykc5aFpDa2dlMXh1SUNBZ0lHWnZjaUFvZG1GeUlHbGtJR2x1SUhSb2FYTXVYMk5oYkd4aVlXTnJjeWtnZTF4dUlDQWdJQ0FnZEdocGN5NWZhWE5RWlc1a2FXNW5XMmxrWFNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnZEdocGN5NWZhWE5JWVc1a2JHVmtXMmxrWFNBOUlHWmhiSE5sTzF4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TGw5d1pXNWthVzVuVUdGNWJHOWhaQ0E5SUhCaGVXeHZZV1E3WEc0Z0lDQWdkR2hwY3k1ZmFYTkVhWE53WVhSamFHbHVaeUE5SUhSeWRXVTdYRzRnSUgwN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVOc1pXRnlJR0p2YjJ0clpXVndhVzVuSUhWelpXUWdabTl5SUdScGMzQmhkR05vYVc1bkxseHVJQ0FnS2x4dUlDQWdLaUJBYVc1MFpYSnVZV3hjYmlBZ0lDb3ZYRzVjYmlBZ1JHbHpjR0YwWTJobGNpNXdjbTkwYjNSNWNHVXVYM04wYjNCRWFYTndZWFJqYUdsdVp5QTlJR1oxYm1OMGFXOXVJRjl6ZEc5d1JHbHpjR0YwWTJocGJtY29LU0I3WEc0Z0lDQWdaR1ZzWlhSbElIUm9hWE11WDNCbGJtUnBibWRRWVhsc2IyRmtPMXh1SUNBZ0lIUm9hWE11WDJselJHbHpjR0YwWTJocGJtY2dQU0JtWVd4elpUdGNiaUFnZlR0Y2JseHVJQ0J5WlhSMWNtNGdSR2x6Y0dGMFkyaGxjanRjYm4wcEtDazdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUkdsemNHRjBZMmhsY2pzaVhYMD0iLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGbHV4Q29udGFpbmVyXG4gKiBcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEZsdXhTdG9yZUdyb3VwID0gcmVxdWlyZSgnLi9GbHV4U3RvcmVHcm91cCcpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnZmJqcy9saWIvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHB1cmU6IHRydWUsXG4gIHdpdGhQcm9wczogZmFsc2Vcbn07XG5cbi8qKlxuICogQSBGbHV4Q29udGFpbmVyIGlzIHVzZWQgdG8gc3Vic2NyaWJlIGEgcmVhY3QgY29tcG9uZW50IHRvIG11bHRpcGxlIHN0b3Jlcy5cbiAqIFRoZSBzdG9yZXMgdGhhdCBhcmUgdXNlZCBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBzdGF0aWMgYGdldFN0b3JlcygpYCBtZXRob2QuXG4gKlxuICogVGhlIGNvbXBvbmVudCByZWNlaXZlcyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzdG9yZXMgdmlhIHN0YXRlLiBUaGUgc3RhdGVcbiAqIGlzIGdlbmVyYXRlZCB1c2luZyBhIHN0YXRpYyBgY2FsY3VsYXRlU3RhdGUoKWAgbWV0aG9kIHRoYXQgZWFjaCBjb250YWluZXJcbiAqIG11c3QgaW1wbGVtZW50LiBBIHNpbXBsZSBjb250YWluZXIgbWF5IGxvb2sgbGlrZTpcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKEJhc2UsIG9wdGlvbnMpIHtcbiAgZW5mb3JjZUludGVyZmFjZShCYXNlKTtcblxuICAvLyBDb25zdHJ1Y3QgdGhlIG9wdGlvbnMgdXNpbmcgZGVmYXVsdCwgb3ZlcnJpZGUgd2l0aCB1c2VyIHZhbHVlcyBhcyBuZWNlc3NhcnlcbiAgdmFyIHJlYWxPcHRpb25zID0gX2V4dGVuZHMoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgdmFyIEZsdXhDb250YWluZXJDbGFzcyA9IChmdW5jdGlvbiAoX0Jhc2UpIHtcbiAgICBfaW5oZXJpdHMoRmx1eENvbnRhaW5lckNsYXNzLCBfQmFzZSk7XG5cbiAgICBmdW5jdGlvbiBGbHV4Q29udGFpbmVyQ2xhc3MocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbHV4Q29udGFpbmVyQ2xhc3MpO1xuXG4gICAgICBfQmFzZS5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSByZWFsT3B0aW9ucy53aXRoUHJvcHMgPyBCYXNlLmNhbGN1bGF0ZVN0YXRlKG51bGwsIHByb3BzKSA6IEJhc2UuY2FsY3VsYXRlU3RhdGUobnVsbCwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2Ugb3ZlcnJpZGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlIG9ubHkgaWYgdGhlIHB1cmUgb3B0aW9uIGlzXG4gICAgLy8gc3BlY2lmaWVkLiBXZSBjYW4ndCBvdmVycmlkZSB0aGlzIGFib3ZlIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBvdmVycmlkZVxuICAgIC8vIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9uIGFjY2lkZW50LiBTdXBlciB3b3JrcyB3ZWlyZCB3aXRoIHJlYWN0IEVTNiBjbGFzc2VzXG4gICAgLy8gcmlnaHQgbm93XG5cbiAgICBGbHV4Q29udGFpbmVyQ2xhc3MucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoX0Jhc2UucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgICAgIF9CYXNlLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RvcmVzID0gQmFzZS5nZXRTdG9yZXMoKTtcblxuICAgICAgLy8gVGhpcyB0cmFja3Mgd2hlbiBhbnkgc3RvcmUgaGFzIGNoYW5nZWQgYW5kIHdlIG1heSBuZWVkIHRvIHVwZGF0ZS5cbiAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB2YXIgc2V0Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICAvLyBUaGlzIGFkZHMgc3Vic2NyaXB0aW9ucyB0byBzdG9yZXMuIFdoZW4gYSBzdG9yZSBjaGFuZ2VzIGFsbCB3ZSBkbyBpc1xuICAgICAgLy8gc2V0IGNoYW5nZWQgdG8gdHJ1ZS5cbiAgICAgIHRoaXMuX2ZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zID0gc3RvcmVzLm1hcChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmFkZExpc3RlbmVyKHNldENoYW5nZWQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIGFmdGVyIHRoZSBkaXNwYXRjaCBvZiB0aGUgcmVsZXZhbnQgc3RvcmVzLiBJZlxuICAgICAgLy8gYW55IGhhdmUgcmVwb3J0ZWQgYSBjaGFuZ2Ugd2UgdXBkYXRlIHRoZSBzdGF0ZSwgdGhlbiByZXNldCBjaGFuZ2VkLlxuICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFsT3B0aW9ucy53aXRoUHJvcHMgPyBCYXNlLmNhbGN1bGF0ZVN0YXRlKHByZXZTdGF0ZSwgX3RoaXMucHJvcHMpIDogQmFzZS5jYWxjdWxhdGVTdGF0ZShwcmV2U3RhdGUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2ZsdXhDb250YWluZXJTdG9yZUdyb3VwID0gbmV3IEZsdXhTdG9yZUdyb3VwKHN0b3JlcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBGbHV4Q29udGFpbmVyQ2xhc3MucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dENvbnRleHQpIHtcbiAgICAgIGlmIChfQmFzZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcykge1xuICAgICAgICBfQmFzZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5jYWxsKHRoaXMsIG5leHRQcm9wcywgbmV4dENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBlbHNlIGlmIHRoZSBjb250YWluZXIgaXMgbm90IGNvbmZpZ3VyZWQgdG8gdXNlIHByb3BzXG4gICAgICBpZiAoIXJlYWxPcHRpb25zLndpdGhQcm9wcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgcHVyZSB3ZSBjYW4gcG90ZW50aWFsbHkgb3B0aW1pemUgb3V0IHRoZSBjYWxjdWxhdGUgc3RhdGVcbiAgICAgIGlmIChyZWFsT3B0aW9ucy5wdXJlICYmIHNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRmluYWxseSB1cGRhdGUgdGhlIHN0YXRlIHVzaW5nIHRoZSBuZXcgcHJvcHNcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4gQmFzZS5jYWxjdWxhdGVTdGF0ZShwcmV2U3RhdGUsIG5leHRQcm9wcyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRmx1eENvbnRhaW5lckNsYXNzLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKF9CYXNlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgICAgICBfQmFzZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZmx1eENvbnRhaW5lclN0b3JlR3JvdXAucmVsZWFzZSgpO1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5fZmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF9yZWY7XG5cbiAgICAgICAgc3Vic2NyaXB0aW9uLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEZsdXhDb250YWluZXJDbGFzcztcbiAgfSkoQmFzZSk7XG5cbiAgdmFyIGNvbnRhaW5lciA9IHJlYWxPcHRpb25zLnB1cmUgPyBjcmVhdGVQdXJlQ29udGFpbmVyKEZsdXhDb250YWluZXJDbGFzcykgOiBGbHV4Q29udGFpbmVyQ2xhc3M7XG5cbiAgLy8gVXBkYXRlIHRoZSBuYW1lIG9mIHRoZSBjb250YWluZXIgYmVmb3JlIHJldHVybmluZ1xuICB2YXIgY29tcG9uZW50TmFtZSA9IEJhc2UuZGlzcGxheU5hbWUgfHwgQmFzZS5uYW1lO1xuICBjb250YWluZXIuZGlzcGxheU5hbWUgPSAnRmx1eENvbnRhaW5lcignICsgY29tcG9uZW50TmFtZSArICcpJztcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBUT0RPOiB0eXBlY2hlY2sgdGhpcyBiZXR0ZXJcbmZ1bmN0aW9uIGNyZWF0ZVB1cmVDb250YWluZXIoRmx1eENvbnRhaW5lckJhc2UpIHtcbiAgdmFyIFB1cmVGbHV4Q29udGFpbmVyQ2xhc3MgPSAoZnVuY3Rpb24gKF9GbHV4Q29udGFpbmVyQmFzZSkge1xuICAgIF9pbmhlcml0cyhQdXJlRmx1eENvbnRhaW5lckNsYXNzLCBfRmx1eENvbnRhaW5lckJhc2UpO1xuXG4gICAgZnVuY3Rpb24gUHVyZUZsdXhDb250YWluZXJDbGFzcygpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXJlRmx1eENvbnRhaW5lckNsYXNzKTtcblxuICAgICAgX0ZsdXhDb250YWluZXJCYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgUHVyZUZsdXhDb250YWluZXJDbGFzcy5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFB1cmVGbHV4Q29udGFpbmVyQ2xhc3M7XG4gIH0pKEZsdXhDb250YWluZXJCYXNlKTtcblxuICByZXR1cm4gUHVyZUZsdXhDb250YWluZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gZW5mb3JjZUludGVyZmFjZShvKSB7XG4gICFvLmdldFN0b3JlcyA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDb21wb25lbnRzIHRoYXQgdXNlIEZsdXhDb250YWluZXIgbXVzdCBpbXBsZW1lbnQgYHN0YXRpYyBnZXRTdG9yZXMoKWAnKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICFvLmNhbGN1bGF0ZVN0YXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0NvbXBvbmVudHMgdGhhdCB1c2UgRmx1eENvbnRhaW5lciBtdXN0IGltcGxlbWVudCBgc3RhdGljIGNhbGN1bGF0ZVN0YXRlKClgJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgY3JlYXRlOiBjcmVhdGUgfTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OW1iSFY0TDJ4cFlpOUdiSFY0UTI5dWRHRnBibVZ5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nUTI5d2VYSnBaMmgwSUNoaktTQXlNREUwTFRJd01UVXNJRVpoWTJWaWIyOXJMQ0JKYm1NdVhHNGdLaUJCYkd3Z2NtbG5hSFJ6SUhKbGMyVnlkbVZrTGx4dUlDcGNiaUFxSUZSb2FYTWdjMjkxY21ObElHTnZaR1VnYVhNZ2JHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFSlRSQzF6ZEhsc1pTQnNhV05sYm5ObElHWnZkVzVrSUdsdUlIUm9aVnh1SUNvZ1RFbERSVTVUUlNCbWFXeGxJR2x1SUhSb1pTQnliMjkwSUdScGNtVmpkRzl5ZVNCdlppQjBhR2x6SUhOdmRYSmpaU0IwY21WbExpQkJiaUJoWkdScGRHbHZibUZzSUdkeVlXNTBYRzRnS2lCdlppQndZWFJsYm5RZ2NtbG5hSFJ6SUdOaGJpQmlaU0JtYjNWdVpDQnBiaUIwYUdVZ1VFRlVSVTVVVXlCbWFXeGxJR2x1SUhSb1pTQnpZVzFsSUdScGNtVmpkRzl5ZVM1Y2JpQXFYRzRnS2lCQWNISnZkbWxrWlhOTmIyUjFiR1VnUm14MWVFTnZiblJoYVc1bGNseHVJQ29nWEc0Z0tpOWNiaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUY5bGVIUmxibVJ6SUQwZ1QySnFaV04wTG1GemMybG5iaUI4ZkNCbWRXNWpkR2x2YmlBb2RHRnlaMlYwS1NCN0lHWnZjaUFvZG1GeUlHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN0lIWmhjaUJ6YjNWeVkyVWdQU0JoY21kMWJXVnVkSE5iYVYwN0lHWnZjaUFvZG1GeUlHdGxlU0JwYmlCemIzVnlZMlVwSUhzZ2FXWWdLRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h6YjNWeVkyVXNJR3RsZVNrcElIc2dkR0Z5WjJWMFcydGxlVjBnUFNCemIzVnlZMlZiYTJWNVhUc2dmU0I5SUgwZ2NtVjBkWEp1SUhSaGNtZGxkRHNnZlR0Y2JseHVablZ1WTNScGIyNGdYMk5zWVhOelEyRnNiRU5vWldOcktHbHVjM1JoYm1ObExDQkRiMjV6ZEhKMVkzUnZjaWtnZXlCcFppQW9JU2hwYm5OMFlXNWpaU0JwYm5OMFlXNWpaVzltSUVOdmJuTjBjblZqZEc5eUtTa2dleUIwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkRFlXNXViM1FnWTJGc2JDQmhJR05zWVhOeklHRnpJR0VnWm5WdVkzUnBiMjRuS1RzZ2ZTQjlYRzVjYm1aMWJtTjBhVzl1SUY5cGJtaGxjbWwwY3loemRXSkRiR0Z6Y3l3Z2MzVndaWEpEYkdGemN5a2dleUJwWmlBb2RIbHdaVzltSUhOMWNHVnlRMnhoYzNNZ0lUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ2MzVndaWEpEYkdGemN5QWhQVDBnYm5Wc2JDa2dleUIwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkVGRYQmxjaUJsZUhCeVpYTnphVzl1SUcxMWMzUWdaV2wwYUdWeUlHSmxJRzUxYkd3Z2IzSWdZU0JtZFc1amRHbHZiaXdnYm05MElDY2dLeUIwZVhCbGIyWWdjM1Z3WlhKRGJHRnpjeWs3SUgwZ2MzVmlRMnhoYzNNdWNISnZkRzkwZVhCbElEMGdUMkpxWldOMExtTnlaV0YwWlNoemRYQmxja05zWVhOeklDWW1JSE4xY0dWeVEyeGhjM011Y0hKdmRHOTBlWEJsTENCN0lHTnZibk4wY25WamRHOXlPaUI3SUhaaGJIVmxPaUJ6ZFdKRGJHRnpjeXdnWlc1MWJXVnlZV0pzWlRvZ1ptRnNjMlVzSUhkeWFYUmhZbXhsT2lCMGNuVmxMQ0JqYjI1bWFXZDFjbUZpYkdVNklIUnlkV1VnZlNCOUtUc2dhV1lnS0hOMWNHVnlRMnhoYzNNcElFOWlhbVZqZEM1elpYUlFjbTkwYjNSNWNHVlBaaUEvSUU5aWFtVmpkQzV6WlhSUWNtOTBiM1I1Y0dWUFppaHpkV0pEYkdGemN5d2djM1Z3WlhKRGJHRnpjeWtnT2lCemRXSkRiR0Z6Y3k1ZlgzQnliM1J2WDE4Z1BTQnpkWEJsY2tOc1lYTnpPeUI5WEc1Y2JuWmhjaUJHYkhWNFUzUnZjbVZIY205MWNDQTlJSEpsY1hWcGNtVW9KeTR2Um14MWVGTjBiM0psUjNKdmRYQW5LVHRjYmx4dWRtRnlJR2x1ZG1GeWFXRnVkQ0E5SUhKbGNYVnBjbVVvSjJaaWFuTXZiR2xpTDJsdWRtRnlhV0Z1ZENjcE8xeHVkbUZ5SUhOb1lXeHNiM2RGY1hWaGJDQTlJSEpsY1hWcGNtVW9KMlppYW5NdmJHbGlMM05vWVd4c2IzZEZjWFZoYkNjcE8xeHVYRzUyWVhJZ1JFVkdRVlZNVkY5UFVGUkpUMDVUSUQwZ2UxeHVJQ0J3ZFhKbE9pQjBjblZsTEZ4dUlDQjNhWFJvVUhKdmNITTZJR1poYkhObFhHNTlPMXh1WEc0dktpcGNiaUFxSUVFZ1JteDFlRU52Ym5SaGFXNWxjaUJwY3lCMWMyVmtJSFJ2SUhOMVluTmpjbWxpWlNCaElISmxZV04wSUdOdmJYQnZibVZ1ZENCMGJ5QnRkV3gwYVhCc1pTQnpkRzl5WlhNdVhHNGdLaUJVYUdVZ2MzUnZjbVZ6SUhSb1lYUWdZWEpsSUhWelpXUWdiWFZ6ZENCaVpTQnlaWFIxY201bFpDQm1jbTl0SUdFZ2MzUmhkR2xqSUdCblpYUlRkRzl5WlhNb0tXQWdiV1YwYUc5a0xseHVJQ3BjYmlBcUlGUm9aU0JqYjIxd2IyNWxiblFnY21WalpXbDJaWE1nYVc1bWIzSnRZWFJwYjI0Z1puSnZiU0IwYUdVZ2MzUnZjbVZ6SUhacFlTQnpkR0YwWlM0Z1ZHaGxJSE4wWVhSbFhHNGdLaUJwY3lCblpXNWxjbUYwWldRZ2RYTnBibWNnWVNCemRHRjBhV01nWUdOaGJHTjFiR0YwWlZOMFlYUmxLQ2xnSUcxbGRHaHZaQ0IwYUdGMElHVmhZMmdnWTI5dWRHRnBibVZ5WEc0Z0tpQnRkWE4wSUdsdGNHeGxiV1Z1ZEM0Z1FTQnphVzF3YkdVZ1kyOXVkR0ZwYm1WeUlHMWhlU0JzYjI5cklHeHBhMlU2WEc0Z0tpOWNibVoxYm1OMGFXOXVJR055WldGMFpTaENZWE5sTENCdmNIUnBiMjV6S1NCN1hHNGdJR1Z1Wm05eVkyVkpiblJsY21aaFkyVW9RbUZ6WlNrN1hHNWNiaUFnTHk4Z1EyOXVjM1J5ZFdOMElIUm9aU0J2Y0hScGIyNXpJSFZ6YVc1bklHUmxabUYxYkhRc0lHOTJaWEp5YVdSbElIZHBkR2dnZFhObGNpQjJZV3gxWlhNZ1lYTWdibVZqWlhOellYSjVYRzRnSUhaaGNpQnlaV0ZzVDNCMGFXOXVjeUE5SUY5bGVIUmxibVJ6S0h0OUxDQkVSVVpCVlV4VVgwOVFWRWxQVGxNc0lHOXdkR2x2Ym5NZ2ZId2dlMzBwTzF4dVhHNGdJSFpoY2lCR2JIVjRRMjl1ZEdGcGJtVnlRMnhoYzNNZ1BTQW9ablZ1WTNScGIyNGdLRjlDWVhObEtTQjdYRzRnSUNBZ1gybHVhR1Z5YVhSektFWnNkWGhEYjI1MFlXbHVaWEpEYkdGemN5d2dYMEpoYzJVcE8xeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z1JteDFlRU52Ym5SaGFXNWxja05zWVhOektIQnliM0J6S1NCN1hHNGdJQ0FnSUNCZlkyeGhjM05EWVd4c1EyaGxZMnNvZEdocGN5d2dSbXgxZUVOdmJuUmhhVzVsY2tOc1lYTnpLVHRjYmx4dUlDQWdJQ0FnWDBKaGMyVXVZMkZzYkNoMGFHbHpMQ0J3Y205d2N5azdYRzRnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnY21WaGJFOXdkR2x2Ym5NdWQybDBhRkJ5YjNCeklEOGdRbUZ6WlM1allXeGpkV3hoZEdWVGRHRjBaU2h1ZFd4c0xDQndjbTl3Y3lrZ09pQkNZWE5sTG1OaGJHTjFiR0YwWlZOMFlYUmxLRzUxYkd3c0lIVnVaR1ZtYVc1bFpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdUV0ZyWlNCemRYSmxJSGRsSUc5MlpYSnlhV1JsSUhOb2IzVnNaRU52YlhCdmJtVnVkRlZ3WkdGMFpTQnZibXg1SUdsbUlIUm9aU0J3ZFhKbElHOXdkR2x2YmlCcGMxeHVJQ0FnSUM4dklITndaV05wWm1sbFpDNGdWMlVnWTJGdUozUWdiM1psY25KcFpHVWdkR2hwY3lCaFltOTJaU0JpWldOaGRYTmxJSGRsSUdSdmJpZDBJSGRoYm5RZ2RHOGdiM1psY25KcFpHVmNiaUFnSUNBdkx5QjBhR1VnWkdWbVlYVnNkQ0JpWldoaGRtbHZjaUJ2YmlCaFkyTnBaR1Z1ZEM0Z1UzVndaWElnZDI5eWEzTWdkMlZwY21RZ2QybDBhQ0J5WldGamRDQkZVellnWTJ4aGMzTmxjMXh1SUNBZ0lDOHZJSEpwWjJoMElHNXZkMXh1WEc0Z0lDQWdSbXgxZUVOdmJuUmhhVzVsY2tOc1lYTnpMbkJ5YjNSdmRIbHdaUzVqYjIxd2IyNWxiblJFYVdSTmIzVnVkQ0E5SUdaMWJtTjBhVzl1SUdOdmJYQnZibVZ1ZEVScFpFMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJRjkwYUdseklEMGdkR2hwY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLRjlDWVhObExuQnliM1J2ZEhsd1pTNWpiMjF3YjI1bGJuUkVhV1JOYjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0JmUW1GelpTNXdjbTkwYjNSNWNHVXVZMjl0Y0c5dVpXNTBSR2xrVFc5MWJuUXVZMkZzYkNoMGFHbHpLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZG1GeUlITjBiM0psY3lBOUlFSmhjMlV1WjJWMFUzUnZjbVZ6S0NrN1hHNWNiaUFnSUNBZ0lDOHZJRlJvYVhNZ2RISmhZMnR6SUhkb1pXNGdZVzU1SUhOMGIzSmxJR2hoY3lCamFHRnVaMlZrSUdGdVpDQjNaU0J0WVhrZ2JtVmxaQ0IwYnlCMWNHUmhkR1V1WEc0Z0lDQWdJQ0IyWVhJZ1kyaGhibWRsWkNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnZG1GeUlITmxkRU5vWVc1blpXUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lHTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlR0Y2JseHVJQ0FnSUNBZ0x5OGdWR2hwY3lCaFpHUnpJSE4xWW5OamNtbHdkR2x2Ym5NZ2RHOGdjM1J2Y21WekxpQlhhR1Z1SUdFZ2MzUnZjbVVnWTJoaGJtZGxjeUJoYkd3Z2QyVWdaRzhnYVhOY2JpQWdJQ0FnSUM4dklITmxkQ0JqYUdGdVoyVmtJSFJ2SUhSeWRXVXVYRzRnSUNBZ0lDQjBhR2x6TGw5bWJIVjRRMjl1ZEdGcGJtVnlVM1ZpYzJOeWFYQjBhVzl1Y3lBOUlITjBiM0psY3k1dFlYQW9ablZ1WTNScGIyNGdLSE4wYjNKbEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkRzl5WlM1aFpHUk1hWE4wWlc1bGNpaHpaWFJEYUdGdVoyVmtLVHRjYmlBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBdkx5QlVhR2x6SUdOaGJHeGlZV05ySUdseklHTmhiR3hsWkNCaFpuUmxjaUIwYUdVZ1pHbHpjR0YwWTJnZ2IyWWdkR2hsSUhKbGJHVjJZVzUwSUhOMGIzSmxjeTRnU1daY2JpQWdJQ0FnSUM4dklHRnVlU0JvWVhabElISmxjRzl5ZEdWa0lHRWdZMmhoYm1kbElIZGxJSFZ3WkdGMFpTQjBhR1VnYzNSaGRHVXNJSFJvWlc0Z2NtVnpaWFFnWTJoaGJtZGxaQzVjYmlBZ0lDQWdJSFpoY2lCallXeHNZbUZqYXlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHTm9ZVzVuWldRcElIdGNiaUFnSUNBZ0lDQWdJQ0JmZEdocGN5NXpaWFJUZEdGMFpTaG1kVzVqZEdsdmJpQW9jSEpsZGxOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVmhiRTl3ZEdsdmJuTXVkMmwwYUZCeWIzQnpJRDhnUW1GelpTNWpZV3hqZFd4aGRHVlRkR0YwWlNod2NtVjJVM1JoZEdVc0lGOTBhR2x6TG5CeWIzQnpLU0E2SUVKaGMyVXVZMkZzWTNWc1lYUmxVM1JoZEdVb2NISmxkbE4wWVhSbExDQjFibVJsWm1sdVpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR05vWVc1blpXUWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lIMDdYRzRnSUNBZ0lDQjBhR2x6TGw5bWJIVjRRMjl1ZEdGcGJtVnlVM1J2Y21WSGNtOTFjQ0E5SUc1bGR5QkdiSFY0VTNSdmNtVkhjbTkxY0NoemRHOXlaWE1zSUdOaGJHeGlZV05yS1R0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnUm14MWVFTnZiblJoYVc1bGNrTnNZWE56TG5CeWIzUnZkSGx3WlM1amIyMXdiMjVsYm5SWGFXeHNVbVZqWldsMlpWQnliM0J6SUQwZ1puVnVZM1JwYjI0Z1kyOXRjRzl1Wlc1MFYybHNiRkpsWTJWcGRtVlFjbTl3Y3lodVpYaDBVSEp2Y0hNc0lHNWxlSFJEYjI1MFpYaDBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1gwSmhjMlV1Y0hKdmRHOTBlWEJsTG1OdmJYQnZibVZ1ZEZkcGJHeFNaV05sYVhabFVISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ1gwSmhjMlV1Y0hKdmRHOTBlWEJsTG1OdmJYQnZibVZ1ZEZkcGJHeFNaV05sYVhabFVISnZjSE11WTJGc2JDaDBhR2x6TENCdVpYaDBVSEp2Y0hNc0lHNWxlSFJEYjI1MFpYaDBLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1JHOXVKM1FnWkc4Z1lXNTVkR2hwYm1jZ1pXeHpaU0JwWmlCMGFHVWdZMjl1ZEdGcGJtVnlJR2x6SUc1dmRDQmpiMjVtYVdkMWNtVmtJSFJ2SUhWelpTQndjbTl3YzF4dUlDQWdJQ0FnYVdZZ0tDRnlaV0ZzVDNCMGFXOXVjeTUzYVhSb1VISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QkpaaUJwZENkeklIQjFjbVVnZDJVZ1kyRnVJSEJ2ZEdWdWRHbGhiR3g1SUc5d2RHbHRhWHBsSUc5MWRDQjBhR1VnWTJGc1kzVnNZWFJsSUhOMFlYUmxYRzRnSUNBZ0lDQnBaaUFvY21WaGJFOXdkR2x2Ym5NdWNIVnlaU0FtSmlCemFHRnNiRzkzUlhGMVlXd29kR2hwY3k1d2NtOXdjeXdnYm1WNGRGQnliM0J6S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRVpwYm1Gc2JIa2dkWEJrWVhSbElIUm9aU0J6ZEdGMFpTQjFjMmx1WnlCMGFHVWdibVYzSUhCeWIzQnpYRzRnSUNBZ0lDQjBhR2x6TG5ObGRGTjBZWFJsS0daMWJtTjBhVzl1SUNod2NtVjJVM1JoZEdVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFSmhjMlV1WTJGc1kzVnNZWFJsVTNSaGRHVW9jSEpsZGxOMFlYUmxMQ0J1WlhoMFVISnZjSE1wTzF4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUVac2RYaERiMjUwWVdsdVpYSkRiR0Z6Y3k1d2NtOTBiM1I1Y0dVdVkyOXRjRzl1Wlc1MFYybHNiRlZ1Ylc5MWJuUWdQU0JtZFc1amRHbHZiaUJqYjIxd2IyNWxiblJYYVd4c1ZXNXRiM1Z1ZENncElIdGNiaUFnSUNBZ0lHbG1JQ2hmUW1GelpTNXdjbTkwYjNSNWNHVXVZMjl0Y0c5dVpXNTBWMmxzYkZWdWJXOTFiblFwSUh0Y2JpQWdJQ0FnSUNBZ1gwSmhjMlV1Y0hKdmRHOTBlWEJsTG1OdmJYQnZibVZ1ZEZkcGJHeFZibTF2ZFc1MExtTmhiR3dvZEdocGN5azdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFJvYVhNdVgyWnNkWGhEYjI1MFlXbHVaWEpUZEc5eVpVZHliM1Z3TG5KbGJHVmhjMlVvS1R0Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUY5cGRHVnlZWFJ2Y2lBOUlIUm9hWE11WDJac2RYaERiMjUwWVdsdVpYSlRkV0p6WTNKcGNIUnBiMjV6TENCZmFYTkJjbkpoZVNBOUlFRnljbUY1TG1selFYSnlZWGtvWDJsMFpYSmhkRzl5S1N3Z1gya2dQU0F3TENCZmFYUmxjbUYwYjNJZ1BTQmZhWE5CY25KaGVTQS9JRjlwZEdWeVlYUnZjaUE2SUY5cGRHVnlZWFJ2Y2x0VGVXMWliMnd1YVhSbGNtRjBiM0pkS0NrN095a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1gzSmxaanRjYmx4dUlDQWdJQ0FnSUNCcFppQW9YMmx6UVhKeVlYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9YMmtnUGowZ1gybDBaWEpoZEc5eUxteGxibWQwYUNrZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ1gzSmxaaUE5SUY5cGRHVnlZWFJ2Y2x0ZmFTc3JYVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCZmFTQTlJRjlwZEdWeVlYUnZjaTV1WlhoMEtDazdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXBMbVJ2Ym1VcElHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lGOXlaV1lnUFNCZmFTNTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFpoY2lCemRXSnpZM0pwY0hScGIyNGdQU0JmY21WbU8xeHVYRzRnSUNBZ0lDQWdJSE4xWW5OamNtbHdkR2x2Ymk1eVpXMXZkbVVvS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVYMlpzZFhoRGIyNTBZV2x1WlhKVGRXSnpZM0pwY0hScGIyNXpJRDBnVzEwN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhKbGRIVnliaUJHYkhWNFEyOXVkR0ZwYm1WeVEyeGhjM003WEc0Z0lIMHBLRUpoYzJVcE8xeHVYRzRnSUhaaGNpQmpiMjUwWVdsdVpYSWdQU0J5WldGc1QzQjBhVzl1Y3k1d2RYSmxJRDhnWTNKbFlYUmxVSFZ5WlVOdmJuUmhhVzVsY2loR2JIVjRRMjl1ZEdGcGJtVnlRMnhoYzNNcElEb2dSbXgxZUVOdmJuUmhhVzVsY2tOc1lYTnpPMXh1WEc0Z0lDOHZJRlZ3WkdGMFpTQjBhR1VnYm1GdFpTQnZaaUIwYUdVZ1kyOXVkR0ZwYm1WeUlHSmxabTl5WlNCeVpYUjFjbTVwYm1kY2JpQWdkbUZ5SUdOdmJYQnZibVZ1ZEU1aGJXVWdQU0JDWVhObExtUnBjM0JzWVhsT1lXMWxJSHg4SUVKaGMyVXVibUZ0WlR0Y2JpQWdZMjl1ZEdGcGJtVnlMbVJwYzNCc1lYbE9ZVzFsSUQwZ0owWnNkWGhEYjI1MFlXbHVaWElvSnlBcklHTnZiWEJ2Ym1WdWRFNWhiV1VnS3lBbktTYzdYRzVjYmlBZ2NtVjBkWEp1SUdOdmJuUmhhVzVsY2p0Y2JuMWNibHh1THk4Z1ZFOUVUem9nZEhsd1pXTm9aV05ySUhSb2FYTWdZbVYwZEdWeVhHNW1kVzVqZEdsdmJpQmpjbVZoZEdWUWRYSmxRMjl1ZEdGcGJtVnlLRVpzZFhoRGIyNTBZV2x1WlhKQ1lYTmxLU0I3WEc0Z0lIWmhjaUJRZFhKbFJteDFlRU52Ym5SaGFXNWxja05zWVhOeklEMGdLR1oxYm1OMGFXOXVJQ2hmUm14MWVFTnZiblJoYVc1bGNrSmhjMlVwSUh0Y2JpQWdJQ0JmYVc1b1pYSnBkSE1vVUhWeVpVWnNkWGhEYjI1MFlXbHVaWEpEYkdGemN5d2dYMFpzZFhoRGIyNTBZV2x1WlhKQ1lYTmxLVHRjYmx4dUlDQWdJR1oxYm1OMGFXOXVJRkIxY21WR2JIVjRRMjl1ZEdGcGJtVnlRMnhoYzNNb0tTQjdYRzRnSUNBZ0lDQmZZMnhoYzNORFlXeHNRMmhsWTJzb2RHaHBjeXdnVUhWeVpVWnNkWGhEYjI1MFlXbHVaWEpEYkdGemN5azdYRzVjYmlBZ0lDQWdJRjlHYkhWNFEyOXVkR0ZwYm1WeVFtRnpaUzVoY0hCc2VTaDBhR2x6TENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUZCMWNtVkdiSFY0UTI5dWRHRnBibVZ5UTJ4aGMzTXVjSEp2ZEc5MGVYQmxMbk5vYjNWc1pFTnZiWEJ2Ym1WdWRGVndaR0YwWlNBOUlHWjFibU4wYVc5dUlITm9iM1ZzWkVOdmJYQnZibVZ1ZEZWd1pHRjBaU2h1WlhoMFVISnZjSE1zSUc1bGVIUlRkR0YwWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUNGemFHRnNiRzkzUlhGMVlXd29kR2hwY3k1d2NtOXdjeXdnYm1WNGRGQnliM0J6S1NCOGZDQWhjMmhoYkd4dmQwVnhkV0ZzS0hSb2FYTXVjM1JoZEdVc0lHNWxlSFJUZEdGMFpTazdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCUWRYSmxSbXgxZUVOdmJuUmhhVzVsY2tOc1lYTnpPMXh1SUNCOUtTaEdiSFY0UTI5dWRHRnBibVZ5UW1GelpTazdYRzVjYmlBZ2NtVjBkWEp1SUZCMWNtVkdiSFY0UTI5dWRHRnBibVZ5UTJ4aGMzTTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVnVabTl5WTJWSmJuUmxjbVpoWTJVb2J5a2dlMXh1SUNBaGJ5NW5aWFJUZEc5eVpYTWdQeUJ3Y205alpYTnpMbVZ1ZGk1T1QwUkZYMFZPVmlBaFBUMGdKM0J5YjJSMVkzUnBiMjRuSUQ4Z2FXNTJZWEpwWVc1MEtHWmhiSE5sTENBblEyOXRjRzl1Wlc1MGN5QjBhR0YwSUhWelpTQkdiSFY0UTI5dWRHRnBibVZ5SUcxMWMzUWdhVzF3YkdWdFpXNTBJR0J6ZEdGMGFXTWdaMlYwVTNSdmNtVnpLQ2xnSnlrZ09pQnBiblpoY21saGJuUW9abUZzYzJVcElEb2dkVzVrWldacGJtVmtPMXh1SUNBaGJ5NWpZV3hqZFd4aGRHVlRkR0YwWlNBL0lIQnliMk5sYzNNdVpXNTJMazVQUkVWZlJVNVdJQ0U5UFNBbmNISnZaSFZqZEdsdmJpY2dQeUJwYm5aaGNtbGhiblFvWm1Gc2MyVXNJQ2REYjIxd2IyNWxiblJ6SUhSb1lYUWdkWE5sSUVac2RYaERiMjUwWVdsdVpYSWdiWFZ6ZENCcGJYQnNaVzFsYm5RZ1lITjBZWFJwWXlCallXeGpkV3hoZEdWVGRHRjBaU2dwWUNjcElEb2dhVzUyWVhKcFlXNTBLR1poYkhObEtTQTZJSFZ1WkdWbWFXNWxaRHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdJR055WldGMFpUb2dZM0psWVhSbElIMDdJbDE5IiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRmx1eE1hcFN0b3JlXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRmx1eFJlZHVjZVN0b3JlID0gcmVxdWlyZSgnLi9GbHV4UmVkdWNlU3RvcmUnKTtcbnZhciBJbW11dGFibGUgPSByZXF1aXJlKCdpbW11dGFibGUnKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBzaW1wbGUgc3RvcmUuIEl0IGFsbG93cyBjYWNoaW5nIGtleSB2YWx1ZSBwYWlycy4gQW4gaW1wbGVtZW50YXRpb25cbiAqIG9mIGEgc3RvcmUgdXNpbmcgdGhpcyBtaWdodCBsb29rIGxpa2U6XG4gKlxuICogICBjbGFzcyBGb29TdG9yZSBleHRlbmRzIEZsdXhNYXBTdG9yZSB7XG4gKiAgICAgcmVkdWNlKHN0YXRlLCBhY3Rpb24pIHtcbiAqICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAqICAgICAgICAgY2FzZSAnZm9vJzpcbiAqICAgICAgICAgICByZXR1cm4gc3RhdGUuc2V0KGFjdGlvbi5pZCwgYWN0aW9uLmZvbyk7XG4gKiAgICAgICAgIGNhc2UgJ2Jhcic6XG4gKiAgICAgICAgICAgcmV0dXJuIHN0YXRlLmRlbGV0ZShhY3Rpb24uaWQpO1xuICogICAgICAgICBkZWZhdWx0OlxuICogICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKi9cblxudmFyIEZsdXhNYXBTdG9yZSA9IChmdW5jdGlvbiAoX0ZsdXhSZWR1Y2VTdG9yZSkge1xuICBfaW5oZXJpdHMoRmx1eE1hcFN0b3JlLCBfRmx1eFJlZHVjZVN0b3JlKTtcblxuICBmdW5jdGlvbiBGbHV4TWFwU3RvcmUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZsdXhNYXBTdG9yZSk7XG5cbiAgICBfRmx1eFJlZHVjZVN0b3JlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBGbHV4TWFwU3RvcmUucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gSW1tdXRhYmxlLk1hcCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBY2Nlc3MgdGhlIHZhbHVlIGF0IHRoZSBnaXZlbiBrZXkuIHRocm93cyBhbiBlcnJvciBpZiB0aGUga2V5IGRvZXMgbm90XG4gICAqIGV4aXN0IGluIHRoZSBjYWNoZS5cbiAgICovXG5cbiAgRmx1eE1hcFN0b3JlLnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIGF0KGtleSkge1xuICAgICF0aGlzLmhhcyhrZXkpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIHN0b3JlIHRvIGhhdmUga2V5ICVzJywga2V5KSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBjYWNoZSBoYXMgYSBwYXJ0aWN1bGFyIGtleVxuICAgKi9cblxuICBGbHV4TWFwU3RvcmUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpLmhhcyhrZXkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIGEgcGFydGljdWxhciBrZXkuIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZSBrZXkgZG9lcyBub3RcbiAgICogZXhpc3QgaW4gdGhlIGNhY2hlLlxuICAgKi9cblxuICBGbHV4TWFwU3RvcmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpLmdldChrZXkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGFycmF5IG9mIGtleXMgYW5kIHB1dHMgdGhlIHZhbHVlcyBpbiBhIG1hcCBpZiB0aGV5IGV4aXN0LCBpdCBhbGxvd3NcbiAgICogcHJvdmlkaW5nIGEgcHJldmlvdXMgcmVzdWx0IHRvIHVwZGF0ZSBpbnN0ZWFkIG9mIGdlbmVyYXRpbmcgYSBuZXcgbWFwLlxuICAgKlxuICAgKiBQcm92aWRpbmcgYSBwcmV2aW91cyByZXN1bHQgYWxsb3dzIHRoZSBwb3NzaWJpbGl0eSBvZiBrZWVwaW5nIHRoZSBzYW1lXG4gICAqIHJlZmVyZW5jZSBpZiB0aGUga2V5cyBkaWQgbm90IGNoYW5nZS5cbiAgICovXG5cbiAgRmx1eE1hcFN0b3JlLnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwoa2V5cywgcHJldikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgbmV3S2V5cyA9IEltbXV0YWJsZS5TZXQoa2V5cyk7XG4gICAgdmFyIHN0YXJ0ID0gcHJldiB8fCBJbW11dGFibGUuTWFwKCk7XG4gICAgcmV0dXJuIHN0YXJ0LndpdGhNdXRhdGlvbnMoZnVuY3Rpb24gKG1hcCkge1xuICAgICAgLy8gcmVtb3ZlIGFueSBvbGQga2V5cyB0aGF0IGFyZSBub3QgaW4gbmV3IGtleXMgb3IgYXJlIG5vIGxvbmdlciBpblxuICAgICAgLy8gdGhlIGNhY2hlXG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBzdGFydCwgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZW50cnkgPSBfcmVmO1xuICAgICAgICB2YXIgb2xkS2V5ID0gZW50cnlbMF07XG5cbiAgICAgICAgaWYgKCFuZXdLZXlzLmhhcyhvbGRLZXkpIHx8ICFfdGhpcy5oYXMob2xkS2V5KSkge1xuICAgICAgICAgIG1hcFsnZGVsZXRlJ10ob2xkS2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGVuIGFkZCBhbGwgb2YgdGhlIG5ldyBrZXlzIHRoYXQgZXhpc3QgaW4gdGhlIGNhY2hlXG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gbmV3S2V5cywgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgIHZhciBfcmVmMjtcblxuICAgICAgICBpZiAoX2lzQXJyYXkyKSB7XG4gICAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgX3JlZjIgPSBfaXRlcmF0b3IyW19pMisrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgICBpZiAoX2kyLmRvbmUpIGJyZWFrO1xuICAgICAgICAgIF9yZWYyID0gX2kyLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleSA9IF9yZWYyO1xuXG4gICAgICAgIGlmIChfdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgIG1hcC5zZXQoa2V5LCBfdGhpcy5hdChrZXkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBGbHV4TWFwU3RvcmU7XG59KShGbHV4UmVkdWNlU3RvcmUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsdXhNYXBTdG9yZTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OW1iSFY0TDJ4cFlpOUdiSFY0VFdGd1UzUnZjbVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xWEc0Z0tpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UUXRNakF4TlN3Z1JtRmpaV0p2YjJzc0lFbHVZeTVjYmlBcUlFRnNiQ0J5YVdkb2RITWdjbVZ6WlhKMlpXUXVYRzRnS2x4dUlDb2dWR2hwY3lCemIzVnlZMlVnWTI5a1pTQnBjeUJzYVdObGJuTmxaQ0IxYm1SbGNpQjBhR1VnUWxORUxYTjBlV3hsSUd4cFkyVnVjMlVnWm05MWJtUWdhVzRnZEdobFhHNGdLaUJNU1VORlRsTkZJR1pwYkdVZ2FXNGdkR2hsSUhKdmIzUWdaR2x5WldOMGIzSjVJRzltSUhSb2FYTWdjMjkxY21ObElIUnlaV1V1SUVGdUlHRmtaR2wwYVc5dVlXd2daM0poYm5SY2JpQXFJRzltSUhCaGRHVnVkQ0J5YVdkb2RITWdZMkZ1SUdKbElHWnZkVzVrSUdsdUlIUm9aU0JRUVZSRlRsUlRJR1pwYkdVZ2FXNGdkR2hsSUhOaGJXVWdaR2x5WldOMGIzSjVMbHh1SUNwY2JpQXFJRUJ3Y205MmFXUmxjMDF2WkhWc1pTQkdiSFY0VFdGd1UzUnZjbVZjYmlBcUlGeHVJQ292WEc1Y2JpZDFjMlVnYzNSeWFXTjBKenRjYmx4dVpuVnVZM1JwYjI0Z1gyTnNZWE56UTJGc2JFTm9aV05yS0dsdWMzUmhibU5sTENCRGIyNXpkSEoxWTNSdmNpa2dleUJwWmlBb0lTaHBibk4wWVc1alpTQnBibk4wWVc1alpXOW1JRU52Ym5OMGNuVmpkRzl5S1NrZ2V5QjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2REWVc1dWIzUWdZMkZzYkNCaElHTnNZWE56SUdGeklHRWdablZ1WTNScGIyNG5LVHNnZlNCOVhHNWNibVoxYm1OMGFXOXVJRjlwYm1obGNtbDBjeWh6ZFdKRGJHRnpjeXdnYzNWd1pYSkRiR0Z6Y3lrZ2V5QnBaaUFvZEhsd1pXOW1JSE4xY0dWeVEyeGhjM01nSVQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnYzNWd1pYSkRiR0Z6Y3lBaFBUMGdiblZzYkNrZ2V5QjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RUZFhCbGNpQmxlSEJ5WlhOemFXOXVJRzExYzNRZ1pXbDBhR1Z5SUdKbElHNTFiR3dnYjNJZ1lTQm1kVzVqZEdsdmJpd2dibTkwSUNjZ0t5QjBlWEJsYjJZZ2MzVndaWEpEYkdGemN5azdJSDBnYzNWaVEyeGhjM011Y0hKdmRHOTBlWEJsSUQwZ1QySnFaV04wTG1OeVpXRjBaU2h6ZFhCbGNrTnNZWE56SUNZbUlITjFjR1Z5UTJ4aGMzTXVjSEp2ZEc5MGVYQmxMQ0I3SUdOdmJuTjBjblZqZEc5eU9pQjdJSFpoYkhWbE9pQnpkV0pEYkdGemN5d2daVzUxYldWeVlXSnNaVG9nWm1Gc2MyVXNJSGR5YVhSaFlteGxPaUIwY25WbExDQmpiMjVtYVdkMWNtRmliR1U2SUhSeWRXVWdmU0I5S1RzZ2FXWWdLSE4xY0dWeVEyeGhjM01wSUU5aWFtVmpkQzV6WlhSUWNtOTBiM1I1Y0dWUFppQS9JRTlpYW1WamRDNXpaWFJRY205MGIzUjVjR1ZQWmloemRXSkRiR0Z6Y3l3Z2MzVndaWEpEYkdGemN5a2dPaUJ6ZFdKRGJHRnpjeTVmWDNCeWIzUnZYMThnUFNCemRYQmxja05zWVhOek95QjlYRzVjYm5aaGNpQkdiSFY0VW1Wa2RXTmxVM1J2Y21VZ1BTQnlaWEYxYVhKbEtDY3VMMFpzZFhoU1pXUjFZMlZUZEc5eVpTY3BPMXh1ZG1GeUlFbHRiWFYwWVdKc1pTQTlJSEpsY1hWcGNtVW9KMmx0YlhWMFlXSnNaU2NwTzF4dVhHNTJZWElnYVc1MllYSnBZVzUwSUQwZ2NtVnhkV2x5WlNnblptSnFjeTlzYVdJdmFXNTJZWEpwWVc1MEp5azdYRzVjYmk4cUtseHVJQ29nVkdocGN5QnBjeUJoSUhOcGJYQnNaU0J6ZEc5eVpTNGdTWFFnWVd4c2IzZHpJR05oWTJocGJtY2dhMlY1SUhaaGJIVmxJSEJoYVhKekxpQkJiaUJwYlhCc1pXMWxiblJoZEdsdmJseHVJQ29nYjJZZ1lTQnpkRzl5WlNCMWMybHVaeUIwYUdseklHMXBaMmgwSUd4dmIyc2diR2xyWlRwY2JpQXFYRzRnS2lBZ0lHTnNZWE56SUVadmIxTjBiM0psSUdWNGRHVnVaSE1nUm14MWVFMWhjRk4wYjNKbElIdGNiaUFxSUNBZ0lDQnlaV1IxWTJVb2MzUmhkR1VzSUdGamRHbHZiaWtnZTF4dUlDb2dJQ0FnSUNBZ2MzZHBkR05vSUNoaFkzUnBiMjR1ZEhsd1pTa2dlMXh1SUNvZ0lDQWdJQ0FnSUNCallYTmxJQ2RtYjI4bk9seHVJQ29nSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEdGMFpTNXpaWFFvWVdOMGFXOXVMbWxrTENCaFkzUnBiMjR1Wm05dktUdGNiaUFxSUNBZ0lDQWdJQ0FnWTJGelpTQW5ZbUZ5SnpwY2JpQXFJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjM1JoZEdVdVpHVnNaWFJsS0dGamRHbHZiaTVwWkNrN1hHNGdLaUFnSUNBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnS2lBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOMFlYUmxPMXh1SUNvZ0lDQWdJQ0FnZlZ4dUlDb2dJQ0FnSUgxY2JpQXFJQ0FnZlZ4dUlDcGNiaUFxTDF4dVhHNTJZWElnUm14MWVFMWhjRk4wYjNKbElEMGdLR1oxYm1OMGFXOXVJQ2hmUm14MWVGSmxaSFZqWlZOMGIzSmxLU0I3WEc0Z0lGOXBibWhsY21sMGN5aEdiSFY0VFdGd1UzUnZjbVVzSUY5R2JIVjRVbVZrZFdObFUzUnZjbVVwTzF4dVhHNGdJR1oxYm1OMGFXOXVJRVpzZFhoTllYQlRkRzl5WlNncElIdGNiaUFnSUNCZlkyeGhjM05EWVd4c1EyaGxZMnNvZEdocGN5d2dSbXgxZUUxaGNGTjBiM0psS1R0Y2JseHVJQ0FnSUY5R2JIVjRVbVZrZFdObFUzUnZjbVV1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNiaUFnZlZ4dVhHNGdJRVpzZFhoTllYQlRkRzl5WlM1d2NtOTBiM1I1Y0dVdVoyVjBTVzVwZEdsaGJGTjBZWFJsSUQwZ1puVnVZM1JwYjI0Z1oyVjBTVzVwZEdsaGJGTjBZWFJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJKYlcxMWRHRmliR1V1VFdGd0tDazdYRzRnSUgwN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGalkyVnpjeUIwYUdVZ2RtRnNkV1VnWVhRZ2RHaGxJR2RwZG1WdUlHdGxlUzRnZEdoeWIzZHpJR0Z1SUdWeWNtOXlJR2xtSUhSb1pTQnJaWGtnWkc5bGN5QnViM1JjYmlBZ0lDb2daWGhwYzNRZ2FXNGdkR2hsSUdOaFkyaGxMbHh1SUNBZ0tpOWNibHh1SUNCR2JIVjRUV0Z3VTNSdmNtVXVjSEp2ZEc5MGVYQmxMbUYwSUQwZ1puVnVZM1JwYjI0Z1lYUW9hMlY1S1NCN1hHNGdJQ0FnSVhSb2FYTXVhR0Z6S0d0bGVTa2dQeUJ3Y205alpYTnpMbVZ1ZGk1T1QwUkZYMFZPVmlBaFBUMGdKM0J5YjJSMVkzUnBiMjRuSUQ4Z2FXNTJZWEpwWVc1MEtHWmhiSE5sTENBblJYaHdaV04wWldRZ2MzUnZjbVVnZEc4Z2FHRjJaU0JyWlhrZ0pYTW5MQ0JyWlhrcElEb2dhVzUyWVhKcFlXNTBLR1poYkhObEtTQTZJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVuWlhRb2EyVjVLVHRjYmlBZ2ZUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1EyaGxZMnNnYVdZZ2RHaGxJR05oWTJobElHaGhjeUJoSUhCaGNuUnBZM1ZzWVhJZ2EyVjVYRzRnSUNBcUwxeHVYRzRnSUVac2RYaE5ZWEJUZEc5eVpTNXdjbTkwYjNSNWNHVXVhR0Z6SUQwZ1puVnVZM1JwYjI0Z2FHRnpLR3RsZVNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtZGxkRk4wWVhSbEtDa3VhR0Z6S0d0bGVTazdYRzRnSUgwN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVkbGRDQjBhR1VnZG1Gc2RXVWdiMllnWVNCd1lYSjBhV04xYkdGeUlHdGxlUzRnVW1WMGRYSnVjeUIxYm1SbFptbHVaV1FnYVdZZ2RHaGxJR3RsZVNCa2IyVnpJRzV2ZEZ4dUlDQWdLaUJsZUdsemRDQnBiaUIwYUdVZ1kyRmphR1V1WEc0Z0lDQXFMMXh1WEc0Z0lFWnNkWGhOWVhCVGRHOXlaUzV3Y205MGIzUjVjR1V1WjJWMElEMGdablZ1WTNScGIyNGdaMlYwS0d0bGVTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWRsZEZOMFlYUmxLQ2t1WjJWMEtHdGxlU2s3WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFZGxkSE1nWVc0Z1lYSnlZWGtnYjJZZ2EyVjVjeUJoYm1RZ2NIVjBjeUIwYUdVZ2RtRnNkV1Z6SUdsdUlHRWdiV0Z3SUdsbUlIUm9aWGtnWlhocGMzUXNJR2wwSUdGc2JHOTNjMXh1SUNBZ0tpQndjbTkyYVdScGJtY2dZU0J3Y21WMmFXOTFjeUJ5WlhOMWJIUWdkRzhnZFhCa1lYUmxJR2x1YzNSbFlXUWdiMllnWjJWdVpYSmhkR2x1WnlCaElHNWxkeUJ0WVhBdVhHNGdJQ0FxWEc0Z0lDQXFJRkJ5YjNacFpHbHVaeUJoSUhCeVpYWnBiM1Z6SUhKbGMzVnNkQ0JoYkd4dmQzTWdkR2hsSUhCdmMzTnBZbWxzYVhSNUlHOW1JR3RsWlhCcGJtY2dkR2hsSUhOaGJXVmNiaUFnSUNvZ2NtVm1aWEpsYm1ObElHbG1JSFJvWlNCclpYbHpJR1JwWkNCdWIzUWdZMmhoYm1kbExseHVJQ0FnS2k5Y2JseHVJQ0JHYkhWNFRXRndVM1J2Y21VdWNISnZkRzkwZVhCbExtZGxkRUZzYkNBOUlHWjFibU4wYVc5dUlHZGxkRUZzYkNoclpYbHpMQ0J3Y21WMktTQjdYRzRnSUNBZ2RtRnlJRjkwYUdseklEMGdkR2hwY3p0Y2JseHVJQ0FnSUhaaGNpQnVaWGRMWlhseklEMGdTVzF0ZFhSaFlteGxMbE5sZENoclpYbHpLVHRjYmlBZ0lDQjJZWElnYzNSaGNuUWdQU0J3Y21WMklIeDhJRWx0YlhWMFlXSnNaUzVOWVhBb0tUdGNiaUFnSUNCeVpYUjFjbTRnYzNSaGNuUXVkMmwwYUUxMWRHRjBhVzl1Y3lobWRXNWpkR2x2YmlBb2JXRndLU0I3WEc0Z0lDQWdJQ0F2THlCeVpXMXZkbVVnWVc1NUlHOXNaQ0JyWlhseklIUm9ZWFFnWVhKbElHNXZkQ0JwYmlCdVpYY2dhMlY1Y3lCdmNpQmhjbVVnYm04Z2JHOXVaMlZ5SUdsdVhHNGdJQ0FnSUNBdkx5QjBhR1VnWTJGamFHVmNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlGOXBkR1Z5WVhSdmNpQTlJSE4wWVhKMExDQmZhWE5CY25KaGVTQTlJRUZ5Y21GNUxtbHpRWEp5WVhrb1gybDBaWEpoZEc5eUtTd2dYMmtnUFNBd0xDQmZhWFJsY21GMGIzSWdQU0JmYVhOQmNuSmhlU0EvSUY5cGRHVnlZWFJ2Y2lBNklGOXBkR1Z5WVhSdmNsdFRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtDazdPeWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdYM0psWmp0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWDJselFYSnlZWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvWDJrZ1BqMGdYMmwwWlhKaGRHOXlMbXhsYm1kMGFDa2dZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdYM0psWmlBOUlGOXBkR1Z5WVhSdmNsdGZhU3NyWFR0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQmZhU0E5SUY5cGRHVnlZWFJ2Y2k1dVpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLRjlwTG1SdmJtVXBJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJRjl5WldZZ1BTQmZhUzUyWVd4MVpUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhaaGNpQmxiblJ5ZVNBOUlGOXlaV1k3WEc0Z0lDQWdJQ0FnSUhaaGNpQnZiR1JMWlhrZ1BTQmxiblJ5ZVZzd1hUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lXNWxkMHRsZVhNdWFHRnpLRzlzWkV0bGVTa2dmSHdnSVY5MGFHbHpMbWhoY3lodmJHUkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdiV0Z3V3lka1pXeGxkR1VuWFNodmJHUkxaWGtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJSFJvWlc0Z1lXUmtJR0ZzYkNCdlppQjBhR1VnYm1WM0lHdGxlWE1nZEdoaGRDQmxlR2x6ZENCcGJpQjBhR1VnWTJGamFHVmNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlGOXBkR1Z5WVhSdmNqSWdQU0J1WlhkTFpYbHpMQ0JmYVhOQmNuSmhlVElnUFNCQmNuSmhlUzVwYzBGeWNtRjVLRjlwZEdWeVlYUnZjaklwTENCZmFUSWdQU0F3TENCZmFYUmxjbUYwYjNJeUlEMGdYMmx6UVhKeVlYa3lJRDhnWDJsMFpYSmhkRzl5TWlBNklGOXBkR1Z5WVhSdmNqSmJVM2x0WW05c0xtbDBaWEpoZEc5eVhTZ3BPenNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRjl5WldZeU8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoZmFYTkJjbkpoZVRJcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1gya3lJRDQ5SUY5cGRHVnlZWFJ2Y2pJdWJHVnVaM1JvS1NCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNCZmNtVm1NaUE5SUY5cGRHVnlZWFJ2Y2pKYlgya3lLeXRkTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lGOXBNaUE5SUY5cGRHVnlZWFJ2Y2pJdWJtVjRkQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2hmYVRJdVpHOXVaU2tnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnWDNKbFpqSWdQU0JmYVRJdWRtRnNkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjJZWElnYTJWNUlEMGdYM0psWmpJN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0Y5MGFHbHpMbWhoY3loclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JXRndMbk5sZENoclpYa3NJRjkwYUdsekxtRjBLR3RsZVNrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTazdYRzRnSUgwN1hHNWNiaUFnY21WMGRYSnVJRVpzZFhoTllYQlRkRzl5WlR0Y2JuMHBLRVpzZFhoU1pXUjFZMlZUZEc5eVpTazdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUm14MWVFMWhjRk4wYjNKbE95SmRmUT09IiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRmx1eE1peGluTGVnYWN5XG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBGbHV4U3RvcmVHcm91cCA9IHJlcXVpcmUoJy4vRmx1eFN0b3JlR3JvdXAnKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIGBGbHV4Q29udGFpbmVyYCBzaG91bGQgYmUgcHJlZmVycmVkIG92ZXIgdGhpcyBtaXhpbiwgYnV0IGl0IHJlcXVpcmVzIHVzaW5nXG4gKiByZWFjdCB3aXRoIGNsYXNzZXMuIFNvIHRoaXMgbWl4aW4gaXMgcHJvdmlkZWQgd2hlcmUgaXQgaXMgbm90IHlldCBwb3NzaWJsZVxuICogdG8gY29udmVydCBhIGNvbnRhaW5lciB0byBiZSBhIGNsYXNzLlxuICpcbiAqIFRoaXMgbWl4aW4gc2hvdWxkIGJlIHVzZWQgZm9yIFJlYWN0IGNvbXBvbmVudHMgdGhhdCBoYXZlIHN0YXRlIGJhc2VkIHB1cmVseVxuICogb24gc3RvcmVzLiBgdGhpcy5wcm9wc2Agd2lsbCBub3QgYmUgYXZhaWxhYmxlIGluc2lkZSBvZiBgY2FsY3VsYXRlU3RhdGUoKWAuXG4gKlxuICogVGhpcyBtaXhpbiB3aWxsIG9ubHkgYHNldFN0YXRlYCBub3QgcmVwbGFjZSBpdCwgc28geW91IHNob3VsZCBhbHdheXMgcmV0dXJuXG4gKiBldmVyeSBrZXkgaW4geW91ciBzdGF0ZSB1bmxlc3MgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLiBDb25zaWRlciB0aGlzOlxuICpcbiAqICAgdmFyIEZvbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICBtaXhpbnM6IFtcbiAqICAgICAgIEZsdXhNaXhpbkxlZ2FjeShbRm9vU3RvcmVdKVxuICogICAgIF0sXG4gKlxuICogICAgIHN0YXRpY3M6IHtcbiAqICAgICAgIGNhbGN1bGF0ZVN0YXRlKHByZXZTdGF0ZSkge1xuICogICAgICAgICBpZiAoIXByZXZTdGF0ZSkge1xuICogICAgICAgICAgIHJldHVybiB7XG4gKiAgICAgICAgICAgICBmb286IEZvb1N0b3JlLmdldEZvbygpLFxuICogICAgICAgICAgIH07XG4gKiAgICAgICAgIH1cbiAqXG4gKiAgICAgICAgIHJldHVybiB7XG4gKiAgICAgICAgICAgYmFyOiBGb29TdG9yZS5nZXRCYXIoKSxcbiAqICAgICAgICAgfTtcbiAqICAgICAgIH1cbiAqICAgICB9LFxuICogICB9KTtcbiAqXG4gKiBPbiB0aGUgc2Vjb25kIGNhbGN1bGF0ZVN0YXRlIHdoZW4gcHJldlN0YXRlIGlzIG5vdCBudWxsLCB0aGUgc3RhdGUgd2lsbCBiZVxuICogdXBkYXRlZCB0byBjb250YWluIHRoZSBwcmV2aW91cyBmb28gQU5EIHRoZSBiYXIgdGhhdCB3YXMganVzdCByZXR1cm5lZC4gT25seVxuICogcmV0dXJuaW5nIGJhciB3aWxsIG5vdCBkZWxldGUgZm9vLlxuICpcbiAqL1xuZnVuY3Rpb24gRmx1eE1peGluTGVnYWN5KHN0b3Jlcykge1xuICByZXR1cm4ge1xuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgZW5mb3JjZUludGVyZmFjZSh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNhbGN1bGF0ZVN0YXRlKG51bGwpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gVGhpcyB0cmFja3Mgd2hlbiBhbnkgc3RvcmUgaGFzIGNoYW5nZWQgYW5kIHdlIG1heSBuZWVkIHRvIHVwZGF0ZS5cbiAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB2YXIgc2V0Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICAvLyBUaGlzIGFkZHMgc3Vic2NyaXB0aW9ucyB0byBzdG9yZXMuIFdoZW4gYSBzdG9yZSBjaGFuZ2VzIGFsbCB3ZSBkbyBpc1xuICAgICAgLy8gc2V0IGNoYW5nZWQgdG8gdHJ1ZS5cbiAgICAgIHRoaXMuX2ZsdXhNaXhpblN1YnNjcmlwdGlvbnMgPSBzdG9yZXMubWFwKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuYWRkTGlzdGVuZXIoc2V0Q2hhbmdlZCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGRpc3BhdGNoIG9mIHRoZSByZWxldmFudCBzdG9yZXMuIElmXG4gICAgICAvLyBhbnkgaGF2ZSByZXBvcnRlZCBhIGNoYW5nZSB3ZSB1cGRhdGUgdGhlIHN0YXRlLCB0aGVuIHJlc2V0IGNoYW5nZWQuXG4gICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnN0cnVjdG9yLmNhbGN1bGF0ZVN0YXRlKF90aGlzLnN0YXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZmx1eE1peGluU3RvcmVHcm91cCA9IG5ldyBGbHV4U3RvcmVHcm91cChzdG9yZXMsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2ZsdXhNaXhpblN0b3JlR3JvdXAucmVsZWFzZSgpO1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5fZmx1eE1peGluU3Vic2NyaXB0aW9ucywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gX3JlZjtcblxuICAgICAgICBzdWJzY3JpcHRpb24ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9mbHV4TWl4aW5TdWJzY3JpcHRpb25zID0gW107XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbmZvcmNlSW50ZXJmYWNlKG8pIHtcbiAgIW8uY29uc3RydWN0b3IuY2FsY3VsYXRlU3RhdGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ29tcG9uZW50cyB0aGF0IHVzZSBGbHV4TWl4aW5MZWdhY3kgbXVzdCBpbXBsZW1lbnQgJyArICdgY2FsY3VsYXRlU3RhdGUoKWAgb24gdGhlIHN0YXRpY3Mgb2JqZWN0JykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsdXhNaXhpbkxlZ2FjeTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OW1iSFY0TDJ4cFlpOUdiSFY0VFdsNGFXNU1aV2RoWTNrdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcVhHNGdLaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVFF0TWpBeE5Td2dSbUZqWldKdmIyc3NJRWx1WXk1Y2JpQXFJRUZzYkNCeWFXZG9kSE1nY21WelpYSjJaV1F1WEc0Z0tseHVJQ29nVkdocGN5QnpiM1Z5WTJVZ1kyOWtaU0JwY3lCc2FXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FsTkVMWE4wZVd4bElHeHBZMlZ1YzJVZ1ptOTFibVFnYVc0Z2RHaGxYRzRnS2lCTVNVTkZUbE5GSUdacGJHVWdhVzRnZEdobElISnZiM1FnWkdseVpXTjBiM0o1SUc5bUlIUm9hWE1nYzI5MWNtTmxJSFJ5WldVdUlFRnVJR0ZrWkdsMGFXOXVZV3dnWjNKaGJuUmNiaUFxSUc5bUlIQmhkR1Z1ZENCeWFXZG9kSE1nWTJGdUlHSmxJR1p2ZFc1a0lHbHVJSFJvWlNCUVFWUkZUbFJUSUdacGJHVWdhVzRnZEdobElITmhiV1VnWkdseVpXTjBiM0o1TGx4dUlDcGNiaUFxSUVCd2NtOTJhV1JsYzAxdlpIVnNaU0JHYkhWNFRXbDRhVzVNWldkaFkzbGNiaUFxSUZ4dUlDb3ZYRzVjYmlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlFWnNkWGhUZEc5eVpVZHliM1Z3SUQwZ2NtVnhkV2x5WlNnbkxpOUdiSFY0VTNSdmNtVkhjbTkxY0NjcE8xeHVYRzUyWVhJZ2FXNTJZWEpwWVc1MElEMGdjbVZ4ZFdseVpTZ25abUpxY3k5c2FXSXZhVzUyWVhKcFlXNTBKeWs3WEc1Y2JpOHFLbHh1SUNvZ1lFWnNkWGhEYjI1MFlXbHVaWEpnSUhOb2IzVnNaQ0JpWlNCd2NtVm1aWEp5WldRZ2IzWmxjaUIwYUdseklHMXBlR2x1TENCaWRYUWdhWFFnY21WeGRXbHlaWE1nZFhOcGJtZGNiaUFxSUhKbFlXTjBJSGRwZEdnZ1kyeGhjM05sY3k0Z1UyOGdkR2hwY3lCdGFYaHBiaUJwY3lCd2NtOTJhV1JsWkNCM2FHVnlaU0JwZENCcGN5QnViM1FnZVdWMElIQnZjM05wWW14bFhHNGdLaUIwYnlCamIyNTJaWEowSUdFZ1kyOXVkR0ZwYm1WeUlIUnZJR0psSUdFZ1kyeGhjM011WEc0Z0tseHVJQ29nVkdocGN5QnRhWGhwYmlCemFHOTFiR1FnWW1VZ2RYTmxaQ0JtYjNJZ1VtVmhZM1FnWTI5dGNHOXVaVzUwY3lCMGFHRjBJR2hoZG1VZ2MzUmhkR1VnWW1GelpXUWdjSFZ5Wld4NVhHNGdLaUJ2YmlCemRHOXlaWE11SUdCMGFHbHpMbkJ5YjNCellDQjNhV3hzSUc1dmRDQmlaU0JoZG1GcGJHRmliR1VnYVc1emFXUmxJRzltSUdCallXeGpkV3hoZEdWVGRHRjBaU2dwWUM1Y2JpQXFYRzRnS2lCVWFHbHpJRzFwZUdsdUlIZHBiR3dnYjI1c2VTQmdjMlYwVTNSaGRHVmdJRzV2ZENCeVpYQnNZV05sSUdsMExDQnpieUI1YjNVZ2MyaHZkV3hrSUdGc2QyRjVjeUJ5WlhSMWNtNWNiaUFxSUdWMlpYSjVJR3RsZVNCcGJpQjViM1Z5SUhOMFlYUmxJSFZ1YkdWemN5QjViM1VnYTI1dmR5QjNhR0YwSUhsdmRTQmhjbVVnWkc5cGJtY3VJRU52Ym5OcFpHVnlJSFJvYVhNNlhHNGdLbHh1SUNvZ0lDQjJZWElnUm05dklEMGdVbVZoWTNRdVkzSmxZWFJsUTJ4aGMzTW9lMXh1SUNvZ0lDQWdJRzFwZUdsdWN6b2dXMXh1SUNvZ0lDQWdJQ0FnUm14MWVFMXBlR2x1VEdWbllXTjVLRnRHYjI5VGRHOXlaVjBwWEc0Z0tpQWdJQ0FnWFN4Y2JpQXFYRzRnS2lBZ0lDQWdjM1JoZEdsamN6b2dlMXh1SUNvZ0lDQWdJQ0FnWTJGc1kzVnNZWFJsVTNSaGRHVW9jSEpsZGxOMFlYUmxLU0I3WEc0Z0tpQWdJQ0FnSUNBZ0lHbG1JQ2doY0hKbGRsTjBZWFJsS1NCN1hHNGdLaUFnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBcUlDQWdJQ0FnSUNBZ0lDQWdJR1p2YnpvZ1JtOXZVM1J2Y21VdVoyVjBSbTl2S0Nrc1hHNGdLaUFnSUNBZ0lDQWdJQ0FnZlR0Y2JpQXFJQ0FnSUNBZ0lDQWdmVnh1SUNwY2JpQXFJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFxSUNBZ0lDQWdJQ0FnSUNCaVlYSTZJRVp2YjFOMGIzSmxMbWRsZEVKaGNpZ3BMRnh1SUNvZ0lDQWdJQ0FnSUNCOU8xeHVJQ29nSUNBZ0lDQWdmVnh1SUNvZ0lDQWdJSDBzWEc0Z0tpQWdJSDBwTzF4dUlDcGNiaUFxSUU5dUlIUm9aU0J6WldOdmJtUWdZMkZzWTNWc1lYUmxVM1JoZEdVZ2QyaGxiaUJ3Y21WMlUzUmhkR1VnYVhNZ2JtOTBJRzUxYkd3c0lIUm9aU0J6ZEdGMFpTQjNhV3hzSUdKbFhHNGdLaUIxY0dSaGRHVmtJSFJ2SUdOdmJuUmhhVzRnZEdobElIQnlaWFpwYjNWeklHWnZieUJCVGtRZ2RHaGxJR0poY2lCMGFHRjBJSGRoY3lCcWRYTjBJSEpsZEhWeWJtVmtMaUJQYm14NVhHNGdLaUJ5WlhSMWNtNXBibWNnWW1GeUlIZHBiR3dnYm05MElHUmxiR1YwWlNCbWIyOHVYRzRnS2x4dUlDb3ZYRzVtZFc1amRHbHZiaUJHYkhWNFRXbDRhVzVNWldkaFkza29jM1J2Y21WektTQjdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdaMlYwU1c1cGRHbGhiRk4wWVhSbE9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0JsYm1admNtTmxTVzUwWlhKbVlXTmxLSFJvYVhNcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMjl1YzNSeWRXTjBiM0l1WTJGc1kzVnNZWFJsVTNSaGRHVW9iblZzYkNrN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJYQnZibVZ1ZEVScFpFMXZkVzUwT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQjJZWElnWDNSb2FYTWdQU0IwYUdsek8xeHVYRzRnSUNBZ0lDQXZMeUJVYUdseklIUnlZV05yY3lCM2FHVnVJR0Z1ZVNCemRHOXlaU0JvWVhNZ1kyaGhibWRsWkNCaGJtUWdkMlVnYldGNUlHNWxaV1FnZEc4Z2RYQmtZWFJsTGx4dUlDQWdJQ0FnZG1GeUlHTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUhaaGNpQnpaWFJEYUdGdVoyVmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDOHZJRlJvYVhNZ1lXUmtjeUJ6ZFdKelkzSnBjSFJwYjI1eklIUnZJSE4wYjNKbGN5NGdWMmhsYmlCaElITjBiM0psSUdOb1lXNW5aWE1nWVd4c0lIZGxJR1J2SUdselhHNGdJQ0FnSUNBdkx5QnpaWFFnWTJoaGJtZGxaQ0IwYnlCMGNuVmxMbHh1SUNBZ0lDQWdkR2hwY3k1ZlpteDFlRTFwZUdsdVUzVmljMk55YVhCMGFXOXVjeUE5SUhOMGIzSmxjeTV0WVhBb1puVnVZM1JwYjI0Z0tITjBiM0psS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRHOXlaUzVoWkdSTWFYTjBaVzVsY2loelpYUkRhR0Z1WjJWa0tUdGNiaUFnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0F2THlCVWFHbHpJR05oYkd4aVlXTnJJR2x6SUdOaGJHeGxaQ0JoWm5SbGNpQjBhR1VnWkdsemNHRjBZMmdnYjJZZ2RHaGxJSEpsYkdWMllXNTBJSE4wYjNKbGN5NGdTV1pjYmlBZ0lDQWdJQzh2SUdGdWVTQm9ZWFpsSUhKbGNHOXlkR1ZrSUdFZ1kyaGhibWRsSUhkbElIVndaR0YwWlNCMGFHVWdjM1JoZEdVc0lIUm9aVzRnY21WelpYUWdZMmhoYm1kbFpDNWNiaUFnSUNBZ0lIWmhjaUJqWVd4c1ltRmpheUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dOb1lXNW5aV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmZkR2hwY3k1elpYUlRkR0YwWlNobWRXNWpkR2x2YmlBb2NISmxkbE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWDNSb2FYTXVZMjl1YzNSeWRXTjBiM0l1WTJGc1kzVnNZWFJsVTNSaGRHVW9YM1JvYVhNdWMzUmhkR1VwTzF4dUlDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0IwYUdsekxsOW1iSFY0VFdsNGFXNVRkRzl5WlVkeWIzVndJRDBnYm1WM0lFWnNkWGhUZEc5eVpVZHliM1Z3S0hOMGIzSmxjeXdnWTJGc2JHSmhZMnNwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxd2IyNWxiblJYYVd4c1ZXNXRiM1Z1ZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZlpteDFlRTFwZUdsdVUzUnZjbVZIY205MWNDNXlaV3hsWVhObEtDazdYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQmZhWFJsY21GMGIzSWdQU0IwYUdsekxsOW1iSFY0VFdsNGFXNVRkV0p6WTNKcGNIUnBiMjV6TENCZmFYTkJjbkpoZVNBOUlFRnljbUY1TG1selFYSnlZWGtvWDJsMFpYSmhkRzl5S1N3Z1gya2dQU0F3TENCZmFYUmxjbUYwYjNJZ1BTQmZhWE5CY25KaGVTQS9JRjlwZEdWeVlYUnZjaUE2SUY5cGRHVnlZWFJ2Y2x0VGVXMWliMnd1YVhSbGNtRjBiM0pkS0NrN095a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1gzSmxaanRjYmx4dUlDQWdJQ0FnSUNCcFppQW9YMmx6UVhKeVlYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9YMmtnUGowZ1gybDBaWEpoZEc5eUxteGxibWQwYUNrZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ1gzSmxaaUE5SUY5cGRHVnlZWFJ2Y2x0ZmFTc3JYVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCZmFTQTlJRjlwZEdWeVlYUnZjaTV1WlhoMEtDazdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXBMbVJ2Ym1VcElHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lGOXlaV1lnUFNCZmFTNTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFpoY2lCemRXSnpZM0pwY0hScGIyNGdQU0JmY21WbU8xeHVYRzRnSUNBZ0lDQWdJSE4xWW5OamNtbHdkR2x2Ymk1eVpXMXZkbVVvS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVYMlpzZFhoTmFYaHBibE4xWW5OamNtbHdkR2x2Ym5NZ1BTQmJYVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdWdVptOXlZMlZKYm5SbGNtWmhZMlVvYnlrZ2UxeHVJQ0FoYnk1amIyNXpkSEoxWTNSdmNpNWpZV3hqZFd4aGRHVlRkR0YwWlNBL0lIQnliMk5sYzNNdVpXNTJMazVQUkVWZlJVNVdJQ0U5UFNBbmNISnZaSFZqZEdsdmJpY2dQeUJwYm5aaGNtbGhiblFvWm1Gc2MyVXNJQ2REYjIxd2IyNWxiblJ6SUhSb1lYUWdkWE5sSUVac2RYaE5hWGhwYmt4bFoyRmplU0J0ZFhOMElHbHRjR3hsYldWdWRDQW5JQ3NnSjJCallXeGpkV3hoZEdWVGRHRjBaU2dwWUNCdmJpQjBhR1VnYzNSaGRHbGpjeUJ2WW1wbFkzUW5LU0E2SUdsdWRtRnlhV0Z1ZENobVlXeHpaU2tnT2lCMWJtUmxabWx1WldRN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUm14MWVFMXBlR2x1VEdWbllXTjVPeUpkZlE9PSIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZsdXhSZWR1Y2VTdG9yZVxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEZsdXhTdG9yZSA9IHJlcXVpcmUoJy4vRmx1eFN0b3JlJyk7XG5cbnZhciBhYnN0cmFjdE1ldGhvZCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RNZXRob2QnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxudmFyIEZsdXhSZWR1Y2VTdG9yZSA9IChmdW5jdGlvbiAoX0ZsdXhTdG9yZSkge1xuICBfaW5oZXJpdHMoRmx1eFJlZHVjZVN0b3JlLCBfRmx1eFN0b3JlKTtcblxuICBmdW5jdGlvbiBGbHV4UmVkdWNlU3RvcmUoZGlzcGF0Y2hlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbHV4UmVkdWNlU3RvcmUpO1xuXG4gICAgX0ZsdXhTdG9yZS5jYWxsKHRoaXMsIGRpc3BhdGNoZXIpO1xuICAgIHRoaXMuX3N0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdGhhdCBleHBvc2VzIHRoZSBlbnRpcmUgc3RhdGUgb2YgdGhpcyBzdG9yZS4gSWYgeW91ciBzdGF0ZSBpcyBub3RcbiAgICogaW1tdXRhYmxlIHlvdSBzaG91bGQgb3ZlcnJpZGUgdGhpcyBhbmQgbm90IGV4cG9zZSBfc3RhdGUgZGlyZWN0bHkuXG4gICAqL1xuXG4gIEZsdXhSZWR1Y2VTdG9yZS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgdGhlIGluaXRpYWwgc3RhdGUgZm9yIHRoaXMgc3RvcmUuIFRoaXMgaXMgY2FsbGVkIG9uY2UgZHVyaW5nXG4gICAqIGNvbnN0cnVjdGlvbiBvZiB0aGUgc3RvcmUuXG4gICAqL1xuXG4gIEZsdXhSZWR1Y2VTdG9yZS5wcm90b3R5cGUuZ2V0SW5pdGlhbFN0YXRlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiBhYnN0cmFjdE1ldGhvZCgnRmx1eFJlZHVjZVN0b3JlJywgJ2dldEluaXRpYWxTdGF0ZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHJlZHVjZSBhIHN0cmVhbSBvZiBhY3Rpb25zIGNvbWluZyBmcm9tIHRoZSBkaXNwYXRjaGVyIGludG8gYVxuICAgKiBzaW5nbGUgc3RhdGUgb2JqZWN0XG4gICAqL1xuXG4gIEZsdXhSZWR1Y2VTdG9yZS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gcmVkdWNlKHN0YXRlLCBhY3Rpb24pIHtcbiAgICByZXR1cm4gYWJzdHJhY3RNZXRob2QoJ0ZsdXhSZWR1Y2VTdG9yZScsICdyZWR1Y2UnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHR3byB2ZXJzaW9ucyBvZiBzdGF0ZSBhcmUgdGhlIHNhbWUuIFlvdSBkbyBub3QgbmVlZCB0byBvdmVycmlkZVxuICAgKiB0aGlzIGlmIHlvdXIgc3RhdGUgaXMgaW1tdXRhYmxlLlxuICAgKi9cblxuICBGbHV4UmVkdWNlU3RvcmUucHJvdG90eXBlLmFyZUVxdWFsID0gZnVuY3Rpb24gYXJlRXF1YWwob25lLCB0d28pIHtcbiAgICByZXR1cm4gb25lID09PSB0d287XG4gIH07XG5cbiAgLyoqXG4gICAqIFVzZSByZWR1Y2UgYW5kIHRyYWNrIF9zdGF0ZSBpbnN0ZWFkIG9mIHVzaW5nIF9fb25EaXNwYXRjaFxuICAgKi9cblxuICBGbHV4UmVkdWNlU3RvcmUucHJvdG90eXBlLl9faW52b2tlT25EaXNwYXRjaCA9IGZ1bmN0aW9uIF9faW52b2tlT25EaXNwYXRjaChhY3Rpb24pIHtcbiAgICB0aGlzLl9fY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgLy8gcmVkdWNlIHRoZSBzdHJlYW0gb2YgaW5jb21pbmcgYWN0aW9ucyB0byBzdGF0ZSwgdXBkYXRlIHdoZW4gbmVjZXNzYXJ5XG4gICAgdmFyIHN0YXJ0aW5nU3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICB2YXIgZW5kaW5nU3RhdGUgPSB0aGlzLnJlZHVjZShzdGFydGluZ1N0YXRlLCBhY3Rpb24pO1xuXG4gICAgLy8gVGhpcyBtZWFucyB5b3VyIGVuZGluZyBzdGF0ZSBzaG91bGQgbmV2ZXIgYmUgdW5kZWZpbmVkXG4gICAgIShlbmRpbmdTdGF0ZSAhPT0gdW5kZWZpbmVkKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICclcyByZXR1cm5lZCB1bmRlZmluZWQgZnJvbSByZWR1Y2UoLi4uKSwgZGlkIHlvdSBmb3JnZXQgdG8gcmV0dXJuICcgKyAnc3RhdGUgaW4gdGhlIGRlZmF1bHQgY2FzZT8gKHVzZSBudWxsIGlmIHRoaXMgd2FzIGludGVudGlvbmFsKScsIHRoaXMuY29uc3RydWN0b3IubmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCF0aGlzLmFyZUVxdWFsKHN0YXJ0aW5nU3RhdGUsIGVuZGluZ1N0YXRlKSkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBlbmRpbmdTdGF0ZTtcblxuICAgICAgLy8gYF9fZW1pdENoYW5nZSgpYCBzZXRzIGB0aGlzLl9fY2hhbmdlZGAgdG8gdHJ1ZSBhbmQgdGhlbiB0aGUgYWN0dWFsXG4gICAgICAvLyBjaGFuZ2Ugd2lsbCBiZSBmaXJlZCBmcm9tIHRoZSBlbWl0dGVyIGF0IHRoZSBlbmQgb2YgdGhlIGRpc3BhdGNoLCB0aGlzXG4gICAgICAvLyBpcyByZXF1aXJlZCBpbiBvcmRlciB0byBzdXBwb3J0IG1ldGhvZHMgbGlrZSBgaGFzQ2hhbmdlZCgpYFxuICAgICAgdGhpcy5fX2VtaXRDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX2NoYW5nZWQpIHtcbiAgICAgIHRoaXMuX19lbWl0dGVyLmVtaXQodGhpcy5fX2NoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEZsdXhSZWR1Y2VTdG9yZTtcbn0pKEZsdXhTdG9yZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1eFJlZHVjZVN0b3JlO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5bWJIVjRMMnhwWWk5R2JIVjRVbVZrZFdObFUzUnZjbVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2x4dUlDb2dRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTBMVEl3TVRVc0lFWmhZMlZpYjI5ckxDQkpibU11WEc0Z0tpQkJiR3dnY21sbmFIUnpJSEpsYzJWeWRtVmtMbHh1SUNwY2JpQXFJRlJvYVhNZ2MyOTFjbU5sSUdOdlpHVWdhWE1nYkdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVKVFJDMXpkSGxzWlNCc2FXTmxibk5sSUdadmRXNWtJR2x1SUhSb1pWeHVJQ29nVEVsRFJVNVRSU0JtYVd4bElHbHVJSFJvWlNCeWIyOTBJR1JwY21WamRHOXllU0J2WmlCMGFHbHpJSE52ZFhKalpTQjBjbVZsTGlCQmJpQmhaR1JwZEdsdmJtRnNJR2R5WVc1MFhHNGdLaUJ2WmlCd1lYUmxiblFnY21sbmFIUnpJR05oYmlCaVpTQm1iM1Z1WkNCcGJpQjBhR1VnVUVGVVJVNVVVeUJtYVd4bElHbHVJSFJvWlNCellXMWxJR1JwY21WamRHOXllUzVjYmlBcVhHNGdLaUJBY0hKdmRtbGtaWE5OYjJSMWJHVWdSbXgxZUZKbFpIVmpaVk4wYjNKbFhHNGdLaUJjYmlBcUwxeHVYRzRuZFhObElITjBjbWxqZENjN1hHNWNibVoxYm1OMGFXOXVJRjlqYkdGemMwTmhiR3hEYUdWamF5aHBibk4wWVc1alpTd2dRMjl1YzNSeWRXTjBiM0lwSUhzZ2FXWWdLQ0VvYVc1emRHRnVZMlVnYVc1emRHRnVZMlZ2WmlCRGIyNXpkSEoxWTNSdmNpa3BJSHNnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblEyRnVibTkwSUdOaGJHd2dZU0JqYkdGemN5QmhjeUJoSUdaMWJtTjBhVzl1SnlrN0lIMGdmVnh1WEc1bWRXNWpkR2x2YmlCZmFXNW9aWEpwZEhNb2MzVmlRMnhoYzNNc0lITjFjR1Z5UTJ4aGMzTXBJSHNnYVdZZ0tIUjVjR1Z2WmlCemRYQmxja05zWVhOeklDRTlQU0FuWm5WdVkzUnBiMjRuSUNZbUlITjFjR1Z5UTJ4aGMzTWdJVDA5SUc1MWJHd3BJSHNnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblUzVndaWElnWlhod2NtVnpjMmx2YmlCdGRYTjBJR1ZwZEdobGNpQmlaU0J1ZFd4c0lHOXlJR0VnWm5WdVkzUnBiMjRzSUc1dmRDQW5JQ3NnZEhsd1pXOW1JSE4xY0dWeVEyeGhjM01wT3lCOUlITjFZa05zWVhOekxuQnliM1J2ZEhsd1pTQTlJRTlpYW1WamRDNWpjbVZoZEdVb2MzVndaWEpEYkdGemN5QW1KaUJ6ZFhCbGNrTnNZWE56TG5CeWIzUnZkSGx3WlN3Z2V5QmpiMjV6ZEhKMVkzUnZjam9nZXlCMllXeDFaVG9nYzNWaVEyeGhjM01zSUdWdWRXMWxjbUZpYkdVNklHWmhiSE5sTENCM2NtbDBZV0pzWlRvZ2RISjFaU3dnWTI5dVptbG5kWEpoWW14bE9pQjBjblZsSUgwZ2ZTazdJR2xtSUNoemRYQmxja05zWVhOektTQlBZbXBsWTNRdWMyVjBVSEp2ZEc5MGVYQmxUMllnUHlCUFltcGxZM1F1YzJWMFVISnZkRzkwZVhCbFQyWW9jM1ZpUTJ4aGMzTXNJSE4xY0dWeVEyeGhjM01wSURvZ2MzVmlRMnhoYzNNdVgxOXdjbTkwYjE5ZklEMGdjM1Z3WlhKRGJHRnpjenNnZlZ4dVhHNTJZWElnUm14MWVGTjBiM0psSUQwZ2NtVnhkV2x5WlNnbkxpOUdiSFY0VTNSdmNtVW5LVHRjYmx4dWRtRnlJR0ZpYzNSeVlXTjBUV1YwYUc5a0lEMGdjbVZ4ZFdseVpTZ25MaTloWW5OMGNtRmpkRTFsZEdodlpDY3BPMXh1ZG1GeUlHbHVkbUZ5YVdGdWRDQTlJSEpsY1hWcGNtVW9KMlppYW5NdmJHbGlMMmx1ZG1GeWFXRnVkQ2NwTzF4dVhHNTJZWElnUm14MWVGSmxaSFZqWlZOMGIzSmxJRDBnS0daMWJtTjBhVzl1SUNoZlJteDFlRk4wYjNKbEtTQjdYRzRnSUY5cGJtaGxjbWwwY3loR2JIVjRVbVZrZFdObFUzUnZjbVVzSUY5R2JIVjRVM1J2Y21VcE8xeHVYRzRnSUdaMWJtTjBhVzl1SUVac2RYaFNaV1IxWTJWVGRHOXlaU2hrYVhOd1lYUmphR1Z5S1NCN1hHNGdJQ0FnWDJOc1lYTnpRMkZzYkVOb1pXTnJLSFJvYVhNc0lFWnNkWGhTWldSMVkyVlRkRzl5WlNrN1hHNWNiaUFnSUNCZlJteDFlRk4wYjNKbExtTmhiR3dvZEdocGN5d2daR2x6Y0dGMFkyaGxjaWs3WEc0Z0lDQWdkR2hwY3k1ZmMzUmhkR1VnUFNCMGFHbHpMbWRsZEVsdWFYUnBZV3hUZEdGMFpTZ3BPMXh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVkbGRIUmxjaUIwYUdGMElHVjRjRzl6WlhNZ2RHaGxJR1Z1ZEdseVpTQnpkR0YwWlNCdlppQjBhR2x6SUhOMGIzSmxMaUJKWmlCNWIzVnlJSE4wWVhSbElHbHpJRzV2ZEZ4dUlDQWdLaUJwYlcxMWRHRmliR1VnZVc5MUlITm9iM1ZzWkNCdmRtVnljbWxrWlNCMGFHbHpJR0Z1WkNCdWIzUWdaWGh3YjNObElGOXpkR0YwWlNCa2FYSmxZM1JzZVM1Y2JpQWdJQ292WEc1Y2JpQWdSbXgxZUZKbFpIVmpaVk4wYjNKbExuQnliM1J2ZEhsd1pTNW5aWFJUZEdGMFpTQTlJR1oxYm1OMGFXOXVJR2RsZEZOMFlYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5emRHRjBaVHRjYmlBZ2ZUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1EyOXVjM1J5ZFdOMGN5QjBhR1VnYVc1cGRHbGhiQ0J6ZEdGMFpTQm1iM0lnZEdocGN5QnpkRzl5WlM0Z1ZHaHBjeUJwY3lCallXeHNaV1FnYjI1alpTQmtkWEpwYm1kY2JpQWdJQ29nWTI5dWMzUnlkV04wYVc5dUlHOW1JSFJvWlNCemRHOXlaUzVjYmlBZ0lDb3ZYRzVjYmlBZ1JteDFlRkpsWkhWalpWTjBiM0psTG5CeWIzUnZkSGx3WlM1blpYUkpibWwwYVdGc1UzUmhkR1VnUFNCbWRXNWpkR2x2YmlCblpYUkpibWwwYVdGc1UzUmhkR1VvS1NCN1hHNGdJQ0FnY21WMGRYSnVJR0ZpYzNSeVlXTjBUV1YwYUc5a0tDZEdiSFY0VW1Wa2RXTmxVM1J2Y21VbkxDQW5aMlYwU1c1cGRHbGhiRk4wWVhSbEp5azdYRzRnSUgwN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZWelpXUWdkRzhnY21Wa2RXTmxJR0VnYzNSeVpXRnRJRzltSUdGamRHbHZibk1nWTI5dGFXNW5JR1p5YjIwZ2RHaGxJR1JwYzNCaGRHTm9aWElnYVc1MGJ5QmhYRzRnSUNBcUlITnBibWRzWlNCemRHRjBaU0J2WW1wbFkzUmNiaUFnSUNvdlhHNWNiaUFnUm14MWVGSmxaSFZqWlZOMGIzSmxMbkJ5YjNSdmRIbHdaUzV5WldSMVkyVWdQU0JtZFc1amRHbHZiaUJ5WldSMVkyVW9jM1JoZEdVc0lHRmpkR2x2YmlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJoWW5OMGNtRmpkRTFsZEdodlpDZ25SbXgxZUZKbFpIVmpaVk4wYjNKbEp5d2dKM0psWkhWalpTY3BPMXh1SUNCOU8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCRGFHVmphM01nYVdZZ2RIZHZJSFpsY25OcGIyNXpJRzltSUhOMFlYUmxJR0Z5WlNCMGFHVWdjMkZ0WlM0Z1dXOTFJR1J2SUc1dmRDQnVaV1ZrSUhSdklHOTJaWEp5YVdSbFhHNGdJQ0FxSUhSb2FYTWdhV1lnZVc5MWNpQnpkR0YwWlNCcGN5QnBiVzExZEdGaWJHVXVYRzRnSUNBcUwxeHVYRzRnSUVac2RYaFNaV1IxWTJWVGRHOXlaUzV3Y205MGIzUjVjR1V1WVhKbFJYRjFZV3dnUFNCbWRXNWpkR2x2YmlCaGNtVkZjWFZoYkNodmJtVXNJSFIzYnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ2Ym1VZ1BUMDlJSFIzYnp0Y2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dWWE5sSUhKbFpIVmpaU0JoYm1RZ2RISmhZMnNnWDNOMFlYUmxJR2x1YzNSbFlXUWdiMllnZFhOcGJtY2dYMTl2YmtScGMzQmhkR05vWEc0Z0lDQXFMMXh1WEc0Z0lFWnNkWGhTWldSMVkyVlRkRzl5WlM1d2NtOTBiM1I1Y0dVdVgxOXBiblp2YTJWUGJrUnBjM0JoZEdOb0lEMGdablZ1WTNScGIyNGdYMTlwYm5admEyVlBia1JwYzNCaGRHTm9LR0ZqZEdsdmJpa2dlMXh1SUNBZ0lIUm9hWE11WDE5amFHRnVaMlZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0F2THlCeVpXUjFZMlVnZEdobElITjBjbVZoYlNCdlppQnBibU52YldsdVp5QmhZM1JwYjI1eklIUnZJSE4wWVhSbExDQjFjR1JoZEdVZ2QyaGxiaUJ1WldObGMzTmhjbmxjYmlBZ0lDQjJZWElnYzNSaGNuUnBibWRUZEdGMFpTQTlJSFJvYVhNdVgzTjBZWFJsTzF4dUlDQWdJSFpoY2lCbGJtUnBibWRUZEdGMFpTQTlJSFJvYVhNdWNtVmtkV05sS0hOMFlYSjBhVzVuVTNSaGRHVXNJR0ZqZEdsdmJpazdYRzVjYmlBZ0lDQXZMeUJVYUdseklHMWxZVzV6SUhsdmRYSWdaVzVrYVc1bklITjBZWFJsSUhOb2IzVnNaQ0J1WlhabGNpQmlaU0IxYm1SbFptbHVaV1JjYmlBZ0lDQWhLR1Z1WkdsdVoxTjBZWFJsSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY0hKdlkyVnpjeTVsYm5ZdVRrOUVSVjlGVGxZZ0lUMDlJQ2R3Y205a2RXTjBhVzl1SnlBL0lHbHVkbUZ5YVdGdWRDaG1ZV3h6WlN3Z0p5VnpJSEpsZEhWeWJtVmtJSFZ1WkdWbWFXNWxaQ0JtY205dElISmxaSFZqWlNndUxpNHBMQ0JrYVdRZ2VXOTFJR1p2Y21kbGRDQjBieUJ5WlhSMWNtNGdKeUFySUNkemRHRjBaU0JwYmlCMGFHVWdaR1ZtWVhWc2RDQmpZWE5sUHlBb2RYTmxJRzUxYkd3Z2FXWWdkR2hwY3lCM1lYTWdhVzUwWlc1MGFXOXVZV3dwSnl3Z2RHaHBjeTVqYjI1emRISjFZM1J2Y2k1dVlXMWxLU0E2SUdsdWRtRnlhV0Z1ZENobVlXeHpaU2tnT2lCMWJtUmxabWx1WldRN1hHNWNiaUFnSUNCcFppQW9JWFJvYVhNdVlYSmxSWEYxWVd3b2MzUmhjblJwYm1kVGRHRjBaU3dnWlc1a2FXNW5VM1JoZEdVcEtTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5emRHRjBaU0E5SUdWdVpHbHVaMU4wWVhSbE8xeHVYRzRnSUNBZ0lDQXZMeUJnWDE5bGJXbDBRMmhoYm1kbEtDbGdJSE5sZEhNZ1lIUm9hWE11WDE5amFHRnVaMlZrWUNCMGJ5QjBjblZsSUdGdVpDQjBhR1Z1SUhSb1pTQmhZM1IxWVd4Y2JpQWdJQ0FnSUM4dklHTm9ZVzVuWlNCM2FXeHNJR0psSUdacGNtVmtJR1p5YjIwZ2RHaGxJR1Z0YVhSMFpYSWdZWFFnZEdobElHVnVaQ0J2WmlCMGFHVWdaR2x6Y0dGMFkyZ3NJSFJvYVhOY2JpQWdJQ0FnSUM4dklHbHpJSEpsY1hWcGNtVmtJR2x1SUc5eVpHVnlJSFJ2SUhOMWNIQnZjblFnYldWMGFHOWtjeUJzYVd0bElHQm9ZWE5EYUdGdVoyVmtLQ2xnWEc0Z0lDQWdJQ0IwYUdsekxsOWZaVzFwZEVOb1lXNW5aU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbDlmWTJoaGJtZGxaQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZYMlZ0YVhSMFpYSXVaVzFwZENoMGFHbHpMbDlmWTJoaGJtZGxSWFpsYm5RcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQnlaWFIxY200Z1JteDFlRkpsWkhWalpWTjBiM0psTzF4dWZTa29SbXgxZUZOMGIzSmxLVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCR2JIVjRVbVZrZFdObFUzUnZjbVU3SWwxOSIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZsdXhTdG9yZVxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnZmJlbWl0dGVyJyk7XG5cbnZhciBFdmVudEVtaXR0ZXIgPSBfcmVxdWlyZS5FdmVudEVtaXR0ZXI7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHNob3VsZCBiZSBleHRlbmRlZCBieSB0aGUgc3RvcmVzIGluIHlvdXIgYXBwbGljYXRpb24sIGxpa2Ugc286XG4gKlxuICogdmFyIEZsdXhTdG9yZSA9IHJlcXVpcmUoJ0ZsdXhTdG9yZScpO1xuICogdmFyIE15RGlzcGF0Y2hlciA9IHJlcXVpcmUoJ015RGlzcGF0Y2hlcicpO1xuICpcbiAqIHZhciBfZm9vO1xuICpcbiAqIGNsYXNzIE15U3RvcmUgZXh0ZW5kcyBGbHV4U3RvcmUge1xuICpcbiAqICAgZ2V0Rm9vKCkge1xuICogICAgIHJldHVybiBfZm9vO1xuICogICB9XG4gKlxuICogICBfX29uRGlzcGF0Y2ggPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAqICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAqXG4gKiAgICAgICBjYXNlICdhbi1hY3Rpb24nOlxuICogICAgICAgICBjaGFuZ2VTdGF0ZShhY3Rpb24uc29tZURhdGEpO1xuICogICAgICAgICB0aGlzLl9fZW1pdENoYW5nZSgpO1xuICogICAgICAgICBicmVhaztcbiAqXG4gKiAgICAgICBjYXNlICdhbm90aGVyLWFjdGlvbic6XG4gKiAgICAgICAgIGNoYW5nZVN0YXRlQW5vdGhlcldheShhY3Rpb24ub3RoZXJEYXRhKTtcbiAqICAgICAgICAgdGhpcy5fX2VtaXRDaGFuZ2UoKTtcbiAqICAgICAgICAgYnJlYWs7XG4gKlxuICogICAgICAgZGVmYXVsdDpcbiAqICAgICAgICAgLy8gbm8gb3BcbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiB9XG4gKlxuICogbW9kdWxlLmV4cG9ydHMgPSBuZXcgTXlTdG9yZShNeURpc3BhdGNoZXIpO1xuICovXG5cbnZhciBGbHV4U3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7RGlzcGF0Y2hlcn0gZGlzcGF0Y2hlclxuICAgKi9cblxuICBmdW5jdGlvbiBGbHV4U3RvcmUoZGlzcGF0Y2hlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmx1eFN0b3JlKTtcblxuICAgIHRoaXMuX19jbGFzc05hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICB0aGlzLl9fY2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jaGFuZ2VFdmVudCA9ICdjaGFuZ2UnO1xuICAgIHRoaXMuX19kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICB0aGlzLl9fZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9kaXNwYXRjaFRva2VuID0gZGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgX3RoaXMuX19pbnZva2VPbkRpc3BhdGNoKHBheWxvYWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7b2JqZWN0fSBFbWl0dGVyU3Vic2NyaXB0aW9uIHRoYXQgY2FuIGJlIHVzZWQgd2l0aFxuICAgKiAgIFN1YnNjcmlwdGlvbnNIYW5kbGVyIG9yIGRpcmVjdGx5IHVzZWQgdG8gcmVsZWFzZSB0aGUgc3Vic2NyaXB0aW9uLlxuICAgKi9cblxuICBGbHV4U3RvcmUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtaXR0ZXIuYWRkTGlzdGVuZXIodGhpcy5fX2NoYW5nZUV2ZW50LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybiB7RGlzcGF0Y2hlcn0gVGhlIGRpc3BhdGNoZXIgdGhhdCB0aGlzIHN0b3JlIGlzIHJlZ2lzdGVyZWQgd2l0aC5cbiAgICovXG5cbiAgRmx1eFN0b3JlLnByb3RvdHlwZS5nZXREaXNwYXRjaGVyID0gZnVuY3Rpb24gZ2V0RGlzcGF0Y2hlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rpc3BhdGNoZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyB0aGUgZGlzcGF0Y2hlciB1c2VzIHRvIGlkZW50aWZ5IGVhY2ggc3RvcmUnc1xuICAgKiAgIHJlZ2lzdGVyZWQgY2FsbGJhY2suIFRoaXMgaXMgdXNlZCB3aXRoIHRoZSBkaXNwYXRjaGVyJ3Mgd2FpdEZvciBtZXRob2RcbiAgICogICB0byBkZWNsYXJhdGl2ZWx5IGRlcGVuZCBvbiBvdGhlciBzdG9yZXMgdXBkYXRpbmcgdGhlbXNlbHZlcyBmaXJzdC5cbiAgICovXG5cbiAgRmx1eFN0b3JlLnByb3RvdHlwZS5nZXREaXNwYXRjaFRva2VuID0gZnVuY3Rpb24gZ2V0RGlzcGF0Y2hUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGF0Y2hUb2tlbjtcbiAgfTtcblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSBzdG9yZSBoYXMgY2hhbmdlZCBkdXJpbmcgdGhlIG1vc3QgcmVjZW50XG4gICAqICAgZGlzcGF0Y2guXG4gICAqL1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuaGFzQ2hhbmdlZCA9IGZ1bmN0aW9uIGhhc0NoYW5nZWQoKSB7XG4gICAgIXRoaXMuX19kaXNwYXRjaGVyLmlzRGlzcGF0Y2hpbmcoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICclcy5oYXNDaGFuZ2VkKCk6IE11c3QgYmUgaW52b2tlZCB3aGlsZSBkaXNwYXRjaGluZy4nLCB0aGlzLl9fY2xhc3NOYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMuX19jaGFuZ2VkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEVtaXQgYW4gZXZlbnQgbm90aWZ5aW5nIGxpc3RlbmVycyB0aGF0IHRoZSBzdGF0ZSBvZiB0aGUgc3RvcmUgaGFzIGNoYW5nZWQuXG4gICAqL1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuX19lbWl0Q2hhbmdlID0gZnVuY3Rpb24gX19lbWl0Q2hhbmdlKCkge1xuICAgICF0aGlzLl9fZGlzcGF0Y2hlci5pc0Rpc3BhdGNoaW5nKCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnJXMuX19lbWl0Q2hhbmdlKCk6IE11c3QgYmUgaW52b2tlZCB3aGlsZSBkaXNwYXRjaGluZy4nLCB0aGlzLl9fY2xhc3NOYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5fX2NoYW5nZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBlbmNhcHN1bGF0ZXMgYWxsIGxvZ2ljIGZvciBpbnZva2luZyBfX29uRGlzcGF0Y2guIEl0IHNob3VsZFxuICAgKiBiZSB1c2VkIGZvciB0aGluZ3MgbGlrZSBjYXRjaGluZyBjaGFuZ2VzIGFuZCBlbWl0dGluZyB0aGVtIGFmdGVyIHRoZVxuICAgKiBzdWJjbGFzcyBoYXMgaGFuZGxlZCBhIHBheWxvYWQuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHBheWxvYWQgVGhlIGRhdGEgZGlzcGF0Y2hlZCBieSB0aGUgZGlzcGF0Y2hlciwgZGVzY3JpYmluZ1xuICAgKiAgIHNvbWV0aGluZyB0aGF0IGhhcyBoYXBwZW5lZCBpbiB0aGUgcmVhbCB3b3JsZDogdGhlIHVzZXIgY2xpY2tlZCwgdGhlXG4gICAqICAgc2VydmVyIHJlc3BvbmRlZCwgdGltZSBwYXNzZWQsIGV0Yy5cbiAgICovXG5cbiAgRmx1eFN0b3JlLnByb3RvdHlwZS5fX2ludm9rZU9uRGlzcGF0Y2ggPSBmdW5jdGlvbiBfX2ludm9rZU9uRGlzcGF0Y2gocGF5bG9hZCkge1xuICAgIHRoaXMuX19jaGFuZ2VkID0gZmFsc2U7XG4gICAgdGhpcy5fX29uRGlzcGF0Y2gocGF5bG9hZCk7XG4gICAgaWYgKHRoaXMuX19jaGFuZ2VkKSB7XG4gICAgICB0aGlzLl9fZW1pdHRlci5lbWl0KHRoaXMuX19jaGFuZ2VFdmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgZGlzcGF0Y2hlciBkdXJpbmdcbiAgICogaW5zdGFudGlhdGlvbi4gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kLiBUaGlzIGNhbGxiYWNrIGlzIHRoZVxuICAgKiBvbmx5IHdheSB0aGUgc3RvcmUgcmVjZWl2ZXMgbmV3IGRhdGEuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXlsb2FkIFRoZSBkYXRhIGRpc3BhdGNoZWQgYnkgdGhlIGRpc3BhdGNoZXIsIGRlc2NyaWJpbmdcbiAgICogICBzb21ldGhpbmcgdGhhdCBoYXMgaGFwcGVuZWQgaW4gdGhlIHJlYWwgd29ybGQ6IHRoZSB1c2VyIGNsaWNrZWQsIHRoZVxuICAgKiAgIHNlcnZlciByZXNwb25kZWQsIHRpbWUgcGFzc2VkLCBldGMuXG4gICAqL1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuX19vbkRpc3BhdGNoID0gZnVuY3Rpb24gX19vbkRpc3BhdGNoKHBheWxvYWQpIHtcbiAgICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnJXMgaGFzIG5vdCBvdmVycmlkZGVuIEZsdXhTdG9yZS5fX29uRGlzcGF0Y2goKSwgd2hpY2ggaXMgcmVxdWlyZWQnLCB0aGlzLl9fY2xhc3NOYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgcmV0dXJuIEZsdXhTdG9yZTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1eFN0b3JlO1xuXG4vLyBwcml2YXRlXG5cbi8vIHByb3RlY3RlZCwgYXZhaWxhYmxlIHRvIHN1YmNsYXNzZXNcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OW1iSFY0TDJ4cFlpOUdiSFY0VTNSdmNtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xWEc0Z0tpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UUXRNakF4TlN3Z1JtRmpaV0p2YjJzc0lFbHVZeTVjYmlBcUlFRnNiQ0J5YVdkb2RITWdjbVZ6WlhKMlpXUXVYRzRnS2x4dUlDb2dWR2hwY3lCemIzVnlZMlVnWTI5a1pTQnBjeUJzYVdObGJuTmxaQ0IxYm1SbGNpQjBhR1VnUWxORUxYTjBlV3hsSUd4cFkyVnVjMlVnWm05MWJtUWdhVzRnZEdobFhHNGdLaUJNU1VORlRsTkZJR1pwYkdVZ2FXNGdkR2hsSUhKdmIzUWdaR2x5WldOMGIzSjVJRzltSUhSb2FYTWdjMjkxY21ObElIUnlaV1V1SUVGdUlHRmtaR2wwYVc5dVlXd2daM0poYm5SY2JpQXFJRzltSUhCaGRHVnVkQ0J5YVdkb2RITWdZMkZ1SUdKbElHWnZkVzVrSUdsdUlIUm9aU0JRUVZSRlRsUlRJR1pwYkdVZ2FXNGdkR2hsSUhOaGJXVWdaR2x5WldOMGIzSjVMbHh1SUNwY2JpQXFJRUJ3Y205MmFXUmxjMDF2WkhWc1pTQkdiSFY0VTNSdmNtVmNiaUFxSUZ4dUlDb3ZYRzVjYmlkMWMyVWdjM1J5YVdOMEp6dGNibHh1Wm5WdVkzUnBiMjRnWDJOc1lYTnpRMkZzYkVOb1pXTnJLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2V5QnBaaUFvSVNocGJuTjBZVzVqWlNCcGJuTjBZVzVqWlc5bUlFTnZibk4wY25WamRHOXlLU2tnZXlCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZERZVzV1YjNRZ1kyRnNiQ0JoSUdOc1lYTnpJR0Z6SUdFZ1puVnVZM1JwYjI0bktUc2dmU0I5WEc1Y2JuWmhjaUJmY21WeGRXbHlaU0E5SUhKbGNYVnBjbVVvSjJaaVpXMXBkSFJsY2ljcE8xeHVYRzUyWVhJZ1JYWmxiblJGYldsMGRHVnlJRDBnWDNKbGNYVnBjbVV1UlhabGJuUkZiV2wwZEdWeU8xeHVYRzUyWVhJZ2FXNTJZWEpwWVc1MElEMGdjbVZ4ZFdseVpTZ25abUpxY3k5c2FXSXZhVzUyWVhKcFlXNTBKeWs3WEc1Y2JpOHFLbHh1SUNvZ1ZHaHBjeUJqYkdGemN5QnphRzkxYkdRZ1ltVWdaWGgwWlc1a1pXUWdZbmtnZEdobElITjBiM0psY3lCcGJpQjViM1Z5SUdGd2NHeHBZMkYwYVc5dUxDQnNhV3RsSUhOdk9seHVJQ3BjYmlBcUlIWmhjaUJHYkhWNFUzUnZjbVVnUFNCeVpYRjFhWEpsS0NkR2JIVjRVM1J2Y21VbktUdGNiaUFxSUhaaGNpQk5lVVJwYzNCaGRHTm9aWElnUFNCeVpYRjFhWEpsS0NkTmVVUnBjM0JoZEdOb1pYSW5LVHRjYmlBcVhHNGdLaUIyWVhJZ1gyWnZienRjYmlBcVhHNGdLaUJqYkdGemN5Qk5lVk4wYjNKbElHVjRkR1Z1WkhNZ1JteDFlRk4wYjNKbElIdGNiaUFxWEc0Z0tpQWdJR2RsZEVadmJ5Z3BJSHRjYmlBcUlDQWdJQ0J5WlhSMWNtNGdYMlp2Ynp0Y2JpQXFJQ0FnZlZ4dUlDcGNiaUFxSUNBZ1gxOXZia1JwYzNCaGRHTm9JRDBnWm5WdVkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0tpQWdJQ0FnYzNkcGRHTm9LR0ZqZEdsdmJpNTBlWEJsS1NCN1hHNGdLbHh1SUNvZ0lDQWdJQ0FnWTJGelpTQW5ZVzR0WVdOMGFXOXVKenBjYmlBcUlDQWdJQ0FnSUNBZ1kyaGhibWRsVTNSaGRHVW9ZV04wYVc5dUxuTnZiV1ZFWVhSaEtUdGNiaUFxSUNBZ0lDQWdJQ0FnZEdocGN5NWZYMlZ0YVhSRGFHRnVaMlVvS1R0Y2JpQXFJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdLbHh1SUNvZ0lDQWdJQ0FnWTJGelpTQW5ZVzV2ZEdobGNpMWhZM1JwYjI0bk9seHVJQ29nSUNBZ0lDQWdJQ0JqYUdGdVoyVlRkR0YwWlVGdWIzUm9aWEpYWVhrb1lXTjBhVzl1TG05MGFHVnlSR0YwWVNrN1hHNGdLaUFnSUNBZ0lDQWdJSFJvYVhNdVgxOWxiV2wwUTJoaGJtZGxLQ2s3WEc0Z0tpQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDcGNiaUFxSUNBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnS2lBZ0lDQWdJQ0FnSUM4dklHNXZJRzl3WEc0Z0tpQWdJQ0FnZlZ4dUlDb2dJQ0I5WEc0Z0tseHVJQ29nZlZ4dUlDcGNiaUFxSUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnYm1WM0lFMTVVM1J2Y21Vb1RYbEVhWE53WVhSamFHVnlLVHRjYmlBcUwxeHVYRzUyWVhJZ1JteDFlRk4wYjNKbElEMGdLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUUhCMVlteHBZMXh1SUNBZ0tpQkFjR0Z5WVcwZ2UwUnBjM0JoZEdOb1pYSjlJR1JwYzNCaGRHTm9aWEpjYmlBZ0lDb3ZYRzVjYmlBZ1puVnVZM1JwYjI0Z1JteDFlRk4wYjNKbEtHUnBjM0JoZEdOb1pYSXBJSHRjYmlBZ0lDQjJZWElnWDNSb2FYTWdQU0IwYUdsek8xeHVYRzRnSUNBZ1gyTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRVpzZFhoVGRHOXlaU2s3WEc1Y2JpQWdJQ0IwYUdsekxsOWZZMnhoYzNOT1lXMWxJRDBnZEdocGN5NWpiMjV6ZEhKMVkzUnZjaTV1WVcxbE8xeHVYRzRnSUNBZ2RHaHBjeTVmWDJOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQjBhR2x6TGw5ZlkyaGhibWRsUlhabGJuUWdQU0FuWTJoaGJtZGxKenRjYmlBZ0lDQjBhR2x6TGw5ZlpHbHpjR0YwWTJobGNpQTlJR1JwYzNCaGRHTm9aWEk3WEc0Z0lDQWdkR2hwY3k1ZlgyVnRhWFIwWlhJZ1BTQnVaWGNnUlhabGJuUkZiV2wwZEdWeUtDazdYRzRnSUNBZ2RHaHBjeTVmWkdsemNHRjBZMmhVYjJ0bGJpQTlJR1JwYzNCaGRHTm9aWEl1Y21WbmFYTjBaWElvWm5WdVkzUnBiMjRnS0hCaGVXeHZZV1FwSUh0Y2JpQWdJQ0FnSUY5MGFHbHpMbDlmYVc1MmIydGxUMjVFYVhOd1lYUmphQ2h3WVhsc2IyRmtLVHRjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCQWNIVmliR2xqWEc0Z0lDQXFJRUJ3WVhKaGJTQjdablZ1WTNScGIyNTlJR05oYkd4aVlXTnJYRzRnSUNBcUlFQnlaWFIxY200Z2UyOWlhbVZqZEgwZ1JXMXBkSFJsY2xOMVluTmpjbWx3ZEdsdmJpQjBhR0YwSUdOaGJpQmlaU0IxYzJWa0lIZHBkR2hjYmlBZ0lDb2dJQ0JUZFdKelkzSnBjSFJwYjI1elNHRnVaR3hsY2lCdmNpQmthWEpsWTNSc2VTQjFjMlZrSUhSdklISmxiR1ZoYzJVZ2RHaGxJSE4xWW5OamNtbHdkR2x2Ymk1Y2JpQWdJQ292WEc1Y2JpQWdSbXgxZUZOMGIzSmxMbkJ5YjNSdmRIbHdaUzVoWkdSTWFYTjBaVzVsY2lBOUlHWjFibU4wYVc5dUlHRmtaRXhwYzNSbGJtVnlLR05oYkd4aVlXTnJLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDE5bGJXbDBkR1Z5TG1Ga1pFeHBjM1JsYm1WeUtIUm9hWE11WDE5amFHRnVaMlZGZG1WdWRDd2dZMkZzYkdKaFkyc3BPMXh1SUNCOU8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCQWNIVmliR2xqWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlMFJwYzNCaGRHTm9aWEo5SUZSb1pTQmthWE53WVhSamFHVnlJSFJvWVhRZ2RHaHBjeUJ6ZEc5eVpTQnBjeUJ5WldkcGMzUmxjbVZrSUhkcGRHZ3VYRzRnSUNBcUwxeHVYRzRnSUVac2RYaFRkRzl5WlM1d2NtOTBiM1I1Y0dVdVoyVjBSR2x6Y0dGMFkyaGxjaUE5SUdaMWJtTjBhVzl1SUdkbGRFUnBjM0JoZEdOb1pYSW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDE5a2FYTndZWFJqYUdWeU8xeHVJQ0I5TzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJBY0hWaWJHbGpYRzRnSUNBcUlFQnlaWFIxY200Z2UzTjBjbWx1WjMwZ1FTQnpkSEpwYm1jZ2RHaGxJR1JwYzNCaGRHTm9aWElnZFhObGN5QjBieUJwWkdWdWRHbG1lU0JsWVdOb0lITjBiM0psSjNOY2JpQWdJQ29nSUNCeVpXZHBjM1JsY21Wa0lHTmhiR3hpWVdOckxpQlVhR2x6SUdseklIVnpaV1FnZDJsMGFDQjBhR1VnWkdsemNHRjBZMmhsY2lkeklIZGhhWFJHYjNJZ2JXVjBhRzlrWEc0Z0lDQXFJQ0FnZEc4Z1pHVmpiR0Z5WVhScGRtVnNlU0JrWlhCbGJtUWdiMjRnYjNSb1pYSWdjM1J2Y21WeklIVndaR0YwYVc1bklIUm9aVzF6Wld4MlpYTWdabWx5YzNRdVhHNGdJQ0FxTDF4dVhHNGdJRVpzZFhoVGRHOXlaUzV3Y205MGIzUjVjR1V1WjJWMFJHbHpjR0YwWTJoVWIydGxiaUE5SUdaMWJtTjBhVzl1SUdkbGRFUnBjM0JoZEdOb1ZHOXJaVzRvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyUnBjM0JoZEdOb1ZHOXJaVzQ3WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFQndkV0pzYVdOY2JpQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjBnVjJobGRHaGxjaUIwYUdVZ2MzUnZjbVVnYUdGeklHTm9ZVzVuWldRZ1pIVnlhVzVuSUhSb1pTQnRiM04wSUhKbFkyVnVkRnh1SUNBZ0tpQWdJR1JwYzNCaGRHTm9MbHh1SUNBZ0tpOWNibHh1SUNCR2JIVjRVM1J2Y21VdWNISnZkRzkwZVhCbExtaGhjME5vWVc1blpXUWdQU0JtZFc1amRHbHZiaUJvWVhORGFHRnVaMlZrS0NrZ2UxeHVJQ0FnSUNGMGFHbHpMbDlmWkdsemNHRjBZMmhsY2k1cGMwUnBjM0JoZEdOb2FXNW5LQ2tnUHlCd2NtOWpaWE56TG1WdWRpNU9UMFJGWDBWT1ZpQWhQVDBnSjNCeWIyUjFZM1JwYjI0bklEOGdhVzUyWVhKcFlXNTBLR1poYkhObExDQW5KWE11YUdGelEyaGhibWRsWkNncE9pQk5kWE4wSUdKbElHbHVkbTlyWldRZ2QyaHBiR1VnWkdsemNHRjBZMmhwYm1jdUp5d2dkR2hwY3k1ZlgyTnNZWE56VG1GdFpTa2dPaUJwYm5aaGNtbGhiblFvWm1Gc2MyVXBJRG9nZFc1a1pXWnBibVZrTzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZlkyaGhibWRsWkR0Y2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRSEJ5YjNSbFkzUmxaRnh1SUNBZ0tpQkZiV2wwSUdGdUlHVjJaVzUwSUc1dmRHbG1lV2x1WnlCc2FYTjBaVzVsY25NZ2RHaGhkQ0IwYUdVZ2MzUmhkR1VnYjJZZ2RHaGxJSE4wYjNKbElHaGhjeUJqYUdGdVoyVmtMbHh1SUNBZ0tpOWNibHh1SUNCR2JIVjRVM1J2Y21VdWNISnZkRzkwZVhCbExsOWZaVzFwZEVOb1lXNW5aU0E5SUdaMWJtTjBhVzl1SUY5ZlpXMXBkRU5vWVc1blpTZ3BJSHRjYmlBZ0lDQWhkR2hwY3k1ZlgyUnBjM0JoZEdOb1pYSXVhWE5FYVhOd1lYUmphR2x1WnlncElEOGdjSEp2WTJWemN5NWxibll1VGs5RVJWOUZUbFlnSVQwOUlDZHdjbTlrZFdOMGFXOXVKeUEvSUdsdWRtRnlhV0Z1ZENobVlXeHpaU3dnSnlWekxsOWZaVzFwZEVOb1lXNW5aU2dwT2lCTmRYTjBJR0psSUdsdWRtOXJaV1FnZDJocGJHVWdaR2x6Y0dGMFkyaHBibWN1Snl3Z2RHaHBjeTVmWDJOc1lYTnpUbUZ0WlNrZ09pQnBiblpoY21saGJuUW9abUZzYzJVcElEb2dkVzVrWldacGJtVmtPMXh1SUNBZ0lIUm9hWE11WDE5amFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ2ZUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1ZHaHBjeUJ0WlhSb2IyUWdaVzVqWVhCemRXeGhkR1Z6SUdGc2JDQnNiMmRwWXlCbWIzSWdhVzUyYjJ0cGJtY2dYMTl2YmtScGMzQmhkR05vTGlCSmRDQnphRzkxYkdSY2JpQWdJQ29nWW1VZ2RYTmxaQ0JtYjNJZ2RHaHBibWR6SUd4cGEyVWdZMkYwWTJocGJtY2dZMmhoYm1kbGN5QmhibVFnWlcxcGRIUnBibWNnZEdobGJTQmhablJsY2lCMGFHVmNiaUFnSUNvZ2MzVmlZMnhoYzNNZ2FHRnpJR2hoYm1Sc1pXUWdZU0J3WVhsc2IyRmtMbHh1SUNBZ0tseHVJQ0FnS2lCQWNISnZkR1ZqZEdWa1hHNGdJQ0FxSUVCd1lYSmhiU0I3YjJKcVpXTjBmU0J3WVhsc2IyRmtJRlJvWlNCa1lYUmhJR1JwYzNCaGRHTm9aV1FnWW5rZ2RHaGxJR1JwYzNCaGRHTm9aWElzSUdSbGMyTnlhV0pwYm1kY2JpQWdJQ29nSUNCemIyMWxkR2hwYm1jZ2RHaGhkQ0JvWVhNZ2FHRndjR1Z1WldRZ2FXNGdkR2hsSUhKbFlXd2dkMjl5YkdRNklIUm9aU0IxYzJWeUlHTnNhV05yWldRc0lIUm9aVnh1SUNBZ0tpQWdJSE5sY25abGNpQnlaWE53YjI1a1pXUXNJSFJwYldVZ2NHRnpjMlZrTENCbGRHTXVYRzRnSUNBcUwxeHVYRzRnSUVac2RYaFRkRzl5WlM1d2NtOTBiM1I1Y0dVdVgxOXBiblp2YTJWUGJrUnBjM0JoZEdOb0lEMGdablZ1WTNScGIyNGdYMTlwYm5admEyVlBia1JwYzNCaGRHTm9LSEJoZVd4dllXUXBJSHRjYmlBZ0lDQjBhR2x6TGw5ZlkyaGhibWRsWkNBOUlHWmhiSE5sTzF4dUlDQWdJSFJvYVhNdVgxOXZia1JwYzNCaGRHTm9LSEJoZVd4dllXUXBPMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOWZZMmhoYm1kbFpDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZlgyVnRhWFIwWlhJdVpXMXBkQ2gwYUdsekxsOWZZMmhoYm1kbFJYWmxiblFwTzF4dUlDQWdJSDFjYmlBZ2ZUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1ZHaGxJR05oYkd4aVlXTnJJSFJvWVhRZ2QybHNiQ0JpWlNCeVpXZHBjM1JsY21Wa0lIZHBkR2dnZEdobElHUnBjM0JoZEdOb1pYSWdaSFZ5YVc1blhHNGdJQ0FxSUdsdWMzUmhiblJwWVhScGIyNHVJRk4xWW1Oc1lYTnpaWE1nYlhWemRDQnZkbVZ5Y21sa1pTQjBhR2x6SUcxbGRHaHZaQzRnVkdocGN5QmpZV3hzWW1GamF5QnBjeUIwYUdWY2JpQWdJQ29nYjI1c2VTQjNZWGtnZEdobElITjBiM0psSUhKbFkyVnBkbVZ6SUc1bGR5QmtZWFJoTGx4dUlDQWdLbHh1SUNBZ0tpQkFjSEp2ZEdWamRHVmtYRzRnSUNBcUlFQnZkbVZ5Y21sa1pWeHVJQ0FnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnY0dGNWJHOWhaQ0JVYUdVZ1pHRjBZU0JrYVhOd1lYUmphR1ZrSUdKNUlIUm9aU0JrYVhOd1lYUmphR1Z5TENCa1pYTmpjbWxpYVc1blhHNGdJQ0FxSUNBZ2MyOXRaWFJvYVc1bklIUm9ZWFFnYUdGeklHaGhjSEJsYm1Wa0lHbHVJSFJvWlNCeVpXRnNJSGR2Y214a09pQjBhR1VnZFhObGNpQmpiR2xqYTJWa0xDQjBhR1ZjYmlBZ0lDb2dJQ0J6WlhKMlpYSWdjbVZ6Y0c5dVpHVmtMQ0IwYVcxbElIQmhjM05sWkN3Z1pYUmpMbHh1SUNBZ0tpOWNibHh1SUNCR2JIVjRVM1J2Y21VdWNISnZkRzkwZVhCbExsOWZiMjVFYVhOd1lYUmphQ0E5SUdaMWJtTjBhVzl1SUY5ZmIyNUVhWE53WVhSamFDaHdZWGxzYjJGa0tTQjdYRzRnSUNBZ0lXWmhiSE5sSUQ4Z2NISnZZMlZ6Y3k1bGJuWXVUazlFUlY5RlRsWWdJVDA5SUNkd2NtOWtkV04wYVc5dUp5QS9JR2x1ZG1GeWFXRnVkQ2htWVd4elpTd2dKeVZ6SUdoaGN5QnViM1FnYjNabGNuSnBaR1JsYmlCR2JIVjRVM1J2Y21VdVgxOXZia1JwYzNCaGRHTm9LQ2tzSUhkb2FXTm9JR2x6SUhKbGNYVnBjbVZrSnl3Z2RHaHBjeTVmWDJOc1lYTnpUbUZ0WlNrZ09pQnBiblpoY21saGJuUW9abUZzYzJVcElEb2dkVzVrWldacGJtVmtPMXh1SUNCOU8xeHVYRzRnSUhKbGRIVnliaUJHYkhWNFUzUnZjbVU3WEc1OUtTZ3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVac2RYaFRkRzl5WlR0Y2JseHVMeThnY0hKcGRtRjBaVnh1WEc0dkx5QndjbTkwWldOMFpXUXNJR0YyWVdsc1lXSnNaU0IwYnlCemRXSmpiR0Z6YzJWeklsMTkiLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGbHV4U3RvcmVHcm91cFxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIEZsdXhTdG9yZUdyb3VwIGFsbG93cyB5b3UgdG8gZXhlY3V0ZSBhIGNhbGxiYWNrIG9uIGV2ZXJ5IGRpc3BhdGNoIGFmdGVyXG4gKiB3YWl0aW5nIGZvciBlYWNoIG9mIHRoZSBnaXZlbiBzdG9yZXMuXG4gKi9cblxudmFyIEZsdXhTdG9yZUdyb3VwID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRmx1eFN0b3JlR3JvdXAoc3RvcmVzLCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmx1eFN0b3JlR3JvdXApO1xuXG4gICAgdGhpcy5fZGlzcGF0Y2hlciA9IF9nZXRVbmlmb3JtRGlzcGF0Y2hlcihzdG9yZXMpO1xuXG4gICAgLy8gcHJlY29tcHV0ZSBzdG9yZSB0b2tlbnNcbiAgICB2YXIgc3RvcmVUb2tlbnMgPSBzdG9yZXMubWFwKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgcmV0dXJuIHN0b3JlLmdldERpc3BhdGNoVG9rZW4oKTtcbiAgICB9KTtcblxuICAgIC8vIHJlZ2lzdGVyIHdpdGggdGhlIGRpc3BhdGNoZXJcbiAgICB0aGlzLl9kaXNwYXRjaFRva2VuID0gdGhpcy5fZGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgX3RoaXMuX2Rpc3BhdGNoZXIud2FpdEZvcihzdG9yZVRva2Vucyk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgRmx1eFN0b3JlR3JvdXAucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiByZWxlYXNlKCkge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIudW5yZWdpc3Rlcih0aGlzLl9kaXNwYXRjaFRva2VuKTtcbiAgfTtcblxuICByZXR1cm4gRmx1eFN0b3JlR3JvdXA7XG59KSgpO1xuXG5mdW5jdGlvbiBfZ2V0VW5pZm9ybURpc3BhdGNoZXIoc3RvcmVzKSB7XG4gICEoc3RvcmVzICYmIHN0b3Jlcy5sZW5ndGgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ011c3QgcHJvdmlkZSBhdCBsZWFzdCBvbmUgc3RvcmUgdG8gRmx1eFN0b3JlR3JvdXAnKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gIHZhciBkaXNwYXRjaGVyID0gc3RvcmVzWzBdLmdldERpc3BhdGNoZXIoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBzdG9yZXMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdG9yZSA9IF9yZWY7XG5cbiAgICAgICEoc3RvcmUuZ2V0RGlzcGF0Y2hlcigpID09PSBkaXNwYXRjaGVyKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdBbGwgc3RvcmVzIGluIGEgRmx1eFN0b3JlR3JvdXAgbXVzdCB1c2UgdGhlIHNhbWUgZGlzcGF0Y2hlcicpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1eFN0b3JlR3JvdXA7XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTltYkhWNEwyeHBZaTlHYkhWNFUzUnZjbVZIY205MWNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2JpQXFJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOQzB5TURFMUxDQkdZV05sWW05dmF5d2dTVzVqTGx4dUlDb2dRV3hzSUhKcFoyaDBjeUJ5WlhObGNuWmxaQzVjYmlBcVhHNGdLaUJVYUdseklITnZkWEpqWlNCamIyUmxJR2x6SUd4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCQ1UwUXRjM1I1YkdVZ2JHbGpaVzV6WlNCbWIzVnVaQ0JwYmlCMGFHVmNiaUFxSUV4SlEwVk9VMFVnWm1sc1pTQnBiaUIwYUdVZ2NtOXZkQ0JrYVhKbFkzUnZjbmtnYjJZZ2RHaHBjeUJ6YjNWeVkyVWdkSEpsWlM0Z1FXNGdZV1JrYVhScGIyNWhiQ0JuY21GdWRGeHVJQ29nYjJZZ2NHRjBaVzUwSUhKcFoyaDBjeUJqWVc0Z1ltVWdabTkxYm1RZ2FXNGdkR2hsSUZCQlZFVk9WRk1nWm1sc1pTQnBiaUIwYUdVZ2MyRnRaU0JrYVhKbFkzUnZjbmt1WEc0Z0tseHVJQ29nUUhCeWIzWnBaR1Z6VFc5a2RXeGxJRVpzZFhoVGRHOXlaVWR5YjNWd1hHNGdLaUJjYmlBcUwxeHVYRzRuZFhObElITjBjbWxqZENjN1hHNWNibVoxYm1OMGFXOXVJRjlqYkdGemMwTmhiR3hEYUdWamF5aHBibk4wWVc1alpTd2dRMjl1YzNSeWRXTjBiM0lwSUhzZ2FXWWdLQ0VvYVc1emRHRnVZMlVnYVc1emRHRnVZMlZ2WmlCRGIyNXpkSEoxWTNSdmNpa3BJSHNnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblEyRnVibTkwSUdOaGJHd2dZU0JqYkdGemN5QmhjeUJoSUdaMWJtTjBhVzl1SnlrN0lIMGdmVnh1WEc1MllYSWdhVzUyWVhKcFlXNTBJRDBnY21WeGRXbHlaU2duWm1KcWN5OXNhV0l2YVc1MllYSnBZVzUwSnlrN1hHNWNiaThxS2x4dUlDb2dSbXgxZUZOMGIzSmxSM0p2ZFhBZ1lXeHNiM2R6SUhsdmRTQjBieUJsZUdWamRYUmxJR0VnWTJGc2JHSmhZMnNnYjI0Z1pYWmxjbmtnWkdsemNHRjBZMmdnWVdaMFpYSmNiaUFxSUhkaGFYUnBibWNnWm05eUlHVmhZMmdnYjJZZ2RHaGxJR2RwZG1WdUlITjBiM0psY3k1Y2JpQXFMMXh1WEc1MllYSWdSbXgxZUZOMGIzSmxSM0p2ZFhBZ1BTQW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQm1kVzVqZEdsdmJpQkdiSFY0VTNSdmNtVkhjbTkxY0NoemRHOXlaWE1zSUdOaGJHeGlZV05yS1NCN1hHNGdJQ0FnZG1GeUlGOTBhR2x6SUQwZ2RHaHBjenRjYmx4dUlDQWdJRjlqYkdGemMwTmhiR3hEYUdWamF5aDBhR2x6TENCR2JIVjRVM1J2Y21WSGNtOTFjQ2s3WEc1Y2JpQWdJQ0IwYUdsekxsOWthWE53WVhSamFHVnlJRDBnWDJkbGRGVnVhV1p2Y20xRWFYTndZWFJqYUdWeUtITjBiM0psY3lrN1hHNWNiaUFnSUNBdkx5QndjbVZqYjIxd2RYUmxJSE4wYjNKbElIUnZhMlZ1YzF4dUlDQWdJSFpoY2lCemRHOXlaVlJ2YTJWdWN5QTlJSE4wYjNKbGN5NXRZWEFvWm5WdVkzUnBiMjRnS0hOMGIzSmxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjM1J2Y21VdVoyVjBSR2x6Y0dGMFkyaFViMnRsYmlncE8xeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ0x5OGdjbVZuYVhOMFpYSWdkMmwwYUNCMGFHVWdaR2x6Y0dGMFkyaGxjbHh1SUNBZ0lIUm9hWE11WDJScGMzQmhkR05vVkc5clpXNGdQU0IwYUdsekxsOWthWE53WVhSamFHVnlMbkpsWjJsemRHVnlLR1oxYm1OMGFXOXVJQ2h3WVhsc2IyRmtLU0I3WEc0Z0lDQWdJQ0JmZEdocGN5NWZaR2x6Y0dGMFkyaGxjaTUzWVdsMFJtOXlLSE4wYjNKbFZHOXJaVzV6S1R0Y2JpQWdJQ0FnSUdOaGJHeGlZV05yS0NrN1hHNGdJQ0FnZlNrN1hHNGdJSDFjYmx4dUlDQkdiSFY0VTNSdmNtVkhjbTkxY0M1d2NtOTBiM1I1Y0dVdWNtVnNaV0Z6WlNBOUlHWjFibU4wYVc5dUlISmxiR1ZoYzJVb0tTQjdYRzRnSUNBZ2RHaHBjeTVmWkdsemNHRjBZMmhsY2k1MWJuSmxaMmx6ZEdWeUtIUm9hWE11WDJScGMzQmhkR05vVkc5clpXNHBPMXh1SUNCOU8xeHVYRzRnSUhKbGRIVnliaUJHYkhWNFUzUnZjbVZIY205MWNEdGNibjBwS0NrN1hHNWNibVoxYm1OMGFXOXVJRjluWlhSVmJtbG1iM0p0UkdsemNHRjBZMmhsY2loemRHOXlaWE1wSUh0Y2JpQWdJU2h6ZEc5eVpYTWdKaVlnYzNSdmNtVnpMbXhsYm1kMGFDa2dQeUJ3Y205alpYTnpMbVZ1ZGk1T1QwUkZYMFZPVmlBaFBUMGdKM0J5YjJSMVkzUnBiMjRuSUQ4Z2FXNTJZWEpwWVc1MEtHWmhiSE5sTENBblRYVnpkQ0J3Y205MmFXUmxJR0YwSUd4bFlYTjBJRzl1WlNCemRHOXlaU0IwYnlCR2JIVjRVM1J2Y21WSGNtOTFjQ2NwSURvZ2FXNTJZWEpwWVc1MEtHWmhiSE5sS1NBNklIVnVaR1ZtYVc1bFpEdGNiaUFnZG1GeUlHUnBjM0JoZEdOb1pYSWdQU0J6ZEc5eVpYTmJNRjB1WjJWMFJHbHpjR0YwWTJobGNpZ3BPMXh1SUNCcFppQW9jSEp2WTJWemN5NWxibll1VGs5RVJWOUZUbFlnSVQwOUlDZHdjbTlrZFdOMGFXOXVKeWtnZTF4dUlDQWdJR1p2Y2lBb2RtRnlJRjlwZEdWeVlYUnZjaUE5SUhOMGIzSmxjeXdnWDJselFYSnlZWGtnUFNCQmNuSmhlUzVwYzBGeWNtRjVLRjlwZEdWeVlYUnZjaWtzSUY5cElEMGdNQ3dnWDJsMFpYSmhkRzl5SUQwZ1gybHpRWEp5WVhrZ1B5QmZhWFJsY21GMGIzSWdPaUJmYVhSbGNtRjBiM0piVTNsdFltOXNMbWwwWlhKaGRHOXlYU2dwT3pzcElIdGNiaUFnSUNBZ0lIWmhjaUJmY21WbU8xeHVYRzRnSUNBZ0lDQnBaaUFvWDJselFYSnlZWGtwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRjlwSUQ0OUlGOXBkR1Z5WVhSdmNpNXNaVzVuZEdncElHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNCZmNtVm1JRDBnWDJsMFpYSmhkRzl5VzE5cEt5dGRPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdYMmtnUFNCZmFYUmxjbUYwYjNJdWJtVjRkQ2dwTzF4dUlDQWdJQ0FnSUNCcFppQW9YMmt1Wkc5dVpTa2dZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lGOXlaV1lnUFNCZmFTNTJZV3gxWlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RtRnlJSE4wYjNKbElEMGdYM0psWmp0Y2JseHVJQ0FnSUNBZ0lTaHpkRzl5WlM1blpYUkVhWE53WVhSamFHVnlLQ2tnUFQwOUlHUnBjM0JoZEdOb1pYSXBJRDhnY0hKdlkyVnpjeTVsYm5ZdVRrOUVSVjlGVGxZZ0lUMDlJQ2R3Y205a2RXTjBhVzl1SnlBL0lHbHVkbUZ5YVdGdWRDaG1ZV3h6WlN3Z0owRnNiQ0J6ZEc5eVpYTWdhVzRnWVNCR2JIVjRVM1J2Y21WSGNtOTFjQ0J0ZFhOMElIVnpaU0IwYUdVZ2MyRnRaU0JrYVhOd1lYUmphR1Z5SnlrZ09pQnBiblpoY21saGJuUW9abUZzYzJVcElEb2dkVzVrWldacGJtVmtPMXh1SUNBZ0lIMWNiaUFnZlZ4dUlDQnlaWFIxY200Z1pHbHpjR0YwWTJobGNqdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCR2JIVjRVM1J2Y21WSGNtOTFjRHNpWFgwPSIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGFic3RyYWN0TWV0aG9kXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuZnVuY3Rpb24gYWJzdHJhY3RNZXRob2QoY2xhc3NOYW1lLCBtZXRob2ROYW1lKSB7XG4gICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdTdWJjbGFzc2VzIG9mICVzIG11c3Qgb3ZlcnJpZGUgJXMoKSB3aXRoIHRoZWlyIG93biBpbXBsZW1lbnRhdGlvbi4nLCBjbGFzc05hbWUsIG1ldGhvZE5hbWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhYnN0cmFjdE1ldGhvZDtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OW1iSFY0TDJ4cFlpOWhZbk4wY21GamRFMWxkR2h2WkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaXBjYmlBcUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE5DMHlNREUxTENCR1lXTmxZbTl2YXl3Z1NXNWpMbHh1SUNvZ1FXeHNJSEpwWjJoMGN5QnlaWE5sY25abFpDNWNiaUFxWEc0Z0tpQlVhR2x6SUhOdmRYSmpaU0JqYjJSbElHbHpJR3hwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JDVTBRdGMzUjViR1VnYkdsalpXNXpaU0JtYjNWdVpDQnBiaUIwYUdWY2JpQXFJRXhKUTBWT1UwVWdabWxzWlNCcGJpQjBhR1VnY205dmRDQmthWEpsWTNSdmNua2diMllnZEdocGN5QnpiM1Z5WTJVZ2RISmxaUzRnUVc0Z1lXUmthWFJwYjI1aGJDQm5jbUZ1ZEZ4dUlDb2diMllnY0dGMFpXNTBJSEpwWjJoMGN5QmpZVzRnWW1VZ1ptOTFibVFnYVc0Z2RHaGxJRkJCVkVWT1ZGTWdabWxzWlNCcGJpQjBhR1VnYzJGdFpTQmthWEpsWTNSdmNua3VYRzRnS2x4dUlDb2dRSEJ5YjNacFpHVnpUVzlrZFd4bElHRmljM1J5WVdOMFRXVjBhRzlrWEc0Z0tpQmNiaUFxTDF4dVhHNG5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJwYm5aaGNtbGhiblFnUFNCeVpYRjFhWEpsS0NkbVltcHpMMnhwWWk5cGJuWmhjbWxoYm5RbktUdGNibHh1Wm5WdVkzUnBiMjRnWVdKemRISmhZM1JOWlhSb2IyUW9ZMnhoYzNOT1lXMWxMQ0J0WlhSb2IyUk9ZVzFsS1NCN1hHNGdJQ0ZtWVd4elpTQS9JSEJ5YjJObGMzTXVaVzUyTGs1UFJFVmZSVTVXSUNFOVBTQW5jSEp2WkhWamRHbHZiaWNnUHlCcGJuWmhjbWxoYm5Rb1ptRnNjMlVzSUNkVGRXSmpiR0Z6YzJWeklHOW1JQ1Z6SUcxMWMzUWdiM1psY25KcFpHVWdKWE1vS1NCM2FYUm9JSFJvWldseUlHOTNiaUJwYlhCc1pXMWxiblJoZEdsdmJpNG5MQ0JqYkdGemMwNWhiV1VzSUcxbGRHaHZaRTVoYldVcElEb2dhVzUyWVhKcFlXNTBLR1poYkhObEtTQTZJSFZ1WkdWbWFXNWxaRHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmhZbk4wY21GamRFMWxkR2h2WkRzaVhYMD0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxudmFyIGZiZW1pdHRlciA9IHtcbiAgRXZlbnRFbWl0dGVyOiByZXF1aXJlKCcuL2xpYi9CYXNlRXZlbnRFbWl0dGVyJylcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZmJlbWl0dGVyO1xuIiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgQmFzZUV2ZW50RW1pdHRlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgRW1pdHRlclN1YnNjcmlwdGlvbiA9IHJlcXVpcmUoJy4vRW1pdHRlclN1YnNjcmlwdGlvbicpO1xudmFyIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yID0gcmVxdWlyZSgnLi9FdmVudFN1YnNjcmlwdGlvblZlbmRvcicpO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuLyoqXG4gKiBAY2xhc3MgQmFzZUV2ZW50RW1pdHRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBBbiBFdmVudEVtaXR0ZXIgaXMgcmVzcG9uc2libGUgZm9yIG1hbmFnaW5nIGEgc2V0IG9mIGxpc3RlbmVycyBhbmQgcHVibGlzaGluZ1xuICogZXZlbnRzIHRvIHRoZW0gd2hlbiBpdCBpcyB0b2xkIHRoYXQgc3VjaCBldmVudHMgaGFwcGVuZWQuIEluIGFkZGl0aW9uIHRvIHRoZVxuICogZGF0YSBmb3IgdGhlIGdpdmVuIGV2ZW50IGl0IGFsc28gc2VuZHMgYSBldmVudCBjb250cm9sIG9iamVjdCB3aGljaCBhbGxvd3NcbiAqIHRoZSBsaXN0ZW5lcnMvaGFuZGxlcnMgdG8gcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgZ2l2ZW4gZXZlbnQuXG4gKlxuICogVGhlIGVtaXR0ZXIgaXMgZGVzaWduZWQgdG8gYmUgZ2VuZXJpYyBlbm91Z2ggdG8gc3VwcG9ydCBhbGwgdGhlIGRpZmZlcmVudFxuICogY29udGV4dHMgaW4gd2hpY2ggb25lIG1pZ2h0IHdhbnQgdG8gZW1pdCBldmVudHMuIEl0IGlzIGEgc2ltcGxlIG11bHRpY2FzdFxuICogbWVjaGFuaXNtIG9uIHRvcCBvZiB3aGljaCBleHRyYSBmdW5jdGlvbmFsaXR5IGNhbiBiZSBjb21wb3NlZC4gRm9yIGV4YW1wbGUsIGFcbiAqIG1vcmUgYWR2YW5jZWQgZW1pdHRlciBtYXkgdXNlIGFuIEV2ZW50SG9sZGVyIGFuZCBFdmVudEZhY3RvcnkuXG4gKi9cblxudmFyIEJhc2VFdmVudEVtaXR0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEJhc2VFdmVudEVtaXR0ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VFdmVudEVtaXR0ZXIpO1xuXG4gICAgdGhpcy5fc3Vic2NyaWJlciA9IG5ldyBFdmVudFN1YnNjcmlwdGlvblZlbmRvcigpO1xuICAgIHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0ZW5lciB0byBiZSBpbnZva2VkIHdoZW4gZXZlbnRzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBhcmVcbiAgICogZW1pdHRlZC4gQW4gb3B0aW9uYWwgY2FsbGluZyBjb250ZXh0IG1heSBiZSBwcm92aWRlZC4gVGhlIGRhdGEgYXJndW1lbnRzXG4gICAqIGVtaXR0ZWQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBUT0RPOiBBbm5vdGF0ZSB0aGUgbGlzdGVuZXIgYXJnJ3MgdHlwZS4gVGhpcyBpcyB0cmlja3kgYmVjYXVzZSBsaXN0ZW5lcnNcbiAgICogICAgICAgY2FuIGJlIGludm9rZWQgd2l0aCB2YXJhcmdzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gTmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIC0gRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHNwZWNpZmllZCBldmVudCBpc1xuICAgKiAgIGVtaXR0ZWRcbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IC0gT3B0aW9uYWwgY29udGV4dCBvYmplY3QgdG8gdXNlIHdoZW4gaW52b2tpbmcgdGhlXG4gICAqICAgbGlzdGVuZXJcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihldmVudFR5cGUsIGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZXIuYWRkU3Vic2NyaXB0aW9uKGV2ZW50VHlwZSwgbmV3IEVtaXR0ZXJTdWJzY3JpcHRpb24odGhpcy5fc3Vic2NyaWJlciwgbGlzdGVuZXIsIGNvbnRleHQpKTtcbiAgfTtcblxuICAvKipcbiAgICogU2ltaWxhciB0byBhZGRMaXN0ZW5lciwgZXhjZXB0IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlbW92ZWQgYWZ0ZXIgaXQgaXNcbiAgICogaW52b2tlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gTmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIC0gRnVuY3Rpb24gdG8gaW52b2tlIG9ubHkgb25jZSB3aGVuIHRoZVxuICAgKiAgIHNwZWNpZmllZCBldmVudCBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCAtIE9wdGlvbmFsIGNvbnRleHQgb2JqZWN0IHRvIHVzZSB3aGVuIGludm9raW5nIHRoZVxuICAgKiAgIGxpc3RlbmVyXG4gICAqL1xuXG4gIEJhc2VFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50VHlwZSwgbGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgZW1pdHRlciA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoZXZlbnRUeXBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUN1cnJlbnRMaXN0ZW5lcigpO1xuICAgICAgbGlzdGVuZXIuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgb2YgdGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLCBpbmNsdWRpbmcgdGhvc2UgcmVnaXN0ZXJlZCBhc1xuICAgKiBsaXN0ZW5lciBtYXBzLlxuICAgKlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGV2ZW50VHlwZSAtIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGV2ZW50IHdob3NlIHJlZ2lzdGVyZWRcbiAgICogICBsaXN0ZW5lcnMgdG8gcmVtb3ZlXG4gICAqL1xuXG4gIEJhc2VFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyLnJlbW92ZUFsbFN1YnNjcmlwdGlvbnMoZXZlbnRUeXBlKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgYW4gQVBJIHRoYXQgY2FuIGJlIGNhbGxlZCBkdXJpbmcgYW4gZXZlbnRpbmcgY3ljbGUgdG8gcmVtb3ZlIHRoZVxuICAgKiBsYXN0IGxpc3RlbmVyIHRoYXQgd2FzIGludm9rZWQuIFRoaXMgYWxsb3dzIGEgZGV2ZWxvcGVyIHRvIHByb3ZpZGUgYW4gZXZlbnRcbiAgICogb2JqZWN0IHRoYXQgY2FuIHJlbW92ZSB0aGUgbGlzdGVuZXIgKG9yIGxpc3RlbmVyIG1hcCkgZHVyaW5nIHRoZVxuICAgKiBpbnZvY2F0aW9uLlxuICAgKlxuICAgKiBJZiBpdCBpcyBjYWxsZWQgd2hlbiBub3QgaW5zaWRlIG9mIGFuIGVtaXR0aW5nIGN5Y2xlIGl0IHdpbGwgdGhyb3cuXG4gICAqXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBXaGVuIGNhbGxlZCBub3QgZHVyaW5nIGFuIGV2ZW50aW5nIGN5Y2xlXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgdmFyIHN1YnNjcmlwdGlvbiA9IGVtaXR0ZXIuYWRkTGlzdGVuZXJNYXAoe1xuICAgKiAgICAgc29tZUV2ZW50OiBmdW5jdGlvbihkYXRhLCBldmVudCkge1xuICAgKiAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICogICAgICAgZW1pdHRlci5yZW1vdmVDdXJyZW50TGlzdGVuZXIoKTtcbiAgICogICAgIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogICBlbWl0dGVyLmVtaXQoJ3NvbWVFdmVudCcsICdhYmMnKTsgLy8gbG9ncyAnYWJjJ1xuICAgKiAgIGVtaXR0ZXIuZW1pdCgnc29tZUV2ZW50JywgJ2RlZicpOyAvLyBkb2VzIG5vdCBsb2cgYW55dGhpbmdcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQ3VycmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlQ3VycmVudExpc3RlbmVyKCkge1xuICAgICEhIXRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnTm90IGluIGFuIGVtaXR0aW5nIGN5Y2xlOyB0aGVyZSBpcyBubyBjdXJyZW50IHN1YnNjcmlwdGlvbicpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zdWJzY3JpYmVyLnJlbW92ZVN1YnNjcmlwdGlvbih0aGlzLl9jdXJyZW50U3Vic2NyaXB0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgdGhhdCBhcmUgY3VycmVudGx5IHJlZ2lzdGVyZWQgZm9yIHRoZSBnaXZlblxuICAgKiBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSAtIE5hbWUgb2YgdGhlIGV2ZW50IHRvIHF1ZXJ5XG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cblxuICBCYXNlRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnRUeXBlKSAvKiBUT0RPOiBBcnJheTxFdmVudFN1YnNjcmlwdGlvbj4gKi97XG4gICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpYmVyLmdldFN1YnNjcmlwdGlvbnNGb3JUeXBlKGV2ZW50VHlwZSk7XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbnMgPyBzdWJzY3JpcHRpb25zLmZpbHRlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSkubWFwKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybiBzdWJzY3JpcHRpb24ubGlzdGVuZXI7XG4gICAgfSkgOiBbXTtcbiAgfTtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgb2YgdGhlIGdpdmVuIHR5cGUgd2l0aCB0aGUgZ2l2ZW4gZGF0YS4gQWxsIGhhbmRsZXJzIG9mIHRoYXRcbiAgICogcGFydGljdWxhciB0eXBlIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBOYW1lIG9mIHRoZSBldmVudCB0byBlbWl0XG4gICAqIEBwYXJhbSB7Kn0gQXJiaXRyYXJ5IGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gZWFjaCByZWdpc3RlcmVkIGxpc3RlbmVyXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgZW1pdHRlci5hZGRMaXN0ZW5lcignc29tZUV2ZW50JywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgKiAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAqICAgfSk7XG4gICAqXG4gICAqICAgZW1pdHRlci5lbWl0KCdzb21lRXZlbnQnLCAnYWJjJyk7IC8vIGxvZ3MgJ2FiYydcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnRUeXBlKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpYmVyLmdldFN1YnNjcmlwdGlvbnNGb3JUeXBlKGV2ZW50VHlwZSk7XG4gICAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3Vic2NyaXB0aW9ucyk7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwga2V5cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaWldO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uc1trZXldO1xuICAgICAgICAvLyBUaGUgc3Vic2NyaXB0aW9uIG1heSBoYXZlIGJlZW4gcmVtb3ZlZCBkdXJpbmcgdGhpcyBldmVudCBsb29wLlxuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICB0aGlzLl9fZW1pdFRvU3Vic2NyaXB0aW9uLmFwcGx5KHRoaXMsIFtzdWJzY3JpcHRpb25dLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBob29rIHRvIG92ZXJyaWRlIGhvdyB0aGUgZW1pdHRlciBlbWl0cyBhbiBldmVudCB0byBhIHNwZWNpZmljXG4gICAqIHN1YnNjcmlwdGlvbi4gVGhpcyBhbGxvd3MgeW91IHRvIHNldCB1cCBsb2dnaW5nIGFuZCBlcnJvciBib3VuZGFyaWVzXG4gICAqIHNwZWNpZmljIHRvIHlvdXIgZW52aXJvbm1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RW1pdHRlclN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAgICogQHBhcmFtIHsqfSBBcmJpdHJhcnkgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byBlYWNoIHJlZ2lzdGVyZWQgbGlzdGVuZXJcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUuX19lbWl0VG9TdWJzY3JpcHRpb24gPSBmdW5jdGlvbiBfX2VtaXRUb1N1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIGV2ZW50VHlwZSkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICBzdWJzY3JpcHRpb24ubGlzdGVuZXIuYXBwbHkoc3Vic2NyaXB0aW9uLmNvbnRleHQsIGFyZ3MpO1xuICB9O1xuXG4gIHJldHVybiBCYXNlRXZlbnRFbWl0dGVyO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlRXZlbnRFbWl0dGVyO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5bWJIVjRMMjV2WkdWZmJXOWtkV3hsY3k5bVltVnRhWFIwWlhJdmJHbGlMMEpoYzJWRmRtVnVkRVZ0YVhSMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZ1EyOXdlWEpwWjJoMElDaGpLU0F5TURFMExUSXdNVFVzSUVaaFkyVmliMjlyTENCSmJtTXVYRzRnS2lCQmJHd2djbWxuYUhSeklISmxjMlZ5ZG1Wa0xseHVJQ3BjYmlBcUlGUm9hWE1nYzI5MWNtTmxJR052WkdVZ2FYTWdiR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUpUUkMxemRIbHNaU0JzYVdObGJuTmxJR1p2ZFc1a0lHbHVJSFJvWlZ4dUlDb2dURWxEUlU1VFJTQm1hV3hsSUdsdUlIUm9aU0J5YjI5MElHUnBjbVZqZEc5eWVTQnZaaUIwYUdseklITnZkWEpqWlNCMGNtVmxMaUJCYmlCaFpHUnBkR2x2Ym1Gc0lHZHlZVzUwWEc0Z0tpQnZaaUJ3WVhSbGJuUWdjbWxuYUhSeklHTmhiaUJpWlNCbWIzVnVaQ0JwYmlCMGFHVWdVRUZVUlU1VVV5Qm1hV3hsSUdsdUlIUm9aU0J6WVcxbElHUnBjbVZqZEc5eWVTNWNiaUFxWEc0Z0tpQkFjSEp2ZG1sa1pYTk5iMlIxYkdVZ1FtRnpaVVYyWlc1MFJXMXBkSFJsY2x4dUlDb2dRSFI1Y0dWamFHVmphM05jYmlBcUwxeHVYRzRuZFhObElITjBjbWxqZENjN1hHNWNibVoxYm1OMGFXOXVJRjlqYkdGemMwTmhiR3hEYUdWamF5aHBibk4wWVc1alpTd2dRMjl1YzNSeWRXTjBiM0lwSUhzZ2FXWWdLQ0VvYVc1emRHRnVZMlVnYVc1emRHRnVZMlZ2WmlCRGIyNXpkSEoxWTNSdmNpa3BJSHNnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblEyRnVibTkwSUdOaGJHd2dZU0JqYkdGemN5QmhjeUJoSUdaMWJtTjBhVzl1SnlrN0lIMGdmVnh1WEc1MllYSWdSVzFwZEhSbGNsTjFZbk5qY21sd2RHbHZiaUE5SUhKbGNYVnBjbVVvSnk0dlJXMXBkSFJsY2xOMVluTmpjbWx3ZEdsdmJpY3BPMXh1ZG1GeUlFVjJaVzUwVTNWaWMyTnlhWEIwYVc5dVZtVnVaRzl5SUQwZ2NtVnhkV2x5WlNnbkxpOUZkbVZ1ZEZOMVluTmpjbWx3ZEdsdmJsWmxibVJ2Y2ljcE8xeHVYRzUyWVhJZ1pXMXdkSGxHZFc1amRHbHZiaUE5SUhKbGNYVnBjbVVvSjJaaWFuTXZiR2xpTDJWdGNIUjVSblZ1WTNScGIyNG5LVHRjYm5aaGNpQnBiblpoY21saGJuUWdQU0J5WlhGMWFYSmxLQ2RtWW1wekwyeHBZaTlwYm5aaGNtbGhiblFuS1R0Y2JseHVMeW9xWEc0Z0tpQkFZMnhoYzNNZ1FtRnpaVVYyWlc1MFJXMXBkSFJsY2x4dUlDb2dRR1JsYzJOeWFYQjBhVzl1WEc0Z0tpQkJiaUJGZG1WdWRFVnRhWFIwWlhJZ2FYTWdjbVZ6Y0c5dWMybGliR1VnWm05eUlHMWhibUZuYVc1bklHRWdjMlYwSUc5bUlHeHBjM1JsYm1WeWN5QmhibVFnY0hWaWJHbHphR2x1WjF4dUlDb2daWFpsYm5SeklIUnZJSFJvWlcwZ2QyaGxiaUJwZENCcGN5QjBiMnhrSUhSb1lYUWdjM1ZqYUNCbGRtVnVkSE1nYUdGd2NHVnVaV1F1SUVsdUlHRmtaR2wwYVc5dUlIUnZJSFJvWlZ4dUlDb2daR0YwWVNCbWIzSWdkR2hsSUdkcGRtVnVJR1YyWlc1MElHbDBJR0ZzYzI4Z2MyVnVaSE1nWVNCbGRtVnVkQ0JqYjI1MGNtOXNJRzlpYW1WamRDQjNhR2xqYUNCaGJHeHZkM05jYmlBcUlIUm9aU0JzYVhOMFpXNWxjbk12YUdGdVpHeGxjbk1nZEc4Z2NISmxkbVZ1ZENCMGFHVWdaR1ZtWVhWc2RDQmlaV2hoZG1sdmNpQnZaaUIwYUdVZ1oybDJaVzRnWlhabGJuUXVYRzRnS2x4dUlDb2dWR2hsSUdWdGFYUjBaWElnYVhNZ1pHVnphV2R1WldRZ2RHOGdZbVVnWjJWdVpYSnBZeUJsYm05MVoyZ2dkRzhnYzNWd2NHOXlkQ0JoYkd3Z2RHaGxJR1JwWm1abGNtVnVkRnh1SUNvZ1kyOXVkR1Y0ZEhNZ2FXNGdkMmhwWTJnZ2IyNWxJRzFwWjJoMElIZGhiblFnZEc4Z1pXMXBkQ0JsZG1WdWRITXVJRWwwSUdseklHRWdjMmx0Y0d4bElHMTFiSFJwWTJGemRGeHVJQ29nYldWamFHRnVhWE50SUc5dUlIUnZjQ0J2WmlCM2FHbGphQ0JsZUhSeVlTQm1kVzVqZEdsdmJtRnNhWFI1SUdOaGJpQmlaU0JqYjIxd2IzTmxaQzRnUm05eUlHVjRZVzF3YkdVc0lHRmNiaUFxSUcxdmNtVWdZV1IyWVc1alpXUWdaVzFwZEhSbGNpQnRZWGtnZFhObElHRnVJRVYyWlc1MFNHOXNaR1Z5SUdGdVpDQkZkbVZ1ZEVaaFkzUnZjbmt1WEc0Z0tpOWNibHh1ZG1GeUlFSmhjMlZGZG1WdWRFVnRhWFIwWlhJZ1BTQW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQXZLaXBjYmlBZ0lDb2dRR052Ym5OMGNuVmpkRzl5WEc0Z0lDQXFMMXh1WEc0Z0lHWjFibU4wYVc5dUlFSmhjMlZGZG1WdWRFVnRhWFIwWlhJb0tTQjdYRzRnSUNBZ1gyTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRUpoYzJWRmRtVnVkRVZ0YVhSMFpYSXBPMXh1WEc0Z0lDQWdkR2hwY3k1ZmMzVmljMk55YVdKbGNpQTlJRzVsZHlCRmRtVnVkRk4xWW5OamNtbHdkR2x2YmxabGJtUnZjaWdwTzF4dUlDQWdJSFJvYVhNdVgyTjFjbkpsYm5SVGRXSnpZM0pwY0hScGIyNGdQU0J1ZFd4c08xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUZrWkhNZ1lTQnNhWE4wWlc1bGNpQjBieUJpWlNCcGJuWnZhMlZrSUhkb1pXNGdaWFpsYm5SeklHOW1JSFJvWlNCemNHVmphV1pwWldRZ2RIbHdaU0JoY21WY2JpQWdJQ29nWlcxcGRIUmxaQzRnUVc0Z2IzQjBhVzl1WVd3Z1kyRnNiR2x1WnlCamIyNTBaWGgwSUcxaGVTQmlaU0J3Y205MmFXUmxaQzRnVkdobElHUmhkR0VnWVhKbmRXMWxiblJ6WEc0Z0lDQXFJR1Z0YVhSMFpXUWdkMmxzYkNCaVpTQndZWE56WldRZ2RHOGdkR2hsSUd4cGMzUmxibVZ5SUdaMWJtTjBhVzl1TGx4dUlDQWdLbHh1SUNBZ0tpQlVUMFJQT2lCQmJtNXZkR0YwWlNCMGFHVWdiR2x6ZEdWdVpYSWdZWEpuSjNNZ2RIbHdaUzRnVkdocGN5QnBjeUIwY21samEza2dZbVZqWVhWelpTQnNhWE4wWlc1bGNuTmNiaUFnSUNvZ0lDQWdJQ0FnWTJGdUlHSmxJR2x1ZG05clpXUWdkMmwwYUNCMllYSmhjbWR6TGx4dUlDQWdLbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ1pYWmxiblJVZVhCbElDMGdUbUZ0WlNCdlppQjBhR1VnWlhabGJuUWdkRzhnYkdsemRHVnVJSFJ2WEc0Z0lDQXFJRUJ3WVhKaGJTQjdablZ1WTNScGIyNTlJR3hwYzNSbGJtVnlJQzBnUm5WdVkzUnBiMjRnZEc4Z2FXNTJiMnRsSUhkb1pXNGdkR2hsSUhOd1pXTnBabWxsWkNCbGRtVnVkQ0JwYzF4dUlDQWdLaUFnSUdWdGFYUjBaV1JjYmlBZ0lDb2dRSEJoY21GdElIc3FmU0JqYjI1MFpYaDBJQzBnVDNCMGFXOXVZV3dnWTI5dWRHVjRkQ0J2WW1wbFkzUWdkRzhnZFhObElIZG9aVzRnYVc1MmIydHBibWNnZEdobFhHNGdJQ0FxSUNBZ2JHbHpkR1Z1WlhKY2JpQWdJQ292WEc1Y2JpQWdRbUZ6WlVWMlpXNTBSVzFwZEhSbGNpNXdjbTkwYjNSNWNHVXVZV1JrVEdsemRHVnVaWElnUFNCbWRXNWpkR2x2YmlCaFpHUk1hWE4wWlc1bGNpaGxkbVZ1ZEZSNWNHVXNJR3hwYzNSbGJtVnlMQ0JqYjI1MFpYaDBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDNOMVluTmpjbWxpWlhJdVlXUmtVM1ZpYzJOeWFYQjBhVzl1S0dWMlpXNTBWSGx3WlN3Z2JtVjNJRVZ0YVhSMFpYSlRkV0p6WTNKcGNIUnBiMjRvZEdocGN5NWZjM1ZpYzJOeWFXSmxjaXdnYkdsemRHVnVaWElzSUdOdmJuUmxlSFFwS1R0Y2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVMmx0YVd4aGNpQjBieUJoWkdSTWFYTjBaVzVsY2l3Z1pYaGpaWEIwSUhSb1lYUWdkR2hsSUd4cGMzUmxibVZ5SUdseklISmxiVzkyWldRZ1lXWjBaWElnYVhRZ2FYTmNiaUFnSUNvZ2FXNTJiMnRsWkNCdmJtTmxMbHh1SUNBZ0tseHVJQ0FnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnWlhabGJuUlVlWEJsSUMwZ1RtRnRaU0J2WmlCMGFHVWdaWFpsYm5RZ2RHOGdiR2x6ZEdWdUlIUnZYRzRnSUNBcUlFQndZWEpoYlNCN1puVnVZM1JwYjI1OUlHeHBjM1JsYm1WeUlDMGdSblZ1WTNScGIyNGdkRzhnYVc1MmIydGxJRzl1YkhrZ2IyNWpaU0IzYUdWdUlIUm9aVnh1SUNBZ0tpQWdJSE53WldOcFptbGxaQ0JsZG1WdWRDQnBjeUJsYldsMGRHVmtYRzRnSUNBcUlFQndZWEpoYlNCN0tuMGdZMjl1ZEdWNGRDQXRJRTl3ZEdsdmJtRnNJR052Ym5SbGVIUWdiMkpxWldOMElIUnZJSFZ6WlNCM2FHVnVJR2x1ZG05cmFXNW5JSFJvWlZ4dUlDQWdLaUFnSUd4cGMzUmxibVZ5WEc0Z0lDQXFMMXh1WEc0Z0lFSmhjMlZGZG1WdWRFVnRhWFIwWlhJdWNISnZkRzkwZVhCbExtOXVZMlVnUFNCbWRXNWpkR2x2YmlCdmJtTmxLR1YyWlc1MFZIbHdaU3dnYkdsemRHVnVaWElzSUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0IyWVhJZ1pXMXBkSFJsY2lBOUlIUm9hWE03WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WVdSa1RHbHpkR1Z1WlhJb1pYWmxiblJVZVhCbExDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0JsYldsMGRHVnlMbkpsYlc5MlpVTjFjbkpsYm5STWFYTjBaVzVsY2lncE8xeHVJQ0FnSUNBZ2JHbHpkR1Z1WlhJdVlYQndiSGtvWTI5dWRHVjRkQ3dnWVhKbmRXMWxiblJ6S1R0Y2JpQWdJQ0I5S1R0Y2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabGN5QmhiR3dnYjJZZ2RHaGxJSEpsWjJsemRHVnlaV1FnYkdsemRHVnVaWEp6TENCcGJtTnNkV1JwYm1jZ2RHaHZjMlVnY21WbmFYTjBaWEpsWkNCaGMxeHVJQ0FnS2lCc2FYTjBaVzVsY2lCdFlYQnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWNHRnlZVzBnZXo5emRISnBibWQ5SUdWMlpXNTBWSGx3WlNBdElFOXdkR2x2Ym1Gc0lHNWhiV1VnYjJZZ2RHaGxJR1YyWlc1MElIZG9iM05sSUhKbFoybHpkR1Z5WldSY2JpQWdJQ29nSUNCc2FYTjBaVzVsY25NZ2RHOGdjbVZ0YjNabFhHNGdJQ0FxTDF4dVhHNGdJRUpoYzJWRmRtVnVkRVZ0YVhSMFpYSXVjSEp2ZEc5MGVYQmxMbkpsYlc5MlpVRnNiRXhwYzNSbGJtVnljeUE5SUdaMWJtTjBhVzl1SUhKbGJXOTJaVUZzYkV4cGMzUmxibVZ5Y3lobGRtVnVkRlI1Y0dVcElIdGNiaUFnSUNCMGFHbHpMbDl6ZFdKelkzSnBZbVZ5TG5KbGJXOTJaVUZzYkZOMVluTmpjbWx3ZEdsdmJuTW9aWFpsYm5SVWVYQmxLVHRjYmlBZ2ZUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VISnZkbWxrWlhNZ1lXNGdRVkJKSUhSb1lYUWdZMkZ1SUdKbElHTmhiR3hsWkNCa2RYSnBibWNnWVc0Z1pYWmxiblJwYm1jZ1kzbGpiR1VnZEc4Z2NtVnRiM1psSUhSb1pWeHVJQ0FnS2lCc1lYTjBJR3hwYzNSbGJtVnlJSFJvWVhRZ2QyRnpJR2x1ZG05clpXUXVJRlJvYVhNZ1lXeHNiM2R6SUdFZ1pHVjJaV3h2Y0dWeUlIUnZJSEJ5YjNacFpHVWdZVzRnWlhabGJuUmNiaUFnSUNvZ2IySnFaV04wSUhSb1lYUWdZMkZ1SUhKbGJXOTJaU0IwYUdVZ2JHbHpkR1Z1WlhJZ0tHOXlJR3hwYzNSbGJtVnlJRzFoY0NrZ1pIVnlhVzVuSUhSb1pWeHVJQ0FnS2lCcGJuWnZZMkYwYVc5dUxseHVJQ0FnS2x4dUlDQWdLaUJKWmlCcGRDQnBjeUJqWVd4c1pXUWdkMmhsYmlCdWIzUWdhVzV6YVdSbElHOW1JR0Z1SUdWdGFYUjBhVzVuSUdONVkyeGxJR2wwSUhkcGJHd2dkR2h5YjNjdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwYUhKdmQzTWdlMFZ5Y205eWZTQlhhR1Z1SUdOaGJHeGxaQ0J1YjNRZ1pIVnlhVzVuSUdGdUlHVjJaVzUwYVc1bklHTjVZMnhsWEc0Z0lDQXFYRzRnSUNBcUlFQmxlR0Z0Y0d4bFhHNGdJQ0FxSUNBZ2RtRnlJSE4xWW5OamNtbHdkR2x2YmlBOUlHVnRhWFIwWlhJdVlXUmtUR2x6ZEdWdVpYSk5ZWEFvZTF4dUlDQWdLaUFnSUNBZ2MyOXRaVVYyWlc1ME9pQm1kVzVqZEdsdmJpaGtZWFJoTENCbGRtVnVkQ2tnZTF4dUlDQWdLaUFnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWhrWVhSaEtUdGNiaUFnSUNvZ0lDQWdJQ0FnWlcxcGRIUmxjaTV5WlcxdmRtVkRkWEp5Wlc1MFRHbHpkR1Z1WlhJb0tUdGNiaUFnSUNvZ0lDQWdJSDFjYmlBZ0lDb2dJQ0I5S1R0Y2JpQWdJQ3BjYmlBZ0lDb2dJQ0JsYldsMGRHVnlMbVZ0YVhRb0ozTnZiV1ZGZG1WdWRDY3NJQ2RoWW1NbktUc2dMeThnYkc5bmN5QW5ZV0pqSjF4dUlDQWdLaUFnSUdWdGFYUjBaWEl1WlcxcGRDZ25jMjl0WlVWMlpXNTBKeXdnSjJSbFppY3BPeUF2THlCa2IyVnpJRzV2ZENCc2IyY2dZVzU1ZEdocGJtZGNiaUFnSUNvdlhHNWNiaUFnUW1GelpVVjJaVzUwUlcxcGRIUmxjaTV3Y205MGIzUjVjR1V1Y21WdGIzWmxRM1Z5Y21WdWRFeHBjM1JsYm1WeUlEMGdablZ1WTNScGIyNGdjbVZ0YjNabFEzVnljbVZ1ZEV4cGMzUmxibVZ5S0NrZ2UxeHVJQ0FnSUNFaElYUm9hWE11WDJOMWNuSmxiblJUZFdKelkzSnBjSFJwYjI0Z1B5QndjbTlqWlhOekxtVnVkaTVPVDBSRlgwVk9WaUFoUFQwZ0ozQnliMlIxWTNScGIyNG5JRDhnYVc1MllYSnBZVzUwS0daaGJITmxMQ0FuVG05MElHbHVJR0Z1SUdWdGFYUjBhVzVuSUdONVkyeGxPeUIwYUdWeVpTQnBjeUJ1YnlCamRYSnlaVzUwSUhOMVluTmpjbWx3ZEdsdmJpY3BJRG9nYVc1MllYSnBZVzUwS0daaGJITmxLU0E2SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0IwYUdsekxsOXpkV0p6WTNKcFltVnlMbkpsYlc5MlpWTjFZbk5qY21sd2RHbHZiaWgwYUdsekxsOWpkWEp5Wlc1MFUzVmljMk55YVhCMGFXOXVLVHRjYmlBZ2ZUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVjBkWEp1Y3lCaGJpQmhjbkpoZVNCdlppQnNhWE4wWlc1bGNuTWdkR2hoZENCaGNtVWdZM1Z5Y21WdWRHeDVJSEpsWjJsemRHVnlaV1FnWm05eUlIUm9aU0JuYVhabGJseHVJQ0FnS2lCbGRtVnVkQzVjYmlBZ0lDcGNiaUFnSUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUdWMlpXNTBWSGx3WlNBdElFNWhiV1VnYjJZZ2RHaGxJR1YyWlc1MElIUnZJSEYxWlhKNVhHNGdJQ0FxSUVCeVpYUjFjbTRnZTJGeWNtRjVmVnh1SUNBZ0tpOWNibHh1SUNCQ1lYTmxSWFpsYm5SRmJXbDBkR1Z5TG5CeWIzUnZkSGx3WlM1c2FYTjBaVzVsY25NZ1BTQm1kVzVqZEdsdmJpQnNhWE4wWlc1bGNuTW9aWFpsYm5SVWVYQmxLU0F2S2lCVVQwUlBPaUJCY25KaGVUeEZkbVZ1ZEZOMVluTmpjbWx3ZEdsdmJqNGdLaTk3WEc0Z0lDQWdkbUZ5SUhOMVluTmpjbWx3ZEdsdmJuTWdQU0IwYUdsekxsOXpkV0p6WTNKcFltVnlMbWRsZEZOMVluTmpjbWx3ZEdsdmJuTkdiM0pVZVhCbEtHVjJaVzUwVkhsd1pTazdYRzRnSUNBZ2NtVjBkWEp1SUhOMVluTmpjbWx3ZEdsdmJuTWdQeUJ6ZFdKelkzSnBjSFJwYjI1ekxtWnBiSFJsY2lobGJYQjBlVVoxYm1OMGFXOXVMblJvWVhSU1pYUjFjbTV6VkhKMVpTa3ViV0Z3S0daMWJtTjBhVzl1SUNoemRXSnpZM0pwY0hScGIyNHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnpkV0p6WTNKcGNIUnBiMjR1YkdsemRHVnVaWEk3WEc0Z0lDQWdmU2tnT2lCYlhUdGNiaUFnZlR0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUlcxcGRITWdZVzRnWlhabGJuUWdiMllnZEdobElHZHBkbVZ1SUhSNWNHVWdkMmwwYUNCMGFHVWdaMmwyWlc0Z1pHRjBZUzRnUVd4c0lHaGhibVJzWlhKeklHOW1JSFJvWVhSY2JpQWdJQ29nY0dGeWRHbGpkV3hoY2lCMGVYQmxJSGRwYkd3Z1ltVWdibTkwYVdacFpXUXVYRzRnSUNBcVhHNGdJQ0FxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JsZG1WdWRGUjVjR1VnTFNCT1lXMWxJRzltSUhSb1pTQmxkbVZ1ZENCMGJ5QmxiV2wwWEc0Z0lDQXFJRUJ3WVhKaGJTQjdLbjBnUVhKaWFYUnlZWEo1SUdGeVozVnRaVzUwY3lCMGJ5QmlaU0J3WVhOelpXUWdkRzhnWldGamFDQnlaV2RwYzNSbGNtVmtJR3hwYzNSbGJtVnlYRzRnSUNBcVhHNGdJQ0FxSUVCbGVHRnRjR3hsWEc0Z0lDQXFJQ0FnWlcxcGRIUmxjaTVoWkdSTWFYTjBaVzVsY2lnbmMyOXRaVVYyWlc1MEp5d2dablZ1WTNScGIyNG9iV1Z6YzJGblpTa2dlMXh1SUNBZ0tpQWdJQ0FnWTI5dWMyOXNaUzVzYjJjb2JXVnpjMkZuWlNrN1hHNGdJQ0FxSUNBZ2ZTazdYRzRnSUNBcVhHNGdJQ0FxSUNBZ1pXMXBkSFJsY2k1bGJXbDBLQ2R6YjIxbFJYWmxiblFuTENBbllXSmpKeWs3SUM4dklHeHZaM01nSjJGaVl5ZGNiaUFnSUNvdlhHNWNiaUFnUW1GelpVVjJaVzUwUlcxcGRIUmxjaTV3Y205MGIzUjVjR1V1WlcxcGRDQTlJR1oxYm1OMGFXOXVJR1Z0YVhRb1pYWmxiblJVZVhCbEtTQjdYRzRnSUNBZ2RtRnlJSE4xWW5OamNtbHdkR2x2Ym5NZ1BTQjBhR2x6TGw5emRXSnpZM0pwWW1WeUxtZGxkRk4xWW5OamNtbHdkR2x2Ym5OR2IzSlVlWEJsS0dWMlpXNTBWSGx3WlNrN1hHNGdJQ0FnYVdZZ0tITjFZbk5qY21sd2RHbHZibk1wSUh0Y2JpQWdJQ0FnSUhaaGNpQnJaWGx6SUQwZ1QySnFaV04wTG10bGVYTW9jM1ZpYzJOeWFYQjBhVzl1Y3lrN1hHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcGFTQTlJREE3SUdscElEd2dhMlY1Y3k1c1pXNW5kR2c3SUdscEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHdGxlU0E5SUd0bGVYTmJhV2xkTzF4dUlDQWdJQ0FnSUNCMllYSWdjM1ZpYzJOeWFYQjBhVzl1SUQwZ2MzVmljMk55YVhCMGFXOXVjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQXZMeUJVYUdVZ2MzVmljMk55YVhCMGFXOXVJRzFoZVNCb1lYWmxJR0psWlc0Z2NtVnRiM1psWkNCa2RYSnBibWNnZEdocGN5QmxkbVZ1ZENCc2IyOXdMbHh1SUNBZ0lDQWdJQ0JwWmlBb2MzVmljMk55YVhCMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVmWTNWeWNtVnVkRk4xWW5OamNtbHdkR2x2YmlBOUlITjFZbk5qY21sd2RHbHZianRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlmWlcxcGRGUnZVM1ZpYzJOeWFYQjBhVzl1TG1Gd2NHeDVLSFJvYVhNc0lGdHpkV0p6WTNKcGNIUnBiMjVkTG1OdmJtTmhkQ2hCY25KaGVTNXdjbTkwYjNSNWNHVXVjMnhwWTJVdVkyRnNiQ2hoY21kMWJXVnVkSE1wS1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lIUm9hWE11WDJOMWNuSmxiblJUZFdKelkzSnBjSFJwYjI0Z1BTQnVkV3hzTzF4dUlDQWdJSDFjYmlBZ2ZUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VISnZkbWxrWlhNZ1lTQm9iMjlySUhSdklHOTJaWEp5YVdSbElHaHZkeUIwYUdVZ1pXMXBkSFJsY2lCbGJXbDBjeUJoYmlCbGRtVnVkQ0IwYnlCaElITndaV05wWm1salhHNGdJQ0FxSUhOMVluTmpjbWx3ZEdsdmJpNGdWR2hwY3lCaGJHeHZkM01nZVc5MUlIUnZJSE5sZENCMWNDQnNiMmRuYVc1bklHRnVaQ0JsY25KdmNpQmliM1Z1WkdGeWFXVnpYRzRnSUNBcUlITndaV05wWm1saklIUnZJSGx2ZFhJZ1pXNTJhWEp2Ym0xbGJuUXVYRzRnSUNBcVhHNGdJQ0FxSUVCd1lYSmhiU0I3UlcxcGRIUmxjbE4xWW5OamNtbHdkR2x2Ym4wZ2MzVmljMk55YVhCMGFXOXVYRzRnSUNBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCbGRtVnVkRlI1Y0dWY2JpQWdJQ29nUUhCaGNtRnRJSHNxZlNCQmNtSnBkSEpoY25rZ1lYSm5kVzFsYm5SeklIUnZJR0psSUhCaGMzTmxaQ0IwYnlCbFlXTm9JSEpsWjJsemRHVnlaV1FnYkdsemRHVnVaWEpjYmlBZ0lDb3ZYRzVjYmlBZ1FtRnpaVVYyWlc1MFJXMXBkSFJsY2k1d2NtOTBiM1I1Y0dVdVgxOWxiV2wwVkc5VGRXSnpZM0pwY0hScGIyNGdQU0JtZFc1amRHbHZiaUJmWDJWdGFYUlViMU4xWW5OamNtbHdkR2x2YmloemRXSnpZM0pwY0hScGIyNHNJR1YyWlc1MFZIbHdaU2tnZTF4dUlDQWdJSFpoY2lCaGNtZHpJRDBnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5zYVdObExtTmhiR3dvWVhKbmRXMWxiblJ6TENBeUtUdGNiaUFnSUNCemRXSnpZM0pwY0hScGIyNHViR2x6ZEdWdVpYSXVZWEJ3Ykhrb2MzVmljMk55YVhCMGFXOXVMbU52Ym5SbGVIUXNJR0Z5WjNNcE8xeHVJQ0I5TzF4dVhHNGdJSEpsZEhWeWJpQkNZWE5sUlhabGJuUkZiV2wwZEdWeU8xeHVmU2tvS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkNZWE5sUlhabGJuUkZiV2wwZEdWeU95SmRmUT09IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICogXG4gKiBAcHJvdmlkZXNNb2R1bGUgRW1pdHRlclN1YnNjcmlwdGlvblxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRXZlbnRTdWJzY3JpcHRpb24gPSByZXF1aXJlKCcuL0V2ZW50U3Vic2NyaXB0aW9uJyk7XG5cbi8qKlxuICogRW1pdHRlclN1YnNjcmlwdGlvbiByZXByZXNlbnRzIGEgc3Vic2NyaXB0aW9uIHdpdGggbGlzdGVuZXIgYW5kIGNvbnRleHQgZGF0YS5cbiAqL1xuXG52YXIgRW1pdHRlclN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoX0V2ZW50U3Vic2NyaXB0aW9uKSB7XG4gIF9pbmhlcml0cyhFbWl0dGVyU3Vic2NyaXB0aW9uLCBfRXZlbnRTdWJzY3JpcHRpb24pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50U3Vic2NyaXB0aW9uVmVuZG9yfSBzdWJzY3JpYmVyIC0gVGhlIHN1YnNjcmliZXIgdGhhdCBjb250cm9sc1xuICAgKiAgIHRoaXMgc3Vic2NyaXB0aW9uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIC0gRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHNwZWNpZmllZCBldmVudCBpc1xuICAgKiAgIGVtaXR0ZWRcbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IC0gT3B0aW9uYWwgY29udGV4dCBvYmplY3QgdG8gdXNlIHdoZW4gaW52b2tpbmcgdGhlXG4gICAqICAgbGlzdGVuZXJcbiAgICovXG5cbiAgZnVuY3Rpb24gRW1pdHRlclN1YnNjcmlwdGlvbihzdWJzY3JpYmVyLCBsaXN0ZW5lciwgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbWl0dGVyU3Vic2NyaXB0aW9uKTtcblxuICAgIF9FdmVudFN1YnNjcmlwdGlvbi5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgcmV0dXJuIEVtaXR0ZXJTdWJzY3JpcHRpb247XG59KShFdmVudFN1YnNjcmlwdGlvbik7XG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlclN1YnNjcmlwdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKiBcbiAqIEBwcm92aWRlc01vZHVsZSBFdmVudFN1YnNjcmlwdGlvblxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRXZlbnRTdWJzY3JpcHRpb24gcmVwcmVzZW50cyBhIHN1YnNjcmlwdGlvbiB0byBhIHBhcnRpY3VsYXIgZXZlbnQuIEl0IGNhblxuICogcmVtb3ZlIGl0cyBvd24gc3Vic2NyaXB0aW9uLlxuICovXG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgRXZlbnRTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50U3Vic2NyaXB0aW9uVmVuZG9yfSBzdWJzY3JpYmVyIHRoZSBzdWJzY3JpYmVyIHRoYXQgY29udHJvbHNcbiAgICogICB0aGlzIHN1YnNjcmlwdGlvbi5cbiAgICovXG5cbiAgZnVuY3Rpb24gRXZlbnRTdWJzY3JpcHRpb24oc3Vic2NyaWJlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudFN1YnNjcmlwdGlvbik7XG5cbiAgICB0aGlzLnN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhpcyBzdWJzY3JpcHRpb24gZnJvbSB0aGUgc3Vic2NyaWJlciB0aGF0IGNvbnRyb2xzIGl0LlxuICAgKi9cblxuICBFdmVudFN1YnNjcmlwdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlci5yZW1vdmVTdWJzY3JpcHRpb24odGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIEV2ZW50U3Vic2NyaXB0aW9uO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudFN1YnNjcmlwdGlvbjsiLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICogXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXZlbnRTdWJzY3JpcHRpb25WZW5kb3JcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yIHN0b3JlcyBhIHNldCBvZiBFdmVudFN1YnNjcmlwdGlvbnMgdGhhdCBhcmVcbiAqIHN1YnNjcmliZWQgdG8gYSBwYXJ0aWN1bGFyIGV2ZW50IHR5cGUuXG4gKi9cblxudmFyIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRTdWJzY3JpcHRpb25WZW5kb3IoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yKTtcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlID0ge307XG4gICAgdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHN1YnNjcmlwdGlvbiBrZXllZCBieSBhbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gICAqIEBwYXJhbSB7RXZlbnRTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvblxuICAgKi9cblxuICBFdmVudFN1YnNjcmlwdGlvblZlbmRvci5wcm90b3R5cGUuYWRkU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gYWRkU3Vic2NyaXB0aW9uKGV2ZW50VHlwZSwgc3Vic2NyaXB0aW9uKSB7XG4gICAgIShzdWJzY3JpcHRpb24uc3Vic2NyaWJlciA9PT0gdGhpcykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnVGhlIHN1YnNjcmliZXIgb2YgdGhlIHN1YnNjcmlwdGlvbiBpcyBpbmNvcnJlY3RseSBzZXQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIGlmICghdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXSkge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXSA9IFtdO1xuICAgIH1cbiAgICB2YXIga2V5ID0gdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXS5sZW5ndGg7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXS5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgc3Vic2NyaXB0aW9uLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICBzdWJzY3JpcHRpb24ua2V5ID0ga2V5O1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBidWxrIHNldCBvZiB0aGUgc3Vic2NyaXB0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBldmVudFR5cGUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBldmVudCB0eXBlIHdob3NlXG4gICAqICAgcmVnaXN0ZXJlZCBzdXBzY3JpcHRpb25zIHRvIHJlbW92ZSwgaWYgbnVsbCByZW1vdmUgYWxsIHN1YnNjcmlwdGlvbnMuXG4gICAqL1xuXG4gIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yLnByb3RvdHlwZS5yZW1vdmVBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gcmVtb3ZlQWxsU3Vic2NyaXB0aW9ucyhldmVudFR5cGUpIHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9zdWJzY3JpcHRpb25zRm9yVHlwZVtldmVudFR5cGVdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi4gSW5zdGVhZCBvZiBjYWxsaW5nIHRoaXMgZnVuY3Rpb24sIGNhbGxcbiAgICogYHN1YnNjcmlwdGlvbi5yZW1vdmUoKWAgZGlyZWN0bHkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdWJzY3JpcHRpb25cbiAgICovXG5cbiAgRXZlbnRTdWJzY3JpcHRpb25WZW5kb3IucHJvdG90eXBlLnJlbW92ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIHJlbW92ZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICB2YXIgZXZlbnRUeXBlID0gc3Vic2NyaXB0aW9uLmV2ZW50VHlwZTtcbiAgICB2YXIga2V5ID0gc3Vic2NyaXB0aW9uLmtleTtcblxuICAgIHZhciBzdWJzY3JpcHRpb25zRm9yVHlwZSA9IHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlW2V2ZW50VHlwZV07XG4gICAgaWYgKHN1YnNjcmlwdGlvbnNGb3JUeXBlKSB7XG4gICAgICBkZWxldGUgc3Vic2NyaXB0aW9uc0ZvclR5cGVba2V5XTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFycmF5IG9mIHN1YnNjcmlwdGlvbnMgdGhhdCBhcmUgY3VycmVudGx5IHJlZ2lzdGVyZWQgZm9yIHRoZVxuICAgKiBnaXZlbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGFycmF5IGNhbiBiZSBwb3RlbnRpYWxseSBzcGFyc2UgYXMgc3Vic2NyaXB0aW9ucyBhcmUgZGVsZXRlZFxuICAgKiBmcm9tIGl0IHdoZW4gdGhleSBhcmUgcmVtb3ZlZC5cbiAgICpcbiAgICogVE9ETzogVGhpcyByZXR1cm5zIGEgbnVsbGFibGUgYXJyYXkuIHdhdD9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICAgKiBAcmV0dXJuIHs/YXJyYXl9XG4gICAqL1xuXG4gIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yLnByb3RvdHlwZS5nZXRTdWJzY3JpcHRpb25zRm9yVHlwZSA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnNGb3JUeXBlKGV2ZW50VHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zRm9yVHlwZVtldmVudFR5cGVdO1xuICB9O1xuXG4gIHJldHVybiBFdmVudFN1YnNjcmlwdGlvblZlbmRvcjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRTdWJzY3JpcHRpb25WZW5kb3I7XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTltYkhWNEwyNXZaR1ZmYlc5a2RXeGxjeTltWW1WdGFYUjBaWEl2YkdsaUwwVjJaVzUwVTNWaWMyTnlhWEIwYVc5dVZtVnVaRzl5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcVhHNGdLaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVFF0TWpBeE5Td2dSbUZqWldKdmIyc3NJRWx1WXk1Y2JpQXFJRUZzYkNCeWFXZG9kSE1nY21WelpYSjJaV1F1WEc0Z0tseHVJQ29nVkdocGN5QnpiM1Z5WTJVZ1kyOWtaU0JwY3lCc2FXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FsTkVMWE4wZVd4bElHeHBZMlZ1YzJVZ1ptOTFibVFnYVc0Z2RHaGxYRzRnS2lCTVNVTkZUbE5GSUdacGJHVWdhVzRnZEdobElISnZiM1FnWkdseVpXTjBiM0o1SUc5bUlIUm9hWE1nYzI5MWNtTmxJSFJ5WldVdUlFRnVJR0ZrWkdsMGFXOXVZV3dnWjNKaGJuUmNiaUFxSUc5bUlIQmhkR1Z1ZENCeWFXZG9kSE1nWTJGdUlHSmxJR1p2ZFc1a0lHbHVJSFJvWlNCUVFWUkZUbFJUSUdacGJHVWdhVzRnZEdobElITmhiV1VnWkdseVpXTjBiM0o1TGx4dUlDb2dYRzRnS2lCQWNISnZkbWxrWlhOTmIyUjFiR1VnUlhabGJuUlRkV0p6WTNKcGNIUnBiMjVXWlc1a2IzSmNiaUFxSUVCMGVYQmxZMmhsWTJ0elhHNGdLaTljYmx4dUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1bWRXNWpkR2x2YmlCZlkyeGhjM05EWVd4c1EyaGxZMnNvYVc1emRHRnVZMlVzSUVOdmJuTjBjblZqZEc5eUtTQjdJR2xtSUNnaEtHbHVjM1JoYm1ObElHbHVjM1JoYm1ObGIyWWdRMjl1YzNSeWRXTjBiM0lwS1NCN0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KME5oYm01dmRDQmpZV3hzSUdFZ1kyeGhjM01nWVhNZ1lTQm1kVzVqZEdsdmJpY3BPeUI5SUgxY2JseHVkbUZ5SUdsdWRtRnlhV0Z1ZENBOUlISmxjWFZwY21Vb0oyWmlhbk12YkdsaUwybHVkbUZ5YVdGdWRDY3BPMXh1WEc0dktpcGNiaUFxSUVWMlpXNTBVM1ZpYzJOeWFYQjBhVzl1Vm1WdVpHOXlJSE4wYjNKbGN5QmhJSE5sZENCdlppQkZkbVZ1ZEZOMVluTmpjbWx3ZEdsdmJuTWdkR2hoZENCaGNtVmNiaUFxSUhOMVluTmpjbWxpWldRZ2RHOGdZU0J3WVhKMGFXTjFiR0Z5SUdWMlpXNTBJSFI1Y0dVdVhHNGdLaTljYmx4dWRtRnlJRVYyWlc1MFUzVmljMk55YVhCMGFXOXVWbVZ1Wkc5eUlEMGdLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdablZ1WTNScGIyNGdSWFpsYm5SVGRXSnpZM0pwY0hScGIyNVdaVzVrYjNJb0tTQjdYRzRnSUNBZ1gyTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRVYyWlc1MFUzVmljMk55YVhCMGFXOXVWbVZ1Wkc5eUtUdGNibHh1SUNBZ0lIUm9hWE11WDNOMVluTmpjbWx3ZEdsdmJuTkdiM0pVZVhCbElEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1ZlkzVnljbVZ1ZEZOMVluTmpjbWx3ZEdsdmJpQTlJRzUxYkd3N1hHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRV1JrY3lCaElITjFZbk5qY21sd2RHbHZiaUJyWlhsbFpDQmllU0JoYmlCbGRtVnVkQ0IwZVhCbExseHVJQ0FnS2x4dUlDQWdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdaWFpsYm5SVWVYQmxYRzRnSUNBcUlFQndZWEpoYlNCN1JYWmxiblJUZFdKelkzSnBjSFJwYjI1OUlITjFZbk5qY21sd2RHbHZibHh1SUNBZ0tpOWNibHh1SUNCRmRtVnVkRk4xWW5OamNtbHdkR2x2YmxabGJtUnZjaTV3Y205MGIzUjVjR1V1WVdSa1UzVmljMk55YVhCMGFXOXVJRDBnWm5WdVkzUnBiMjRnWVdSa1UzVmljMk55YVhCMGFXOXVLR1YyWlc1MFZIbHdaU3dnYzNWaWMyTnlhWEIwYVc5dUtTQjdYRzRnSUNBZ0lTaHpkV0p6WTNKcGNIUnBiMjR1YzNWaWMyTnlhV0psY2lBOVBUMGdkR2hwY3lrZ1B5QndjbTlqWlhOekxtVnVkaTVPVDBSRlgwVk9WaUFoUFQwZ0ozQnliMlIxWTNScGIyNG5JRDhnYVc1MllYSnBZVzUwS0daaGJITmxMQ0FuVkdobElITjFZbk5qY21saVpYSWdiMllnZEdobElITjFZbk5qY21sd2RHbHZiaUJwY3lCcGJtTnZjbkpsWTNSc2VTQnpaWFF1SnlrZ09pQnBiblpoY21saGJuUW9abUZzYzJVcElEb2dkVzVrWldacGJtVmtPMXh1SUNBZ0lHbG1JQ2doZEdocGN5NWZjM1ZpYzJOeWFYQjBhVzl1YzBadmNsUjVjR1ZiWlhabGJuUlVlWEJsWFNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmYzNWaWMyTnlhWEIwYVc5dWMwWnZjbFI1Y0dWYlpYWmxiblJVZVhCbFhTQTlJRnRkTzF4dUlDQWdJSDFjYmlBZ0lDQjJZWElnYTJWNUlEMGdkR2hwY3k1ZmMzVmljMk55YVhCMGFXOXVjMFp2Y2xSNWNHVmJaWFpsYm5SVWVYQmxYUzVzWlc1bmRHZzdYRzRnSUNBZ2RHaHBjeTVmYzNWaWMyTnlhWEIwYVc5dWMwWnZjbFI1Y0dWYlpYWmxiblJVZVhCbFhTNXdkWE5vS0hOMVluTmpjbWx3ZEdsdmJpazdYRzRnSUNBZ2MzVmljMk55YVhCMGFXOXVMbVYyWlc1MFZIbHdaU0E5SUdWMlpXNTBWSGx3WlR0Y2JpQWdJQ0J6ZFdKelkzSnBjSFJwYjI0dWEyVjVJRDBnYTJWNU8xeHVJQ0FnSUhKbGRIVnliaUJ6ZFdKelkzSnBjSFJwYjI0N1hHNGdJSDA3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsYlc5MlpYTWdZU0JpZFd4cklITmxkQ0J2WmlCMGFHVWdjM1ZpYzJOeWFYQjBhVzl1Y3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJoY21GdElIcy9jM1J5YVc1bmZTQmxkbVZ1ZEZSNWNHVWdMU0JQY0hScGIyNWhiQ0J1WVcxbElHOW1JSFJvWlNCbGRtVnVkQ0IwZVhCbElIZG9iM05sWEc0Z0lDQXFJQ0FnY21WbmFYTjBaWEpsWkNCemRYQnpZM0pwY0hScGIyNXpJSFJ2SUhKbGJXOTJaU3dnYVdZZ2JuVnNiQ0J5WlcxdmRtVWdZV3hzSUhOMVluTmpjbWx3ZEdsdmJuTXVYRzRnSUNBcUwxeHVYRzRnSUVWMlpXNTBVM1ZpYzJOeWFYQjBhVzl1Vm1WdVpHOXlMbkJ5YjNSdmRIbHdaUzV5WlcxdmRtVkJiR3hUZFdKelkzSnBjSFJwYjI1eklEMGdablZ1WTNScGIyNGdjbVZ0YjNabFFXeHNVM1ZpYzJOeWFYQjBhVzl1Y3lobGRtVnVkRlI1Y0dVcElIdGNiaUFnSUNCcFppQW9aWFpsYm5SVWVYQmxJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lIUm9hWE11WDNOMVluTmpjbWx3ZEdsdmJuTkdiM0pVZVhCbElEMGdlMzA3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHUmxiR1YwWlNCMGFHbHpMbDl6ZFdKelkzSnBjSFJwYjI1elJtOXlWSGx3WlZ0bGRtVnVkRlI1Y0dWZE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabGN5QmhJSE53WldOcFptbGpJSE4xWW5OamNtbHdkR2x2Ymk0Z1NXNXpkR1ZoWkNCdlppQmpZV3hzYVc1bklIUm9hWE1nWm5WdVkzUnBiMjRzSUdOaGJHeGNiaUFnSUNvZ1lITjFZbk5qY21sd2RHbHZiaTV5WlcxdmRtVW9LV0FnWkdseVpXTjBiSGt1WEc0Z0lDQXFYRzRnSUNBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCemRXSnpZM0pwY0hScGIyNWNiaUFnSUNvdlhHNWNiaUFnUlhabGJuUlRkV0p6WTNKcGNIUnBiMjVXWlc1a2IzSXVjSEp2ZEc5MGVYQmxMbkpsYlc5MlpWTjFZbk5qY21sd2RHbHZiaUE5SUdaMWJtTjBhVzl1SUhKbGJXOTJaVk4xWW5OamNtbHdkR2x2YmloemRXSnpZM0pwY0hScGIyNHBJSHRjYmlBZ0lDQjJZWElnWlhabGJuUlVlWEJsSUQwZ2MzVmljMk55YVhCMGFXOXVMbVYyWlc1MFZIbHdaVHRjYmlBZ0lDQjJZWElnYTJWNUlEMGdjM1ZpYzJOeWFYQjBhVzl1TG10bGVUdGNibHh1SUNBZ0lIWmhjaUJ6ZFdKelkzSnBjSFJwYjI1elJtOXlWSGx3WlNBOUlIUm9hWE11WDNOMVluTmpjbWx3ZEdsdmJuTkdiM0pVZVhCbFcyVjJaVzUwVkhsd1pWMDdYRzRnSUNBZ2FXWWdLSE4xWW5OamNtbHdkR2x2Ym5OR2IzSlVlWEJsS1NCN1hHNGdJQ0FnSUNCa1pXeGxkR1VnYzNWaWMyTnlhWEIwYVc5dWMwWnZjbFI1Y0dWYmEyVjVYVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbGRIVnlibk1nZEdobElHRnljbUY1SUc5bUlITjFZbk5qY21sd2RHbHZibk1nZEdoaGRDQmhjbVVnWTNWeWNtVnVkR3g1SUhKbFoybHpkR1Z5WldRZ1ptOXlJSFJvWlZ4dUlDQWdLaUJuYVhabGJpQmxkbVZ1ZENCMGVYQmxMbHh1SUNBZ0tseHVJQ0FnS2lCT2IzUmxPaUJVYUdseklHRnljbUY1SUdOaGJpQmlaU0J3YjNSbGJuUnBZV3hzZVNCemNHRnljMlVnWVhNZ2MzVmljMk55YVhCMGFXOXVjeUJoY21VZ1pHVnNaWFJsWkZ4dUlDQWdLaUJtY205dElHbDBJSGRvWlc0Z2RHaGxlU0JoY21VZ2NtVnRiM1psWkM1Y2JpQWdJQ3BjYmlBZ0lDb2dWRTlFVHpvZ1ZHaHBjeUJ5WlhSMWNtNXpJR0VnYm5Wc2JHRmliR1VnWVhKeVlYa3VJSGRoZEQ5Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlHVjJaVzUwVkhsd1pWeHVJQ0FnS2lCQWNtVjBkWEp1SUhzL1lYSnlZWGw5WEc0Z0lDQXFMMXh1WEc0Z0lFVjJaVzUwVTNWaWMyTnlhWEIwYVc5dVZtVnVaRzl5TG5CeWIzUnZkSGx3WlM1blpYUlRkV0p6WTNKcGNIUnBiMjV6Um05eVZIbHdaU0E5SUdaMWJtTjBhVzl1SUdkbGRGTjFZbk5qY21sd2RHbHZibk5HYjNKVWVYQmxLR1YyWlc1MFZIbHdaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5emRXSnpZM0pwY0hScGIyNXpSbTl5Vkhsd1pWdGxkbVZ1ZEZSNWNHVmRPMXh1SUNCOU8xeHVYRzRnSUhKbGRIVnliaUJGZG1WdWRGTjFZbk5qY21sd2RHbHZibFpsYm1SdmNqdGNibjBwS0NrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdSWFpsYm5SVGRXSnpZM0pwY0hScGIyNVdaVzVrYjNJN0lsMTkiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZW1wdHlGdW5jdGlvblxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignSW52YXJpYW50IFZpb2xhdGlvbjogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTltYkhWNEwyNXZaR1ZmYlc5a2RXeGxjeTltWW1wekwyeHBZaTlwYm5aaGNtbGhiblF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2JpQXFJRU52Y0hseWFXZG9kQ0F5TURFekxUSXdNVFVzSUVaaFkyVmliMjlyTENCSmJtTXVYRzRnS2lCQmJHd2djbWxuYUhSeklISmxjMlZ5ZG1Wa0xseHVJQ3BjYmlBcUlGUm9hWE1nYzI5MWNtTmxJR052WkdVZ2FYTWdiR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUpUUkMxemRIbHNaU0JzYVdObGJuTmxJR1p2ZFc1a0lHbHVJSFJvWlZ4dUlDb2dURWxEUlU1VFJTQm1hV3hsSUdsdUlIUm9aU0J5YjI5MElHUnBjbVZqZEc5eWVTQnZaaUIwYUdseklITnZkWEpqWlNCMGNtVmxMaUJCYmlCaFpHUnBkR2x2Ym1Gc0lHZHlZVzUwWEc0Z0tpQnZaaUJ3WVhSbGJuUWdjbWxuYUhSeklHTmhiaUJpWlNCbWIzVnVaQ0JwYmlCMGFHVWdVRUZVUlU1VVV5Qm1hV3hsSUdsdUlIUm9aU0J6WVcxbElHUnBjbVZqZEc5eWVTNWNiaUFxWEc0Z0tpQkFjSEp2ZG1sa1pYTk5iMlIxYkdVZ2FXNTJZWEpwWVc1MFhHNGdLaTljYmx4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1Y2JpOHFLbHh1SUNvZ1ZYTmxJR2x1ZG1GeWFXRnVkQ2dwSUhSdklHRnpjMlZ5ZENCemRHRjBaU0IzYUdsamFDQjViM1Z5SUhCeWIyZHlZVzBnWVhOemRXMWxjeUIwYnlCaVpTQjBjblZsTGx4dUlDcGNiaUFxSUZCeWIzWnBaR1VnYzNCeWFXNTBaaTF6ZEhsc1pTQm1iM0p0WVhRZ0tHOXViSGtnSlhNZ2FYTWdjM1Z3Y0c5eWRHVmtLU0JoYm1RZ1lYSm5kVzFsYm5SelhHNGdLaUIwYnlCd2NtOTJhV1JsSUdsdVptOXliV0YwYVc5dUlHRmliM1YwSUhkb1lYUWdZbkp2YTJVZ1lXNWtJSGRvWVhRZ2VXOTFJSGRsY21WY2JpQXFJR1Y0Y0dWamRHbHVaeTVjYmlBcVhHNGdLaUJVYUdVZ2FXNTJZWEpwWVc1MElHMWxjM05oWjJVZ2QybHNiQ0JpWlNCemRISnBjSEJsWkNCcGJpQndjbTlrZFdOMGFXOXVMQ0JpZFhRZ2RHaGxJR2x1ZG1GeWFXRnVkRnh1SUNvZ2QybHNiQ0J5WlcxaGFXNGdkRzhnWlc1emRYSmxJR3h2WjJsaklHUnZaWE1nYm05MElHUnBabVpsY2lCcGJpQndjbTlrZFdOMGFXOXVMbHh1SUNvdlhHNWNiblpoY2lCcGJuWmhjbWxoYm5RZ1BTQm1kVzVqZEdsdmJpQW9ZMjl1WkdsMGFXOXVMQ0JtYjNKdFlYUXNJR0VzSUdJc0lHTXNJR1FzSUdVc0lHWXBJSHRjYmlBZ2FXWWdLSEJ5YjJObGMzTXVaVzUyTGs1UFJFVmZSVTVXSUNFOVBTQW5jSEp2WkhWamRHbHZiaWNwSUh0Y2JpQWdJQ0JwWmlBb1ptOXliV0YwSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25hVzUyWVhKcFlXNTBJSEpsY1hWcGNtVnpJR0Z1SUdWeWNtOXlJRzFsYzNOaFoyVWdZWEpuZFcxbGJuUW5LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb0lXTnZibVJwZEdsdmJpa2dlMXh1SUNBZ0lIWmhjaUJsY25KdmNqdGNiaUFnSUNCcFppQW9abTl5YldGMElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdWeWNtOXlJRDBnYm1WM0lFVnljbTl5S0NkTmFXNXBabWxsWkNCbGVHTmxjSFJwYjI0Z2IyTmpkWEp5WldRN0lIVnpaU0IwYUdVZ2JtOXVMVzFwYm1sbWFXVmtJR1JsZGlCbGJuWnBjbTl1YldWdWRDQW5JQ3NnSjJadmNpQjBhR1VnWm5Wc2JDQmxjbkp2Y2lCdFpYTnpZV2RsSUdGdVpDQmhaR1JwZEdsdmJtRnNJR2hsYkhCbWRXd2dkMkZ5Ym1sdVozTXVKeWs3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIWmhjaUJoY21keklEMGdXMkVzSUdJc0lHTXNJR1FzSUdVc0lHWmRPMXh1SUNBZ0lDQWdkbUZ5SUdGeVowbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lHVnljbTl5SUQwZ2JtVjNJRVZ5Y205eUtDZEpiblpoY21saGJuUWdWbWx2YkdGMGFXOXVPaUFuSUNzZ1ptOXliV0YwTG5KbGNHeGhZMlVvTHlWekwyY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGeVozTmJZWEpuU1c1a1pYZ3JLMTA3WEc0Z0lDQWdJQ0I5S1NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWlhKeWIzSXVabkpoYldWelZHOVFiM0FnUFNBeE95QXZMeUIzWlNCa2IyNG5kQ0JqWVhKbElHRmliM1YwSUdsdWRtRnlhV0Z1ZENkeklHOTNiaUJtY21GdFpWeHVJQ0FnSUhSb2NtOTNJR1Z5Y205eU8xeHVJQ0I5WEc1OU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR2x1ZG1GeWFXRnVkRHNpWFgwPSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBzaGFsbG93RXF1YWxcbiAqIEB0eXBlY2hlY2tzXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogUGVyZm9ybXMgZXF1YWxpdHkgYnkgaXRlcmF0aW5nIHRocm91Z2gga2V5cyBvbiBhbiBvYmplY3QgYW5kIHJldHVybmluZyBmYWxzZVxuICogd2hlbiBhbnkga2V5IGhhcyB2YWx1ZXMgd2hpY2ggYXJlIG5vdCBzdHJpY3RseSBlcXVhbCBiZXR3ZWVuIHRoZSBhcmd1bWVudHMuXG4gKiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgdmFsdWVzIG9mIGFsbCBrZXlzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgYkhhc093blByb3BlcnR5ID0gaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleXNBW2ldKSB8fCBvYmpBW2tleXNBW2ldXSAhPT0gb2JqQltrZXlzQVtpXV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXF1YWw7IiwiLyoqXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiAgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiAgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgZ2xvYmFsLkltbXV0YWJsZSA9IGZhY3RvcnkoKVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0Jzt2YXIgU0xJQ0UkMCA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDbGFzcyhjdG9yLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIHtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvcjtcbiAgfVxuXG4gIC8vIFVzZWQgZm9yIHNldHRpbmcgcHJvdG90eXBlIG1ldGhvZHMgdGhhdCBJRTggY2hva2VzIG9uLlxuICB2YXIgREVMRVRFID0gJ2RlbGV0ZSc7XG5cbiAgLy8gQ29uc3RhbnRzIGRlc2NyaWJpbmcgdGhlIHNpemUgb2YgdHJpZSBub2Rlcy5cbiAgdmFyIFNISUZUID0gNTsgLy8gUmVzdWx0ZWQgaW4gYmVzdCBwZXJmb3JtYW5jZSBhZnRlciBfX19fX18/XG4gIHZhciBTSVpFID0gMSA8PCBTSElGVDtcbiAgdmFyIE1BU0sgPSBTSVpFIC0gMTtcblxuICAvLyBBIGNvbnNpc3RlbnQgc2hhcmVkIHZhbHVlIHJlcHJlc2VudGluZyBcIm5vdCBzZXRcIiB3aGljaCBlcXVhbHMgbm90aGluZyBvdGhlclxuICAvLyB0aGFuIGl0c2VsZiwgYW5kIG5vdGhpbmcgdGhhdCBjb3VsZCBiZSBwcm92aWRlZCBleHRlcm5hbGx5LlxuICB2YXIgTk9UX1NFVCA9IHt9O1xuXG4gIC8vIEJvb2xlYW4gcmVmZXJlbmNlcywgUm91Z2ggZXF1aXZhbGVudCBvZiBgYm9vbCAmYC5cbiAgdmFyIENIQU5HRV9MRU5HVEggPSB7IHZhbHVlOiBmYWxzZSB9O1xuICB2YXIgRElEX0FMVEVSID0geyB2YWx1ZTogZmFsc2UgfTtcblxuICBmdW5jdGlvbiBNYWtlUmVmKHJlZikge1xuICAgIHJlZi52YWx1ZSA9IGZhbHNlO1xuICAgIHJldHVybiByZWY7XG4gIH1cblxuICBmdW5jdGlvbiBTZXRSZWYocmVmKSB7XG4gICAgcmVmICYmIChyZWYudmFsdWUgPSB0cnVlKTtcbiAgfVxuXG4gIC8vIEEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbHVlIHJlcHJlc2VudGluZyBhbiBcIm93bmVyXCIgZm9yIHRyYW5zaWVudCB3cml0ZXNcbiAgLy8gdG8gdHJpZXMuIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBvbmx5IGV2ZXIgZXF1YWwgaXRzZWxmLCBhbmQgd2lsbCBub3QgZXF1YWxcbiAgLy8gdGhlIHJldHVybiBvZiBhbnkgc3Vic2VxdWVudCBjYWxsIG9mIHRoaXMgZnVuY3Rpb24uXG4gIGZ1bmN0aW9uIE93bmVySUQoKSB7fVxuXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcHktYXJyYXktaW5saW5lXG4gIGZ1bmN0aW9uIGFyckNvcHkoYXJyLCBvZmZzZXQpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICB2YXIgbGVuID0gTWF0aC5tYXgoMCwgYXJyLmxlbmd0aCAtIG9mZnNldCk7XG4gICAgdmFyIG5ld0FyciA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBsZW47IGlpKyspIHtcbiAgICAgIG5ld0FycltpaV0gPSBhcnJbaWkgKyBvZmZzZXRdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5zdXJlU2l6ZShpdGVyKSB7XG4gICAgaWYgKGl0ZXIuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpdGVyLnNpemUgPSBpdGVyLl9faXRlcmF0ZShyZXR1cm5UcnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZXIuc2l6ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXBJbmRleChpdGVyLCBpbmRleCkge1xuICAgIC8vIFRoaXMgaW1wbGVtZW50cyBcImlzIGFycmF5IGluZGV4XCIgd2hpY2ggdGhlIEVDTUFTdHJpbmcgc3BlYyBkZWZpbmVzIGFzOlxuICAgIC8vICAgICBBIFN0cmluZyBwcm9wZXJ0eSBuYW1lIFAgaXMgYW4gYXJyYXkgaW5kZXggaWYgYW5kIG9ubHkgaWZcbiAgICAvLyAgICAgVG9TdHJpbmcoVG9VaW50MzIoUCkpIGlzIGVxdWFsIHRvIFAgYW5kIFRvVWludDMyKFApIGlzIG5vdCBlcXVhbFxuICAgIC8vICAgICB0byAyXjMy4oiSMS5cbiAgICAvLyBIb3dldmVyIG5vdGUgdGhhdCB3ZSdyZSBjdXJyZW50bHkgY2FsbGluZyBUb051bWJlcigpIGluc3RlYWQgb2YgVG9VaW50MzIoKVxuICAgIC8vIHdoaWNoIHNob3VsZCBiZSBpbXByb3ZlZCBpbiB0aGUgZnV0dXJlLCBhcyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHNob3VsZFxuICAgIC8vIG5vdCBiZSBhY2NlcHRlZCBhcyBhbiBhcnJheSBpbmRleC5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgdmFyIG51bUluZGV4ID0gK2luZGV4O1xuICAgICAgaWYgKCcnICsgbnVtSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgICB9XG4gICAgICBpbmRleCA9IG51bUluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXggPCAwID8gZW5zdXJlU2l6ZShpdGVyKSArIGluZGV4IDogaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gd2hvbGVTbGljZShiZWdpbiwgZW5kLCBzaXplKSB7XG4gICAgcmV0dXJuIChiZWdpbiA9PT0gMCB8fCAoc2l6ZSAhPT0gdW5kZWZpbmVkICYmIGJlZ2luIDw9IC1zaXplKSkgJiZcbiAgICAgIChlbmQgPT09IHVuZGVmaW5lZCB8fCAoc2l6ZSAhPT0gdW5kZWZpbmVkICYmIGVuZCA+PSBzaXplKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlQmVnaW4oYmVnaW4sIHNpemUpIHtcbiAgICByZXR1cm4gcmVzb2x2ZUluZGV4KGJlZ2luLCBzaXplLCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVFbmQoZW5kLCBzaXplKSB7XG4gICAgcmV0dXJuIHJlc29sdmVJbmRleChlbmQsIHNpemUsIHNpemUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUluZGV4KGluZGV4LCBzaXplLCBkZWZhdWx0SW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IHVuZGVmaW5lZCA/XG4gICAgICBkZWZhdWx0SW5kZXggOlxuICAgICAgaW5kZXggPCAwID9cbiAgICAgICAgTWF0aC5tYXgoMCwgc2l6ZSArIGluZGV4KSA6XG4gICAgICAgIHNpemUgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgaW5kZXggOlxuICAgICAgICAgIE1hdGgubWluKHNpemUsIGluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaXNJdGVyYWJsZSh2YWx1ZSkgPyB2YWx1ZSA6IFNlcSh2YWx1ZSk7XG4gICAgfVxuXG5cbiAgY3JlYXRlQ2xhc3MoS2V5ZWRJdGVyYWJsZSwgSXRlcmFibGUpO1xuICAgIGZ1bmN0aW9uIEtleWVkSXRlcmFibGUodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0tleWVkKHZhbHVlKSA/IHZhbHVlIDogS2V5ZWRTZXEodmFsdWUpO1xuICAgIH1cblxuXG4gIGNyZWF0ZUNsYXNzKEluZGV4ZWRJdGVyYWJsZSwgSXRlcmFibGUpO1xuICAgIGZ1bmN0aW9uIEluZGV4ZWRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzSW5kZXhlZCh2YWx1ZSkgPyB2YWx1ZSA6IEluZGV4ZWRTZXEodmFsdWUpO1xuICAgIH1cblxuXG4gIGNyZWF0ZUNsYXNzKFNldEl0ZXJhYmxlLCBJdGVyYWJsZSk7XG4gICAgZnVuY3Rpb24gU2V0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0l0ZXJhYmxlKHZhbHVlKSAmJiAhaXNBc3NvY2lhdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IFNldFNlcSh2YWx1ZSk7XG4gICAgfVxuXG5cblxuICBmdW5jdGlvbiBpc0l0ZXJhYmxlKG1heWJlSXRlcmFibGUpIHtcbiAgICByZXR1cm4gISEobWF5YmVJdGVyYWJsZSAmJiBtYXliZUl0ZXJhYmxlW0lTX0lURVJBQkxFX1NFTlRJTkVMXSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0tleWVkKG1heWJlS2V5ZWQpIHtcbiAgICByZXR1cm4gISEobWF5YmVLZXllZCAmJiBtYXliZUtleWVkW0lTX0tFWUVEX1NFTlRJTkVMXSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0luZGV4ZWQobWF5YmVJbmRleGVkKSB7XG4gICAgcmV0dXJuICEhKG1heWJlSW5kZXhlZCAmJiBtYXliZUluZGV4ZWRbSVNfSU5ERVhFRF9TRU5USU5FTF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBc3NvY2lhdGl2ZShtYXliZUFzc29jaWF0aXZlKSB7XG4gICAgcmV0dXJuIGlzS2V5ZWQobWF5YmVBc3NvY2lhdGl2ZSkgfHwgaXNJbmRleGVkKG1heWJlQXNzb2NpYXRpdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPcmRlcmVkKG1heWJlT3JkZXJlZCkge1xuICAgIHJldHVybiAhIShtYXliZU9yZGVyZWQgJiYgbWF5YmVPcmRlcmVkW0lTX09SREVSRURfU0VOVElORUxdKTtcbiAgfVxuXG4gIEl0ZXJhYmxlLmlzSXRlcmFibGUgPSBpc0l0ZXJhYmxlO1xuICBJdGVyYWJsZS5pc0tleWVkID0gaXNLZXllZDtcbiAgSXRlcmFibGUuaXNJbmRleGVkID0gaXNJbmRleGVkO1xuICBJdGVyYWJsZS5pc0Fzc29jaWF0aXZlID0gaXNBc3NvY2lhdGl2ZTtcbiAgSXRlcmFibGUuaXNPcmRlcmVkID0gaXNPcmRlcmVkO1xuXG4gIEl0ZXJhYmxlLktleWVkID0gS2V5ZWRJdGVyYWJsZTtcbiAgSXRlcmFibGUuSW5kZXhlZCA9IEluZGV4ZWRJdGVyYWJsZTtcbiAgSXRlcmFibGUuU2V0ID0gU2V0SXRlcmFibGU7XG5cblxuICB2YXIgSVNfSVRFUkFCTEVfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9JVEVSQUJMRV9fQEAnO1xuICB2YXIgSVNfS0VZRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9LRVlFRF9fQEAnO1xuICB2YXIgSVNfSU5ERVhFRF9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX0lOREVYRURfX0BAJztcbiAgdmFyIElTX09SREVSRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9PUkRFUkVEX19AQCc7XG5cbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuXG4gIHZhciBJVEVSQVRFX0tFWVMgPSAwO1xuICB2YXIgSVRFUkFURV9WQUxVRVMgPSAxO1xuICB2YXIgSVRFUkFURV9FTlRSSUVTID0gMjtcblxuICB2YXIgUkVBTF9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSBSRUFMX0lURVJBVE9SX1NZTUJPTCB8fCBGQVVYX0lURVJBVE9SX1NZTUJPTDtcblxuXG4gIGZ1bmN0aW9uIHNyY19JdGVyYXRvcl9fSXRlcmF0b3IobmV4dCkge1xuICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICB9XG5cbiAgICBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICdbSXRlcmF0b3JdJztcbiAgICB9O1xuXG5cbiAgc3JjX0l0ZXJhdG9yX19JdGVyYXRvci5LRVlTID0gSVRFUkFURV9LRVlTO1xuICBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yLlZBTFVFUyA9IElURVJBVEVfVkFMVUVTO1xuICBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yLkVOVFJJRVMgPSBJVEVSQVRFX0VOVFJJRVM7XG5cbiAgc3JjX0l0ZXJhdG9yX19JdGVyYXRvci5wcm90b3R5cGUuaW5zcGVjdCA9XG4gIHNyY19JdGVyYXRvcl9fSXRlcmF0b3IucHJvdG90eXBlLnRvU291cmNlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy50b1N0cmluZygpOyB9XG4gIHNyY19JdGVyYXRvcl9fSXRlcmF0b3IucHJvdG90eXBlW0lURVJBVE9SX1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICBmdW5jdGlvbiBpdGVyYXRvclZhbHVlKHR5cGUsIGssIHYsIGl0ZXJhdG9yUmVzdWx0KSB7XG4gICAgdmFyIHZhbHVlID0gdHlwZSA9PT0gMCA/IGsgOiB0eXBlID09PSAxID8gdiA6IFtrLCB2XTtcbiAgICBpdGVyYXRvclJlc3VsdCA/IChpdGVyYXRvclJlc3VsdC52YWx1ZSA9IHZhbHVlKSA6IChpdGVyYXRvclJlc3VsdCA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JSZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBpdGVyYXRvckRvbmUoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzSXRlcmF0b3IobWF5YmVJdGVyYWJsZSkge1xuICAgIHJldHVybiAhIWdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0l0ZXJhdG9yKG1heWJlSXRlcmF0b3IpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvciAmJiB0eXBlb2YgbWF5YmVJdGVyYXRvci5uZXh0ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oaXRlcmFibGUpO1xuICAgIHJldHVybiBpdGVyYXRvckZuICYmIGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKGl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBpdGVyYWJsZSAmJiAoXG4gICAgICAoUkVBTF9JVEVSQVRPUl9TWU1CT0wgJiYgaXRlcmFibGVbUkVBTF9JVEVSQVRPUl9TWU1CT0xdKSB8fFxuICAgICAgaXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdXG4gICAgKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU2VxLCBJdGVyYWJsZSk7XG4gICAgZnVuY3Rpb24gU2VxKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5U2VxdWVuY2UoKSA6XG4gICAgICAgIGlzSXRlcmFibGUodmFsdWUpID8gdmFsdWUudG9TZXEoKSA6IHNlcUZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgU2VxLm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIFNlcShhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBTZXEucHJvdG90eXBlLnRvU2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgU2VxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnU2VxIHsnLCAnfScpO1xuICAgIH07XG5cbiAgICBTZXEucHJvdG90eXBlLmNhY2hlUmVzdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuX2NhY2hlICYmIHRoaXMuX19pdGVyYXRlVW5jYWNoZWQpIHtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB0aGlzLmVudHJ5U2VxKCkudG9BcnJheSgpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLl9jYWNoZS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3QgX19pdGVyYXRlVW5jYWNoZWQoZm4sIHJldmVyc2UpXG5cbiAgICBTZXEucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gc2VxSXRlcmF0ZSh0aGlzLCBmbiwgcmV2ZXJzZSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0b3JVbmNhY2hlZCh0eXBlLCByZXZlcnNlKVxuXG4gICAgU2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHNlcUl0ZXJhdG9yKHRoaXMsIHR5cGUsIHJldmVyc2UsIHRydWUpO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKEtleWVkU2VxLCBTZXEpO1xuICAgIGZ1bmN0aW9uIEtleWVkU2VxKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgIGVtcHR5U2VxdWVuY2UoKS50b0tleWVkU2VxKCkgOlxuICAgICAgICBpc0l0ZXJhYmxlKHZhbHVlKSA/XG4gICAgICAgICAgKGlzS2V5ZWQodmFsdWUpID8gdmFsdWUudG9TZXEoKSA6IHZhbHVlLmZyb21FbnRyeVNlcSgpKSA6XG4gICAgICAgICAga2V5ZWRTZXFGcm9tVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIEtleWVkU2VxLnByb3RvdHlwZS50b0tleWVkU2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhJbmRleGVkU2VxLCBTZXEpO1xuICAgIGZ1bmN0aW9uIEluZGV4ZWRTZXEodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlTZXF1ZW5jZSgpIDpcbiAgICAgICAgIWlzSXRlcmFibGUodmFsdWUpID8gaW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSkgOlxuICAgICAgICBpc0tleWVkKHZhbHVlKSA/IHZhbHVlLmVudHJ5U2VxKCkgOiB2YWx1ZS50b0luZGV4ZWRTZXEoKTtcbiAgICB9XG5cbiAgICBJbmRleGVkU2VxLm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIEluZGV4ZWRTZXEoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgSW5kZXhlZFNlcS5wcm90b3R5cGUudG9JbmRleGVkU2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgSW5kZXhlZFNlcS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ1NlcSBbJywgJ10nKTtcbiAgICB9O1xuXG4gICAgSW5kZXhlZFNlcS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiBzZXFJdGVyYXRlKHRoaXMsIGZuLCByZXZlcnNlLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIEluZGV4ZWRTZXEucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gc2VxSXRlcmF0b3IodGhpcywgdHlwZSwgcmV2ZXJzZSwgZmFsc2UpO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKFNldFNlcSwgU2VxKTtcbiAgICBmdW5jdGlvbiBTZXRTZXEodmFsdWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eVNlcXVlbmNlKCkgOlxuICAgICAgICAhaXNJdGVyYWJsZSh2YWx1ZSkgPyBpbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKSA6XG4gICAgICAgIGlzS2V5ZWQodmFsdWUpID8gdmFsdWUuZW50cnlTZXEoKSA6IHZhbHVlXG4gICAgICApLnRvU2V0U2VxKCk7XG4gICAgfVxuXG4gICAgU2V0U2VxLm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIFNldFNlcShhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBTZXRTZXEucHJvdG90eXBlLnRvU2V0U2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5cblxuICBTZXEuaXNTZXEgPSBpc1NlcTtcbiAgU2VxLktleWVkID0gS2V5ZWRTZXE7XG4gIFNlcS5TZXQgPSBTZXRTZXE7XG4gIFNlcS5JbmRleGVkID0gSW5kZXhlZFNlcTtcblxuICB2YXIgSVNfU0VRX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfU0VRX19AQCc7XG5cbiAgU2VxLnByb3RvdHlwZVtJU19TRVFfU0VOVElORUxdID0gdHJ1ZTtcblxuXG5cbiAgLy8gI3ByYWdtYSBSb290IFNlcXVlbmNlc1xuXG4gIGNyZWF0ZUNsYXNzKEFycmF5U2VxLCBJbmRleGVkU2VxKTtcbiAgICBmdW5jdGlvbiBBcnJheVNlcShhcnJheSkge1xuICAgICAgdGhpcy5fYXJyYXkgPSBhcnJheTtcbiAgICAgIHRoaXMuc2l6ZSA9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBBcnJheVNlcS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXMoaW5kZXgpID8gdGhpcy5fYXJyYXlbd3JhcEluZGV4KHRoaXMsIGluZGV4KV0gOiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgQXJyYXlTZXEucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICB2YXIgYXJyYXkgPSB0aGlzLl9hcnJheTtcbiAgICAgIHZhciBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICAgIGlmIChmbihhcnJheVtyZXZlcnNlID8gbWF4SW5kZXggLSBpaSA6IGlpXSwgaWksIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBpaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpaTtcbiAgICB9O1xuXG4gICAgQXJyYXlTZXEucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgYXJyYXkgPSB0aGlzLl9hcnJheTtcbiAgICAgIHZhciBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgXG4gICAgICAgIHtyZXR1cm4gaWkgPiBtYXhJbmRleCA/XG4gICAgICAgICAgaXRlcmF0b3JEb25lKCkgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgaWksIGFycmF5W3JldmVyc2UgPyBtYXhJbmRleCAtIGlpKysgOiBpaSsrXSl9XG4gICAgICApO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKE9iamVjdFNlcSwgS2V5ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIE9iamVjdFNlcShvYmplY3QpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICAgIHRoaXMuX29iamVjdCA9IG9iamVjdDtcbiAgICAgIHRoaXMuX2tleXMgPSBrZXlzO1xuICAgICAgdGhpcy5zaXplID0ga2V5cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgT2JqZWN0U2VxLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICBpZiAobm90U2V0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0W2tleV07XG4gICAgfTtcblxuICAgIE9iamVjdFNlcS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0Lmhhc093blByb3BlcnR5KGtleSk7XG4gICAgfTtcblxuICAgIE9iamVjdFNlcS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHZhciBvYmplY3QgPSB0aGlzLl9vYmplY3Q7XG4gICAgICB2YXIga2V5cyA9IHRoaXMuX2tleXM7XG4gICAgICB2YXIgbWF4SW5kZXggPSBrZXlzLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgICBpZiAoZm4ob2JqZWN0W2tleV0sIGtleSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGlpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlpO1xuICAgIH07XG5cbiAgICBPYmplY3RTZXEucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gdGhpcy5fb2JqZWN0O1xuICAgICAgdmFyIGtleXMgPSB0aGlzLl9rZXlzO1xuICAgICAgdmFyIG1heEluZGV4ID0ga2V5cy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgICByZXR1cm4gaWkrKyA+IG1heEluZGV4ID9cbiAgICAgICAgICBpdGVyYXRvckRvbmUoKSA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBrZXksIG9iamVjdFtrZXldKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgT2JqZWN0U2VxLnByb3RvdHlwZVtJU19PUkRFUkVEX1NFTlRJTkVMXSA9IHRydWU7XG5cblxuICBjcmVhdGVDbGFzcyhJdGVyYWJsZVNlcSwgSW5kZXhlZFNlcSk7XG4gICAgZnVuY3Rpb24gSXRlcmFibGVTZXEoaXRlcmFibGUpIHtcbiAgICAgIHRoaXMuX2l0ZXJhYmxlID0gaXRlcmFibGU7XG4gICAgICB0aGlzLnNpemUgPSBpdGVyYWJsZS5sZW5ndGggfHwgaXRlcmFibGUuc2l6ZTtcbiAgICB9XG5cbiAgICBJdGVyYWJsZVNlcS5wcm90b3R5cGUuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhYmxlID0gdGhpcy5faXRlcmFibGU7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpZiAoaXNJdGVyYXRvcihpdGVyYXRvcikpIHtcbiAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoZm4oc3RlcC52YWx1ZSwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcblxuICAgIEl0ZXJhYmxlU2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmFibGUgPSB0aGlzLl9pdGVyYWJsZTtcbiAgICAgIHZhciBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICAgIGlmICghaXNJdGVyYXRvcihpdGVyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGl0ZXJhdG9yRG9uZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc3RlcC52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhJdGVyYXRvclNlcSwgSW5kZXhlZFNlcSk7XG4gICAgZnVuY3Rpb24gSXRlcmF0b3JTZXEoaXRlcmF0b3IpIHtcbiAgICAgIHRoaXMuX2l0ZXJhdG9yID0gaXRlcmF0b3I7XG4gICAgICB0aGlzLl9pdGVyYXRvckNhY2hlID0gW107XG4gICAgfVxuXG4gICAgSXRlcmF0b3JTZXEucHJvdG90eXBlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXJhdG9yO1xuICAgICAgdmFyIGNhY2hlID0gdGhpcy5faXRlcmF0b3JDYWNoZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHdoaWxlIChpdGVyYXRpb25zIDwgY2FjaGUubGVuZ3RoKSB7XG4gICAgICAgIGlmIChmbihjYWNoZVtpdGVyYXRpb25zXSwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHN0ZXA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIHZhciB2YWwgPSBzdGVwLnZhbHVlO1xuICAgICAgICBjYWNoZVtpdGVyYXRpb25zXSA9IHZhbDtcbiAgICAgICAgaWYgKGZuKHZhbCwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcblxuICAgIEl0ZXJhdG9yU2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyYXRvcjtcbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuX2l0ZXJhdG9yQ2FjaGU7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICBpZiAoaXRlcmF0aW9ucyA+PSBjYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FjaGVbaXRlcmF0aW9uc10gPSBzdGVwLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMsIGNhY2hlW2l0ZXJhdGlvbnMrK10pO1xuICAgICAgfSk7XG4gICAgfTtcblxuXG5cblxuICAvLyAjIHByYWdtYSBIZWxwZXIgZnVuY3Rpb25zXG5cbiAgZnVuY3Rpb24gaXNTZXEobWF5YmVTZXEpIHtcbiAgICByZXR1cm4gISEobWF5YmVTZXEgJiYgbWF5YmVTZXFbSVNfU0VRX1NFTlRJTkVMXSk7XG4gIH1cblxuICB2YXIgRU1QVFlfU0VRO1xuXG4gIGZ1bmN0aW9uIGVtcHR5U2VxdWVuY2UoKSB7XG4gICAgcmV0dXJuIEVNUFRZX1NFUSB8fCAoRU1QVFlfU0VRID0gbmV3IEFycmF5U2VxKFtdKSk7XG4gIH1cblxuICBmdW5jdGlvbiBrZXllZFNlcUZyb21WYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBzZXEgPVxuICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBuZXcgQXJyYXlTZXEodmFsdWUpLmZyb21FbnRyeVNlcSgpIDpcbiAgICAgIGlzSXRlcmF0b3IodmFsdWUpID8gbmV3IEl0ZXJhdG9yU2VxKHZhbHVlKS5mcm9tRW50cnlTZXEoKSA6XG4gICAgICBoYXNJdGVyYXRvcih2YWx1ZSkgPyBuZXcgSXRlcmFibGVTZXEodmFsdWUpLmZyb21FbnRyeVNlcSgpIDpcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBuZXcgT2JqZWN0U2VxKHZhbHVlKSA6XG4gICAgICB1bmRlZmluZWQ7XG4gICAgaWYgKCFzZXEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdFeHBlY3RlZCBBcnJheSBvciBpdGVyYWJsZSBvYmplY3Qgb2YgW2ssIHZdIGVudHJpZXMsICcrXG4gICAgICAgICdvciBrZXllZCBvYmplY3Q6ICcgKyB2YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgc2VxID0gbWF5YmVJbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKTtcbiAgICBpZiAoIXNlcSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ0V4cGVjdGVkIEFycmF5IG9yIGl0ZXJhYmxlIG9iamVjdCBvZiB2YWx1ZXM6ICcgKyB2YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcUZyb21WYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBzZXEgPSBtYXliZUluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpIHx8XG4gICAgICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBuZXcgT2JqZWN0U2VxKHZhbHVlKSk7XG4gICAgaWYgKCFzZXEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdFeHBlY3RlZCBBcnJheSBvciBpdGVyYWJsZSBvYmplY3Qgb2YgdmFsdWVzLCBvciBrZXllZCBvYmplY3Q6ICcgKyB2YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlSW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5TGlrZSh2YWx1ZSkgPyBuZXcgQXJyYXlTZXEodmFsdWUpIDpcbiAgICAgIGlzSXRlcmF0b3IodmFsdWUpID8gbmV3IEl0ZXJhdG9yU2VxKHZhbHVlKSA6XG4gICAgICBoYXNJdGVyYXRvcih2YWx1ZSkgPyBuZXcgSXRlcmFibGVTZXEodmFsdWUpIDpcbiAgICAgIHVuZGVmaW5lZFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXFJdGVyYXRlKHNlcSwgZm4sIHJldmVyc2UsIHVzZUtleXMpIHtcbiAgICB2YXIgY2FjaGUgPSBzZXEuX2NhY2hlO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgdmFyIG1heEluZGV4ID0gY2FjaGUubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gY2FjaGVbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV07XG4gICAgICAgIGlmIChmbihlbnRyeVsxXSwgdXNlS2V5cyA/IGVudHJ5WzBdIDogaWksIHNlcSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGlpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlpO1xuICAgIH1cbiAgICByZXR1cm4gc2VxLl9faXRlcmF0ZVVuY2FjaGVkKGZuLCByZXZlcnNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcUl0ZXJhdG9yKHNlcSwgdHlwZSwgcmV2ZXJzZSwgdXNlS2V5cykge1xuICAgIHZhciBjYWNoZSA9IHNlcS5fY2FjaGU7XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICB2YXIgbWF4SW5kZXggPSBjYWNoZS5sZW5ndGggLSAxO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBlbnRyeSA9IGNhY2hlW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgICByZXR1cm4gaWkrKyA+IG1heEluZGV4ID9cbiAgICAgICAgICBpdGVyYXRvckRvbmUoKSA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCB1c2VLZXlzID8gZW50cnlbMF0gOiBpaSAtIDEsIGVudHJ5WzFdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc2VxLl9faXRlcmF0b3JVbmNhY2hlZCh0eXBlLCByZXZlcnNlKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKENvbGxlY3Rpb24sIEl0ZXJhYmxlKTtcbiAgICBmdW5jdGlvbiBDb2xsZWN0aW9uKCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdBYnN0cmFjdCcpO1xuICAgIH1cblxuXG4gIGNyZWF0ZUNsYXNzKEtleWVkQ29sbGVjdGlvbiwgQ29sbGVjdGlvbik7ZnVuY3Rpb24gS2V5ZWRDb2xsZWN0aW9uKCkge31cblxuICBjcmVhdGVDbGFzcyhJbmRleGVkQ29sbGVjdGlvbiwgQ29sbGVjdGlvbik7ZnVuY3Rpb24gSW5kZXhlZENvbGxlY3Rpb24oKSB7fVxuXG4gIGNyZWF0ZUNsYXNzKFNldENvbGxlY3Rpb24sIENvbGxlY3Rpb24pO2Z1bmN0aW9uIFNldENvbGxlY3Rpb24oKSB7fVxuXG5cbiAgQ29sbGVjdGlvbi5LZXllZCA9IEtleWVkQ29sbGVjdGlvbjtcbiAgQ29sbGVjdGlvbi5JbmRleGVkID0gSW5kZXhlZENvbGxlY3Rpb247XG4gIENvbGxlY3Rpb24uU2V0ID0gU2V0Q29sbGVjdGlvbjtcblxuICAvKipcbiAgICogQW4gZXh0ZW5zaW9uIG9mIHRoZSBcInNhbWUtdmFsdWVcIiBhbGdvcml0aG0gYXMgW2Rlc2NyaWJlZCBmb3IgdXNlIGJ5IEVTNiBNYXBcbiAgICogYW5kIFNldF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwI0tleV9lcXVhbGl0eSlcbiAgICpcbiAgICogTmFOIGlzIGNvbnNpZGVyZWQgdGhlIHNhbWUgYXMgTmFOLCBob3dldmVyIC0wIGFuZCAwIGFyZSBjb25zaWRlcmVkIHRoZSBzYW1lXG4gICAqIHZhbHVlLCB3aGljaCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYWxnb3JpdGhtIGRlc2NyaWJlZCBieVxuICAgKiBbYE9iamVjdC5pc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pcykuXG4gICAqXG4gICAqIFRoaXMgaXMgZXh0ZW5kZWQgZnVydGhlciB0byBhbGxvdyBPYmplY3RzIHRvIGRlc2NyaWJlIHRoZSB2YWx1ZXMgdGhleVxuICAgKiByZXByZXNlbnQsIGJ5IHdheSBvZiBgdmFsdWVPZmAgb3IgYGVxdWFsc2AgKGFuZCBgaGFzaENvZGVgKS5cbiAgICpcbiAgICogTm90ZTogYmVjYXVzZSBvZiB0aGlzIGV4dGVuc2lvbiwgdGhlIGtleSBlcXVhbGl0eSBvZiBJbW11dGFibGUuTWFwIGFuZCB0aGVcbiAgICogdmFsdWUgZXF1YWxpdHkgb2YgSW1tdXRhYmxlLlNldCB3aWxsIGRpZmZlciBmcm9tIEVTNiBNYXAgYW5kIFNldC5cbiAgICpcbiAgICogIyMjIERlZmluaW5nIGN1c3RvbSB2YWx1ZXNcbiAgICpcbiAgICogVGhlIGVhc2llc3Qgd2F5IHRvIGRlc2NyaWJlIHRoZSB2YWx1ZSBhbiBvYmplY3QgcmVwcmVzZW50cyBpcyBieSBpbXBsZW1lbnRpbmdcbiAgICogYHZhbHVlT2ZgLiBGb3IgZXhhbXBsZSwgYERhdGVgIHJlcHJlc2VudHMgYSB2YWx1ZSBieSByZXR1cm5pbmcgYSB1bml4XG4gICAqIHRpbWVzdGFtcCBmb3IgYHZhbHVlT2ZgOlxuICAgKlxuICAgKiAgICAgdmFyIGRhdGUxID0gbmV3IERhdGUoMTIzNDU2Nzg5MDAwMCk7IC8vIEZyaSBGZWIgMTMgMjAwOSAuLi5cbiAgICogICAgIHZhciBkYXRlMiA9IG5ldyBEYXRlKDEyMzQ1Njc4OTAwMDApO1xuICAgKiAgICAgZGF0ZTEudmFsdWVPZigpOyAvLyAxMjM0NTY3ODkwMDAwXG4gICAqICAgICBhc3NlcnQoIGRhdGUxICE9PSBkYXRlMiApO1xuICAgKiAgICAgYXNzZXJ0KCBJbW11dGFibGUuaXMoIGRhdGUxLCBkYXRlMiApICk7XG4gICAqXG4gICAqIE5vdGU6IG92ZXJyaWRpbmcgYHZhbHVlT2ZgIG1heSBoYXZlIG90aGVyIGltcGxpY2F0aW9ucyBpZiB5b3UgdXNlIHRoaXMgb2JqZWN0XG4gICAqIHdoZXJlIEphdmFTY3JpcHQgZXhwZWN0cyBhIHByaW1pdGl2ZSwgc3VjaCBhcyBpbXBsaWNpdCBzdHJpbmcgY29lcmNpb24uXG4gICAqXG4gICAqIEZvciBtb3JlIGNvbXBsZXggdHlwZXMsIGVzcGVjaWFsbHkgY29sbGVjdGlvbnMsIGltcGxlbWVudGluZyBgdmFsdWVPZmAgbWF5XG4gICAqIG5vdCBiZSBwZXJmb3JtYW50LiBBbiBhbHRlcm5hdGl2ZSBpcyB0byBpbXBsZW1lbnQgYGVxdWFsc2AgYW5kIGBoYXNoQ29kZWAuXG4gICAqXG4gICAqIGBlcXVhbHNgIHRha2VzIGFub3RoZXIgb2JqZWN0LCBwcmVzdW1hYmx5IG9mIHNpbWlsYXIgdHlwZSwgYW5kIHJldHVybnMgdHJ1ZVxuICAgKiBpZiB0aGUgaXQgaXMgZXF1YWwuIEVxdWFsaXR5IGlzIHN5bW1ldHJpY2FsLCBzbyB0aGUgc2FtZSByZXN1bHQgc2hvdWxkIGJlXG4gICAqIHJldHVybmVkIGlmIHRoaXMgYW5kIHRoZSBhcmd1bWVudCBhcmUgZmxpcHBlZC5cbiAgICpcbiAgICogICAgIGFzc2VydCggYS5lcXVhbHMoYikgPT09IGIuZXF1YWxzKGEpICk7XG4gICAqXG4gICAqIGBoYXNoQ29kZWAgcmV0dXJucyBhIDMyYml0IGludGVnZXIgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgb2JqZWN0IHdoaWNoIHdpbGxcbiAgICogYmUgdXNlZCB0byBkZXRlcm1pbmUgaG93IHRvIHN0b3JlIHRoZSB2YWx1ZSBvYmplY3QgaW4gYSBNYXAgb3IgU2V0LiBZb3UgbXVzdFxuICAgKiBwcm92aWRlIGJvdGggb3IgbmVpdGhlciBtZXRob2RzLCBvbmUgbXVzdCBub3QgZXhpc3Qgd2l0aG91dCB0aGUgb3RoZXIuXG4gICAqXG4gICAqIEFsc28sIGFuIGltcG9ydGFudCByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGVzZSBtZXRob2RzIG11c3QgYmUgdXBoZWxkOiBpZiB0d29cbiAgICogdmFsdWVzIGFyZSBlcXVhbCwgdGhleSAqbXVzdCogcmV0dXJuIHRoZSBzYW1lIGhhc2hDb2RlLiBJZiB0aGUgdmFsdWVzIGFyZSBub3RcbiAgICogZXF1YWwsIHRoZXkgbWlnaHQgaGF2ZSB0aGUgc2FtZSBoYXNoQ29kZTsgdGhpcyBpcyBjYWxsZWQgYSBoYXNoIGNvbGxpc2lvbixcbiAgICogYW5kIHdoaWxlIHVuZGVzaXJhYmxlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCBpdCBpcyBhY2NlcHRhYmxlLlxuICAgKlxuICAgKiAgICAgaWYgKGEuZXF1YWxzKGIpKSB7XG4gICAqICAgICAgIGFzc2VydCggYS5oYXNoQ29kZSgpID09PSBiLmhhc2hDb2RlKCkgKTtcbiAgICogICAgIH1cbiAgICpcbiAgICogQWxsIEltbXV0YWJsZSBjb2xsZWN0aW9ucyBpbXBsZW1lbnQgYGVxdWFsc2AgYW5kIGBoYXNoQ29kZWAuXG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBpcyh2YWx1ZUEsIHZhbHVlQikge1xuICAgIGlmICh2YWx1ZUEgPT09IHZhbHVlQiB8fCAodmFsdWVBICE9PSB2YWx1ZUEgJiYgdmFsdWVCICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCF2YWx1ZUEgfHwgIXZhbHVlQikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlQS52YWx1ZU9mID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIHR5cGVvZiB2YWx1ZUIudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFsdWVBID0gdmFsdWVBLnZhbHVlT2YoKTtcbiAgICAgIHZhbHVlQiA9IHZhbHVlQi52YWx1ZU9mKCk7XG4gICAgICBpZiAodmFsdWVBID09PSB2YWx1ZUIgfHwgKHZhbHVlQSAhPT0gdmFsdWVBICYmIHZhbHVlQiAhPT0gdmFsdWVCKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsdWVBIHx8ICF2YWx1ZUIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlQS5lcXVhbHMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgdHlwZW9mIHZhbHVlQi5lcXVhbHMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgdmFsdWVBLmVxdWFscyh2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJvbUpTKGpzb24sIGNvbnZlcnRlcikge1xuICAgIHJldHVybiBjb252ZXJ0ZXIgP1xuICAgICAgZnJvbUpTV2l0aChjb252ZXJ0ZXIsIGpzb24sICcnLCB7Jyc6IGpzb259KSA6XG4gICAgICBmcm9tSlNEZWZhdWx0KGpzb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJvbUpTV2l0aChjb252ZXJ0ZXIsIGpzb24sIGtleSwgcGFyZW50SlNPTikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICByZXR1cm4gY29udmVydGVyLmNhbGwocGFyZW50SlNPTiwga2V5LCBJbmRleGVkU2VxKGpzb24pLm1hcChmdW5jdGlvbih2LCBrKSAge3JldHVybiBmcm9tSlNXaXRoKGNvbnZlcnRlciwgdiwgaywganNvbil9KSk7XG4gICAgfVxuICAgIGlmIChpc1BsYWluT2JqKGpzb24pKSB7XG4gICAgICByZXR1cm4gY29udmVydGVyLmNhbGwocGFyZW50SlNPTiwga2V5LCBLZXllZFNlcShqc29uKS5tYXAoZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gZnJvbUpTV2l0aChjb252ZXJ0ZXIsIHYsIGssIGpzb24pfSkpO1xuICAgIH1cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyb21KU0RlZmF1bHQoanNvbikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICByZXR1cm4gSW5kZXhlZFNlcShqc29uKS5tYXAoZnJvbUpTRGVmYXVsdCkudG9MaXN0KCk7XG4gICAgfVxuICAgIGlmIChpc1BsYWluT2JqKGpzb24pKSB7XG4gICAgICByZXR1cm4gS2V5ZWRTZXEoanNvbikubWFwKGZyb21KU0RlZmF1bHQpLnRvTWFwKCk7XG4gICAgfVxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQbGFpbk9iaih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCB8fCB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHZhciBzcmNfTWF0aF9faW11bCA9XG4gICAgdHlwZW9mIE1hdGguaW11bCA9PT0gJ2Z1bmN0aW9uJyAmJiBNYXRoLmltdWwoMHhmZmZmZmZmZiwgMikgPT09IC0yID9cbiAgICBNYXRoLmltdWwgOlxuICAgIGZ1bmN0aW9uIGltdWwoYSwgYikge1xuICAgICAgYSA9IGEgfCAwOyAvLyBpbnRcbiAgICAgIGIgPSBiIHwgMDsgLy8gaW50XG4gICAgICB2YXIgYyA9IGEgJiAweGZmZmY7XG4gICAgICB2YXIgZCA9IGIgJiAweGZmZmY7XG4gICAgICAvLyBTaGlmdCBieSAwIGZpeGVzIHRoZSBzaWduIG9uIHRoZSBoaWdoIHBhcnQuXG4gICAgICByZXR1cm4gKGMgKiBkKSArICgoKChhID4+PiAxNikgKiBkICsgYyAqIChiID4+PiAxNikpIDw8IDE2KSA+Pj4gMCkgfCAwOyAvLyBpbnRcbiAgICB9O1xuXG4gIC8vIHY4IGhhcyBhbiBvcHRpbWl6YXRpb24gZm9yIHN0b3JpbmcgMzEtYml0IHNpZ25lZCBudW1iZXJzLlxuICAvLyBWYWx1ZXMgd2hpY2ggaGF2ZSBlaXRoZXIgMDAgb3IgMTEgYXMgdGhlIGhpZ2ggb3JkZXIgYml0cyBxdWFsaWZ5LlxuICAvLyBUaGlzIGZ1bmN0aW9uIGRyb3BzIHRoZSBoaWdoZXN0IG9yZGVyIGJpdCBpbiBhIHNpZ25lZCBudW1iZXIsIG1haW50YWluaW5nXG4gIC8vIHRoZSBzaWduIGJpdC5cbiAgZnVuY3Rpb24gc21pKGkzMikge1xuICAgIHJldHVybiAoKGkzMiA+Pj4gMSkgJiAweDQwMDAwMDAwKSB8IChpMzIgJiAweEJGRkZGRkZGKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc2gobykge1xuICAgIGlmIChvID09PSBmYWxzZSB8fCBvID09PSBudWxsIHx8IG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygby52YWx1ZU9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvID0gby52YWx1ZU9mKCk7XG4gICAgICBpZiAobyA9PT0gZmFsc2UgfHwgbyA9PT0gbnVsbCB8fCBvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgbztcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhciBoID0gbyB8IDA7XG4gICAgICBpZiAoaCAhPT0gbykge1xuICAgICAgICBoIF49IG8gKiAweEZGRkZGRkZGO1xuICAgICAgfVxuICAgICAgd2hpbGUgKG8gPiAweEZGRkZGRkZGKSB7XG4gICAgICAgIG8gLz0gMHhGRkZGRkZGRjtcbiAgICAgICAgaCBePSBvO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNtaShoKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gby5sZW5ndGggPiBTVFJJTkdfSEFTSF9DQUNIRV9NSU5fU1RSTEVOID8gY2FjaGVkSGFzaFN0cmluZyhvKSA6IGhhc2hTdHJpbmcobyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygby5oYXNoQ29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG8uaGFzaENvZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2hKU09iaihvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlZEhhc2hTdHJpbmcoc3RyaW5nKSB7XG4gICAgdmFyIGhhc2ggPSBzdHJpbmdIYXNoQ2FjaGVbc3RyaW5nXTtcbiAgICBpZiAoaGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNoID0gaGFzaFN0cmluZyhzdHJpbmcpO1xuICAgICAgaWYgKFNUUklOR19IQVNIX0NBQ0hFX1NJWkUgPT09IFNUUklOR19IQVNIX0NBQ0hFX01BWF9TSVpFKSB7XG4gICAgICAgIFNUUklOR19IQVNIX0NBQ0hFX1NJWkUgPSAwO1xuICAgICAgICBzdHJpbmdIYXNoQ2FjaGUgPSB7fTtcbiAgICAgIH1cbiAgICAgIFNUUklOR19IQVNIX0NBQ0hFX1NJWkUrKztcbiAgICAgIHN0cmluZ0hhc2hDYWNoZVtzdHJpbmddID0gaGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9oYXNoaW5nLXN0cmluZ3NcbiAgZnVuY3Rpb24gaGFzaFN0cmluZyhzdHJpbmcpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBoYXNoIGZyb20gSlZNXG4gICAgLy8gVGhlIGhhc2ggY29kZSBmb3IgYSBzdHJpbmcgaXMgY29tcHV0ZWQgYXNcbiAgICAvLyBzWzBdICogMzEgXiAobiAtIDEpICsgc1sxXSAqIDMxIF4gKG4gLSAyKSArIC4uLiArIHNbbiAtIDFdLFxuICAgIC8vIHdoZXJlIHNbaV0gaXMgdGhlIGl0aCBjaGFyYWN0ZXIgb2YgdGhlIHN0cmluZyBhbmQgbiBpcyB0aGUgbGVuZ3RoIG9mXG4gICAgLy8gdGhlIHN0cmluZy4gV2UgXCJtb2RcIiB0aGUgcmVzdWx0IHRvIG1ha2UgaXQgYmV0d2VlbiAwIChpbmNsdXNpdmUpIGFuZCAyXjMxXG4gICAgLy8gKGV4Y2x1c2l2ZSkgYnkgZHJvcHBpbmcgaGlnaCBiaXRzLlxuICAgIHZhciBoYXNoID0gMDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgc3RyaW5nLmxlbmd0aDsgaWkrKykge1xuICAgICAgaGFzaCA9IDMxICogaGFzaCArIHN0cmluZy5jaGFyQ29kZUF0KGlpKSB8IDA7XG4gICAgfVxuICAgIHJldHVybiBzbWkoaGFzaCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNoSlNPYmoob2JqKSB7XG4gICAgdmFyIGhhc2g7XG4gICAgaWYgKHVzaW5nV2Vha01hcCkge1xuICAgICAgaGFzaCA9IHdlYWtNYXAuZ2V0KG9iaik7XG4gICAgICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhc2ggPSBvYmpbVUlEX0hBU0hfS0VZXTtcbiAgICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaGFzaDtcbiAgICB9XG5cbiAgICBpZiAoIWNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICBoYXNoID0gb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlICYmIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZVtVSURfSEFTSF9LRVldO1xuICAgICAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICAgIH1cblxuICAgICAgaGFzaCA9IGdldElFTm9kZUhhc2gob2JqKTtcbiAgICAgIGlmIChoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFzaCA9ICsrb2JqSGFzaFVJRDtcbiAgICBpZiAob2JqSGFzaFVJRCAmIDB4NDAwMDAwMDApIHtcbiAgICAgIG9iakhhc2hVSUQgPSAwO1xuICAgIH1cblxuICAgIGlmICh1c2luZ1dlYWtNYXApIHtcbiAgICAgIHdlYWtNYXAuc2V0KG9iaiwgaGFzaCk7XG4gICAgfSBlbHNlIGlmIChpc0V4dGVuc2libGUgIT09IHVuZGVmaW5lZCAmJiBpc0V4dGVuc2libGUob2JqKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm9uLWV4dGVuc2libGUgb2JqZWN0cyBhcmUgbm90IGFsbG93ZWQgYXMga2V5cy4nKTtcbiAgICB9IGVsc2UgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBVSURfSEFTSF9LRVksIHtcbiAgICAgICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAgICAgJ2NvbmZpZ3VyYWJsZSc6IGZhbHNlLFxuICAgICAgICAnd3JpdGFibGUnOiBmYWxzZSxcbiAgICAgICAgJ3ZhbHVlJzogaGFzaFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlID09PSBvYmouY29uc3RydWN0b3IucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKSB7XG4gICAgICAvLyBTaW5jZSB3ZSBjYW4ndCBkZWZpbmUgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eSBvbiB0aGUgb2JqZWN0XG4gICAgICAvLyB3ZSdsbCBoaWphY2sgb25lIG9mIHRoZSBsZXNzLXVzZWQgbm9uLWVudW1lcmFibGUgcHJvcGVydGllcyB0b1xuICAgICAgLy8gc2F2ZSBvdXIgaGFzaCBvbiBpdC4gU2luY2UgdGhpcyBpcyBhIGZ1bmN0aW9uIGl0IHdpbGwgbm90IHNob3cgdXAgaW5cbiAgICAgIC8vIGBKU09OLnN0cmluZ2lmeWAgd2hpY2ggaXMgd2hhdCB3ZSB3YW50LlxuICAgICAgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZVtVSURfSEFTSF9LRVldID0gaGFzaDtcbiAgICB9IGVsc2UgaWYgKG9iai5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGNvdWxkbid0IGdldCB0aGUgSUUgYHVuaXF1ZUlEYCB0byB1c2UgYXMgYSBoYXNoXG4gICAgICAvLyBhbmQgd2UgY291bGRuJ3QgdXNlIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgdG8gZXhwbG9pdCB0aGVcbiAgICAgIC8vIGRvbnRFbnVtIGJ1ZyBzbyB3ZSBzaW1wbHkgYWRkIHRoZSBgVUlEX0hBU0hfS0VZYCBvbiB0aGUgbm9kZVxuICAgICAgLy8gaXRzZWxmLlxuICAgICAgb2JqW1VJRF9IQVNIX0tFWV0gPSBoYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBzZXQgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eSBvbiBvYmplY3QuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICAvLyBHZXQgcmVmZXJlbmNlcyB0byBFUzUgb2JqZWN0IG1ldGhvZHMuXG4gIHZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuXG4gIC8vIFRydWUgaWYgT2JqZWN0LmRlZmluZVByb3BlcnR5IHdvcmtzIGFzIGV4cGVjdGVkLiBJRTggZmFpbHMgdGhpcyB0ZXN0LlxuICB2YXIgY2FuRGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ0AnLCB7fSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KCkpO1xuXG4gIC8vIElFIGhhcyBhIGB1bmlxdWVJRGAgcHJvcGVydHkgb24gRE9NIG5vZGVzLiBXZSBjYW4gY29uc3RydWN0IHRoZSBoYXNoIGZyb20gaXRcbiAgLy8gYW5kIGF2b2lkIG1lbW9yeSBsZWFrcyBmcm9tIHRoZSBJRSBjbG9uZU5vZGUgYnVnLlxuICBmdW5jdGlvbiBnZXRJRU5vZGVIYXNoKG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlID4gMCkge1xuICAgICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICAgIGNhc2UgMTogLy8gRWxlbWVudFxuICAgICAgICAgIHJldHVybiBub2RlLnVuaXF1ZUlEO1xuICAgICAgICBjYXNlIDk6IC8vIERvY3VtZW50XG4gICAgICAgICAgcmV0dXJuIG5vZGUuZG9jdW1lbnRFbGVtZW50ICYmIG5vZGUuZG9jdW1lbnRFbGVtZW50LnVuaXF1ZUlEO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIHBvc3NpYmxlLCB1c2UgYSBXZWFrTWFwLlxuICB2YXIgdXNpbmdXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbic7XG4gIHZhciB3ZWFrTWFwO1xuICBpZiAodXNpbmdXZWFrTWFwKSB7XG4gICAgd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIH1cblxuICB2YXIgb2JqSGFzaFVJRCA9IDA7XG5cbiAgdmFyIFVJRF9IQVNIX0tFWSA9ICdfX2ltbXV0YWJsZWhhc2hfXyc7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gICAgVUlEX0hBU0hfS0VZID0gU3ltYm9sKFVJRF9IQVNIX0tFWSk7XG4gIH1cblxuICB2YXIgU1RSSU5HX0hBU0hfQ0FDSEVfTUlOX1NUUkxFTiA9IDE2O1xuICB2YXIgU1RSSU5HX0hBU0hfQ0FDSEVfTUFYX1NJWkUgPSAyNTU7XG4gIHZhciBTVFJJTkdfSEFTSF9DQUNIRV9TSVpFID0gMDtcbiAgdmFyIHN0cmluZ0hhc2hDYWNoZSA9IHt9O1xuXG4gIGZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGVycm9yKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnROb3RJbmZpbml0ZShzaXplKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgc2l6ZSAhPT0gSW5maW5pdHksXG4gICAgICAnQ2Fubm90IHBlcmZvcm0gdGhpcyBhY3Rpb24gd2l0aCBhbiBpbmZpbml0ZSBzaXplLidcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoVG9LZXllZFNlcXVlbmNlLCBLZXllZFNlcSk7XG4gICAgZnVuY3Rpb24gVG9LZXllZFNlcXVlbmNlKGluZGV4ZWQsIHVzZUtleXMpIHtcbiAgICAgIHRoaXMuX2l0ZXIgPSBpbmRleGVkO1xuICAgICAgdGhpcy5fdXNlS2V5cyA9IHVzZUtleXM7XG4gICAgICB0aGlzLnNpemUgPSBpbmRleGVkLnNpemU7XG4gICAgfVxuXG4gICAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5nZXQoa2V5LCBub3RTZXRWYWx1ZSk7XG4gICAgfTtcblxuICAgIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5oYXMoa2V5KTtcbiAgICB9O1xuXG4gICAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS52YWx1ZVNlcSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIudmFsdWVTZXEoKTtcbiAgICB9O1xuXG4gICAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgcmV2ZXJzZWRTZXF1ZW5jZSA9IHJldmVyc2VGYWN0b3J5KHRoaXMsIHRydWUpO1xuICAgICAgaWYgKCF0aGlzLl91c2VLZXlzKSB7XG4gICAgICAgIHJldmVyc2VkU2VxdWVuY2UudmFsdWVTZXEgPSBmdW5jdGlvbigpICB7cmV0dXJuIHRoaXMkMC5faXRlci50b1NlcSgpLnJldmVyc2UoKX07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV2ZXJzZWRTZXF1ZW5jZTtcbiAgICB9O1xuXG4gICAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBtYXBwZWRTZXF1ZW5jZSA9IG1hcEZhY3RvcnkodGhpcywgbWFwcGVyLCBjb250ZXh0KTtcbiAgICAgIGlmICghdGhpcy5fdXNlS2V5cykge1xuICAgICAgICBtYXBwZWRTZXF1ZW5jZS52YWx1ZVNlcSA9IGZ1bmN0aW9uKCkgIHtyZXR1cm4gdGhpcyQwLl9pdGVyLnRvU2VxKCkubWFwKG1hcHBlciwgY29udGV4dCl9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hcHBlZFNlcXVlbmNlO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaWk7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdGUoXG4gICAgICAgIHRoaXMuX3VzZUtleXMgP1xuICAgICAgICAgIGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGZuKHYsIGssIHRoaXMkMCl9IDpcbiAgICAgICAgICAoKGlpID0gcmV2ZXJzZSA/IHJlc29sdmVTaXplKHRoaXMpIDogMCksXG4gICAgICAgICAgICBmdW5jdGlvbih2ICkge3JldHVybiBmbih2LCByZXZlcnNlID8gLS1paSA6IGlpKyssIHRoaXMkMCl9KSxcbiAgICAgICAgcmV2ZXJzZVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHRoaXMuX3VzZUtleXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXIuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgaWkgPSByZXZlcnNlID8gcmVzb2x2ZVNpemUodGhpcykgOiAwO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIHJldHVybiBzdGVwLmRvbmUgPyBzdGVwIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIHJldmVyc2UgPyAtLWlpIDogaWkrKywgc3RlcC52YWx1ZSwgc3RlcCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGVbSVNfT1JERVJFRF9TRU5USU5FTF0gPSB0cnVlO1xuXG5cbiAgY3JlYXRlQ2xhc3MoVG9JbmRleGVkU2VxdWVuY2UsIEluZGV4ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIFRvSW5kZXhlZFNlcXVlbmNlKGl0ZXIpIHtcbiAgICAgIHRoaXMuX2l0ZXIgPSBpdGVyO1xuICAgICAgdGhpcy5zaXplID0gaXRlci5zaXplO1xuICAgIH1cblxuICAgIFRvSW5kZXhlZFNlcXVlbmNlLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgfTtcblxuICAgIFRvSW5kZXhlZFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRlKGZ1bmN0aW9uKHYgKSB7cmV0dXJuIGZuKHYsIGl0ZXJhdGlvbnMrKywgdGhpcyQwKX0sIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBUb0luZGV4ZWRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXIuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCBzdGVwLnZhbHVlLCBzdGVwKVxuICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoVG9TZXRTZXF1ZW5jZSwgU2V0U2VxKTtcbiAgICBmdW5jdGlvbiBUb1NldFNlcXVlbmNlKGl0ZXIpIHtcbiAgICAgIHRoaXMuX2l0ZXIgPSBpdGVyO1xuICAgICAgdGhpcy5zaXplID0gaXRlci5zaXplO1xuICAgIH1cblxuICAgIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuaW5jbHVkZXMoa2V5KTtcbiAgICB9O1xuXG4gICAgVG9TZXRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLl9faXRlcmF0ZShmdW5jdGlvbih2ICkge3JldHVybiBmbih2LCB2LCB0aGlzJDApfSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMsIHJldmVyc2UpO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIHJldHVybiBzdGVwLmRvbmUgPyBzdGVwIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIHN0ZXAudmFsdWUsIHN0ZXAudmFsdWUsIHN0ZXApO1xuICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoRnJvbUVudHJpZXNTZXF1ZW5jZSwgS2V5ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIEZyb21FbnRyaWVzU2VxdWVuY2UoZW50cmllcykge1xuICAgICAgdGhpcy5faXRlciA9IGVudHJpZXM7XG4gICAgICB0aGlzLnNpemUgPSBlbnRyaWVzLnNpemU7XG4gICAgfVxuXG4gICAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuZW50cnlTZXEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLnRvU2VxKCk7XG4gICAgfTtcblxuICAgIEZyb21FbnRyaWVzU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24oZW50cnkgKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGVudHJ5IGV4aXN0cyBmaXJzdCBzbyBhcnJheSBhY2Nlc3MgZG9lc24ndCB0aHJvdyBmb3IgaG9sZXNcbiAgICAgICAgLy8gaW4gdGhlIHBhcmVudCBpdGVyYXRpb24uXG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhbGlkYXRlRW50cnkoZW50cnkpO1xuICAgICAgICAgIHZhciBpbmRleGVkSXRlcmFibGUgPSBpc0l0ZXJhYmxlKGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gZm4oXG4gICAgICAgICAgICBpbmRleGVkSXRlcmFibGUgPyBlbnRyeS5nZXQoMSkgOiBlbnRyeVsxXSxcbiAgICAgICAgICAgIGluZGV4ZWRJdGVyYWJsZSA/IGVudHJ5LmdldCgwKSA6IGVudHJ5WzBdLFxuICAgICAgICAgICAgdGhpcyQwXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIEZyb21FbnRyaWVzU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMsIHJldmVyc2UpO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAvLyBDaGVjayBpZiBlbnRyeSBleGlzdHMgZmlyc3Qgc28gYXJyYXkgYWNjZXNzIGRvZXNuJ3QgdGhyb3cgZm9yIGhvbGVzXG4gICAgICAgICAgLy8gaW4gdGhlIHBhcmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIHZhciBpbmRleGVkSXRlcmFibGUgPSBpc0l0ZXJhYmxlKGVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBpbmRleGVkSXRlcmFibGUgPyBlbnRyeS5nZXQoMCkgOiBlbnRyeVswXSxcbiAgICAgICAgICAgICAgaW5kZXhlZEl0ZXJhYmxlID8gZW50cnkuZ2V0KDEpIDogZW50cnlbMV0sXG4gICAgICAgICAgICAgIHN0ZXBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG5cbiAgVG9JbmRleGVkU2VxdWVuY2UucHJvdG90eXBlLmNhY2hlUmVzdWx0ID1cbiAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5jYWNoZVJlc3VsdCA9XG4gIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLmNhY2hlUmVzdWx0ID1cbiAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPVxuICAgIGNhY2hlUmVzdWx0VGhyb3VnaDtcblxuXG4gIGZ1bmN0aW9uIGZsaXBGYWN0b3J5KGl0ZXJhYmxlKSB7XG4gICAgdmFyIGZsaXBTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgZmxpcFNlcXVlbmNlLl9pdGVyID0gaXRlcmFibGU7XG4gICAgZmxpcFNlcXVlbmNlLnNpemUgPSBpdGVyYWJsZS5zaXplO1xuICAgIGZsaXBTZXF1ZW5jZS5mbGlwID0gZnVuY3Rpb24oKSAge3JldHVybiBpdGVyYWJsZX07XG4gICAgZmxpcFNlcXVlbmNlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmV2ZXJzZWRTZXF1ZW5jZSA9IGl0ZXJhYmxlLnJldmVyc2UuYXBwbHkodGhpcyk7IC8vIHN1cGVyLnJldmVyc2UoKVxuICAgICAgcmV2ZXJzZWRTZXF1ZW5jZS5mbGlwID0gZnVuY3Rpb24oKSAge3JldHVybiBpdGVyYWJsZS5yZXZlcnNlKCl9O1xuICAgICAgcmV0dXJuIHJldmVyc2VkU2VxdWVuY2U7XG4gICAgfTtcbiAgICBmbGlwU2VxdWVuY2UuaGFzID0gZnVuY3Rpb24oa2V5ICkge3JldHVybiBpdGVyYWJsZS5pbmNsdWRlcyhrZXkpfTtcbiAgICBmbGlwU2VxdWVuY2UuaW5jbHVkZXMgPSBmdW5jdGlvbihrZXkgKSB7cmV0dXJuIGl0ZXJhYmxlLmhhcyhrZXkpfTtcbiAgICBmbGlwU2VxdWVuY2UuY2FjaGVSZXN1bHQgPSBjYWNoZVJlc3VsdFRocm91Z2g7XG4gICAgZmxpcFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGZuKGssIHYsIHRoaXMkMCkgIT09IGZhbHNlfSwgcmV2ZXJzZSk7XG4gICAgfVxuICAgIGZsaXBTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gSVRFUkFURV9FTlRSSUVTKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKCFzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIHZhciBrID0gc3RlcC52YWx1ZVswXTtcbiAgICAgICAgICAgIHN0ZXAudmFsdWVbMF0gPSBzdGVwLnZhbHVlWzFdO1xuICAgICAgICAgICAgc3RlcC52YWx1ZVsxXSA9IGs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYWJsZS5fX2l0ZXJhdG9yKFxuICAgICAgICB0eXBlID09PSBJVEVSQVRFX1ZBTFVFUyA/IElURVJBVEVfS0VZUyA6IElURVJBVEVfVkFMVUVTLFxuICAgICAgICByZXZlcnNlXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmxpcFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBtYXBGYWN0b3J5KGl0ZXJhYmxlLCBtYXBwZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgbWFwcGVkU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIG1hcHBlZFNlcXVlbmNlLnNpemUgPSBpdGVyYWJsZS5zaXplO1xuICAgIG1hcHBlZFNlcXVlbmNlLmhhcyA9IGZ1bmN0aW9uKGtleSApIHtyZXR1cm4gaXRlcmFibGUuaGFzKGtleSl9O1xuICAgIG1hcHBlZFNlcXVlbmNlLmdldCA9IGZ1bmN0aW9uKGtleSwgbm90U2V0VmFsdWUpICB7XG4gICAgICB2YXIgdiA9IGl0ZXJhYmxlLmdldChrZXksIE5PVF9TRVQpO1xuICAgICAgcmV0dXJuIHYgPT09IE5PVF9TRVQgP1xuICAgICAgICBub3RTZXRWYWx1ZSA6XG4gICAgICAgIG1hcHBlci5jYWxsKGNvbnRleHQsIHYsIGtleSwgaXRlcmFibGUpO1xuICAgIH07XG4gICAgbWFwcGVkU2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbiAoZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiBpdGVyYWJsZS5fX2l0ZXJhdGUoXG4gICAgICAgIGZ1bmN0aW9uKHYsIGssIGMpICB7cmV0dXJuIGZuKG1hcHBlci5jYWxsKGNvbnRleHQsIHYsIGssIGMpLCBrLCB0aGlzJDApICE9PSBmYWxzZX0sXG4gICAgICAgIHJldmVyc2VcbiAgICAgICk7XG4gICAgfVxuICAgIG1hcHBlZFNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uICh0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUywgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgIHZhciBrZXkgPSBlbnRyeVswXTtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUoXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgbWFwcGVyLmNhbGwoY29udGV4dCwgZW50cnlbMV0sIGtleSwgaXRlcmFibGUpLFxuICAgICAgICAgIHN0ZXBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwcGVkU2VxdWVuY2U7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHJldmVyc2VGYWN0b3J5KGl0ZXJhYmxlLCB1c2VLZXlzKSB7XG4gICAgdmFyIHJldmVyc2VkU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIHJldmVyc2VkU2VxdWVuY2UuX2l0ZXIgPSBpdGVyYWJsZTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLnNpemUgPSBpdGVyYWJsZS5zaXplO1xuICAgIHJldmVyc2VkU2VxdWVuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkgIHtyZXR1cm4gaXRlcmFibGV9O1xuICAgIGlmIChpdGVyYWJsZS5mbGlwKSB7XG4gICAgICByZXZlcnNlZFNlcXVlbmNlLmZsaXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmbGlwU2VxdWVuY2UgPSBmbGlwRmFjdG9yeShpdGVyYWJsZSk7XG4gICAgICAgIGZsaXBTZXF1ZW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSAge3JldHVybiBpdGVyYWJsZS5mbGlwKCl9O1xuICAgICAgICByZXR1cm4gZmxpcFNlcXVlbmNlO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5nZXQgPSBmdW5jdGlvbihrZXksIG5vdFNldFZhbHVlKSBcbiAgICAgIHtyZXR1cm4gaXRlcmFibGUuZ2V0KHVzZUtleXMgPyBrZXkgOiAtMSAtIGtleSwgbm90U2V0VmFsdWUpfTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLmhhcyA9IGZ1bmN0aW9uKGtleSApXG4gICAgICB7cmV0dXJuIGl0ZXJhYmxlLmhhcyh1c2VLZXlzID8ga2V5IDogLTEgLSBrZXkpfTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLmluY2x1ZGVzID0gZnVuY3Rpb24odmFsdWUgKSB7cmV0dXJuIGl0ZXJhYmxlLmluY2x1ZGVzKHZhbHVlKX07XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5jYWNoZVJlc3VsdCA9IGNhY2hlUmVzdWx0VGhyb3VnaDtcbiAgICByZXZlcnNlZFNlcXVlbmNlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge3JldHVybiBmbih2LCBrLCB0aGlzJDApfSwgIXJldmVyc2UpO1xuICAgIH07XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5fX2l0ZXJhdG9yID1cbiAgICAgIGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpICB7cmV0dXJuIGl0ZXJhYmxlLl9faXRlcmF0b3IodHlwZSwgIXJldmVyc2UpfTtcbiAgICByZXR1cm4gcmV2ZXJzZWRTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZmlsdGVyRmFjdG9yeShpdGVyYWJsZSwgcHJlZGljYXRlLCBjb250ZXh0LCB1c2VLZXlzKSB7XG4gICAgdmFyIGZpbHRlclNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcbiAgICBpZiAodXNlS2V5cykge1xuICAgICAgZmlsdGVyU2VxdWVuY2UuaGFzID0gZnVuY3Rpb24oa2V5ICkge1xuICAgICAgICB2YXIgdiA9IGl0ZXJhYmxlLmdldChrZXksIE5PVF9TRVQpO1xuICAgICAgICByZXR1cm4gdiAhPT0gTk9UX1NFVCAmJiAhIXByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGtleSwgaXRlcmFibGUpO1xuICAgICAgfTtcbiAgICAgIGZpbHRlclNlcXVlbmNlLmdldCA9IGZ1bmN0aW9uKGtleSwgbm90U2V0VmFsdWUpICB7XG4gICAgICAgIHZhciB2ID0gaXRlcmFibGUuZ2V0KGtleSwgTk9UX1NFVCk7XG4gICAgICAgIHJldHVybiB2ICE9PSBOT1RfU0VUICYmIHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGtleSwgaXRlcmFibGUpID9cbiAgICAgICAgICB2IDogbm90U2V0VmFsdWU7XG4gICAgICB9O1xuICAgIH1cbiAgICBmaWx0ZXJTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGssIGMpICB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCBjKSkge1xuICAgICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgICByZXR1cm4gZm4odiwgdXNlS2V5cyA/IGsgOiBpdGVyYXRpb25zIC0gMSwgdGhpcyQwKTtcbiAgICAgICAgfVxuICAgICAgfSwgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuICAgIGZpbHRlclNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uICh0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBrZXkgPSBlbnRyeVswXTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBlbnRyeVsxXTtcbiAgICAgICAgICBpZiAocHJlZGljYXRlLmNhbGwoY29udGV4dCwgdmFsdWUsIGtleSwgaXRlcmFibGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCB1c2VLZXlzID8ga2V5IDogaXRlcmF0aW9ucysrLCB2YWx1ZSwgc3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlclNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBjb3VudEJ5RmFjdG9yeShpdGVyYWJsZSwgZ3JvdXBlciwgY29udGV4dCkge1xuICAgIHZhciBncm91cHMgPSBzcmNfTWFwX19NYXAoKS5hc011dGFibGUoKTtcbiAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtcbiAgICAgIGdyb3Vwcy51cGRhdGUoXG4gICAgICAgIGdyb3VwZXIuY2FsbChjb250ZXh0LCB2LCBrLCBpdGVyYWJsZSksXG4gICAgICAgIDAsXG4gICAgICAgIGZ1bmN0aW9uKGEgKSB7cmV0dXJuIGEgKyAxfVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JvdXBzLmFzSW1tdXRhYmxlKCk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGdyb3VwQnlGYWN0b3J5KGl0ZXJhYmxlLCBncm91cGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGlzS2V5ZWRJdGVyID0gaXNLZXllZChpdGVyYWJsZSk7XG4gICAgdmFyIGdyb3VwcyA9IChpc09yZGVyZWQoaXRlcmFibGUpID8gT3JkZXJlZE1hcCgpIDogc3JjX01hcF9fTWFwKCkpLmFzTXV0YWJsZSgpO1xuICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgZ3JvdXBzLnVwZGF0ZShcbiAgICAgICAgZ3JvdXBlci5jYWxsKGNvbnRleHQsIHYsIGssIGl0ZXJhYmxlKSxcbiAgICAgICAgZnVuY3Rpb24oYSApIHtyZXR1cm4gKGEgPSBhIHx8IFtdLCBhLnB1c2goaXNLZXllZEl0ZXIgPyBbaywgdl0gOiB2KSwgYSl9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHZhciBjb2VyY2UgPSBpdGVyYWJsZUNsYXNzKGl0ZXJhYmxlKTtcbiAgICByZXR1cm4gZ3JvdXBzLm1hcChmdW5jdGlvbihhcnIgKSB7cmV0dXJuIHJlaWZ5KGl0ZXJhYmxlLCBjb2VyY2UoYXJyKSl9KTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gc2xpY2VGYWN0b3J5KGl0ZXJhYmxlLCBiZWdpbiwgZW5kLCB1c2VLZXlzKSB7XG4gICAgdmFyIG9yaWdpbmFsU2l6ZSA9IGl0ZXJhYmxlLnNpemU7XG5cbiAgICAvLyBTYW5pdGl6ZSBiZWdpbiAmIGVuZCB1c2luZyB0aGlzIHNob3J0aGFuZCBmb3IgVG9JbnQzMihhcmd1bWVudClcbiAgICAvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9pbnQzMlxuICAgIGlmIChiZWdpbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBiZWdpbiA9IGJlZ2luIHwgMDtcbiAgICB9XG4gICAgaWYgKGVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmQgPSBlbmQgfCAwO1xuICAgIH1cblxuICAgIGlmICh3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIG9yaWdpbmFsU2l6ZSkpIHtcbiAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzb2x2ZWRCZWdpbiA9IHJlc29sdmVCZWdpbihiZWdpbiwgb3JpZ2luYWxTaXplKTtcbiAgICB2YXIgcmVzb2x2ZWRFbmQgPSByZXNvbHZlRW5kKGVuZCwgb3JpZ2luYWxTaXplKTtcblxuICAgIC8vIGJlZ2luIG9yIGVuZCB3aWxsIGJlIE5hTiBpZiB0aGV5IHdlcmUgcHJvdmlkZWQgYXMgbmVnYXRpdmUgbnVtYmVycyBhbmRcbiAgICAvLyB0aGlzIGl0ZXJhYmxlJ3Mgc2l6ZSBpcyB1bmtub3duLiBJbiB0aGF0IGNhc2UsIGNhY2hlIGZpcnN0IHNvIHRoZXJlIGlzXG4gICAgLy8gYSBrbm93biBzaXplIGFuZCB0aGVzZSBkbyBub3QgcmVzb2x2ZSB0byBOYU4uXG4gICAgaWYgKHJlc29sdmVkQmVnaW4gIT09IHJlc29sdmVkQmVnaW4gfHwgcmVzb2x2ZWRFbmQgIT09IHJlc29sdmVkRW5kKSB7XG4gICAgICByZXR1cm4gc2xpY2VGYWN0b3J5KGl0ZXJhYmxlLnRvU2VxKCkuY2FjaGVSZXN1bHQoKSwgYmVnaW4sIGVuZCwgdXNlS2V5cyk7XG4gICAgfVxuXG4gICAgLy8gTm90ZTogcmVzb2x2ZWRFbmQgaXMgdW5kZWZpbmVkIHdoZW4gdGhlIG9yaWdpbmFsIHNlcXVlbmNlJ3MgbGVuZ3RoIGlzXG4gICAgLy8gdW5rbm93biBhbmQgdGhpcyBzbGljZSBkaWQgbm90IHN1cHBseSBhbiBlbmQgYW5kIHNob3VsZCBjb250YWluIGFsbFxuICAgIC8vIGVsZW1lbnRzIGFmdGVyIHJlc29sdmVkQmVnaW4uXG4gICAgLy8gSW4gdGhhdCBjYXNlLCByZXNvbHZlZFNpemUgd2lsbCBiZSBOYU4gYW5kIHNsaWNlU2l6ZSB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXG4gICAgdmFyIHJlc29sdmVkU2l6ZSA9IHJlc29sdmVkRW5kIC0gcmVzb2x2ZWRCZWdpbjtcbiAgICB2YXIgc2xpY2VTaXplO1xuICAgIGlmIChyZXNvbHZlZFNpemUgPT09IHJlc29sdmVkU2l6ZSkge1xuICAgICAgc2xpY2VTaXplID0gcmVzb2x2ZWRTaXplIDwgMCA/IDAgOiByZXNvbHZlZFNpemU7XG4gICAgfVxuXG4gICAgdmFyIHNsaWNlU2VxID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcblxuICAgIC8vIElmIGl0ZXJhYmxlLnNpemUgaXMgdW5kZWZpbmVkLCB0aGUgc2l6ZSBvZiB0aGUgcmVhbGl6ZWQgc2xpY2VTZXEgaXNcbiAgICAvLyB1bmtub3duIGF0IHRoaXMgcG9pbnQgdW5sZXNzIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2xpY2UgaXMgMFxuICAgIHNsaWNlU2VxLnNpemUgPSBzbGljZVNpemUgPT09IDAgPyBzbGljZVNpemUgOiBpdGVyYWJsZS5zaXplICYmIHNsaWNlU2l6ZSB8fCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXVzZUtleXMgJiYgaXNTZXEoaXRlcmFibGUpICYmIHNsaWNlU2l6ZSA+PSAwKSB7XG4gICAgICBzbGljZVNlcS5nZXQgPSBmdW5jdGlvbiAoaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBzbGljZVNpemUgP1xuICAgICAgICAgIGl0ZXJhYmxlLmdldChpbmRleCArIHJlc29sdmVkQmVnaW4sIG5vdFNldFZhbHVlKSA6XG4gICAgICAgICAgbm90U2V0VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2xpY2VTZXEuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHNsaWNlU2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBza2lwcGVkID0gMDtcbiAgICAgIHZhciBpc1NraXBwaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgICBpZiAoIShpc1NraXBwaW5nICYmIChpc1NraXBwaW5nID0gc2tpcHBlZCsrIDwgcmVzb2x2ZWRCZWdpbikpKSB7XG4gICAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICAgIHJldHVybiBmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMgLSAxLCB0aGlzJDApICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgICBpdGVyYXRpb25zICE9PSBzbGljZVNpemU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcblxuICAgIHNsaWNlU2VxLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmIChzbGljZVNpemUgIT09IDAgJiYgcmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICAvLyBEb24ndCBib3RoZXIgaW5zdGFudGlhdGluZyBwYXJlbnQgaXRlcmF0b3IgaWYgdGFraW5nIDAuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBzbGljZVNpemUgIT09IDAgJiYgaXRlcmFibGUuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIHZhciBza2lwcGVkID0gMDtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHdoaWxlIChza2lwcGVkKysgPCByZXNvbHZlZEJlZ2luKSB7XG4gICAgICAgICAgaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPiBzbGljZVNpemUpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmICh1c2VLZXlzIHx8IHR5cGUgPT09IElURVJBVEVfVkFMVUVTKSB7XG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gSVRFUkFURV9LRVlTKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucyAtIDEsIHVuZGVmaW5lZCwgc3RlcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucyAtIDEsIHN0ZXAudmFsdWVbMV0sIHN0ZXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpY2VTZXE7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHRha2VXaGlsZUZhY3RvcnkoaXRlcmFibGUsIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciB0YWtlU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIHRha2VTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgXG4gICAgICAgIHtyZXR1cm4gcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgYykgJiYgKytpdGVyYXRpb25zICYmIGZuKHYsIGssIHRoaXMkMCl9XG4gICAgICApO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcbiAgICB0YWtlU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIGl0ZXJhdGluZyA9IHRydWU7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICBpZiAoIWl0ZXJhdGluZykge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgIHZhciBrID0gZW50cnlbMF07XG4gICAgICAgIHZhciB2ID0gZW50cnlbMV07XG4gICAgICAgIGlmICghcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgdGhpcyQwKSkge1xuICAgICAgICAgIGl0ZXJhdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZSA9PT0gSVRFUkFURV9FTlRSSUVTID8gc3RlcCA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBrLCB2LCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHRha2VTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gc2tpcFdoaWxlRmFjdG9yeShpdGVyYWJsZSwgcHJlZGljYXRlLCBjb250ZXh0LCB1c2VLZXlzKSB7XG4gICAgdmFyIHNraXBTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgc2tpcFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXNTa2lwcGluZyA9IHRydWU7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKCEoaXNTa2lwcGluZyAmJiAoaXNTa2lwcGluZyA9IHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSkpIHtcbiAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgcmV0dXJuIGZuKHYsIHVzZUtleXMgPyBrIDogaXRlcmF0aW9ucyAtIDEsIHRoaXMkMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcbiAgICBza2lwU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIHNraXBwaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBzdGVwLCBrLCB2O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICBpZiAodXNlS2V5cyB8fCB0eXBlID09PSBJVEVSQVRFX1ZBTFVFUykge1xuICAgICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gSVRFUkFURV9LRVlTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgdW5kZWZpbmVkLCBzdGVwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc3RlcC52YWx1ZVsxXSwgc3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgayA9IGVudHJ5WzBdO1xuICAgICAgICAgIHYgPSBlbnRyeVsxXTtcbiAgICAgICAgICBza2lwcGluZyAmJiAoc2tpcHBpbmcgPSBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCB0aGlzJDApKTtcbiAgICAgICAgfSB3aGlsZSAoc2tpcHBpbmcpO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gSVRFUkFURV9FTlRSSUVTID8gc3RlcCA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBrLCB2LCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHNraXBTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gY29uY2F0RmFjdG9yeShpdGVyYWJsZSwgdmFsdWVzKSB7XG4gICAgdmFyIGlzS2V5ZWRJdGVyYWJsZSA9IGlzS2V5ZWQoaXRlcmFibGUpO1xuICAgIHZhciBpdGVycyA9IFtpdGVyYWJsZV0uY29uY2F0KHZhbHVlcykubWFwKGZ1bmN0aW9uKHYgKSB7XG4gICAgICBpZiAoIWlzSXRlcmFibGUodikpIHtcbiAgICAgICAgdiA9IGlzS2V5ZWRJdGVyYWJsZSA/XG4gICAgICAgICAga2V5ZWRTZXFGcm9tVmFsdWUodikgOlxuICAgICAgICAgIGluZGV4ZWRTZXFGcm9tVmFsdWUoQXJyYXkuaXNBcnJheSh2KSA/IHYgOiBbdl0pO1xuICAgICAgfSBlbHNlIGlmIChpc0tleWVkSXRlcmFibGUpIHtcbiAgICAgICAgdiA9IEtleWVkSXRlcmFibGUodik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdjtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24odiApIHtyZXR1cm4gdi5zaXplICE9PSAwfSk7XG5cbiAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgfVxuXG4gICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIHNpbmdsZXRvbiA9IGl0ZXJzWzBdO1xuICAgICAgaWYgKHNpbmdsZXRvbiA9PT0gaXRlcmFibGUgfHxcbiAgICAgICAgICBpc0tleWVkSXRlcmFibGUgJiYgaXNLZXllZChzaW5nbGV0b24pIHx8XG4gICAgICAgICAgaXNJbmRleGVkKGl0ZXJhYmxlKSAmJiBpc0luZGV4ZWQoc2luZ2xldG9uKSkge1xuICAgICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb25jYXRTZXEgPSBuZXcgQXJyYXlTZXEoaXRlcnMpO1xuICAgIGlmIChpc0tleWVkSXRlcmFibGUpIHtcbiAgICAgIGNvbmNhdFNlcSA9IGNvbmNhdFNlcS50b0tleWVkU2VxKCk7XG4gICAgfSBlbHNlIGlmICghaXNJbmRleGVkKGl0ZXJhYmxlKSkge1xuICAgICAgY29uY2F0U2VxID0gY29uY2F0U2VxLnRvU2V0U2VxKCk7XG4gICAgfVxuICAgIGNvbmNhdFNlcSA9IGNvbmNhdFNlcS5mbGF0dGVuKHRydWUpO1xuICAgIGNvbmNhdFNlcS5zaXplID0gaXRlcnMucmVkdWNlKFxuICAgICAgZnVuY3Rpb24oc3VtLCBzZXEpICB7XG4gICAgICAgIGlmIChzdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBzaXplID0gc2VxLnNpemU7XG4gICAgICAgICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1bSArIHNpemU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgMFxuICAgICk7XG4gICAgcmV0dXJuIGNvbmNhdFNlcTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZmxhdHRlbkZhY3RvcnkoaXRlcmFibGUsIGRlcHRoLCB1c2VLZXlzKSB7XG4gICAgdmFyIGZsYXRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgZmxhdFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XG4gICAgICBmdW5jdGlvbiBmbGF0RGVlcChpdGVyLCBjdXJyZW50RGVwdGgpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgICAgaXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtcbiAgICAgICAgICBpZiAoKCFkZXB0aCB8fCBjdXJyZW50RGVwdGggPCBkZXB0aCkgJiYgaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgZmxhdERlZXAodiwgY3VycmVudERlcHRoICsgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMrKywgdGhpcyQwKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gIXN0b3BwZWQ7XG4gICAgICAgIH0sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgZmxhdERlZXAoaXRlcmFibGUsIDApO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfVxuICAgIGZsYXRTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgdmFyIHN0YWNrID0gW107XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB3aGlsZSAoaXRlcmF0b3IpIHtcbiAgICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaXRlcmF0b3IgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdiA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgaWYgKHR5cGUgPT09IElURVJBVEVfRU5UUklFUykge1xuICAgICAgICAgICAgdiA9IHZbMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIWRlcHRoIHx8IHN0YWNrLmxlbmd0aCA8IGRlcHRoKSAmJiBpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGl0ZXJhdG9yKTtcbiAgICAgICAgICAgIGl0ZXJhdG9yID0gdi5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlS2V5cyA/IHN0ZXAgOiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgdiwgc3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmxhdFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBmbGF0TWFwRmFjdG9yeShpdGVyYWJsZSwgbWFwcGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGNvZXJjZSA9IGl0ZXJhYmxlQ2xhc3MoaXRlcmFibGUpO1xuICAgIHJldHVybiBpdGVyYWJsZS50b1NlcSgpLm1hcChcbiAgICAgIGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGNvZXJjZShtYXBwZXIuY2FsbChjb250ZXh0LCB2LCBrLCBpdGVyYWJsZSkpfVxuICAgICkuZmxhdHRlbih0cnVlKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gaW50ZXJwb3NlRmFjdG9yeShpdGVyYWJsZSwgc2VwYXJhdG9yKSB7XG4gICAgdmFyIGludGVycG9zZWRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgaW50ZXJwb3NlZFNlcXVlbmNlLnNpemUgPSBpdGVyYWJsZS5zaXplICYmIGl0ZXJhYmxlLnNpemUgKiAyIC0xO1xuICAgIGludGVycG9zZWRTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgXG4gICAgICAgIHtyZXR1cm4gKCFpdGVyYXRpb25zIHx8IGZuKHNlcGFyYXRvciwgaXRlcmF0aW9ucysrLCB0aGlzJDApICE9PSBmYWxzZSkgJiZcbiAgICAgICAgZm4odiwgaXRlcmF0aW9ucysrLCB0aGlzJDApICE9PSBmYWxzZX0sXG4gICAgICAgIHJldmVyc2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuICAgIGludGVycG9zZWRTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgaWYgKCFzdGVwIHx8IGl0ZXJhdGlvbnMgJSAyKSB7XG4gICAgICAgICAgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZXJhdGlvbnMgJSAyID9cbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc2VwYXJhdG9yKSA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHN0ZXAudmFsdWUsIHN0ZXApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gaW50ZXJwb3NlZFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBzb3J0RmFjdG9yeShpdGVyYWJsZSwgY29tcGFyYXRvciwgbWFwcGVyKSB7XG4gICAgaWYgKCFjb21wYXJhdG9yKSB7XG4gICAgICBjb21wYXJhdG9yID0gZGVmYXVsdENvbXBhcmF0b3I7XG4gICAgfVxuICAgIHZhciBpc0tleWVkSXRlcmFibGUgPSBpc0tleWVkKGl0ZXJhYmxlKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBlbnRyaWVzID0gaXRlcmFibGUudG9TZXEoKS5tYXAoXG4gICAgICBmdW5jdGlvbih2LCBrKSAge3JldHVybiBbaywgdiwgaW5kZXgrKywgbWFwcGVyID8gbWFwcGVyKHYsIGssIGl0ZXJhYmxlKSA6IHZdfVxuICAgICkudG9BcnJheSgpO1xuICAgIGVudHJpZXMuc29ydChmdW5jdGlvbihhLCBiKSAge3JldHVybiBjb21wYXJhdG9yKGFbM10sIGJbM10pIHx8IGFbMl0gLSBiWzJdfSkuZm9yRWFjaChcbiAgICAgIGlzS2V5ZWRJdGVyYWJsZSA/XG4gICAgICBmdW5jdGlvbih2LCBpKSAgeyBlbnRyaWVzW2ldLmxlbmd0aCA9IDI7IH0gOlxuICAgICAgZnVuY3Rpb24odiwgaSkgIHsgZW50cmllc1tpXSA9IHZbMV07IH1cbiAgICApO1xuICAgIHJldHVybiBpc0tleWVkSXRlcmFibGUgPyBLZXllZFNlcShlbnRyaWVzKSA6XG4gICAgICBpc0luZGV4ZWQoaXRlcmFibGUpID8gSW5kZXhlZFNlcShlbnRyaWVzKSA6XG4gICAgICBTZXRTZXEoZW50cmllcyk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1heEZhY3RvcnkoaXRlcmFibGUsIGNvbXBhcmF0b3IsIG1hcHBlcikge1xuICAgIGlmICghY29tcGFyYXRvcikge1xuICAgICAgY29tcGFyYXRvciA9IGRlZmF1bHRDb21wYXJhdG9yO1xuICAgIH1cbiAgICBpZiAobWFwcGVyKSB7XG4gICAgICB2YXIgZW50cnkgPSBpdGVyYWJsZS50b1NlcSgpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gW3YsIG1hcHBlcih2LCBrLCBpdGVyYWJsZSldfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSAge3JldHVybiBtYXhDb21wYXJlKGNvbXBhcmF0b3IsIGFbMV0sIGJbMV0pID8gYiA6IGF9KTtcbiAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZXJhYmxlLnJlZHVjZShmdW5jdGlvbihhLCBiKSAge3JldHVybiBtYXhDb21wYXJlKGNvbXBhcmF0b3IsIGEsIGIpID8gYiA6IGF9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXhDb21wYXJlKGNvbXBhcmF0b3IsIGEsIGIpIHtcbiAgICB2YXIgY29tcCA9IGNvbXBhcmF0b3IoYiwgYSk7XG4gICAgLy8gYiBpcyBjb25zaWRlcmVkIHRoZSBuZXcgbWF4IGlmIHRoZSBjb21wYXJhdG9yIGRlY2xhcmVzIHRoZW0gZXF1YWwsIGJ1dFxuICAgIC8vIHRoZXkgYXJlIG5vdCBlcXVhbCBhbmQgYiBpcyBpbiBmYWN0IGEgbnVsbGlzaCB2YWx1ZS5cbiAgICByZXR1cm4gKGNvbXAgPT09IDAgJiYgYiAhPT0gYSAmJiAoYiA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IG51bGwgfHwgYiAhPT0gYikpIHx8IGNvbXAgPiAwO1xuICB9XG5cblxuICBmdW5jdGlvbiB6aXBXaXRoRmFjdG9yeShrZXlJdGVyLCB6aXBwZXIsIGl0ZXJzKSB7XG4gICAgdmFyIHppcFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGtleUl0ZXIpO1xuICAgIHppcFNlcXVlbmNlLnNpemUgPSBuZXcgQXJyYXlTZXEoaXRlcnMpLm1hcChmdW5jdGlvbihpICkge3JldHVybiBpLnNpemV9KS5taW4oKTtcbiAgICAvLyBOb3RlOiB0aGlzIGEgZ2VuZXJpYyBiYXNlIGltcGxlbWVudGF0aW9uIG9mIF9faXRlcmF0ZSBpbiB0ZXJtcyBvZlxuICAgIC8vIF9faXRlcmF0b3Igd2hpY2ggbWF5IGJlIG1vcmUgZ2VuZXJpY2FsbHkgdXNlZnVsIGluIHRoZSBmdXR1cmUuXG4gICAgemlwU2VxdWVuY2UuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIC8qIGdlbmVyaWM6XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIGlmIChmbihzdGVwLnZhbHVlWzFdLCBzdGVwLnZhbHVlWzBdLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgICAqL1xuICAgICAgLy8gaW5kZXhlZDpcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgaWYgKGZuKHN0ZXAudmFsdWUsIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG4gICAgemlwU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9ycyA9IGl0ZXJzLm1hcChmdW5jdGlvbihpIClcbiAgICAgICAge3JldHVybiAoaSA9IEl0ZXJhYmxlKGkpLCBnZXRJdGVyYXRvcihyZXZlcnNlID8gaS5yZXZlcnNlKCkgOiBpKSl9XG4gICAgICApO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICBpZiAoIWlzRG9uZSkge1xuICAgICAgICAgIHN0ZXBzID0gaXRlcmF0b3JzLm1hcChmdW5jdGlvbihpICkge3JldHVybiBpLm5leHQoKX0pO1xuICAgICAgICAgIGlzRG9uZSA9IHN0ZXBzLnNvbWUoZnVuY3Rpb24ocyApIHtyZXR1cm4gcy5kb25lfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRG9uZSkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZShcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGl0ZXJhdGlvbnMrKyxcbiAgICAgICAgICB6aXBwZXIuYXBwbHkobnVsbCwgc3RlcHMubWFwKGZ1bmN0aW9uKHMgKSB7cmV0dXJuIHMudmFsdWV9KSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHppcFNlcXVlbmNlXG4gIH1cblxuXG4gIC8vICNwcmFnbWEgSGVscGVyIEZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIHJlaWZ5KGl0ZXIsIHNlcSkge1xuICAgIHJldHVybiBpc1NlcShpdGVyKSA/IHNlcSA6IGl0ZXIuY29uc3RydWN0b3Ioc2VxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRW50cnkoZW50cnkpIHtcbiAgICBpZiAoZW50cnkgIT09IE9iamVjdChlbnRyeSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFtLLCBWXSB0dXBsZTogJyArIGVudHJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlU2l6ZShpdGVyKSB7XG4gICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICByZXR1cm4gZW5zdXJlU2l6ZShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGl0ZXJhYmxlQ2xhc3MoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gaXNLZXllZChpdGVyYWJsZSkgPyBLZXllZEl0ZXJhYmxlIDpcbiAgICAgIGlzSW5kZXhlZChpdGVyYWJsZSkgPyBJbmRleGVkSXRlcmFibGUgOlxuICAgICAgU2V0SXRlcmFibGU7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU2VxdWVuY2UoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShcbiAgICAgIChcbiAgICAgICAgaXNLZXllZChpdGVyYWJsZSkgPyBLZXllZFNlcSA6XG4gICAgICAgIGlzSW5kZXhlZChpdGVyYWJsZSkgPyBJbmRleGVkU2VxIDpcbiAgICAgICAgU2V0U2VxXG4gICAgICApLnByb3RvdHlwZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVJlc3VsdFRocm91Z2goKSB7XG4gICAgaWYgKHRoaXMuX2l0ZXIuY2FjaGVSZXN1bHQpIHtcbiAgICAgIHRoaXMuX2l0ZXIuY2FjaGVSZXN1bHQoKTtcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX2l0ZXIuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU2VxLnByb3RvdHlwZS5jYWNoZVJlc3VsdC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRDb21wYXJhdG9yKGEsIGIpIHtcbiAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZUl0ZXJhdG9yKGtleVBhdGgpIHtcbiAgICB2YXIgaXRlciA9IGdldEl0ZXJhdG9yKGtleVBhdGgpO1xuICAgIGlmICghaXRlcikge1xuICAgICAgLy8gQXJyYXkgbWlnaHQgbm90IGJlIGl0ZXJhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQsIHNvIHdlIG5lZWQgYSBmYWxsYmFja1xuICAgICAgLy8gdG8gb3VyIHdyYXBwZWQgdHlwZS5cbiAgICAgIGlmICghaXNBcnJheUxpa2Uoa2V5UGF0aCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgaXRlcmFibGUgb3IgYXJyYXktbGlrZTogJyArIGtleVBhdGgpO1xuICAgICAgfVxuICAgICAgaXRlciA9IGdldEl0ZXJhdG9yKEl0ZXJhYmxlKGtleVBhdGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZXI7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhzcmNfTWFwX19NYXAsIEtleWVkQ29sbGVjdGlvbik7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gc3JjX01hcF9fTWFwKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5TWFwKCkgOlxuICAgICAgICBpc01hcCh2YWx1ZSkgJiYgIWlzT3JkZXJlZCh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5TWFwKCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbihtYXAgKSB7XG4gICAgICAgICAgdmFyIGl0ZXIgPSBLZXllZEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbih2LCBrKSAge3JldHVybiBtYXAuc2V0KGssIHYpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ01hcCB7JywgJ30nKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaywgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290ID9cbiAgICAgICAgdGhpcy5fcm9vdC5nZXQoMCwgdW5kZWZpbmVkLCBrLCBub3RTZXRWYWx1ZSkgOlxuICAgICAgICBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oaywgdikge1xuICAgICAgcmV0dXJuIHVwZGF0ZU1hcCh0aGlzLCBrLCB2KTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5zZXRJbiA9IGZ1bmN0aW9uKGtleVBhdGgsIHYpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKGtleVBhdGgsIE5PVF9TRVQsIGZ1bmN0aW9uKCkgIHtyZXR1cm4gdn0pO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiB1cGRhdGVNYXAodGhpcywgaywgTk9UX1NFVCk7XG4gICAgfTtcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUuZGVsZXRlSW4gPSBmdW5jdGlvbihrZXlQYXRoKSB7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVJbihrZXlQYXRoLCBmdW5jdGlvbigpICB7cmV0dXJuIE5PVF9TRVR9KTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihrLCBub3RTZXRWYWx1ZSwgdXBkYXRlcikge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgP1xuICAgICAgICBrKHRoaXMpIDpcbiAgICAgICAgdGhpcy51cGRhdGVJbihba10sIG5vdFNldFZhbHVlLCB1cGRhdGVyKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS51cGRhdGVJbiA9IGZ1bmN0aW9uKGtleVBhdGgsIG5vdFNldFZhbHVlLCB1cGRhdGVyKSB7XG4gICAgICBpZiAoIXVwZGF0ZXIpIHtcbiAgICAgICAgdXBkYXRlciA9IG5vdFNldFZhbHVlO1xuICAgICAgICBub3RTZXRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZhciB1cGRhdGVkVmFsdWUgPSB1cGRhdGVJbkRlZXBNYXAoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGZvcmNlSXRlcmF0b3Ioa2V5UGF0aCksXG4gICAgICAgIG5vdFNldFZhbHVlLFxuICAgICAgICB1cGRhdGVyXG4gICAgICApO1xuICAgICAgcmV0dXJuIHVwZGF0ZWRWYWx1ZSA9PT0gTk9UX1NFVCA/IHVuZGVmaW5lZCA6IHVwZGF0ZWRWYWx1ZTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLl9yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlNYXAoKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBDb21wb3NpdGlvblxuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKC8qLi4uaXRlcnMqLykge1xuICAgICAgcmV0dXJuIG1lcmdlSW50b01hcFdpdGgodGhpcywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLm1lcmdlV2l0aCA9IGZ1bmN0aW9uKG1lcmdlcikge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b01hcFdpdGgodGhpcywgbWVyZ2VyLCBpdGVycyk7XG4gICAgfTtcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUubWVyZ2VJbiA9IGZ1bmN0aW9uKGtleVBhdGgpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKFxuICAgICAgICBrZXlQYXRoLFxuICAgICAgICBlbXB0eU1hcCgpLFxuICAgICAgICBmdW5jdGlvbihtICkge3JldHVybiB0eXBlb2YgbS5tZXJnZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgbS5tZXJnZS5hcHBseShtLCBpdGVycykgOlxuICAgICAgICAgIGl0ZXJzW2l0ZXJzLmxlbmd0aCAtIDFdfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5tZXJnZURlZXAgPSBmdW5jdGlvbigvKi4uLml0ZXJzKi8pIHtcbiAgICAgIHJldHVybiBtZXJnZUludG9NYXBXaXRoKHRoaXMsIGRlZXBNZXJnZXIodW5kZWZpbmVkKSwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5tZXJnZURlZXBXaXRoID0gZnVuY3Rpb24obWVyZ2VyKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICByZXR1cm4gbWVyZ2VJbnRvTWFwV2l0aCh0aGlzLCBkZWVwTWVyZ2VyKG1lcmdlciksIGl0ZXJzKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5tZXJnZURlZXBJbiA9IGZ1bmN0aW9uKGtleVBhdGgpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKFxuICAgICAgICBrZXlQYXRoLFxuICAgICAgICBlbXB0eU1hcCgpLFxuICAgICAgICBmdW5jdGlvbihtICkge3JldHVybiB0eXBlb2YgbS5tZXJnZURlZXAgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIG0ubWVyZ2VEZWVwLmFwcGx5KG0sIGl0ZXJzKSA6XG4gICAgICAgICAgaXRlcnNbaXRlcnMubGVuZ3RoIC0gMV19XG4gICAgICApO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICAvLyBMYXRlIGJpbmRpbmdcbiAgICAgIHJldHVybiBPcmRlcmVkTWFwKHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IpKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5zb3J0QnkgPSBmdW5jdGlvbihtYXBwZXIsIGNvbXBhcmF0b3IpIHtcbiAgICAgIC8vIExhdGUgYmluZGluZ1xuICAgICAgcmV0dXJuIE9yZGVyZWRNYXAoc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKSk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTXV0YWJpbGl0eVxuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS53aXRoTXV0YXRpb25zID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHZhciBtdXRhYmxlID0gdGhpcy5hc011dGFibGUoKTtcbiAgICAgIGZuKG11dGFibGUpO1xuICAgICAgcmV0dXJuIG11dGFibGUud2FzQWx0ZXJlZCgpID8gbXV0YWJsZS5fX2Vuc3VyZU93bmVyKHRoaXMuX19vd25lcklEKSA6IHRoaXM7XG4gICAgfTtcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUuYXNNdXRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX293bmVySUQgPyB0aGlzIDogdGhpcy5fX2Vuc3VyZU93bmVyKG5ldyBPd25lcklEKCkpO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLmFzSW1tdXRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2Vuc3VyZU93bmVyKCk7XG4gICAgfTtcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19hbHRlcmVkO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMsIHR5cGUsIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB0aGlzLl9yb290ICYmIHRoaXMuX3Jvb3QuaXRlcmF0ZShmdW5jdGlvbihlbnRyeSApIHtcbiAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICByZXR1cm4gZm4oZW50cnlbMV0sIGVudHJ5WzBdLCB0aGlzJDApO1xuICAgICAgfSwgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZU1hcCh0aGlzLnNpemUsIHRoaXMuX3Jvb3QsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNNYXAobWF5YmVNYXApIHtcbiAgICByZXR1cm4gISEobWF5YmVNYXAgJiYgbWF5YmVNYXBbSVNfTUFQX1NFTlRJTkVMXSk7XG4gIH1cblxuICBzcmNfTWFwX19NYXAuaXNNYXAgPSBpc01hcDtcblxuICB2YXIgSVNfTUFQX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfTUFQX19AQCc7XG5cbiAgdmFyIE1hcFByb3RvdHlwZSA9IHNyY19NYXBfX01hcC5wcm90b3R5cGU7XG4gIE1hcFByb3RvdHlwZVtJU19NQVBfU0VOVElORUxdID0gdHJ1ZTtcbiAgTWFwUHJvdG90eXBlW0RFTEVURV0gPSBNYXBQcm90b3R5cGUucmVtb3ZlO1xuICBNYXBQcm90b3R5cGUucmVtb3ZlSW4gPSBNYXBQcm90b3R5cGUuZGVsZXRlSW47XG5cblxuICAvLyAjcHJhZ21hIFRyaWUgTm9kZXNcblxuXG5cbiAgICBmdW5jdGlvbiBBcnJheU1hcE5vZGUob3duZXJJRCwgZW50cmllcykge1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgfVxuXG4gICAgQXJyYXlNYXBOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gICAgICBmb3IgKHZhciBpaSA9IDAsIGxlbiA9IGVudHJpZXMubGVuZ3RoOyBpaSA8IGxlbjsgaWkrKykge1xuICAgICAgICBpZiAoaXMoa2V5LCBlbnRyaWVzW2lpXVswXSkpIHtcbiAgICAgICAgICByZXR1cm4gZW50cmllc1tpaV1bMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgQXJyYXlNYXBOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG5cbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICBmb3IgKHZhciBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaWR4IDwgbGVuOyBpZHgrKykge1xuICAgICAgICBpZiAoaXMoa2V5LCBlbnRyaWVzW2lkeF1bMF0pKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBleGlzdHMgPSBpZHggPCBsZW47XG5cbiAgICAgIGlmIChleGlzdHMgPyBlbnRyaWVzW2lkeF1bMV0gPT09IHZhbHVlIDogcmVtb3ZlZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZEFsdGVyKTtcbiAgICAgIChyZW1vdmVkIHx8ICFleGlzdHMpICYmIFNldFJlZihkaWRDaGFuZ2VTaXplKTtcblxuICAgICAgaWYgKHJlbW92ZWQgJiYgZW50cmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKCFleGlzdHMgJiYgIXJlbW92ZWQgJiYgZW50cmllcy5sZW5ndGggPj0gTUFYX0FSUkFZX01BUF9TSVpFKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVOb2Rlcyhvd25lcklELCBlbnRyaWVzLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzRWRpdGFibGUgPSBvd25lcklEICYmIG93bmVySUQgPT09IHRoaXMub3duZXJJRDtcbiAgICAgIHZhciBuZXdFbnRyaWVzID0gaXNFZGl0YWJsZSA/IGVudHJpZXMgOiBhcnJDb3B5KGVudHJpZXMpO1xuXG4gICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgIGlmIChyZW1vdmVkKSB7XG4gICAgICAgICAgaWR4ID09PSBsZW4gLSAxID8gbmV3RW50cmllcy5wb3AoKSA6IChuZXdFbnRyaWVzW2lkeF0gPSBuZXdFbnRyaWVzLnBvcCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdFbnRyaWVzW2lkeF0gPSBba2V5LCB2YWx1ZV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VudHJpZXMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBuZXdFbnRyaWVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBBcnJheU1hcE5vZGUob3duZXJJRCwgbmV3RW50cmllcyk7XG4gICAgfTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsIGJpdG1hcCwgbm9kZXMpIHtcbiAgICAgIHRoaXMub3duZXJJRCA9IG93bmVySUQ7XG4gICAgICB0aGlzLmJpdG1hcCA9IGJpdG1hcDtcbiAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB9XG5cbiAgICBCaXRtYXBJbmRleGVkTm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oc2hpZnQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBiaXQgPSAoMSA8PCAoKHNoaWZ0ID09PSAwID8ga2V5SGFzaCA6IGtleUhhc2ggPj4+IHNoaWZ0KSAmIE1BU0spKTtcbiAgICAgIHZhciBiaXRtYXAgPSB0aGlzLmJpdG1hcDtcbiAgICAgIHJldHVybiAoYml0bWFwICYgYml0KSA9PT0gMCA/IG5vdFNldFZhbHVlIDpcbiAgICAgICAgdGhpcy5ub2Rlc1twb3BDb3VudChiaXRtYXAgJiAoYml0IC0gMSkpXS5nZXQoc2hpZnQgKyBTSElGVCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSk7XG4gICAgfTtcblxuICAgIEJpdG1hcEluZGV4ZWROb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXlIYXNoRnJhZyA9IChzaGlmdCA9PT0gMCA/IGtleUhhc2ggOiBrZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICAgICAgdmFyIGJpdCA9IDEgPDwga2V5SGFzaEZyYWc7XG4gICAgICB2YXIgYml0bWFwID0gdGhpcy5iaXRtYXA7XG4gICAgICB2YXIgZXhpc3RzID0gKGJpdG1hcCAmIGJpdCkgIT09IDA7XG5cbiAgICAgIGlmICghZXhpc3RzICYmIHZhbHVlID09PSBOT1RfU0VUKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWR4ID0gcG9wQ291bnQoYml0bWFwICYgKGJpdCAtIDEpKTtcbiAgICAgIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgICB2YXIgbm9kZSA9IGV4aXN0cyA/IG5vZGVzW2lkeF0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgbmV3Tm9kZSA9IHVwZGF0ZU5vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQgKyBTSElGVCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpO1xuXG4gICAgICBpZiAobmV3Tm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKCFleGlzdHMgJiYgbmV3Tm9kZSAmJiBub2Rlcy5sZW5ndGggPj0gTUFYX0JJVE1BUF9JTkRFWEVEX1NJWkUpIHtcbiAgICAgICAgcmV0dXJuIGV4cGFuZE5vZGVzKG93bmVySUQsIG5vZGVzLCBiaXRtYXAsIGtleUhhc2hGcmFnLCBuZXdOb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4aXN0cyAmJiAhbmV3Tm9kZSAmJiBub2Rlcy5sZW5ndGggPT09IDIgJiYgaXNMZWFmTm9kZShub2Rlc1tpZHggXiAxXSkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzW2lkeCBeIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3RzICYmIG5ld05vZGUgJiYgbm9kZXMubGVuZ3RoID09PSAxICYmIGlzTGVhZk5vZGUobmV3Tm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0VkaXRhYmxlID0gb3duZXJJRCAmJiBvd25lcklEID09PSB0aGlzLm93bmVySUQ7XG4gICAgICB2YXIgbmV3Qml0bWFwID0gZXhpc3RzID8gbmV3Tm9kZSA/IGJpdG1hcCA6IGJpdG1hcCBeIGJpdCA6IGJpdG1hcCB8IGJpdDtcbiAgICAgIHZhciBuZXdOb2RlcyA9IGV4aXN0cyA/IG5ld05vZGUgP1xuICAgICAgICBzZXRJbihub2RlcywgaWR4LCBuZXdOb2RlLCBpc0VkaXRhYmxlKSA6XG4gICAgICAgIHNwbGljZU91dChub2RlcywgaWR4LCBpc0VkaXRhYmxlKSA6XG4gICAgICAgIHNwbGljZUluKG5vZGVzLCBpZHgsIG5ld05vZGUsIGlzRWRpdGFibGUpO1xuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmJpdG1hcCA9IG5ld0JpdG1hcDtcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5ld05vZGVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBCaXRtYXBJbmRleGVkTm9kZShvd25lcklELCBuZXdCaXRtYXAsIG5ld05vZGVzKTtcbiAgICB9O1xuXG5cblxuXG4gICAgZnVuY3Rpb24gSGFzaEFycmF5TWFwTm9kZShvd25lcklELCBjb3VudCwgbm9kZXMpIHtcbiAgICAgIHRoaXMub3duZXJJRCA9IG93bmVySUQ7XG4gICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgfVxuXG4gICAgSGFzaEFycmF5TWFwTm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oc2hpZnQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBpZHggPSAoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgICAgIHZhciBub2RlID0gdGhpcy5ub2Rlc1tpZHhdO1xuICAgICAgcmV0dXJuIG5vZGUgPyBub2RlLmdldChzaGlmdCArIFNISUZULCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSA6IG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBIYXNoQXJyYXlNYXBOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBpZHggPSAoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG4gICAgICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpZHhdO1xuXG4gICAgICBpZiAocmVtb3ZlZCAmJiAhbm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld05vZGUgPSB1cGRhdGVOb2RlKG5vZGUsIG93bmVySUQsIHNoaWZ0ICsgU0hJRlQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKTtcbiAgICAgIGlmIChuZXdOb2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Q291bnQgPSB0aGlzLmNvdW50O1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIG5ld0NvdW50Kys7XG4gICAgICB9IGVsc2UgaWYgKCFuZXdOb2RlKSB7XG4gICAgICAgIG5ld0NvdW50LS07XG4gICAgICAgIGlmIChuZXdDb3VudCA8IE1JTl9IQVNIX0FSUkFZX01BUF9TSVpFKSB7XG4gICAgICAgICAgcmV0dXJuIHBhY2tOb2Rlcyhvd25lcklELCBub2RlcywgbmV3Q291bnQsIGlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGlzRWRpdGFibGUgPSBvd25lcklEICYmIG93bmVySUQgPT09IHRoaXMub3duZXJJRDtcbiAgICAgIHZhciBuZXdOb2RlcyA9IHNldEluKG5vZGVzLCBpZHgsIG5ld05vZGUsIGlzRWRpdGFibGUpO1xuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmNvdW50ID0gbmV3Q291bnQ7XG4gICAgICAgIHRoaXMubm9kZXMgPSBuZXdOb2RlcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgSGFzaEFycmF5TWFwTm9kZShvd25lcklELCBuZXdDb3VudCwgbmV3Tm9kZXMpO1xuICAgIH07XG5cblxuXG5cbiAgICBmdW5jdGlvbiBIYXNoQ29sbGlzaW9uTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyaWVzKSB7XG4gICAgICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xuICAgICAgdGhpcy5rZXlIYXNoID0ga2V5SGFzaDtcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgfVxuXG4gICAgSGFzaENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHNoaWZ0LCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgICAgIGZvciAodmFyIGlpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGlpIDwgbGVuOyBpaSsrKSB7XG4gICAgICAgIGlmIChpcyhrZXksIGVudHJpZXNbaWldWzBdKSkge1xuICAgICAgICAgIHJldHVybiBlbnRyaWVzW2lpXVsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBIYXNoQ29sbGlzaW9uTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ob3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgICBpZiAoa2V5SGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtleUhhc2ggPSBoYXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG5cbiAgICAgIGlmIChrZXlIYXNoICE9PSB0aGlzLmtleUhhc2gpIHtcbiAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuICAgICAgICBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG4gICAgICAgIHJldHVybiBtZXJnZUludG9Ob2RlKHRoaXMsIG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBba2V5LCB2YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgZm9yICh2YXIgbGVuID0gZW50cmllcy5sZW5ndGg7IGlkeCA8IGxlbjsgaWR4KyspIHtcbiAgICAgICAgaWYgKGlzKGtleSwgZW50cmllc1tpZHhdWzBdKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgZXhpc3RzID0gaWR4IDwgbGVuO1xuXG4gICAgICBpZiAoZXhpc3RzID8gZW50cmllc1tpZHhdWzFdID09PSB2YWx1ZSA6IHJlbW92ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIFNldFJlZihkaWRBbHRlcik7XG4gICAgICAocmVtb3ZlZCB8fCAhZXhpc3RzKSAmJiBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG5cbiAgICAgIGlmIChyZW1vdmVkICYmIGxlbiA9PT0gMikge1xuICAgICAgICByZXR1cm4gbmV3IFZhbHVlTm9kZShvd25lcklELCB0aGlzLmtleUhhc2gsIGVudHJpZXNbaWR4IF4gMV0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNFZGl0YWJsZSA9IG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEO1xuICAgICAgdmFyIG5ld0VudHJpZXMgPSBpc0VkaXRhYmxlID8gZW50cmllcyA6IGFyckNvcHkoZW50cmllcyk7XG5cbiAgICAgIGlmIChleGlzdHMpIHtcbiAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICBpZHggPT09IGxlbiAtIDEgPyBuZXdFbnRyaWVzLnBvcCgpIDogKG5ld0VudHJpZXNbaWR4XSA9IG5ld0VudHJpZXMucG9wKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0VudHJpZXNbaWR4XSA9IFtrZXksIHZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RW50cmllcy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IG5ld0VudHJpZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEhhc2hDb2xsaXNpb25Ob2RlKG93bmVySUQsIHRoaXMua2V5SGFzaCwgbmV3RW50cmllcyk7XG4gICAgfTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIFZhbHVlTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyeSkge1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMua2V5SGFzaCA9IGtleUhhc2g7XG4gICAgICB0aGlzLmVudHJ5ID0gZW50cnk7XG4gICAgfVxuXG4gICAgVmFsdWVOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGlzKGtleSwgdGhpcy5lbnRyeVswXSkgPyB0aGlzLmVudHJ5WzFdIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIFZhbHVlTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ob3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgICB2YXIgcmVtb3ZlZCA9IHZhbHVlID09PSBOT1RfU0VUO1xuICAgICAgdmFyIGtleU1hdGNoID0gaXMoa2V5LCB0aGlzLmVudHJ5WzBdKTtcbiAgICAgIGlmIChrZXlNYXRjaCA/IHZhbHVlID09PSB0aGlzLmVudHJ5WzFdIDogcmVtb3ZlZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZEFsdGVyKTtcblxuICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgICByZXR1cm47IC8vIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5TWF0Y2gpIHtcbiAgICAgICAgaWYgKG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEKSB7XG4gICAgICAgICAgdGhpcy5lbnRyeVsxXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWVOb2RlKG93bmVySUQsIHRoaXMua2V5SGFzaCwgW2tleSwgdmFsdWVdKTtcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b05vZGUodGhpcywgb3duZXJJRCwgc2hpZnQsIGhhc2goa2V5KSwgW2tleSwgdmFsdWVdKTtcbiAgICB9O1xuXG5cblxuICAvLyAjcHJhZ21hIEl0ZXJhdG9yc1xuXG4gIEFycmF5TWFwTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9XG4gIEhhc2hDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5pdGVyYXRlID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBtYXhJbmRleCA9IGVudHJpZXMubGVuZ3RoIC0gMTsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgIGlmIChmbihlbnRyaWVzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEJpdG1hcEluZGV4ZWROb2RlLnByb3RvdHlwZS5pdGVyYXRlID1cbiAgSGFzaEFycmF5TWFwTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBtYXhJbmRleCA9IG5vZGVzLmxlbmd0aCAtIDE7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pdGVyYXRlKGZuLCByZXZlcnNlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFZhbHVlTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge1xuICAgIHJldHVybiBmbih0aGlzLmVudHJ5KTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE1hcEl0ZXJhdG9yLCBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKTtcblxuICAgIGZ1bmN0aW9uIE1hcEl0ZXJhdG9yKG1hcCwgdHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLl9yZXZlcnNlID0gcmV2ZXJzZTtcbiAgICAgIHRoaXMuX3N0YWNrID0gbWFwLl9yb290ICYmIG1hcEl0ZXJhdG9yRnJhbWUobWFwLl9yb290KTtcbiAgICB9XG5cbiAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHR5cGUgPSB0aGlzLl90eXBlO1xuICAgICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2s7XG4gICAgICB3aGlsZSAoc3RhY2spIHtcbiAgICAgICAgdmFyIG5vZGUgPSBzdGFjay5ub2RlO1xuICAgICAgICB2YXIgaW5kZXggPSBzdGFjay5pbmRleCsrO1xuICAgICAgICB2YXIgbWF4SW5kZXg7XG4gICAgICAgIGlmIChub2RlLmVudHJ5KSB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBub2RlLmVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgbWF4SW5kZXggPSBub2RlLmVudHJpZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICBpZiAoaW5kZXggPD0gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXBJdGVyYXRvclZhbHVlKHR5cGUsIG5vZGUuZW50cmllc1t0aGlzLl9yZXZlcnNlID8gbWF4SW5kZXggLSBpbmRleCA6IGluZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1heEluZGV4ID0gbm9kZS5ub2Rlcy5sZW5ndGggLSAxO1xuICAgICAgICAgIGlmIChpbmRleCA8PSBtYXhJbmRleCkge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGUgPSBub2RlLm5vZGVzW3RoaXMuX3JldmVyc2UgPyBtYXhJbmRleCAtIGluZGV4IDogaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHN1Yk5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Yk5vZGUuZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBzdWJOb2RlLmVudHJ5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdGFjayA9IHRoaXMuX3N0YWNrID0gbWFwSXRlcmF0b3JGcmFtZShzdWJOb2RlLCBzdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2sgPSB0aGlzLl9zdGFjayA9IHRoaXMuX3N0YWNrLl9fcHJldjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBlbnRyeSkge1xuICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXBJdGVyYXRvckZyYW1lKG5vZGUsIHByZXYpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIGluZGV4OiAwLFxuICAgICAgX19wcmV2OiBwcmV2XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VNYXAoc2l6ZSwgcm9vdCwgb3duZXJJRCwgaGFzaCkge1xuICAgIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKE1hcFByb3RvdHlwZSk7XG4gICAgbWFwLnNpemUgPSBzaXplO1xuICAgIG1hcC5fcm9vdCA9IHJvb3Q7XG4gICAgbWFwLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgbWFwLl9faGFzaCA9IGhhc2g7XG4gICAgbWFwLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICB2YXIgRU1QVFlfTUFQO1xuICBmdW5jdGlvbiBlbXB0eU1hcCgpIHtcbiAgICByZXR1cm4gRU1QVFlfTUFQIHx8IChFTVBUWV9NQVAgPSBtYWtlTWFwKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hcChtYXAsIGssIHYpIHtcbiAgICB2YXIgbmV3Um9vdDtcbiAgICB2YXIgbmV3U2l6ZTtcbiAgICBpZiAoIW1hcC5fcm9vdCkge1xuICAgICAgaWYgKHYgPT09IE5PVF9TRVQpIHtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH1cbiAgICAgIG5ld1NpemUgPSAxO1xuICAgICAgbmV3Um9vdCA9IG5ldyBBcnJheU1hcE5vZGUobWFwLl9fb3duZXJJRCwgW1trLCB2XV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlkQ2hhbmdlU2l6ZSA9IE1ha2VSZWYoQ0hBTkdFX0xFTkdUSCk7XG4gICAgICB2YXIgZGlkQWx0ZXIgPSBNYWtlUmVmKERJRF9BTFRFUik7XG4gICAgICBuZXdSb290ID0gdXBkYXRlTm9kZShtYXAuX3Jvb3QsIG1hcC5fX293bmVySUQsIDAsIHVuZGVmaW5lZCwgaywgdiwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpO1xuICAgICAgaWYgKCFkaWRBbHRlci52YWx1ZSkge1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfVxuICAgICAgbmV3U2l6ZSA9IG1hcC5zaXplICsgKGRpZENoYW5nZVNpemUudmFsdWUgPyB2ID09PSBOT1RfU0VUID8gLTEgOiAxIDogMCk7XG4gICAgfVxuICAgIGlmIChtYXAuX19vd25lcklEKSB7XG4gICAgICBtYXAuc2l6ZSA9IG5ld1NpemU7XG4gICAgICBtYXAuX3Jvb3QgPSBuZXdSb290O1xuICAgICAgbWFwLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIG1hcC5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1Jvb3QgPyBtYWtlTWFwKG5ld1NpemUsIG5ld1Jvb3QpIDogZW1wdHlNYXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IE5PVF9TRVQpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgcmV0dXJuIG5ldyBWYWx1ZU5vZGUob3duZXJJRCwga2V5SGFzaCwgW2tleSwgdmFsdWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUudXBkYXRlKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xlYWZOb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5jb25zdHJ1Y3RvciA9PT0gVmFsdWVOb2RlIHx8IG5vZGUuY29uc3RydWN0b3IgPT09IEhhc2hDb2xsaXNpb25Ob2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvTm9kZShub2RlLCBvd25lcklELCBzaGlmdCwga2V5SGFzaCwgZW50cnkpIHtcbiAgICBpZiAobm9kZS5rZXlIYXNoID09PSBrZXlIYXNoKSB7XG4gICAgICByZXR1cm4gbmV3IEhhc2hDb2xsaXNpb25Ob2RlKG93bmVySUQsIGtleUhhc2gsIFtub2RlLmVudHJ5LCBlbnRyeV0pO1xuICAgIH1cblxuICAgIHZhciBpZHgxID0gKHNoaWZ0ID09PSAwID8gbm9kZS5rZXlIYXNoIDogbm9kZS5rZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICAgIHZhciBpZHgyID0gKHNoaWZ0ID09PSAwID8ga2V5SGFzaCA6IGtleUhhc2ggPj4+IHNoaWZ0KSAmIE1BU0s7XG5cbiAgICB2YXIgbmV3Tm9kZTtcbiAgICB2YXIgbm9kZXMgPSBpZHgxID09PSBpZHgyID9cbiAgICAgIFttZXJnZUludG9Ob2RlKG5vZGUsIG93bmVySUQsIHNoaWZ0ICsgU0hJRlQsIGtleUhhc2gsIGVudHJ5KV0gOlxuICAgICAgKChuZXdOb2RlID0gbmV3IFZhbHVlTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyeSkpLCBpZHgxIDwgaWR4MiA/IFtub2RlLCBuZXdOb2RlXSA6IFtuZXdOb2RlLCBub2RlXSk7XG5cbiAgICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsICgxIDw8IGlkeDEpIHwgKDEgPDwgaWR4MiksIG5vZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKG93bmVySUQsIGVudHJpZXMsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgIG93bmVySUQgPSBuZXcgT3duZXJJRCgpO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IG5ldyBWYWx1ZU5vZGUob3duZXJJRCwgaGFzaChrZXkpLCBba2V5LCB2YWx1ZV0pO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBlbnRyaWVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIGVudHJ5ID0gZW50cmllc1tpaV07XG4gICAgICBub2RlID0gbm9kZS51cGRhdGUob3duZXJJRCwgMCwgdW5kZWZpbmVkLCBlbnRyeVswXSwgZW50cnlbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhY2tOb2Rlcyhvd25lcklELCBub2RlcywgY291bnQsIGV4Y2x1ZGluZykge1xuICAgIHZhciBiaXRtYXAgPSAwO1xuICAgIHZhciBwYWNrZWRJSSA9IDA7XG4gICAgdmFyIHBhY2tlZE5vZGVzID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICBmb3IgKHZhciBpaSA9IDAsIGJpdCA9IDEsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaWkgPCBsZW47IGlpKyssIGJpdCA8PD0gMSkge1xuICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpaV07XG4gICAgICBpZiAobm9kZSAhPT0gdW5kZWZpbmVkICYmIGlpICE9PSBleGNsdWRpbmcpIHtcbiAgICAgICAgYml0bWFwIHw9IGJpdDtcbiAgICAgICAgcGFja2VkTm9kZXNbcGFja2VkSUkrK10gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsIGJpdG1hcCwgcGFja2VkTm9kZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhwYW5kTm9kZXMob3duZXJJRCwgbm9kZXMsIGJpdG1hcCwgaW5jbHVkaW5nLCBub2RlKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgZXhwYW5kZWROb2RlcyA9IG5ldyBBcnJheShTSVpFKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGJpdG1hcCAhPT0gMDsgaWkrKywgYml0bWFwID4+Pj0gMSkge1xuICAgICAgZXhwYW5kZWROb2Rlc1tpaV0gPSBiaXRtYXAgJiAxID8gbm9kZXNbY291bnQrK10gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGV4cGFuZGVkTm9kZXNbaW5jbHVkaW5nXSA9IG5vZGU7XG4gICAgcmV0dXJuIG5ldyBIYXNoQXJyYXlNYXBOb2RlKG93bmVySUQsIGNvdW50ICsgMSwgZXhwYW5kZWROb2Rlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUludG9NYXBXaXRoKG1hcCwgbWVyZ2VyLCBpdGVyYWJsZXMpIHtcbiAgICB2YXIgaXRlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaXRlcmFibGVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaXRlcmFibGVzW2lpXTtcbiAgICAgIHZhciBpdGVyID0gS2V5ZWRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICBpZiAoIWlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgIGl0ZXIgPSBpdGVyLm1hcChmdW5jdGlvbih2ICkge3JldHVybiBmcm9tSlModil9KTtcbiAgICAgIH1cbiAgICAgIGl0ZXJzLnB1c2goaXRlcik7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZUludG9Db2xsZWN0aW9uV2l0aChtYXAsIG1lcmdlciwgaXRlcnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVlcE1lcmdlcihtZXJnZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXhpc3RpbmcsIHZhbHVlLCBrZXkpIFxuICAgICAge3JldHVybiBleGlzdGluZyAmJiBleGlzdGluZy5tZXJnZURlZXBXaXRoICYmIGlzSXRlcmFibGUodmFsdWUpID9cbiAgICAgICAgZXhpc3RpbmcubWVyZ2VEZWVwV2l0aChtZXJnZXIsIHZhbHVlKSA6XG4gICAgICAgIG1lcmdlciA/IG1lcmdlcihleGlzdGluZywgdmFsdWUsIGtleSkgOiB2YWx1ZX07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUludG9Db2xsZWN0aW9uV2l0aChjb2xsZWN0aW9uLCBtZXJnZXIsIGl0ZXJzKSB7XG4gICAgaXRlcnMgPSBpdGVycy5maWx0ZXIoZnVuY3Rpb24oeCApIHtyZXR1cm4geC5zaXplICE9PSAwfSk7XG4gICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxuICAgIGlmIChjb2xsZWN0aW9uLnNpemUgPT09IDAgJiYgIWNvbGxlY3Rpb24uX19vd25lcklEICYmIGl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29uc3RydWN0b3IoaXRlcnNbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbi53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKGNvbGxlY3Rpb24gKSB7XG4gICAgICB2YXIgbWVyZ2VJbnRvTWFwID0gbWVyZ2VyID9cbiAgICAgICAgZnVuY3Rpb24odmFsdWUsIGtleSkgIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLnVwZGF0ZShrZXksIE5PVF9TRVQsIGZ1bmN0aW9uKGV4aXN0aW5nIClcbiAgICAgICAgICAgIHtyZXR1cm4gZXhpc3RpbmcgPT09IE5PVF9TRVQgPyB2YWx1ZSA6IG1lcmdlcihleGlzdGluZywgdmFsdWUsIGtleSl9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSA6XG4gICAgICAgIGZ1bmN0aW9uKHZhbHVlLCBrZXkpICB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpdGVycy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgaXRlcnNbaWldLmZvckVhY2gobWVyZ2VJbnRvTWFwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUluRGVlcE1hcChleGlzdGluZywga2V5UGF0aEl0ZXIsIG5vdFNldFZhbHVlLCB1cGRhdGVyKSB7XG4gICAgdmFyIGlzTm90U2V0ID0gZXhpc3RpbmcgPT09IE5PVF9TRVQ7XG4gICAgdmFyIHN0ZXAgPSBrZXlQYXRoSXRlci5uZXh0KCk7XG4gICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgdmFyIGV4aXN0aW5nVmFsdWUgPSBpc05vdFNldCA/IG5vdFNldFZhbHVlIDogZXhpc3Rpbmc7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB1cGRhdGVyKGV4aXN0aW5nVmFsdWUpO1xuICAgICAgcmV0dXJuIG5ld1ZhbHVlID09PSBleGlzdGluZ1ZhbHVlID8gZXhpc3RpbmcgOiBuZXdWYWx1ZTtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgaXNOb3RTZXQgfHwgKGV4aXN0aW5nICYmIGV4aXN0aW5nLnNldCksXG4gICAgICAnaW52YWxpZCBrZXlQYXRoJ1xuICAgICk7XG4gICAgdmFyIGtleSA9IHN0ZXAudmFsdWU7XG4gICAgdmFyIG5leHRFeGlzdGluZyA9IGlzTm90U2V0ID8gTk9UX1NFVCA6IGV4aXN0aW5nLmdldChrZXksIE5PVF9TRVQpO1xuICAgIHZhciBuZXh0VXBkYXRlZCA9IHVwZGF0ZUluRGVlcE1hcChcbiAgICAgIG5leHRFeGlzdGluZyxcbiAgICAgIGtleVBhdGhJdGVyLFxuICAgICAgbm90U2V0VmFsdWUsXG4gICAgICB1cGRhdGVyXG4gICAgKTtcbiAgICByZXR1cm4gbmV4dFVwZGF0ZWQgPT09IG5leHRFeGlzdGluZyA/IGV4aXN0aW5nIDpcbiAgICAgIG5leHRVcGRhdGVkID09PSBOT1RfU0VUID8gZXhpc3RpbmcucmVtb3ZlKGtleSkgOlxuICAgICAgKGlzTm90U2V0ID8gZW1wdHlNYXAoKSA6IGV4aXN0aW5nKS5zZXQoa2V5LCBuZXh0VXBkYXRlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3BDb3VudCh4KSB7XG4gICAgeCA9IHggLSAoKHggPj4gMSkgJiAweDU1NTU1NTU1KTtcbiAgICB4ID0gKHggJiAweDMzMzMzMzMzKSArICgoeCA+PiAyKSAmIDB4MzMzMzMzMzMpO1xuICAgIHggPSAoeCArICh4ID4+IDQpKSAmIDB4MGYwZjBmMGY7XG4gICAgeCA9IHggKyAoeCA+PiA4KTtcbiAgICB4ID0geCArICh4ID4+IDE2KTtcbiAgICByZXR1cm4geCAmIDB4N2Y7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbihhcnJheSwgaWR4LCB2YWwsIGNhbkVkaXQpIHtcbiAgICB2YXIgbmV3QXJyYXkgPSBjYW5FZGl0ID8gYXJyYXkgOiBhcnJDb3B5KGFycmF5KTtcbiAgICBuZXdBcnJheVtpZHhdID0gdmFsO1xuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwbGljZUluKGFycmF5LCBpZHgsIHZhbCwgY2FuRWRpdCkge1xuICAgIHZhciBuZXdMZW4gPSBhcnJheS5sZW5ndGggKyAxO1xuICAgIGlmIChjYW5FZGl0ICYmIGlkeCArIDEgPT09IG5ld0xlbikge1xuICAgICAgYXJyYXlbaWR4XSA9IHZhbDtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdmFyIG5ld0FycmF5ID0gbmV3IEFycmF5KG5ld0xlbik7XG4gICAgdmFyIGFmdGVyID0gMDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbmV3TGVuOyBpaSsrKSB7XG4gICAgICBpZiAoaWkgPT09IGlkeCkge1xuICAgICAgICBuZXdBcnJheVtpaV0gPSB2YWw7XG4gICAgICAgIGFmdGVyID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdBcnJheVtpaV0gPSBhcnJheVtpaSArIGFmdGVyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gc3BsaWNlT3V0KGFycmF5LCBpZHgsIGNhbkVkaXQpIHtcbiAgICB2YXIgbmV3TGVuID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICBpZiAoY2FuRWRpdCAmJiBpZHggPT09IG5ld0xlbikge1xuICAgICAgYXJyYXkucG9wKCk7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHZhciBuZXdBcnJheSA9IG5ldyBBcnJheShuZXdMZW4pO1xuICAgIHZhciBhZnRlciA9IDA7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5ld0xlbjsgaWkrKykge1xuICAgICAgaWYgKGlpID09PSBpZHgpIHtcbiAgICAgICAgYWZ0ZXIgPSAxO1xuICAgICAgfVxuICAgICAgbmV3QXJyYXlbaWldID0gYXJyYXlbaWkgKyBhZnRlcl07XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG4gIHZhciBNQVhfQVJSQVlfTUFQX1NJWkUgPSBTSVpFIC8gNDtcbiAgdmFyIE1BWF9CSVRNQVBfSU5ERVhFRF9TSVpFID0gU0laRSAvIDI7XG4gIHZhciBNSU5fSEFTSF9BUlJBWV9NQVBfU0laRSA9IFNJWkUgLyA0O1xuXG4gIGNyZWF0ZUNsYXNzKExpc3QsIEluZGV4ZWRDb2xsZWN0aW9uKTtcblxuICAgIC8vIEBwcmFnbWEgQ29uc3RydWN0aW9uXG5cbiAgICBmdW5jdGlvbiBMaXN0KHZhbHVlKSB7XG4gICAgICB2YXIgZW1wdHkgPSBlbXB0eUxpc3QoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0xpc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyID0gSW5kZXhlZEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgIHZhciBzaXplID0gaXRlci5zaXplO1xuICAgICAgaWYgKHNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgICAgfVxuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoc2l6ZSk7XG4gICAgICBpZiAoc2l6ZSA+IDAgJiYgc2l6ZSA8IFNJWkUpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VMaXN0KDAsIHNpemUsIFNISUZULCBudWxsLCBuZXcgVk5vZGUoaXRlci50b0FycmF5KCkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKGxpc3QgKSB7XG4gICAgICAgIGxpc3Quc2V0U2l6ZShzaXplKTtcbiAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uKHYsIGkpICB7cmV0dXJuIGxpc3Quc2V0KGksIHYpfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBMaXN0Lm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIHRoaXMoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ0xpc3QgWycsICddJyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBMaXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5zaXplKSB7XG4gICAgICAgIGluZGV4ICs9IHRoaXMuX29yaWdpbjtcbiAgICAgICAgdmFyIG5vZGUgPSBsaXN0Tm9kZUZvcih0aGlzLCBpbmRleCk7XG4gICAgICAgIHJldHVybiBub2RlICYmIG5vZGUuYXJyYXlbaW5kZXggJiBNQVNLXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICAgIExpc3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHVwZGF0ZUxpc3QodGhpcywgaW5kZXgsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiAhdGhpcy5oYXMoaW5kZXgpID8gdGhpcyA6XG4gICAgICAgIGluZGV4ID09PSAwID8gdGhpcy5zaGlmdCgpIDpcbiAgICAgICAgaW5kZXggPT09IHRoaXMuc2l6ZSAtIDEgPyB0aGlzLnBvcCgpIDpcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLl9vcmlnaW4gPSB0aGlzLl9jYXBhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuX2xldmVsID0gU0hJRlQ7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlMaXN0KCk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIG9sZFNpemUgPSB0aGlzLnNpemU7XG4gICAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKGxpc3QgKSB7XG4gICAgICAgIHNldExpc3RCb3VuZHMobGlzdCwgMCwgb2xkU2l6ZSArIHZhbHVlcy5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgdmFsdWVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIGxpc3Quc2V0KG9sZFNpemUgKyBpaSwgdmFsdWVzW2lpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzZXRMaXN0Qm91bmRzKHRoaXMsIDAsIC0xKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKGxpc3QgKSB7XG4gICAgICAgIHNldExpc3RCb3VuZHMobGlzdCwgLXZhbHVlcy5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgdmFsdWVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIGxpc3Quc2V0KGlpLCB2YWx1ZXNbaWldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2V0TGlzdEJvdW5kcyh0aGlzLCAxKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBDb21wb3NpdGlvblxuXG4gICAgTGlzdC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbigvKi4uLml0ZXJzKi8pIHtcbiAgICAgIHJldHVybiBtZXJnZUludG9MaXN0V2l0aCh0aGlzLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLm1lcmdlV2l0aCA9IGZ1bmN0aW9uKG1lcmdlcikge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b0xpc3RXaXRoKHRoaXMsIG1lcmdlciwgaXRlcnMpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5tZXJnZURlZXAgPSBmdW5jdGlvbigvKi4uLml0ZXJzKi8pIHtcbiAgICAgIHJldHVybiBtZXJnZUludG9MaXN0V2l0aCh0aGlzLCBkZWVwTWVyZ2VyKHVuZGVmaW5lZCksIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLm1lcmdlRGVlcFdpdGggPSBmdW5jdGlvbihtZXJnZXIpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiBtZXJnZUludG9MaXN0V2l0aCh0aGlzLCBkZWVwTWVyZ2VyKG1lcmdlciksIGl0ZXJzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuc2V0U2l6ZSA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHJldHVybiBzZXRMaXN0Qm91bmRzKHRoaXMsIDAsIHNpemUpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEl0ZXJhdGlvblxuXG4gICAgTGlzdC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIGlmICh3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIHNpemUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldExpc3RCb3VuZHMoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHJlc29sdmVCZWdpbihiZWdpbiwgc2l6ZSksXG4gICAgICAgIHJlc29sdmVFbmQoZW5kLCBzaXplKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgdmFsdWVzID0gaXRlcmF0ZUxpc3QodGhpcywgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXMoKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBET05FID9cbiAgICAgICAgICBpdGVyYXRvckRvbmUoKSA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBpbmRleCsrLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgdmFsdWVzID0gaXRlcmF0ZUxpc3QodGhpcywgcmV2ZXJzZSk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB3aGlsZSAoKHZhbHVlID0gdmFsdWVzKCkpICE9PSBET05FKSB7XG4gICAgICAgIGlmIChmbih2YWx1ZSwgaW5kZXgrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuX19lbnN1cmVPd25lciA9IGZ1bmN0aW9uKG93bmVySUQpIHtcbiAgICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICghb3duZXJJRCkge1xuICAgICAgICB0aGlzLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VMaXN0KHRoaXMuX29yaWdpbiwgdGhpcy5fY2FwYWNpdHksIHRoaXMuX2xldmVsLCB0aGlzLl9yb290LCB0aGlzLl90YWlsLCBvd25lcklELCB0aGlzLl9faGFzaCk7XG4gICAgfTtcblxuXG4gIGZ1bmN0aW9uIGlzTGlzdChtYXliZUxpc3QpIHtcbiAgICByZXR1cm4gISEobWF5YmVMaXN0ICYmIG1heWJlTGlzdFtJU19MSVNUX1NFTlRJTkVMXSk7XG4gIH1cblxuICBMaXN0LmlzTGlzdCA9IGlzTGlzdDtcblxuICB2YXIgSVNfTElTVF9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX0xJU1RfX0BAJztcblxuICB2YXIgTGlzdFByb3RvdHlwZSA9IExpc3QucHJvdG90eXBlO1xuICBMaXN0UHJvdG90eXBlW0lTX0xJU1RfU0VOVElORUxdID0gdHJ1ZTtcbiAgTGlzdFByb3RvdHlwZVtERUxFVEVdID0gTGlzdFByb3RvdHlwZS5yZW1vdmU7XG4gIExpc3RQcm90b3R5cGUuc2V0SW4gPSBNYXBQcm90b3R5cGUuc2V0SW47XG4gIExpc3RQcm90b3R5cGUuZGVsZXRlSW4gPVxuICBMaXN0UHJvdG90eXBlLnJlbW92ZUluID0gTWFwUHJvdG90eXBlLnJlbW92ZUluO1xuICBMaXN0UHJvdG90eXBlLnVwZGF0ZSA9IE1hcFByb3RvdHlwZS51cGRhdGU7XG4gIExpc3RQcm90b3R5cGUudXBkYXRlSW4gPSBNYXBQcm90b3R5cGUudXBkYXRlSW47XG4gIExpc3RQcm90b3R5cGUubWVyZ2VJbiA9IE1hcFByb3RvdHlwZS5tZXJnZUluO1xuICBMaXN0UHJvdG90eXBlLm1lcmdlRGVlcEluID0gTWFwUHJvdG90eXBlLm1lcmdlRGVlcEluO1xuICBMaXN0UHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSBNYXBQcm90b3R5cGUud2l0aE11dGF0aW9ucztcbiAgTGlzdFByb3RvdHlwZS5hc011dGFibGUgPSBNYXBQcm90b3R5cGUuYXNNdXRhYmxlO1xuICBMaXN0UHJvdG90eXBlLmFzSW1tdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzSW1tdXRhYmxlO1xuICBMaXN0UHJvdG90eXBlLndhc0FsdGVyZWQgPSBNYXBQcm90b3R5cGUud2FzQWx0ZXJlZDtcblxuXG5cbiAgICBmdW5jdGlvbiBWTm9kZShhcnJheSwgb3duZXJJRCkge1xuICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBzZWVtcyBsaWtlIHRoZXNlIG1ldGhvZHMgYXJlIHZlcnkgc2ltaWxhclxuXG4gICAgVk5vZGUucHJvdG90eXBlLnJlbW92ZUJlZm9yZSA9IGZ1bmN0aW9uKG93bmVySUQsIGxldmVsLCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSBsZXZlbCA/IDEgPDwgbGV2ZWwgOiAwIHx8IHRoaXMuYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9yaWdpbkluZGV4ID0gKGluZGV4ID4+PiBsZXZlbCkgJiBNQVNLO1xuICAgICAgaWYgKG9yaWdpbkluZGV4ID49IHRoaXMuYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVk5vZGUoW10sIG93bmVySUQpO1xuICAgICAgfVxuICAgICAgdmFyIHJlbW92aW5nRmlyc3QgPSBvcmlnaW5JbmRleCA9PT0gMDtcbiAgICAgIHZhciBuZXdDaGlsZDtcbiAgICAgIGlmIChsZXZlbCA+IDApIHtcbiAgICAgICAgdmFyIG9sZENoaWxkID0gdGhpcy5hcnJheVtvcmlnaW5JbmRleF07XG4gICAgICAgIG5ld0NoaWxkID0gb2xkQ2hpbGQgJiYgb2xkQ2hpbGQucmVtb3ZlQmVmb3JlKG93bmVySUQsIGxldmVsIC0gU0hJRlQsIGluZGV4KTtcbiAgICAgICAgaWYgKG5ld0NoaWxkID09PSBvbGRDaGlsZCAmJiByZW1vdmluZ0ZpcnN0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZW1vdmluZ0ZpcnN0ICYmICFuZXdDaGlsZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBlZGl0YWJsZSA9IGVkaXRhYmxlVk5vZGUodGhpcywgb3duZXJJRCk7XG4gICAgICBpZiAoIXJlbW92aW5nRmlyc3QpIHtcbiAgICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG9yaWdpbkluZGV4OyBpaSsrKSB7XG4gICAgICAgICAgZWRpdGFibGUuYXJyYXlbaWldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgICAgZWRpdGFibGUuYXJyYXlbb3JpZ2luSW5kZXhdID0gbmV3Q2hpbGQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWRpdGFibGU7XG4gICAgfTtcblxuICAgIFZOb2RlLnByb3RvdHlwZS5yZW1vdmVBZnRlciA9IGZ1bmN0aW9uKG93bmVySUQsIGxldmVsLCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSAobGV2ZWwgPyAxIDw8IGxldmVsIDogMCkgfHwgdGhpcy5hcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgc2l6ZUluZGV4ID0gKChpbmRleCAtIDEpID4+PiBsZXZlbCkgJiBNQVNLO1xuICAgICAgaWYgKHNpemVJbmRleCA+PSB0aGlzLmFycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0NoaWxkO1xuICAgICAgaWYgKGxldmVsID4gMCkge1xuICAgICAgICB2YXIgb2xkQ2hpbGQgPSB0aGlzLmFycmF5W3NpemVJbmRleF07XG4gICAgICAgIG5ld0NoaWxkID0gb2xkQ2hpbGQgJiYgb2xkQ2hpbGQucmVtb3ZlQWZ0ZXIob3duZXJJRCwgbGV2ZWwgLSBTSElGVCwgaW5kZXgpO1xuICAgICAgICBpZiAobmV3Q2hpbGQgPT09IG9sZENoaWxkICYmIHNpemVJbmRleCA9PT0gdGhpcy5hcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGVkaXRhYmxlID0gZWRpdGFibGVWTm9kZSh0aGlzLCBvd25lcklEKTtcbiAgICAgIGVkaXRhYmxlLmFycmF5LnNwbGljZShzaXplSW5kZXggKyAxKTtcbiAgICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgICBlZGl0YWJsZS5hcnJheVtzaXplSW5kZXhdID0gbmV3Q2hpbGQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWRpdGFibGU7XG4gICAgfTtcblxuXG5cbiAgdmFyIERPTkUgPSB7fTtcblxuICBmdW5jdGlvbiBpdGVyYXRlTGlzdChsaXN0LCByZXZlcnNlKSB7XG4gICAgdmFyIGxlZnQgPSBsaXN0Ll9vcmlnaW47XG4gICAgdmFyIHJpZ2h0ID0gbGlzdC5fY2FwYWNpdHk7XG4gICAgdmFyIHRhaWxQb3MgPSBnZXRUYWlsT2Zmc2V0KHJpZ2h0KTtcbiAgICB2YXIgdGFpbCA9IGxpc3QuX3RhaWw7XG5cbiAgICByZXR1cm4gaXRlcmF0ZU5vZGVPckxlYWYobGlzdC5fcm9vdCwgbGlzdC5fbGV2ZWwsIDApO1xuXG4gICAgZnVuY3Rpb24gaXRlcmF0ZU5vZGVPckxlYWYobm9kZSwgbGV2ZWwsIG9mZnNldCkge1xuICAgICAgcmV0dXJuIGxldmVsID09PSAwID9cbiAgICAgICAgaXRlcmF0ZUxlYWYobm9kZSwgb2Zmc2V0KSA6XG4gICAgICAgIGl0ZXJhdGVOb2RlKG5vZGUsIGxldmVsLCBvZmZzZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVMZWFmKG5vZGUsIG9mZnNldCkge1xuICAgICAgdmFyIGFycmF5ID0gb2Zmc2V0ID09PSB0YWlsUG9zID8gdGFpbCAmJiB0YWlsLmFycmF5IDogbm9kZSAmJiBub2RlLmFycmF5O1xuICAgICAgdmFyIGZyb20gPSBvZmZzZXQgPiBsZWZ0ID8gMCA6IGxlZnQgLSBvZmZzZXQ7XG4gICAgICB2YXIgdG8gPSByaWdodCAtIG9mZnNldDtcbiAgICAgIGlmICh0byA+IFNJWkUpIHtcbiAgICAgICAgdG8gPSBTSVpFO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgICAgICAgcmV0dXJuIERPTkU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkeCA9IHJldmVyc2UgPyAtLXRvIDogZnJvbSsrO1xuICAgICAgICByZXR1cm4gYXJyYXkgJiYgYXJyYXlbaWR4XTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXRlcmF0ZU5vZGUobm9kZSwgbGV2ZWwsIG9mZnNldCkge1xuICAgICAgdmFyIHZhbHVlcztcbiAgICAgIHZhciBhcnJheSA9IG5vZGUgJiYgbm9kZS5hcnJheTtcbiAgICAgIHZhciBmcm9tID0gb2Zmc2V0ID4gbGVmdCA/IDAgOiAobGVmdCAtIG9mZnNldCkgPj4gbGV2ZWw7XG4gICAgICB2YXIgdG8gPSAoKHJpZ2h0IC0gb2Zmc2V0KSA+PiBsZXZlbCkgKyAxO1xuICAgICAgaWYgKHRvID4gU0laRSkge1xuICAgICAgICB0byA9IFNJWkU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSAge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzKCk7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IERPTkUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVzID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgICAgICAgICByZXR1cm4gRE9ORTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGlkeCA9IHJldmVyc2UgPyAtLXRvIDogZnJvbSsrO1xuICAgICAgICAgIHZhbHVlcyA9IGl0ZXJhdGVOb2RlT3JMZWFmKFxuICAgICAgICAgICAgYXJyYXkgJiYgYXJyYXlbaWR4XSwgbGV2ZWwgLSBTSElGVCwgb2Zmc2V0ICsgKGlkeCA8PCBsZXZlbClcbiAgICAgICAgICApO1xuICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUxpc3Qob3JpZ2luLCBjYXBhY2l0eSwgbGV2ZWwsIHJvb3QsIHRhaWwsIG93bmVySUQsIGhhc2gpIHtcbiAgICB2YXIgbGlzdCA9IE9iamVjdC5jcmVhdGUoTGlzdFByb3RvdHlwZSk7XG4gICAgbGlzdC5zaXplID0gY2FwYWNpdHkgLSBvcmlnaW47XG4gICAgbGlzdC5fb3JpZ2luID0gb3JpZ2luO1xuICAgIGxpc3QuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgbGlzdC5fbGV2ZWwgPSBsZXZlbDtcbiAgICBsaXN0Ll9yb290ID0gcm9vdDtcbiAgICBsaXN0Ll90YWlsID0gdGFpbDtcbiAgICBsaXN0Ll9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgbGlzdC5fX2hhc2ggPSBoYXNoO1xuICAgIGxpc3QuX19hbHRlcmVkID0gZmFsc2U7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICB2YXIgRU1QVFlfTElTVDtcbiAgZnVuY3Rpb24gZW1wdHlMaXN0KCkge1xuICAgIHJldHVybiBFTVBUWV9MSVNUIHx8IChFTVBUWV9MSVNUID0gbWFrZUxpc3QoMCwgMCwgU0hJRlQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxpc3QobGlzdCwgaW5kZXgsIHZhbHVlKSB7XG4gICAgaW5kZXggPSB3cmFwSW5kZXgobGlzdCwgaW5kZXgpO1xuXG4gICAgaWYgKGluZGV4ICE9PSBpbmRleCkge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID49IGxpc3Quc2l6ZSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVybiBsaXN0LndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obGlzdCApIHtcbiAgICAgICAgaW5kZXggPCAwID9cbiAgICAgICAgICBzZXRMaXN0Qm91bmRzKGxpc3QsIGluZGV4KS5zZXQoMCwgdmFsdWUpIDpcbiAgICAgICAgICBzZXRMaXN0Qm91bmRzKGxpc3QsIDAsIGluZGV4ICsgMSkuc2V0KGluZGV4LCB2YWx1ZSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluZGV4ICs9IGxpc3QuX29yaWdpbjtcblxuICAgIHZhciBuZXdUYWlsID0gbGlzdC5fdGFpbDtcbiAgICB2YXIgbmV3Um9vdCA9IGxpc3QuX3Jvb3Q7XG4gICAgdmFyIGRpZEFsdGVyID0gTWFrZVJlZihESURfQUxURVIpO1xuICAgIGlmIChpbmRleCA+PSBnZXRUYWlsT2Zmc2V0KGxpc3QuX2NhcGFjaXR5KSkge1xuICAgICAgbmV3VGFpbCA9IHVwZGF0ZVZOb2RlKG5ld1RhaWwsIGxpc3QuX19vd25lcklELCAwLCBpbmRleCwgdmFsdWUsIGRpZEFsdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Um9vdCA9IHVwZGF0ZVZOb2RlKG5ld1Jvb3QsIGxpc3QuX19vd25lcklELCBsaXN0Ll9sZXZlbCwgaW5kZXgsIHZhbHVlLCBkaWRBbHRlcik7XG4gICAgfVxuXG4gICAgaWYgKCFkaWRBbHRlci52YWx1ZSkge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgaWYgKGxpc3QuX19vd25lcklEKSB7XG4gICAgICBsaXN0Ll9yb290ID0gbmV3Um9vdDtcbiAgICAgIGxpc3QuX3RhaWwgPSBuZXdUYWlsO1xuICAgICAgbGlzdC5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICBsaXN0Ll9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VMaXN0KGxpc3QuX29yaWdpbiwgbGlzdC5fY2FwYWNpdHksIGxpc3QuX2xldmVsLCBuZXdSb290LCBuZXdUYWlsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVZOb2RlKG5vZGUsIG93bmVySUQsIGxldmVsLCBpbmRleCwgdmFsdWUsIGRpZEFsdGVyKSB7XG4gICAgdmFyIGlkeCA9IChpbmRleCA+Pj4gbGV2ZWwpICYgTUFTSztcbiAgICB2YXIgbm9kZUhhcyA9IG5vZGUgJiYgaWR4IDwgbm9kZS5hcnJheS5sZW5ndGg7XG4gICAgaWYgKCFub2RlSGFzICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHZhciBuZXdOb2RlO1xuXG4gICAgaWYgKGxldmVsID4gMCkge1xuICAgICAgdmFyIGxvd2VyTm9kZSA9IG5vZGUgJiYgbm9kZS5hcnJheVtpZHhdO1xuICAgICAgdmFyIG5ld0xvd2VyTm9kZSA9IHVwZGF0ZVZOb2RlKGxvd2VyTm9kZSwgb3duZXJJRCwgbGV2ZWwgLSBTSElGVCwgaW5kZXgsIHZhbHVlLCBkaWRBbHRlcik7XG4gICAgICBpZiAobmV3TG93ZXJOb2RlID09PSBsb3dlck5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgICBuZXdOb2RlID0gZWRpdGFibGVWTm9kZShub2RlLCBvd25lcklEKTtcbiAgICAgIG5ld05vZGUuYXJyYXlbaWR4XSA9IG5ld0xvd2VyTm9kZTtcbiAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH1cblxuICAgIGlmIChub2RlSGFzICYmIG5vZGUuYXJyYXlbaWR4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIFNldFJlZihkaWRBbHRlcik7XG5cbiAgICBuZXdOb2RlID0gZWRpdGFibGVWTm9kZShub2RlLCBvd25lcklEKTtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBpZHggPT09IG5ld05vZGUuYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgbmV3Tm9kZS5hcnJheS5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Tm9kZS5hcnJheVtpZHhdID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdGFibGVWTm9kZShub2RlLCBvd25lcklEKSB7XG4gICAgaWYgKG93bmVySUQgJiYgbm9kZSAmJiBvd25lcklEID09PSBub2RlLm93bmVySUQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFZOb2RlKG5vZGUgPyBub2RlLmFycmF5LnNsaWNlKCkgOiBbXSwgb3duZXJJRCk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0Tm9kZUZvcihsaXN0LCByYXdJbmRleCkge1xuICAgIGlmIChyYXdJbmRleCA+PSBnZXRUYWlsT2Zmc2V0KGxpc3QuX2NhcGFjaXR5KSkge1xuICAgICAgcmV0dXJuIGxpc3QuX3RhaWw7XG4gICAgfVxuICAgIGlmIChyYXdJbmRleCA8IDEgPDwgKGxpc3QuX2xldmVsICsgU0hJRlQpKSB7XG4gICAgICB2YXIgbm9kZSA9IGxpc3QuX3Jvb3Q7XG4gICAgICB2YXIgbGV2ZWwgPSBsaXN0Ll9sZXZlbDtcbiAgICAgIHdoaWxlIChub2RlICYmIGxldmVsID4gMCkge1xuICAgICAgICBub2RlID0gbm9kZS5hcnJheVsocmF3SW5kZXggPj4+IGxldmVsKSAmIE1BU0tdO1xuICAgICAgICBsZXZlbCAtPSBTSElGVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldExpc3RCb3VuZHMobGlzdCwgYmVnaW4sIGVuZCkge1xuICAgIC8vIFNhbml0aXplIGJlZ2luICYgZW5kIHVzaW5nIHRoaXMgc2hvcnRoYW5kIGZvciBUb0ludDMyKGFyZ3VtZW50KVxuICAgIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2ludDMyXG4gICAgaWYgKGJlZ2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGJlZ2luID0gYmVnaW4gfCAwO1xuICAgIH1cbiAgICBpZiAoZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZCA9IGVuZCB8IDA7XG4gICAgfVxuICAgIHZhciBvd25lciA9IGxpc3QuX19vd25lcklEIHx8IG5ldyBPd25lcklEKCk7XG4gICAgdmFyIG9sZE9yaWdpbiA9IGxpc3QuX29yaWdpbjtcbiAgICB2YXIgb2xkQ2FwYWNpdHkgPSBsaXN0Ll9jYXBhY2l0eTtcbiAgICB2YXIgbmV3T3JpZ2luID0gb2xkT3JpZ2luICsgYmVnaW47XG4gICAgdmFyIG5ld0NhcGFjaXR5ID0gZW5kID09PSB1bmRlZmluZWQgPyBvbGRDYXBhY2l0eSA6IGVuZCA8IDAgPyBvbGRDYXBhY2l0eSArIGVuZCA6IG9sZE9yaWdpbiArIGVuZDtcbiAgICBpZiAobmV3T3JpZ2luID09PSBvbGRPcmlnaW4gJiYgbmV3Q2FwYWNpdHkgPT09IG9sZENhcGFjaXR5KSB7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICAvLyBJZiBpdCdzIGdvaW5nIHRvIGVuZCBhZnRlciBpdCBzdGFydHMsIGl0J3MgZW1wdHkuXG4gICAgaWYgKG5ld09yaWdpbiA+PSBuZXdDYXBhY2l0eSkge1xuICAgICAgcmV0dXJuIGxpc3QuY2xlYXIoKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGV2ZWwgPSBsaXN0Ll9sZXZlbDtcbiAgICB2YXIgbmV3Um9vdCA9IGxpc3QuX3Jvb3Q7XG5cbiAgICAvLyBOZXcgb3JpZ2luIG1pZ2h0IG5lZWQgY3JlYXRpbmcgYSBoaWdoZXIgcm9vdC5cbiAgICB2YXIgb2Zmc2V0U2hpZnQgPSAwO1xuICAgIHdoaWxlIChuZXdPcmlnaW4gKyBvZmZzZXRTaGlmdCA8IDApIHtcbiAgICAgIG5ld1Jvb3QgPSBuZXcgVk5vZGUobmV3Um9vdCAmJiBuZXdSb290LmFycmF5Lmxlbmd0aCA/IFt1bmRlZmluZWQsIG5ld1Jvb3RdIDogW10sIG93bmVyKTtcbiAgICAgIG5ld0xldmVsICs9IFNISUZUO1xuICAgICAgb2Zmc2V0U2hpZnQgKz0gMSA8PCBuZXdMZXZlbDtcbiAgICB9XG4gICAgaWYgKG9mZnNldFNoaWZ0KSB7XG4gICAgICBuZXdPcmlnaW4gKz0gb2Zmc2V0U2hpZnQ7XG4gICAgICBvbGRPcmlnaW4gKz0gb2Zmc2V0U2hpZnQ7XG4gICAgICBuZXdDYXBhY2l0eSArPSBvZmZzZXRTaGlmdDtcbiAgICAgIG9sZENhcGFjaXR5ICs9IG9mZnNldFNoaWZ0O1xuICAgIH1cblxuICAgIHZhciBvbGRUYWlsT2Zmc2V0ID0gZ2V0VGFpbE9mZnNldChvbGRDYXBhY2l0eSk7XG4gICAgdmFyIG5ld1RhaWxPZmZzZXQgPSBnZXRUYWlsT2Zmc2V0KG5ld0NhcGFjaXR5KTtcblxuICAgIC8vIE5ldyBzaXplIG1pZ2h0IG5lZWQgY3JlYXRpbmcgYSBoaWdoZXIgcm9vdC5cbiAgICB3aGlsZSAobmV3VGFpbE9mZnNldCA+PSAxIDw8IChuZXdMZXZlbCArIFNISUZUKSkge1xuICAgICAgbmV3Um9vdCA9IG5ldyBWTm9kZShuZXdSb290ICYmIG5ld1Jvb3QuYXJyYXkubGVuZ3RoID8gW25ld1Jvb3RdIDogW10sIG93bmVyKTtcbiAgICAgIG5ld0xldmVsICs9IFNISUZUO1xuICAgIH1cblxuICAgIC8vIExvY2F0ZSBvciBjcmVhdGUgdGhlIG5ldyB0YWlsLlxuICAgIHZhciBvbGRUYWlsID0gbGlzdC5fdGFpbDtcbiAgICB2YXIgbmV3VGFpbCA9IG5ld1RhaWxPZmZzZXQgPCBvbGRUYWlsT2Zmc2V0ID9cbiAgICAgIGxpc3ROb2RlRm9yKGxpc3QsIG5ld0NhcGFjaXR5IC0gMSkgOlxuICAgICAgbmV3VGFpbE9mZnNldCA+IG9sZFRhaWxPZmZzZXQgPyBuZXcgVk5vZGUoW10sIG93bmVyKSA6IG9sZFRhaWw7XG5cbiAgICAvLyBNZXJnZSBUYWlsIGludG8gdHJlZS5cbiAgICBpZiAob2xkVGFpbCAmJiBuZXdUYWlsT2Zmc2V0ID4gb2xkVGFpbE9mZnNldCAmJiBuZXdPcmlnaW4gPCBvbGRDYXBhY2l0eSAmJiBvbGRUYWlsLmFycmF5Lmxlbmd0aCkge1xuICAgICAgbmV3Um9vdCA9IGVkaXRhYmxlVk5vZGUobmV3Um9vdCwgb3duZXIpO1xuICAgICAgdmFyIG5vZGUgPSBuZXdSb290O1xuICAgICAgZm9yICh2YXIgbGV2ZWwgPSBuZXdMZXZlbDsgbGV2ZWwgPiBTSElGVDsgbGV2ZWwgLT0gU0hJRlQpIHtcbiAgICAgICAgdmFyIGlkeCA9IChvbGRUYWlsT2Zmc2V0ID4+PiBsZXZlbCkgJiBNQVNLO1xuICAgICAgICBub2RlID0gbm9kZS5hcnJheVtpZHhdID0gZWRpdGFibGVWTm9kZShub2RlLmFycmF5W2lkeF0sIG93bmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUuYXJyYXlbKG9sZFRhaWxPZmZzZXQgPj4+IFNISUZUKSAmIE1BU0tdID0gb2xkVGFpbDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc2l6ZSBoYXMgYmVlbiByZWR1Y2VkLCB0aGVyZSdzIGEgY2hhbmNlIHRoZSB0YWlsIG5lZWRzIHRvIGJlIHRyaW1tZWQuXG4gICAgaWYgKG5ld0NhcGFjaXR5IDwgb2xkQ2FwYWNpdHkpIHtcbiAgICAgIG5ld1RhaWwgPSBuZXdUYWlsICYmIG5ld1RhaWwucmVtb3ZlQWZ0ZXIob3duZXIsIDAsIG5ld0NhcGFjaXR5KTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbmV3IG9yaWdpbiBpcyB3aXRoaW4gdGhlIHRhaWwsIHRoZW4gd2UgZG8gbm90IG5lZWQgYSByb290LlxuICAgIGlmIChuZXdPcmlnaW4gPj0gbmV3VGFpbE9mZnNldCkge1xuICAgICAgbmV3T3JpZ2luIC09IG5ld1RhaWxPZmZzZXQ7XG4gICAgICBuZXdDYXBhY2l0eSAtPSBuZXdUYWlsT2Zmc2V0O1xuICAgICAgbmV3TGV2ZWwgPSBTSElGVDtcbiAgICAgIG5ld1Jvb3QgPSBudWxsO1xuICAgICAgbmV3VGFpbCA9IG5ld1RhaWwgJiYgbmV3VGFpbC5yZW1vdmVCZWZvcmUob3duZXIsIDAsIG5ld09yaWdpbik7XG5cbiAgICAvLyBPdGhlcndpc2UsIGlmIHRoZSByb290IGhhcyBiZWVuIHRyaW1tZWQsIGdhcmJhZ2UgY29sbGVjdC5cbiAgICB9IGVsc2UgaWYgKG5ld09yaWdpbiA+IG9sZE9yaWdpbiB8fCBuZXdUYWlsT2Zmc2V0IDwgb2xkVGFpbE9mZnNldCkge1xuICAgICAgb2Zmc2V0U2hpZnQgPSAwO1xuXG4gICAgICAvLyBJZGVudGlmeSB0aGUgbmV3IHRvcCByb290IG5vZGUgb2YgdGhlIHN1YnRyZWUgb2YgdGhlIG9sZCByb290LlxuICAgICAgd2hpbGUgKG5ld1Jvb3QpIHtcbiAgICAgICAgdmFyIGJlZ2luSW5kZXggPSAobmV3T3JpZ2luID4+PiBuZXdMZXZlbCkgJiBNQVNLO1xuICAgICAgICBpZiAoYmVnaW5JbmRleCAhPT0gKG5ld1RhaWxPZmZzZXQgPj4+IG5ld0xldmVsKSAmIE1BU0spIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVnaW5JbmRleCkge1xuICAgICAgICAgIG9mZnNldFNoaWZ0ICs9ICgxIDw8IG5ld0xldmVsKSAqIGJlZ2luSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgbmV3TGV2ZWwgLT0gU0hJRlQ7XG4gICAgICAgIG5ld1Jvb3QgPSBuZXdSb290LmFycmF5W2JlZ2luSW5kZXhdO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmltIHRoZSBuZXcgc2lkZXMgb2YgdGhlIG5ldyByb290LlxuICAgICAgaWYgKG5ld1Jvb3QgJiYgbmV3T3JpZ2luID4gb2xkT3JpZ2luKSB7XG4gICAgICAgIG5ld1Jvb3QgPSBuZXdSb290LnJlbW92ZUJlZm9yZShvd25lciwgbmV3TGV2ZWwsIG5ld09yaWdpbiAtIG9mZnNldFNoaWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdSb290ICYmIG5ld1RhaWxPZmZzZXQgPCBvbGRUYWlsT2Zmc2V0KSB7XG4gICAgICAgIG5ld1Jvb3QgPSBuZXdSb290LnJlbW92ZUFmdGVyKG93bmVyLCBuZXdMZXZlbCwgbmV3VGFpbE9mZnNldCAtIG9mZnNldFNoaWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChvZmZzZXRTaGlmdCkge1xuICAgICAgICBuZXdPcmlnaW4gLT0gb2Zmc2V0U2hpZnQ7XG4gICAgICAgIG5ld0NhcGFjaXR5IC09IG9mZnNldFNoaWZ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChsaXN0Ll9fb3duZXJJRCkge1xuICAgICAgbGlzdC5zaXplID0gbmV3Q2FwYWNpdHkgLSBuZXdPcmlnaW47XG4gICAgICBsaXN0Ll9vcmlnaW4gPSBuZXdPcmlnaW47XG4gICAgICBsaXN0Ll9jYXBhY2l0eSA9IG5ld0NhcGFjaXR5O1xuICAgICAgbGlzdC5fbGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgIGxpc3QuX3Jvb3QgPSBuZXdSb290O1xuICAgICAgbGlzdC5fdGFpbCA9IG5ld1RhaWw7XG4gICAgICBsaXN0Ll9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIGxpc3QuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICByZXR1cm4gbWFrZUxpc3QobmV3T3JpZ2luLCBuZXdDYXBhY2l0eSwgbmV3TGV2ZWwsIG5ld1Jvb3QsIG5ld1RhaWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvTGlzdFdpdGgobGlzdCwgbWVyZ2VyLCBpdGVyYWJsZXMpIHtcbiAgICB2YXIgaXRlcnMgPSBbXTtcbiAgICB2YXIgbWF4U2l6ZSA9IDA7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGl0ZXJhYmxlcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGl0ZXJhYmxlc1tpaV07XG4gICAgICB2YXIgaXRlciA9IEluZGV4ZWRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICBpZiAoaXRlci5zaXplID4gbWF4U2l6ZSkge1xuICAgICAgICBtYXhTaXplID0gaXRlci5zaXplO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICBpdGVyID0gaXRlci5tYXAoZnVuY3Rpb24odiApIHtyZXR1cm4gZnJvbUpTKHYpfSk7XG4gICAgICB9XG4gICAgICBpdGVycy5wdXNoKGl0ZXIpO1xuICAgIH1cbiAgICBpZiAobWF4U2l6ZSA+IGxpc3Quc2l6ZSkge1xuICAgICAgbGlzdCA9IGxpc3Quc2V0U2l6ZShtYXhTaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlSW50b0NvbGxlY3Rpb25XaXRoKGxpc3QsIG1lcmdlciwgaXRlcnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGFpbE9mZnNldChzaXplKSB7XG4gICAgcmV0dXJuIHNpemUgPCBTSVpFID8gMCA6ICgoKHNpemUgLSAxKSA+Pj4gU0hJRlQpIDw8IFNISUZUKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE9yZGVyZWRNYXAsIHNyY19NYXBfX01hcCk7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gT3JkZXJlZE1hcCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eU9yZGVyZWRNYXAoKSA6XG4gICAgICAgIGlzT3JkZXJlZE1hcCh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5T3JkZXJlZE1hcCgpLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obWFwICkge1xuICAgICAgICAgIHZhciBpdGVyID0gS2V5ZWRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgICAgICBpdGVyLmZvckVhY2goZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gbWFwLnNldChrLCB2KX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBPcmRlcmVkTWFwLm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIHRoaXMoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ09yZGVyZWRNYXAgeycsICd9Jyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrLCBub3RTZXRWYWx1ZSkge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5fbWFwLmdldChrKTtcbiAgICAgIHJldHVybiBpbmRleCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fbGlzdC5nZXQoaW5kZXgpWzFdIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLl9tYXAuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fbGlzdC5jbGVhcigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eU9yZGVyZWRNYXAoKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oaywgdikge1xuICAgICAgcmV0dXJuIHVwZGF0ZU9yZGVyZWRNYXAodGhpcywgaywgdik7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiB1cGRhdGVPcmRlcmVkTWFwKHRoaXMsIGssIE5PVF9TRVQpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS53YXNBbHRlcmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLndhc0FsdGVyZWQoKSB8fCB0aGlzLl9saXN0Lndhc0FsdGVyZWQoKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLl9saXN0Ll9faXRlcmF0ZShcbiAgICAgICAgZnVuY3Rpb24oZW50cnkgKSB7cmV0dXJuIGVudHJ5ICYmIGZuKGVudHJ5WzFdLCBlbnRyeVswXSwgdGhpcyQwKX0sXG4gICAgICAgIHJldmVyc2VcbiAgICAgICk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGlzdC5mcm9tRW50cnlTZXEoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG5ld01hcCA9IHRoaXMuX21hcC5fX2Vuc3VyZU93bmVyKG93bmVySUQpO1xuICAgICAgdmFyIG5ld0xpc3QgPSB0aGlzLl9saXN0Ll9fZW5zdXJlT3duZXIob3duZXJJRCk7XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICB0aGlzLl9tYXAgPSBuZXdNYXA7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBuZXdMaXN0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlT3JkZXJlZE1hcChuZXdNYXAsIG5ld0xpc3QsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNPcmRlcmVkTWFwKG1heWJlT3JkZXJlZE1hcCkge1xuICAgIHJldHVybiBpc01hcChtYXliZU9yZGVyZWRNYXApICYmIGlzT3JkZXJlZChtYXliZU9yZGVyZWRNYXApO1xuICB9XG5cbiAgT3JkZXJlZE1hcC5pc09yZGVyZWRNYXAgPSBpc09yZGVyZWRNYXA7XG5cbiAgT3JkZXJlZE1hcC5wcm90b3R5cGVbSVNfT1JERVJFRF9TRU5USU5FTF0gPSB0cnVlO1xuICBPcmRlcmVkTWFwLnByb3RvdHlwZVtERUxFVEVdID0gT3JkZXJlZE1hcC5wcm90b3R5cGUucmVtb3ZlO1xuXG5cblxuICBmdW5jdGlvbiBtYWtlT3JkZXJlZE1hcChtYXAsIGxpc3QsIG93bmVySUQsIGhhc2gpIHtcbiAgICB2YXIgb21hcCA9IE9iamVjdC5jcmVhdGUoT3JkZXJlZE1hcC5wcm90b3R5cGUpO1xuICAgIG9tYXAuc2l6ZSA9IG1hcCA/IG1hcC5zaXplIDogMDtcbiAgICBvbWFwLl9tYXAgPSBtYXA7XG4gICAgb21hcC5fbGlzdCA9IGxpc3Q7XG4gICAgb21hcC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIG9tYXAuX19oYXNoID0gaGFzaDtcbiAgICByZXR1cm4gb21hcDtcbiAgfVxuXG4gIHZhciBFTVBUWV9PUkRFUkVEX01BUDtcbiAgZnVuY3Rpb24gZW1wdHlPcmRlcmVkTWFwKCkge1xuICAgIHJldHVybiBFTVBUWV9PUkRFUkVEX01BUCB8fCAoRU1QVFlfT1JERVJFRF9NQVAgPSBtYWtlT3JkZXJlZE1hcChlbXB0eU1hcCgpLCBlbXB0eUxpc3QoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlT3JkZXJlZE1hcChvbWFwLCBrLCB2KSB7XG4gICAgdmFyIG1hcCA9IG9tYXAuX21hcDtcbiAgICB2YXIgbGlzdCA9IG9tYXAuX2xpc3Q7XG4gICAgdmFyIGkgPSBtYXAuZ2V0KGspO1xuICAgIHZhciBoYXMgPSBpICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIG5ld01hcDtcbiAgICB2YXIgbmV3TGlzdDtcbiAgICBpZiAodiA9PT0gTk9UX1NFVCkgeyAvLyByZW1vdmVkXG4gICAgICBpZiAoIWhhcykge1xuICAgICAgICByZXR1cm4gb21hcDtcbiAgICAgIH1cbiAgICAgIGlmIChsaXN0LnNpemUgPj0gU0laRSAmJiBsaXN0LnNpemUgPj0gbWFwLnNpemUgKiAyKSB7XG4gICAgICAgIG5ld0xpc3QgPSBsaXN0LmZpbHRlcihmdW5jdGlvbihlbnRyeSwgaWR4KSAge3JldHVybiBlbnRyeSAhPT0gdW5kZWZpbmVkICYmIGkgIT09IGlkeH0pO1xuICAgICAgICBuZXdNYXAgPSBuZXdMaXN0LnRvS2V5ZWRTZXEoKS5tYXAoZnVuY3Rpb24oZW50cnkgKSB7cmV0dXJuIGVudHJ5WzBdfSkuZmxpcCgpLnRvTWFwKCk7XG4gICAgICAgIGlmIChvbWFwLl9fb3duZXJJRCkge1xuICAgICAgICAgIG5ld01hcC5fX293bmVySUQgPSBuZXdMaXN0Ll9fb3duZXJJRCA9IG9tYXAuX19vd25lcklEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdNYXAgPSBtYXAucmVtb3ZlKGspO1xuICAgICAgICBuZXdMaXN0ID0gaSA9PT0gbGlzdC5zaXplIC0gMSA/IGxpc3QucG9wKCkgOiBsaXN0LnNldChpLCB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKSB7XG4gICAgICAgIGlmICh2ID09PSBsaXN0LmdldChpKVsxXSkge1xuICAgICAgICAgIHJldHVybiBvbWFwO1xuICAgICAgICB9XG4gICAgICAgIG5ld01hcCA9IG1hcDtcbiAgICAgICAgbmV3TGlzdCA9IGxpc3Quc2V0KGksIFtrLCB2XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdNYXAgPSBtYXAuc2V0KGssIGxpc3Quc2l6ZSk7XG4gICAgICAgIG5ld0xpc3QgPSBsaXN0LnNldChsaXN0LnNpemUsIFtrLCB2XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvbWFwLl9fb3duZXJJRCkge1xuICAgICAgb21hcC5zaXplID0gbmV3TWFwLnNpemU7XG4gICAgICBvbWFwLl9tYXAgPSBuZXdNYXA7XG4gICAgICBvbWFwLl9saXN0ID0gbmV3TGlzdDtcbiAgICAgIG9tYXAuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIG9tYXA7XG4gICAgfVxuICAgIHJldHVybiBtYWtlT3JkZXJlZE1hcChuZXdNYXAsIG5ld0xpc3QpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU3RhY2ssIEluZGV4ZWRDb2xsZWN0aW9uKTtcblxuICAgIC8vIEBwcmFnbWEgQ29uc3RydWN0aW9uXG5cbiAgICBmdW5jdGlvbiBTdGFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eVN0YWNrKCkgOlxuICAgICAgICBpc1N0YWNrKHZhbHVlKSA/IHZhbHVlIDpcbiAgICAgICAgZW1wdHlTdGFjaygpLnVuc2hpZnRBbGwodmFsdWUpO1xuICAgIH1cblxuICAgIFN0YWNrLm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIHRoaXMoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdTdGFjayBbJywgJ10nKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICAgIFN0YWNrLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgIHdoaWxlIChoZWFkICYmIGluZGV4LS0pIHtcbiAgICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZWFkID8gaGVhZC52YWx1ZSA6IG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hlYWQgJiYgdGhpcy5faGVhZC52YWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICAgIFN0YWNrLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuc2l6ZSArIGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgICBmb3IgKHZhciBpaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpaSA+PSAwOyBpaS0tKSB7XG4gICAgICAgIGhlYWQgPSB7XG4gICAgICAgICAgdmFsdWU6IGFyZ3VtZW50c1tpaV0sXG4gICAgICAgICAgbmV4dDogaGVhZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBoZWFkO1xuICAgICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlU3RhY2sobmV3U2l6ZSwgaGVhZCk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS5wdXNoQWxsID0gZnVuY3Rpb24oaXRlcikge1xuICAgICAgaXRlciA9IEluZGV4ZWRJdGVyYWJsZShpdGVyKTtcbiAgICAgIGlmIChpdGVyLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLnNpemU7XG4gICAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgICBpdGVyLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlICkge1xuICAgICAgICBuZXdTaXplKys7XG4gICAgICAgIGhlYWQgPSB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIG5leHQ6IGhlYWRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBoZWFkO1xuICAgICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlU3RhY2sobmV3U2l6ZSwgaGVhZCk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWNlKDEpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnVuc2hpZnRBbGwgPSBmdW5jdGlvbihpdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoQWxsKGl0ZXIpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy5faGVhZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlTdGFjaygpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICBpZiAod2hvbGVTbGljZShiZWdpbiwgZW5kLCB0aGlzLnNpemUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIHJlc29sdmVkQmVnaW4gPSByZXNvbHZlQmVnaW4oYmVnaW4sIHRoaXMuc2l6ZSk7XG4gICAgICB2YXIgcmVzb2x2ZWRFbmQgPSByZXNvbHZlRW5kKGVuZCwgdGhpcy5zaXplKTtcbiAgICAgIGlmIChyZXNvbHZlZEVuZCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICAgIC8vIHN1cGVyLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgICAgICByZXR1cm4gSW5kZXhlZENvbGxlY3Rpb24ucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XG4gICAgICB9XG4gICAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuc2l6ZSAtIHJlc29sdmVkQmVnaW47XG4gICAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgICB3aGlsZSAocmVzb2x2ZWRCZWdpbi0tKSB7XG4gICAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgdGhpcy5faGVhZCA9IGhlYWQ7XG4gICAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VTdGFjayhuZXdTaXplLCBoZWFkKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNdXRhYmlsaXR5XG5cbiAgICBTdGFjay5wcm90b3R5cGUuX19lbnN1cmVPd25lciA9IGZ1bmN0aW9uKG93bmVySUQpIHtcbiAgICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICghb3duZXJJRCkge1xuICAgICAgICB0aGlzLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VTdGFjayh0aGlzLnNpemUsIHRoaXMuX2hlYWQsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBJdGVyYXRpb25cblxuICAgIFN0YWNrLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSgpLl9faXRlcmF0ZShmbik7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBpZiAoZm4obm9kZS52YWx1ZSwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSgpLl9faXRlcmF0b3IodHlwZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNTdGFjayhtYXliZVN0YWNrKSB7XG4gICAgcmV0dXJuICEhKG1heWJlU3RhY2sgJiYgbWF5YmVTdGFja1tJU19TVEFDS19TRU5USU5FTF0pO1xuICB9XG5cbiAgU3RhY2suaXNTdGFjayA9IGlzU3RhY2s7XG5cbiAgdmFyIElTX1NUQUNLX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfU1RBQ0tfX0BAJztcblxuICB2YXIgU3RhY2tQcm90b3R5cGUgPSBTdGFjay5wcm90b3R5cGU7XG4gIFN0YWNrUHJvdG90eXBlW0lTX1NUQUNLX1NFTlRJTkVMXSA9IHRydWU7XG4gIFN0YWNrUHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSBNYXBQcm90b3R5cGUud2l0aE11dGF0aW9ucztcbiAgU3RhY2tQcm90b3R5cGUuYXNNdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzTXV0YWJsZTtcbiAgU3RhY2tQcm90b3R5cGUuYXNJbW11dGFibGUgPSBNYXBQcm90b3R5cGUuYXNJbW11dGFibGU7XG4gIFN0YWNrUHJvdG90eXBlLndhc0FsdGVyZWQgPSBNYXBQcm90b3R5cGUud2FzQWx0ZXJlZDtcblxuXG4gIGZ1bmN0aW9uIG1ha2VTdGFjayhzaXplLCBoZWFkLCBvd25lcklELCBoYXNoKSB7XG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUoU3RhY2tQcm90b3R5cGUpO1xuICAgIG1hcC5zaXplID0gc2l6ZTtcbiAgICBtYXAuX2hlYWQgPSBoZWFkO1xuICAgIG1hcC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIG1hcC5fX2hhc2ggPSBoYXNoO1xuICAgIG1hcC5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbWFwO1xuICB9XG5cbiAgdmFyIEVNUFRZX1NUQUNLO1xuICBmdW5jdGlvbiBlbXB0eVN0YWNrKCkge1xuICAgIHJldHVybiBFTVBUWV9TVEFDSyB8fCAoRU1QVFlfU1RBQ0sgPSBtYWtlU3RhY2soMCkpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3Moc3JjX1NldF9fU2V0LCBTZXRDb2xsZWN0aW9uKTtcblxuICAgIC8vIEBwcmFnbWEgQ29uc3RydWN0aW9uXG5cbiAgICBmdW5jdGlvbiBzcmNfU2V0X19TZXQodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlTZXQoKSA6XG4gICAgICAgIGlzU2V0KHZhbHVlKSAmJiAhaXNPcmRlcmVkKHZhbHVlKSA/IHZhbHVlIDpcbiAgICAgICAgZW1wdHlTZXQoKS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKHNldCApIHtcbiAgICAgICAgICB2YXIgaXRlciA9IFNldEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbih2ICkge3JldHVybiBzZXQuYWRkKHYpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNyY19TZXRfX1NldC5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5mcm9tS2V5cyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcyhLZXllZEl0ZXJhYmxlKHZhbHVlKS5rZXlTZXEoKSk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ1NldCB7JywgJ30nKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAuaGFzKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB1cGRhdGVTZXQodGhpcywgdGhpcy5fbWFwLnNldCh2YWx1ZSwgdHJ1ZSkpO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdXBkYXRlU2V0KHRoaXMsIHRoaXMuX21hcC5yZW1vdmUodmFsdWUpKTtcbiAgICB9O1xuXG4gICAgc3JjX1NldF9fU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHVwZGF0ZVNldCh0aGlzLCB0aGlzLl9tYXAuY2xlYXIoKSk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQ29tcG9zaXRpb25cblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUudW5pb24gPSBmdW5jdGlvbigpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgIGl0ZXJzID0gaXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHggKSB7cmV0dXJuIHguc2l6ZSAhPT0gMH0pO1xuICAgICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDAgJiYgIXRoaXMuX19vd25lcklEICYmIGl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihpdGVyc1swXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKHNldCApIHtcbiAgICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGl0ZXJzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIFNldEl0ZXJhYmxlKGl0ZXJzW2lpXSkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gc2V0LmFkZCh2YWx1ZSl9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24oKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaXRlcnMgPSBpdGVycy5tYXAoZnVuY3Rpb24oaXRlciApIHtyZXR1cm4gU2V0SXRlcmFibGUoaXRlcil9KTtcbiAgICAgIHZhciBvcmlnaW5hbFNldCA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKHNldCApIHtcbiAgICAgICAgb3JpZ2luYWxTZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSApIHtcbiAgICAgICAgICBpZiAoIWl0ZXJzLmV2ZXJ5KGZ1bmN0aW9uKGl0ZXIgKSB7cmV0dXJuIGl0ZXIuaW5jbHVkZXModmFsdWUpfSkpIHtcbiAgICAgICAgICAgIHNldC5yZW1vdmUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgc3JjX1NldF9fU2V0LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKCkge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGl0ZXJzID0gaXRlcnMubWFwKGZ1bmN0aW9uKGl0ZXIgKSB7cmV0dXJuIFNldEl0ZXJhYmxlKGl0ZXIpfSk7XG4gICAgICB2YXIgb3JpZ2luYWxTZXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbihzZXQgKSB7XG4gICAgICAgIG9yaWdpbmFsU2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUgKSB7XG4gICAgICAgICAgaWYgKGl0ZXJzLnNvbWUoZnVuY3Rpb24oaXRlciApIHtyZXR1cm4gaXRlci5pbmNsdWRlcyh2YWx1ZSl9KSkge1xuICAgICAgICAgICAgc2V0LnJlbW92ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy51bmlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLm1lcmdlV2l0aCA9IGZ1bmN0aW9uKG1lcmdlcikge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIHRoaXMudW5pb24uYXBwbHkodGhpcywgaXRlcnMpO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICAvLyBMYXRlIGJpbmRpbmdcbiAgICAgIHJldHVybiBPcmRlcmVkU2V0KHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IpKTtcbiAgICB9O1xuXG4gICAgc3JjX1NldF9fU2V0LnByb3RvdHlwZS5zb3J0QnkgPSBmdW5jdGlvbihtYXBwZXIsIGNvbXBhcmF0b3IpIHtcbiAgICAgIC8vIExhdGUgYmluZGluZ1xuICAgICAgcmV0dXJuIE9yZGVyZWRTZXQoc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKSk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC53YXNBbHRlcmVkKCk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLl9tYXAuX19pdGVyYXRlKGZ1bmN0aW9uKF8sIGspICB7cmV0dXJuIGZuKGssIGssIHRoaXMkMCl9LCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgc3JjX1NldF9fU2V0LnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC5tYXAoZnVuY3Rpb24oXywgaykgIHtyZXR1cm4ga30pLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuX19lbnN1cmVPd25lciA9IGZ1bmN0aW9uKG93bmVySUQpIHtcbiAgICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgICAgIGlmICghb3duZXJJRCkge1xuICAgICAgICB0aGlzLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgICAgIHRoaXMuX21hcCA9IG5ld01hcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fX21ha2UobmV3TWFwLCBvd25lcklEKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNTZXQobWF5YmVTZXQpIHtcbiAgICByZXR1cm4gISEobWF5YmVTZXQgJiYgbWF5YmVTZXRbSVNfU0VUX1NFTlRJTkVMXSk7XG4gIH1cblxuICBzcmNfU2V0X19TZXQuaXNTZXQgPSBpc1NldDtcblxuICB2YXIgSVNfU0VUX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfU0VUX19AQCc7XG5cbiAgdmFyIFNldFByb3RvdHlwZSA9IHNyY19TZXRfX1NldC5wcm90b3R5cGU7XG4gIFNldFByb3RvdHlwZVtJU19TRVRfU0VOVElORUxdID0gdHJ1ZTtcbiAgU2V0UHJvdG90eXBlW0RFTEVURV0gPSBTZXRQcm90b3R5cGUucmVtb3ZlO1xuICBTZXRQcm90b3R5cGUubWVyZ2VEZWVwID0gU2V0UHJvdG90eXBlLm1lcmdlO1xuICBTZXRQcm90b3R5cGUubWVyZ2VEZWVwV2l0aCA9IFNldFByb3RvdHlwZS5tZXJnZVdpdGg7XG4gIFNldFByb3RvdHlwZS53aXRoTXV0YXRpb25zID0gTWFwUHJvdG90eXBlLndpdGhNdXRhdGlvbnM7XG4gIFNldFByb3RvdHlwZS5hc011dGFibGUgPSBNYXBQcm90b3R5cGUuYXNNdXRhYmxlO1xuICBTZXRQcm90b3R5cGUuYXNJbW11dGFibGUgPSBNYXBQcm90b3R5cGUuYXNJbW11dGFibGU7XG5cbiAgU2V0UHJvdG90eXBlLl9fZW1wdHkgPSBlbXB0eVNldDtcbiAgU2V0UHJvdG90eXBlLl9fbWFrZSA9IG1ha2VTZXQ7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2V0KHNldCwgbmV3TWFwKSB7XG4gICAgaWYgKHNldC5fX293bmVySUQpIHtcbiAgICAgIHNldC5zaXplID0gbmV3TWFwLnNpemU7XG4gICAgICBzZXQuX21hcCA9IG5ld01hcDtcbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXAgPT09IHNldC5fbWFwID8gc2V0IDpcbiAgICAgIG5ld01hcC5zaXplID09PSAwID8gc2V0Ll9fZW1wdHkoKSA6XG4gICAgICBzZXQuX19tYWtlKG5ld01hcCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU2V0KG1hcCwgb3duZXJJRCkge1xuICAgIHZhciBzZXQgPSBPYmplY3QuY3JlYXRlKFNldFByb3RvdHlwZSk7XG4gICAgc2V0LnNpemUgPSBtYXAgPyBtYXAuc2l6ZSA6IDA7XG4gICAgc2V0Ll9tYXAgPSBtYXA7XG4gICAgc2V0Ll9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIHZhciBFTVBUWV9TRVQ7XG4gIGZ1bmN0aW9uIGVtcHR5U2V0KCkge1xuICAgIHJldHVybiBFTVBUWV9TRVQgfHwgKEVNUFRZX1NFVCA9IG1ha2VTZXQoZW1wdHlNYXAoKSkpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoT3JkZXJlZFNldCwgc3JjX1NldF9fU2V0KTtcblxuICAgIC8vIEBwcmFnbWEgQ29uc3RydWN0aW9uXG5cbiAgICBmdW5jdGlvbiBPcmRlcmVkU2V0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5T3JkZXJlZFNldCgpIDpcbiAgICAgICAgaXNPcmRlcmVkU2V0KHZhbHVlKSA/IHZhbHVlIDpcbiAgICAgICAgZW1wdHlPcmRlcmVkU2V0KCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbihzZXQgKSB7XG4gICAgICAgICAgdmFyIGl0ZXIgPSBTZXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgICAgICBpdGVyLmZvckVhY2goZnVuY3Rpb24odiApIHtyZXR1cm4gc2V0LmFkZCh2KX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBPcmRlcmVkU2V0Lm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIHRoaXMoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZFNldC5mcm9tS2V5cyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcyhLZXllZEl0ZXJhYmxlKHZhbHVlKS5rZXlTZXEoKSk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRTZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdPcmRlcmVkU2V0IHsnLCAnfScpO1xuICAgIH07XG5cblxuICBmdW5jdGlvbiBpc09yZGVyZWRTZXQobWF5YmVPcmRlcmVkU2V0KSB7XG4gICAgcmV0dXJuIGlzU2V0KG1heWJlT3JkZXJlZFNldCkgJiYgaXNPcmRlcmVkKG1heWJlT3JkZXJlZFNldCk7XG4gIH1cblxuICBPcmRlcmVkU2V0LmlzT3JkZXJlZFNldCA9IGlzT3JkZXJlZFNldDtcblxuICB2YXIgT3JkZXJlZFNldFByb3RvdHlwZSA9IE9yZGVyZWRTZXQucHJvdG90eXBlO1xuICBPcmRlcmVkU2V0UHJvdG90eXBlW0lTX09SREVSRURfU0VOVElORUxdID0gdHJ1ZTtcblxuICBPcmRlcmVkU2V0UHJvdG90eXBlLl9fZW1wdHkgPSBlbXB0eU9yZGVyZWRTZXQ7XG4gIE9yZGVyZWRTZXRQcm90b3R5cGUuX19tYWtlID0gbWFrZU9yZGVyZWRTZXQ7XG5cbiAgZnVuY3Rpb24gbWFrZU9yZGVyZWRTZXQobWFwLCBvd25lcklEKSB7XG4gICAgdmFyIHNldCA9IE9iamVjdC5jcmVhdGUoT3JkZXJlZFNldFByb3RvdHlwZSk7XG4gICAgc2V0LnNpemUgPSBtYXAgPyBtYXAuc2l6ZSA6IDA7XG4gICAgc2V0Ll9tYXAgPSBtYXA7XG4gICAgc2V0Ll9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIHZhciBFTVBUWV9PUkRFUkVEX1NFVDtcbiAgZnVuY3Rpb24gZW1wdHlPcmRlcmVkU2V0KCkge1xuICAgIHJldHVybiBFTVBUWV9PUkRFUkVEX1NFVCB8fCAoRU1QVFlfT1JERVJFRF9TRVQgPSBtYWtlT3JkZXJlZFNldChlbXB0eU9yZGVyZWRNYXAoKSkpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoUmVjb3JkLCBLZXllZENvbGxlY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUmVjb3JkKGRlZmF1bHRWYWx1ZXMsIG5hbWUpIHtcbiAgICAgIHZhciBoYXNJbml0aWFsaXplZDtcblxuICAgICAgdmFyIFJlY29yZFR5cGUgPSBmdW5jdGlvbiBSZWNvcmQodmFsdWVzKSB7XG4gICAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBSZWNvcmRUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVjb3JkVHlwZSkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJlY29yZFR5cGUodmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgaGFzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGVmYXVsdFZhbHVlcyk7XG4gICAgICAgICAgc2V0UHJvcHMoUmVjb3JkVHlwZVByb3RvdHlwZSwga2V5cyk7XG4gICAgICAgICAgUmVjb3JkVHlwZVByb3RvdHlwZS5zaXplID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgUmVjb3JkVHlwZVByb3RvdHlwZS5fbmFtZSA9IG5hbWU7XG4gICAgICAgICAgUmVjb3JkVHlwZVByb3RvdHlwZS5fa2V5cyA9IGtleXM7XG4gICAgICAgICAgUmVjb3JkVHlwZVByb3RvdHlwZS5fZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRWYWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFwID0gc3JjX01hcF9fTWFwKHZhbHVlcyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgUmVjb3JkVHlwZVByb3RvdHlwZSA9IFJlY29yZFR5cGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZWNvcmRQcm90b3R5cGUpO1xuICAgICAgUmVjb3JkVHlwZVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlY29yZFR5cGU7XG5cbiAgICAgIHJldHVybiBSZWNvcmRUeXBlO1xuICAgIH1cblxuICAgIFJlY29yZC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcocmVjb3JkTmFtZSh0aGlzKSArICcgeycsICd9Jyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBSZWNvcmQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsdWVzLmhhc093blByb3BlcnR5KGspO1xuICAgIH07XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGssIG5vdFNldFZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGspKSB7XG4gICAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBkZWZhdWx0VmFsID0gdGhpcy5fZGVmYXVsdFZhbHVlc1trXTtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAgPyB0aGlzLl9tYXAuZ2V0KGssIGRlZmF1bHRWYWwpIDogZGVmYXVsdFZhbDtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICAgIFJlY29yZC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLl9tYXAgJiYgdGhpcy5fbWFwLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIFJlY29yZFR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgcmV0dXJuIFJlY29yZFR5cGUuX2VtcHR5IHx8IChSZWNvcmRUeXBlLl9lbXB0eSA9IG1ha2VSZWNvcmQodGhpcywgZW1wdHlNYXAoKSkpO1xuICAgIH07XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgIGlmICghdGhpcy5oYXMoaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IHVua25vd24ga2V5IFwiJyArIGsgKyAnXCIgb24gJyArIHJlY29yZE5hbWUodGhpcykpO1xuICAgICAgfVxuICAgICAgdmFyIG5ld01hcCA9IHRoaXMuX21hcCAmJiB0aGlzLl9tYXAuc2V0KGssIHYpO1xuICAgICAgaWYgKHRoaXMuX19vd25lcklEIHx8IG5ld01hcCA9PT0gdGhpcy5fbWFwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VSZWNvcmQodGhpcywgbmV3TWFwKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGspKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG5ld01hcCA9IHRoaXMuX21hcCAmJiB0aGlzLl9tYXAucmVtb3ZlKGspO1xuICAgICAgaWYgKHRoaXMuX19vd25lcklEIHx8IG5ld01hcCA9PT0gdGhpcy5fbWFwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VSZWNvcmQodGhpcywgbmV3TWFwKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS53YXNBbHRlcmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLndhc0FsdGVyZWQoKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIEtleWVkSXRlcmFibGUodGhpcy5fZGVmYXVsdFZhbHVlcykubWFwKGZ1bmN0aW9uKF8sIGspICB7cmV0dXJuIHRoaXMkMC5nZXQoayl9KS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gS2V5ZWRJdGVyYWJsZSh0aGlzLl9kZWZhdWx0VmFsdWVzKS5tYXAoZnVuY3Rpb24oXywgaykgIHtyZXR1cm4gdGhpcyQwLmdldChrKX0pLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIFJlY29yZC5wcm90b3R5cGUuX19lbnN1cmVPd25lciA9IGZ1bmN0aW9uKG93bmVySUQpIHtcbiAgICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAgJiYgdGhpcy5fbWFwLl9fZW5zdXJlT3duZXIob3duZXJJRCk7XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICB0aGlzLl9tYXAgPSBuZXdNYXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VSZWNvcmQodGhpcywgbmV3TWFwLCBvd25lcklEKTtcbiAgICB9O1xuXG5cbiAgdmFyIFJlY29yZFByb3RvdHlwZSA9IFJlY29yZC5wcm90b3R5cGU7XG4gIFJlY29yZFByb3RvdHlwZVtERUxFVEVdID0gUmVjb3JkUHJvdG90eXBlLnJlbW92ZTtcbiAgUmVjb3JkUHJvdG90eXBlLmRlbGV0ZUluID1cbiAgUmVjb3JkUHJvdG90eXBlLnJlbW92ZUluID0gTWFwUHJvdG90eXBlLnJlbW92ZUluO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2UgPSBNYXBQcm90b3R5cGUubWVyZ2U7XG4gIFJlY29yZFByb3RvdHlwZS5tZXJnZVdpdGggPSBNYXBQcm90b3R5cGUubWVyZ2VXaXRoO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2VJbiA9IE1hcFByb3RvdHlwZS5tZXJnZUluO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2VEZWVwID0gTWFwUHJvdG90eXBlLm1lcmdlRGVlcDtcbiAgUmVjb3JkUHJvdG90eXBlLm1lcmdlRGVlcFdpdGggPSBNYXBQcm90b3R5cGUubWVyZ2VEZWVwV2l0aDtcbiAgUmVjb3JkUHJvdG90eXBlLm1lcmdlRGVlcEluID0gTWFwUHJvdG90eXBlLm1lcmdlRGVlcEluO1xuICBSZWNvcmRQcm90b3R5cGUuc2V0SW4gPSBNYXBQcm90b3R5cGUuc2V0SW47XG4gIFJlY29yZFByb3RvdHlwZS51cGRhdGUgPSBNYXBQcm90b3R5cGUudXBkYXRlO1xuICBSZWNvcmRQcm90b3R5cGUudXBkYXRlSW4gPSBNYXBQcm90b3R5cGUudXBkYXRlSW47XG4gIFJlY29yZFByb3RvdHlwZS53aXRoTXV0YXRpb25zID0gTWFwUHJvdG90eXBlLndpdGhNdXRhdGlvbnM7XG4gIFJlY29yZFByb3RvdHlwZS5hc011dGFibGUgPSBNYXBQcm90b3R5cGUuYXNNdXRhYmxlO1xuICBSZWNvcmRQcm90b3R5cGUuYXNJbW11dGFibGUgPSBNYXBQcm90b3R5cGUuYXNJbW11dGFibGU7XG5cblxuICBmdW5jdGlvbiBtYWtlUmVjb3JkKGxpa2VSZWNvcmQsIG1hcCwgb3duZXJJRCkge1xuICAgIHZhciByZWNvcmQgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihsaWtlUmVjb3JkKSk7XG4gICAgcmVjb3JkLl9tYXAgPSBtYXA7XG4gICAgcmVjb3JkLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgcmV0dXJuIHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY29yZE5hbWUocmVjb3JkKSB7XG4gICAgcmV0dXJuIHJlY29yZC5fbmFtZSB8fCByZWNvcmQuY29uc3RydWN0b3IubmFtZSB8fCAnUmVjb3JkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3BzKHByb3RvdHlwZSwgbmFtZXMpIHtcbiAgICB0cnkge1xuICAgICAgbmFtZXMuZm9yRWFjaChzZXRQcm9wLmJpbmQodW5kZWZpbmVkLCBwcm90b3R5cGUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5IGZhaWxlZC4gUHJvYmFibHkgSUU4LlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3AocHJvdG90eXBlLCBuYW1lKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaW52YXJpYW50KHRoaXMuX19vd25lcklELCAnQ2Fubm90IHNldCBvbiBhbiBpbW11dGFibGUgcmVjb3JkLicpO1xuICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhaXNJdGVyYWJsZShiKSB8fFxuICAgICAgYS5zaXplICE9PSB1bmRlZmluZWQgJiYgYi5zaXplICE9PSB1bmRlZmluZWQgJiYgYS5zaXplICE9PSBiLnNpemUgfHxcbiAgICAgIGEuX19oYXNoICE9PSB1bmRlZmluZWQgJiYgYi5fX2hhc2ggIT09IHVuZGVmaW5lZCAmJiBhLl9faGFzaCAhPT0gYi5fX2hhc2ggfHxcbiAgICAgIGlzS2V5ZWQoYSkgIT09IGlzS2V5ZWQoYikgfHxcbiAgICAgIGlzSW5kZXhlZChhKSAhPT0gaXNJbmRleGVkKGIpIHx8XG4gICAgICBpc09yZGVyZWQoYSkgIT09IGlzT3JkZXJlZChiKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhLnNpemUgPT09IDAgJiYgYi5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbm90QXNzb2NpYXRpdmUgPSAhaXNBc3NvY2lhdGl2ZShhKTtcblxuICAgIGlmIChpc09yZGVyZWQoYSkpIHtcbiAgICAgIHZhciBlbnRyaWVzID0gYS5lbnRyaWVzKCk7XG4gICAgICByZXR1cm4gYi5ldmVyeShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgICB2YXIgZW50cnkgPSBlbnRyaWVzLm5leHQoKS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGlzKGVudHJ5WzFdLCB2KSAmJiAobm90QXNzb2NpYXRpdmUgfHwgaXMoZW50cnlbMF0sIGspKTtcbiAgICAgIH0pICYmIGVudHJpZXMubmV4dCgpLmRvbmU7XG4gICAgfVxuXG4gICAgdmFyIGZsaXBwZWQgPSBmYWxzZTtcblxuICAgIGlmIChhLnNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGIuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYS5jYWNoZVJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGEuY2FjaGVSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxpcHBlZCA9IHRydWU7XG4gICAgICAgIHZhciBfID0gYTtcbiAgICAgICAgYSA9IGI7XG4gICAgICAgIGIgPSBfO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhbGxFcXVhbCA9IHRydWU7XG4gICAgdmFyIGJTaXplID0gYi5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtcbiAgICAgIGlmIChub3RBc3NvY2lhdGl2ZSA/ICFhLmhhcyh2KSA6XG4gICAgICAgICAgZmxpcHBlZCA/ICFpcyh2LCBhLmdldChrLCBOT1RfU0VUKSkgOiAhaXMoYS5nZXQoaywgTk9UX1NFVCksIHYpKSB7XG4gICAgICAgIGFsbEVxdWFsID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhbGxFcXVhbCAmJiBhLnNpemUgPT09IGJTaXplO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoUmFuZ2UsIEluZGV4ZWRTZXEpO1xuXG4gICAgZnVuY3Rpb24gUmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCkge1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXApO1xuICAgICAgfVxuICAgICAgaW52YXJpYW50KHN0ZXAgIT09IDAsICdDYW5ub3Qgc3RlcCBhIFJhbmdlIGJ5IDAnKTtcbiAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICAgIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbmQgPSBJbmZpbml0eTtcbiAgICAgIH1cbiAgICAgIHN0ZXAgPSBzdGVwID09PSB1bmRlZmluZWQgPyAxIDogTWF0aC5hYnMoc3RlcCk7XG4gICAgICBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICAgICAgc3RlcCA9IC1zdGVwO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhcnQgPSBzdGFydDtcbiAgICAgIHRoaXMuX2VuZCA9IGVuZDtcbiAgICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICAgICAgdGhpcy5zaXplID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKChlbmQgLSBzdGFydCkgLyBzdGVwIC0gMSkgKyAxKTtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgaWYgKEVNUFRZX1JBTkdFKSB7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZX1JBTkdFO1xuICAgICAgICB9XG4gICAgICAgIEVNUFRZX1JBTkdFID0gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdSYW5nZSBbXSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1JhbmdlIFsgJyArXG4gICAgICAgIHRoaXMuX3N0YXJ0ICsgJy4uLicgKyB0aGlzLl9lbmQgK1xuICAgICAgICAodGhpcy5fc3RlcCA+IDEgPyAnIGJ5ICcgKyB0aGlzLl9zdGVwIDogJycpICtcbiAgICAgICcgXSc7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhcyhpbmRleCkgP1xuICAgICAgICB0aGlzLl9zdGFydCArIHdyYXBJbmRleCh0aGlzLCBpbmRleCkgKiB0aGlzLl9zdGVwIDpcbiAgICAgICAgbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICB2YXIgcG9zc2libGVJbmRleCA9IChzZWFyY2hWYWx1ZSAtIHRoaXMuX3N0YXJ0KSAvIHRoaXMuX3N0ZXA7XG4gICAgICByZXR1cm4gcG9zc2libGVJbmRleCA+PSAwICYmXG4gICAgICAgIHBvc3NpYmxlSW5kZXggPCB0aGlzLnNpemUgJiZcbiAgICAgICAgcG9zc2libGVJbmRleCA9PT0gTWF0aC5mbG9vcihwb3NzaWJsZUluZGV4KTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgaWYgKHdob2xlU2xpY2UoYmVnaW4sIGVuZCwgdGhpcy5zaXplKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGJlZ2luID0gcmVzb2x2ZUJlZ2luKGJlZ2luLCB0aGlzLnNpemUpO1xuICAgICAgZW5kID0gcmVzb2x2ZUVuZChlbmQsIHRoaXMuc2l6ZSk7XG4gICAgICBpZiAoZW5kIDw9IGJlZ2luKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2UoMCwgMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJhbmdlKHRoaXMuZ2V0KGJlZ2luLCB0aGlzLl9lbmQpLCB0aGlzLmdldChlbmQsIHRoaXMuX2VuZCksIHRoaXMuX3N0ZXApO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICB2YXIgb2Zmc2V0VmFsdWUgPSBzZWFyY2hWYWx1ZSAtIHRoaXMuX3N0YXJ0O1xuICAgICAgaWYgKG9mZnNldFZhbHVlICUgdGhpcy5fc3RlcCA9PT0gMCkge1xuICAgICAgICB2YXIgaW5kZXggPSBvZmZzZXRWYWx1ZSAvIHRoaXMuX3N0ZXA7XG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5zaXplKSB7XG4gICAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4T2Yoc2VhcmNoVmFsdWUpO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHZhciBtYXhJbmRleCA9IHRoaXMuc2l6ZSAtIDE7XG4gICAgICB2YXIgc3RlcCA9IHRoaXMuX3N0ZXA7XG4gICAgICB2YXIgdmFsdWUgPSByZXZlcnNlID8gdGhpcy5fc3RhcnQgKyBtYXhJbmRleCAqIHN0ZXAgOiB0aGlzLl9zdGFydDtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgICAgaWYgKGZuKHZhbHVlLCBpaSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGlpICsgMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSArPSByZXZlcnNlID8gLXN0ZXAgOiBzdGVwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlpO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBtYXhJbmRleCA9IHRoaXMuc2l6ZSAtIDE7XG4gICAgICB2YXIgc3RlcCA9IHRoaXMuX3N0ZXA7XG4gICAgICB2YXIgdmFsdWUgPSByZXZlcnNlID8gdGhpcy5fc3RhcnQgKyBtYXhJbmRleCAqIHN0ZXAgOiB0aGlzLl9zdGFydDtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgdiA9IHZhbHVlO1xuICAgICAgICB2YWx1ZSArPSByZXZlcnNlID8gLXN0ZXAgOiBzdGVwO1xuICAgICAgICByZXR1cm4gaWkgPiBtYXhJbmRleCA/IGl0ZXJhdG9yRG9uZSgpIDogaXRlcmF0b3JWYWx1ZSh0eXBlLCBpaSsrLCB2KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFJhbmdlID9cbiAgICAgICAgdGhpcy5fc3RhcnQgPT09IG90aGVyLl9zdGFydCAmJlxuICAgICAgICB0aGlzLl9lbmQgPT09IG90aGVyLl9lbmQgJiZcbiAgICAgICAgdGhpcy5fc3RlcCA9PT0gb3RoZXIuX3N0ZXAgOlxuICAgICAgICBkZWVwRXF1YWwodGhpcywgb3RoZXIpO1xuICAgIH07XG5cblxuICB2YXIgRU1QVFlfUkFOR0U7XG5cbiAgY3JlYXRlQ2xhc3MoUmVwZWF0LCBJbmRleGVkU2VxKTtcblxuICAgIGZ1bmN0aW9uIFJlcGVhdCh2YWx1ZSwgdGltZXMpIHtcbiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXBlYXQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVwZWF0KHZhbHVlLCB0aW1lcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zaXplID0gdGltZXMgPT09IHVuZGVmaW5lZCA/IEluZmluaXR5IDogTWF0aC5tYXgoMCwgdGltZXMpO1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBpZiAoRU1QVFlfUkVQRUFUKSB7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZX1JFUEVBVDtcbiAgICAgICAgfVxuICAgICAgICBFTVBUWV9SRVBFQVQgPSB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIFJlcGVhdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdSZXBlYXQgW10nO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdSZXBlYXQgWyAnICsgdGhpcy5fdmFsdWUgKyAnICcgKyB0aGlzLnNpemUgKyAnIHRpbWVzIF0nO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzKGluZGV4KSA/IHRoaXMuX3ZhbHVlIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIGlzKHRoaXMuX3ZhbHVlLCBzZWFyY2hWYWx1ZSk7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIHJldHVybiB3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIHNpemUpID8gdGhpcyA6XG4gICAgICAgIG5ldyBSZXBlYXQodGhpcy5fdmFsdWUsIHJlc29sdmVFbmQoZW5kLCBzaXplKSAtIHJlc29sdmVCZWdpbihiZWdpbiwgc2l6ZSkpO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgaWYgKGlzKHRoaXMuX3ZhbHVlLCBzZWFyY2hWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgaWYgKGlzKHRoaXMuX3ZhbHVlLCBzZWFyY2hWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHRoaXMuc2l6ZTsgaWkrKykge1xuICAgICAgICBpZiAoZm4odGhpcy5fdmFsdWUsIGlpLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gaWkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaWk7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSBcbiAgICAgICAge3JldHVybiBpaSA8IHRoaXMkMC5zaXplID8gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpaSsrLCB0aGlzJDAuX3ZhbHVlKSA6IGl0ZXJhdG9yRG9uZSgpfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgcmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUmVwZWF0ID9cbiAgICAgICAgaXModGhpcy5fdmFsdWUsIG90aGVyLl92YWx1ZSkgOlxuICAgICAgICBkZWVwRXF1YWwob3RoZXIpO1xuICAgIH07XG5cblxuICB2YXIgRU1QVFlfUkVQRUFUO1xuXG4gIC8qKlxuICAgKiBDb250cmlidXRlcyBhZGRpdGlvbmFsIG1ldGhvZHMgdG8gYSBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gbWl4aW4oY3RvciwgbWV0aG9kcykge1xuICAgIHZhciBrZXlDb3BpZXIgPSBmdW5jdGlvbihrZXkgKSB7IGN0b3IucHJvdG90eXBlW2tleV0gPSBtZXRob2RzW2tleV07IH07XG4gICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChrZXlDb3BpZXIpO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiZcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobWV0aG9kcykuZm9yRWFjaChrZXlDb3BpZXIpO1xuICAgIHJldHVybiBjdG9yO1xuICB9XG5cbiAgSXRlcmFibGUuSXRlcmF0b3IgPSBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yO1xuXG4gIG1peGluKEl0ZXJhYmxlLCB7XG5cbiAgICAvLyAjIyMgQ29udmVyc2lvbiB0byBvdGhlciB0eXBlc1xuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICBhc3NlcnROb3RJbmZpbml0ZSh0aGlzLnNpemUpO1xuICAgICAgdmFyIGFycmF5ID0gbmV3IEFycmF5KHRoaXMuc2l6ZSB8fCAwKTtcbiAgICAgIHRoaXMudmFsdWVTZXEoKS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaSkgIHsgYXJyYXlbaV0gPSB2OyB9KTtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9LFxuXG4gICAgdG9JbmRleGVkU2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgVG9JbmRleGVkU2VxdWVuY2UodGhpcyk7XG4gICAgfSxcblxuICAgIHRvSlM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TZXEoKS5tYXAoXG4gICAgICAgIGZ1bmN0aW9uKHZhbHVlICkge3JldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudG9KUyA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnRvSlMoKSA6IHZhbHVlfVxuICAgICAgKS5fX3RvSlMoKTtcbiAgICB9LFxuXG4gICAgdG9KU09OOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU2VxKCkubWFwKFxuICAgICAgICBmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnRvSlNPTigpIDogdmFsdWV9XG4gICAgICApLl9fdG9KUygpO1xuICAgIH0sXG5cbiAgICB0b0tleWVkU2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgVG9LZXllZFNlcXVlbmNlKHRoaXMsIHRydWUpO1xuICAgIH0sXG5cbiAgICB0b01hcDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBVc2UgTGF0ZSBCaW5kaW5nIGhlcmUgdG8gc29sdmUgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAgICByZXR1cm4gc3JjX01hcF9fTWFwKHRoaXMudG9LZXllZFNlcSgpKTtcbiAgICB9LFxuXG4gICAgdG9PYmplY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICAgIHRoaXMuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7IG9iamVjdFtrXSA9IHY7IH0pO1xuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LFxuXG4gICAgdG9PcmRlcmVkTWFwOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBPcmRlcmVkTWFwKHRoaXMudG9LZXllZFNlcSgpKTtcbiAgICB9LFxuXG4gICAgdG9PcmRlcmVkU2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBPcmRlcmVkU2V0KGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgICB9LFxuXG4gICAgdG9TZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgICAgcmV0dXJuIHNyY19TZXRfX1NldChpc0tleWVkKHRoaXMpID8gdGhpcy52YWx1ZVNlcSgpIDogdGhpcyk7XG4gICAgfSxcblxuICAgIHRvU2V0U2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgVG9TZXRTZXF1ZW5jZSh0aGlzKTtcbiAgICB9LFxuXG4gICAgdG9TZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzSW5kZXhlZCh0aGlzKSA/IHRoaXMudG9JbmRleGVkU2VxKCkgOlxuICAgICAgICBpc0tleWVkKHRoaXMpID8gdGhpcy50b0tleWVkU2VxKCkgOlxuICAgICAgICB0aGlzLnRvU2V0U2VxKCk7XG4gICAgfSxcblxuICAgIHRvU3RhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgICAgcmV0dXJuIFN0YWNrKGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgICB9LFxuXG4gICAgdG9MaXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBMaXN0KGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgQ29tbW9uIEphdmFTY3JpcHQgbWV0aG9kcyBhbmQgcHJvcGVydGllc1xuXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICdbSXRlcmFibGVdJztcbiAgICB9LFxuXG4gICAgX190b1N0cmluZzogZnVuY3Rpb24oaGVhZCwgdGFpbCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaGVhZCArIHRhaWw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGVhZCArICcgJyArIHRoaXMudG9TZXEoKS5tYXAodGhpcy5fX3RvU3RyaW5nTWFwcGVyKS5qb2luKCcsICcpICsgJyAnICsgdGFpbDtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgRVM2IENvbGxlY3Rpb24gbWV0aG9kcyAoRVM2IEFycmF5IGFuZCBNYXApXG5cbiAgICBjb25jYXQ6IGZ1bmN0aW9uKCkge3ZhciB2YWx1ZXMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBjb25jYXRGYWN0b3J5KHRoaXMsIHZhbHVlcykpO1xuICAgIH0sXG5cbiAgICBpbmNsdWRlczogZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvbWUoZnVuY3Rpb24odmFsdWUgKSB7cmV0dXJuIGlzKHZhbHVlLCBzZWFyY2hWYWx1ZSl9KTtcbiAgICB9LFxuXG4gICAgZW50cmllczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUyk7XG4gICAgfSxcblxuICAgIGV2ZXJ5OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgdGhpcy5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKCFwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCBjKSkge1xuICAgICAgICAgIHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9LFxuXG4gICAgZmlsdGVyOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBmaWx0ZXJGYWN0b3J5KHRoaXMsIHByZWRpY2F0ZSwgY29udGV4dCwgdHJ1ZSkpO1xuICAgIH0sXG5cbiAgICBmaW5kOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGVudHJ5ID8gZW50cnlbMV0gOiBub3RTZXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgZmluZEVudHJ5OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHZhciBmb3VuZDtcbiAgICAgIHRoaXMuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGssIGMpICB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCBjKSkge1xuICAgICAgICAgIGZvdW5kID0gW2ssIHZdO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSxcblxuICAgIGZpbmRMYXN0RW50cnk6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TZXEoKS5yZXZlcnNlKCkuZmluZEVudHJ5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIGZvckVhY2g6IGZ1bmN0aW9uKHNpZGVFZmZlY3QsIGNvbnRleHQpIHtcbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgICByZXR1cm4gdGhpcy5fX2l0ZXJhdGUoY29udGV4dCA/IHNpZGVFZmZlY3QuYmluZChjb250ZXh0KSA6IHNpZGVFZmZlY3QpO1xuICAgIH0sXG5cbiAgICBqb2luOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgICBzZXBhcmF0b3IgPSBzZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/ICcnICsgc2VwYXJhdG9yIDogJywnO1xuICAgICAgdmFyIGpvaW5lZCA9ICcnO1xuICAgICAgdmFyIGlzRmlyc3QgPSB0cnVlO1xuICAgICAgdGhpcy5fX2l0ZXJhdGUoZnVuY3Rpb24odiApIHtcbiAgICAgICAgaXNGaXJzdCA/IChpc0ZpcnN0ID0gZmFsc2UpIDogKGpvaW5lZCArPSBzZXBhcmF0b3IpO1xuICAgICAgICBqb2luZWQgKz0gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQgPyB2LnRvU3RyaW5nKCkgOiAnJztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGpvaW5lZDtcbiAgICB9LFxuXG4gICAga2V5czogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfS0VZUyk7XG4gICAgfSxcblxuICAgIG1hcDogZnVuY3Rpb24obWFwcGVyLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgbWFwRmFjdG9yeSh0aGlzLCBtYXBwZXIsIGNvbnRleHQpKTtcbiAgICB9LFxuXG4gICAgcmVkdWNlOiBmdW5jdGlvbihyZWR1Y2VyLCBpbml0aWFsUmVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgICBhc3NlcnROb3RJbmZpbml0ZSh0aGlzLnNpemUpO1xuICAgICAgdmFyIHJlZHVjdGlvbjtcbiAgICAgIHZhciB1c2VGaXJzdDtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICB1c2VGaXJzdCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWR1Y3Rpb24gPSBpbml0aWFsUmVkdWN0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKHVzZUZpcnN0KSB7XG4gICAgICAgICAgdXNlRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICByZWR1Y3Rpb24gPSB2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZHVjdGlvbiA9IHJlZHVjZXIuY2FsbChjb250ZXh0LCByZWR1Y3Rpb24sIHYsIGssIGMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZWR1Y3Rpb247XG4gICAgfSxcblxuICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbihyZWR1Y2VyLCBpbml0aWFsUmVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmV2ZXJzZWQgPSB0aGlzLnRvS2V5ZWRTZXEoKS5yZXZlcnNlKCk7XG4gICAgICByZXR1cm4gcmV2ZXJzZWQucmVkdWNlLmFwcGx5KHJldmVyc2VkLCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICByZXZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCByZXZlcnNlRmFjdG9yeSh0aGlzLCB0cnVlKSk7XG4gICAgfSxcblxuICAgIHNsaWNlOiBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc2xpY2VGYWN0b3J5KHRoaXMsIGJlZ2luLCBlbmQsIHRydWUpKTtcbiAgICB9LFxuXG4gICAgc29tZTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gIXRoaXMuZXZlcnkobm90KHByZWRpY2F0ZSksIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBzb3J0OiBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvcikpO1xuICAgIH0sXG5cbiAgICB2YWx1ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUyk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIE1vcmUgc2VxdWVudGlhbCBtZXRob2RzXG5cbiAgICBidXRMYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWNlKDAsIC0xKTtcbiAgICB9LFxuXG4gICAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplICE9PSB1bmRlZmluZWQgPyB0aGlzLnNpemUgPT09IDAgOiAhdGhpcy5zb21lKGZ1bmN0aW9uKCkgIHtyZXR1cm4gdHJ1ZX0pO1xuICAgIH0sXG5cbiAgICBjb3VudDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gZW5zdXJlU2l6ZShcbiAgICAgICAgcHJlZGljYXRlID8gdGhpcy50b1NlcSgpLmZpbHRlcihwcmVkaWNhdGUsIGNvbnRleHQpIDogdGhpc1xuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY291bnRCeTogZnVuY3Rpb24oZ3JvdXBlciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIGNvdW50QnlGYWN0b3J5KHRoaXMsIGdyb3VwZXIsIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBlcXVhbHM6IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICByZXR1cm4gZGVlcEVxdWFsKHRoaXMsIG90aGVyKTtcbiAgICB9LFxuXG4gICAgZW50cnlTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGl0ZXJhYmxlID0gdGhpcztcbiAgICAgIGlmIChpdGVyYWJsZS5fY2FjaGUpIHtcbiAgICAgICAgLy8gV2UgY2FjaGUgYXMgYW4gZW50cmllcyBhcnJheSwgc28gd2UgY2FuIGp1c3QgcmV0dXJuIHRoZSBjYWNoZSFcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheVNlcShpdGVyYWJsZS5fY2FjaGUpO1xuICAgICAgfVxuICAgICAgdmFyIGVudHJpZXNTZXF1ZW5jZSA9IGl0ZXJhYmxlLnRvU2VxKCkubWFwKGVudHJ5TWFwcGVyKS50b0luZGV4ZWRTZXEoKTtcbiAgICAgIGVudHJpZXNTZXF1ZW5jZS5mcm9tRW50cnlTZXEgPSBmdW5jdGlvbigpICB7cmV0dXJuIGl0ZXJhYmxlLnRvU2VxKCl9O1xuICAgICAgcmV0dXJuIGVudHJpZXNTZXF1ZW5jZTtcbiAgICB9LFxuXG4gICAgZmlsdGVyTm90OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihub3QocHJlZGljYXRlKSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIGZpbmRMYXN0OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy50b0tleWVkU2VxKCkucmV2ZXJzZSgpLmZpbmQocHJlZGljYXRlLCBjb250ZXh0LCBub3RTZXRWYWx1ZSk7XG4gICAgfSxcblxuICAgIGZpcnN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQocmV0dXJuVHJ1ZSk7XG4gICAgfSxcblxuICAgIGZsYXRNYXA6IGZ1bmN0aW9uKG1hcHBlciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZsYXRNYXBGYWN0b3J5KHRoaXMsIG1hcHBlciwgY29udGV4dCkpO1xuICAgIH0sXG5cbiAgICBmbGF0dGVuOiBmdW5jdGlvbihkZXB0aCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZsYXR0ZW5GYWN0b3J5KHRoaXMsIGRlcHRoLCB0cnVlKSk7XG4gICAgfSxcblxuICAgIGZyb21FbnRyeVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEZyb21FbnRyaWVzU2VxdWVuY2UodGhpcyk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24oc2VhcmNoS2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZChmdW5jdGlvbihfLCBrZXkpICB7cmV0dXJuIGlzKGtleSwgc2VhcmNoS2V5KX0sIHVuZGVmaW5lZCwgbm90U2V0VmFsdWUpO1xuICAgIH0sXG5cbiAgICBnZXRJbjogZnVuY3Rpb24oc2VhcmNoS2V5UGF0aCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBuZXN0ZWQgPSB0aGlzO1xuICAgICAgLy8gTm90ZTogaW4gYW4gRVM2IGVudmlyb25tZW50LCB3ZSB3b3VsZCBwcmVmZXI6XG4gICAgICAvLyBmb3IgKHZhciBrZXkgb2Ygc2VhcmNoS2V5UGF0aCkge1xuICAgICAgdmFyIGl0ZXIgPSBmb3JjZUl0ZXJhdG9yKHNlYXJjaEtleVBhdGgpO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgdmFyIGtleSA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5lc3RlZCA9IG5lc3RlZCAmJiBuZXN0ZWQuZ2V0ID8gbmVzdGVkLmdldChrZXksIE5PVF9TRVQpIDogTk9UX1NFVDtcbiAgICAgICAgaWYgKG5lc3RlZCA9PT0gTk9UX1NFVCkge1xuICAgICAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5lc3RlZDtcbiAgICB9LFxuXG4gICAgZ3JvdXBCeTogZnVuY3Rpb24oZ3JvdXBlciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIGdyb3VwQnlGYWN0b3J5KHRoaXMsIGdyb3VwZXIsIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBoYXM6IGZ1bmN0aW9uKHNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KHNlYXJjaEtleSwgTk9UX1NFVCkgIT09IE5PVF9TRVQ7XG4gICAgfSxcblxuICAgIGhhc0luOiBmdW5jdGlvbihzZWFyY2hLZXlQYXRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbihzZWFyY2hLZXlQYXRoLCBOT1RfU0VUKSAhPT0gTk9UX1NFVDtcbiAgICB9LFxuXG4gICAgaXNTdWJzZXQ6IGZ1bmN0aW9uKGl0ZXIpIHtcbiAgICAgIGl0ZXIgPSB0eXBlb2YgaXRlci5pbmNsdWRlcyA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZXIgOiBJdGVyYWJsZShpdGVyKTtcbiAgICAgIHJldHVybiB0aGlzLmV2ZXJ5KGZ1bmN0aW9uKHZhbHVlICkge3JldHVybiBpdGVyLmluY2x1ZGVzKHZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBpc1N1cGVyc2V0OiBmdW5jdGlvbihpdGVyKSB7XG4gICAgICBpdGVyID0gdHlwZW9mIGl0ZXIuaXNTdWJzZXQgPT09ICdmdW5jdGlvbicgPyBpdGVyIDogSXRlcmFibGUoaXRlcik7XG4gICAgICByZXR1cm4gaXRlci5pc1N1YnNldCh0aGlzKTtcbiAgICB9LFxuXG4gICAga2V5U2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU2VxKCkubWFwKGtleU1hcHBlcikudG9JbmRleGVkU2VxKCk7XG4gICAgfSxcblxuICAgIGxhc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TZXEoKS5yZXZlcnNlKCkuZmlyc3QoKTtcbiAgICB9LFxuXG4gICAgbWF4OiBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbWF4RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yKTtcbiAgICB9LFxuXG4gICAgbWF4Qnk6IGZ1bmN0aW9uKG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIG1heEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKTtcbiAgICB9LFxuXG4gICAgbWluOiBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbWF4RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yID8gbmVnKGNvbXBhcmF0b3IpIDogZGVmYXVsdE5lZ0NvbXBhcmF0b3IpO1xuICAgIH0sXG5cbiAgICBtaW5CeTogZnVuY3Rpb24obWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbWF4RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yID8gbmVnKGNvbXBhcmF0b3IpIDogZGVmYXVsdE5lZ0NvbXBhcmF0b3IsIG1hcHBlcik7XG4gICAgfSxcblxuICAgIHJlc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMSk7XG4gICAgfSxcblxuICAgIHNraXA6IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgYW1vdW50KSk7XG4gICAgfSxcblxuICAgIHNraXBMYXN0OiBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCB0aGlzLnRvU2VxKCkucmV2ZXJzZSgpLnNraXAoYW1vdW50KS5yZXZlcnNlKCkpO1xuICAgIH0sXG5cbiAgICBza2lwV2hpbGU6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNraXBXaGlsZUZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0LCB0cnVlKSk7XG4gICAgfSxcblxuICAgIHNraXBVbnRpbDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5za2lwV2hpbGUobm90KHByZWRpY2F0ZSksIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBzb3J0Qnk6IGZ1bmN0aW9uKG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IsIG1hcHBlcikpO1xuICAgIH0sXG5cbiAgICB0YWtlOiBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWNlKDAsIE1hdGgubWF4KDAsIGFtb3VudCkpO1xuICAgIH0sXG5cbiAgICB0YWtlTGFzdDogZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgdGhpcy50b1NlcSgpLnJldmVyc2UoKS50YWtlKGFtb3VudCkucmV2ZXJzZSgpKTtcbiAgICB9LFxuXG4gICAgdGFrZVdoaWxlOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCB0YWtlV2hpbGVGYWN0b3J5KHRoaXMsIHByZWRpY2F0ZSwgY29udGV4dCkpO1xuICAgIH0sXG5cbiAgICB0YWtlVW50aWw6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFrZVdoaWxlKG5vdChwcmVkaWNhdGUpLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgdmFsdWVTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9JbmRleGVkU2VxKCk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIEhhc2hhYmxlIE9iamVjdFxuXG4gICAgaGFzaENvZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19oYXNoIHx8ICh0aGlzLl9faGFzaCA9IGhhc2hJdGVyYWJsZSh0aGlzKSk7XG4gICAgfVxuXG5cbiAgICAvLyAjIyMgSW50ZXJuYWxcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0ZShmbiwgcmV2ZXJzZSlcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSlcbiAgfSk7XG5cbiAgLy8gdmFyIElTX0lURVJBQkxFX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfSVRFUkFCTEVfX0BAJztcbiAgLy8gdmFyIElTX0tFWUVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfS0VZRURfX0BAJztcbiAgLy8gdmFyIElTX0lOREVYRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9JTkRFWEVEX19AQCc7XG4gIC8vIHZhciBJU19PUkRFUkVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfT1JERVJFRF9fQEAnO1xuXG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgSXRlcmFibGVQcm90b3R5cGVbSVNfSVRFUkFCTEVfU0VOVElORUxdID0gdHJ1ZTtcbiAgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IEl0ZXJhYmxlUHJvdG90eXBlLnZhbHVlcztcbiAgSXRlcmFibGVQcm90b3R5cGUuX190b0pTID0gSXRlcmFibGVQcm90b3R5cGUudG9BcnJheTtcbiAgSXRlcmFibGVQcm90b3R5cGUuX190b1N0cmluZ01hcHBlciA9IHF1b3RlU3RyaW5nO1xuICBJdGVyYWJsZVByb3RvdHlwZS5pbnNwZWN0ID1cbiAgSXRlcmFibGVQcm90b3R5cGUudG9Tb3VyY2UgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTsgfTtcbiAgSXRlcmFibGVQcm90b3R5cGUuY2hhaW4gPSBJdGVyYWJsZVByb3RvdHlwZS5mbGF0TWFwO1xuICBJdGVyYWJsZVByb3RvdHlwZS5jb250YWlucyA9IEl0ZXJhYmxlUHJvdG90eXBlLmluY2x1ZGVzO1xuXG4gIC8vIFRlbXBvcmFyeSB3YXJuaW5nIGFib3V0IHVzaW5nIGxlbmd0aFxuICAoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghSXRlcmFibGUubm9MZW5ndGhXYXJuaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3RhY2s7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhY2suaW5kZXhPZignX3dyYXBPYmplY3QnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICdpdGVyYWJsZS5sZW5ndGggaGFzIGJlZW4gZGVwcmVjYXRlZCwgJytcbiAgICAgICAgICAgICAgICAndXNlIGl0ZXJhYmxlLnNpemUgb3IgaXRlcmFibGUuY291bnQoKS4gJytcbiAgICAgICAgICAgICAgICAnVGhpcyB3YXJuaW5nIHdpbGwgYmVjb21lIGEgc2lsZW50IGVycm9yIGluIGEgZnV0dXJlIHZlcnNpb24uICcgK1xuICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9KSgpO1xuXG5cblxuICBtaXhpbihLZXllZEl0ZXJhYmxlLCB7XG5cbiAgICAvLyAjIyMgTW9yZSBzZXF1ZW50aWFsIG1ldGhvZHNcblxuICAgIGZsaXA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZsaXBGYWN0b3J5KHRoaXMpKTtcbiAgICB9LFxuXG4gICAgZmluZEtleTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzBdO1xuICAgIH0sXG5cbiAgICBmaW5kTGFzdEtleTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLnJldmVyc2UoKS5maW5kS2V5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIGtleU9mOiBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZEtleShmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXModmFsdWUsIHNlYXJjaFZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBsYXN0S2V5T2Y6IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kTGFzdEtleShmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXModmFsdWUsIHNlYXJjaFZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBtYXBFbnRyaWVzOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLFxuICAgICAgICB0aGlzLnRvU2VxKCkubWFwKFxuICAgICAgICAgIGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIG1hcHBlci5jYWxsKGNvbnRleHQsIFtrLCB2XSwgaXRlcmF0aW9ucysrLCB0aGlzJDApfVxuICAgICAgICApLmZyb21FbnRyeVNlcSgpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBtYXBLZXlzOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLFxuICAgICAgICB0aGlzLnRvU2VxKCkuZmxpcCgpLm1hcChcbiAgICAgICAgICBmdW5jdGlvbihrLCB2KSAge3JldHVybiBtYXBwZXIuY2FsbChjb250ZXh0LCBrLCB2LCB0aGlzJDApfVxuICAgICAgICApLmZsaXAoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIEtleWVkSXRlcmFibGVQcm90b3R5cGUgPSBLZXllZEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgS2V5ZWRJdGVyYWJsZVByb3RvdHlwZVtJU19LRVlFRF9TRU5USU5FTF0gPSB0cnVlO1xuICBLZXllZEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SX1NZTUJPTF0gPSBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzO1xuICBLZXllZEl0ZXJhYmxlUHJvdG90eXBlLl9fdG9KUyA9IEl0ZXJhYmxlUHJvdG90eXBlLnRvT2JqZWN0O1xuICBLZXllZEl0ZXJhYmxlUHJvdG90eXBlLl9fdG9TdHJpbmdNYXBwZXIgPSBmdW5jdGlvbih2LCBrKSAge3JldHVybiBKU09OLnN0cmluZ2lmeShrKSArICc6ICcgKyBxdW90ZVN0cmluZyh2KX07XG5cblxuXG4gIG1peGluKEluZGV4ZWRJdGVyYWJsZSwge1xuXG4gICAgLy8gIyMjIENvbnZlcnNpb24gdG8gb3RoZXIgdHlwZXNcblxuICAgIHRvS2V5ZWRTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBUb0tleWVkU2VxdWVuY2UodGhpcywgZmFsc2UpO1xuICAgIH0sXG5cblxuICAgIC8vICMjIyBFUzYgQ29sbGVjdGlvbiBtZXRob2RzIChFUzYgQXJyYXkgYW5kIE1hcClcblxuICAgIGZpbHRlcjogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgZmlsdGVyRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIGZhbHNlKSk7XG4gICAgfSxcblxuICAgIGZpbmRJbmRleDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGVudHJ5ID8gZW50cnlbMF0gOiAtMTtcbiAgICB9LFxuXG4gICAgaW5kZXhPZjogZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLnRvS2V5ZWRTZXEoKS5rZXlPZihzZWFyY2hWYWx1ZSk7XG4gICAgICByZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgPyAtMSA6IGtleTtcbiAgICB9LFxuXG4gICAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLnJldmVyc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKTtcbiAgICB9LFxuXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgcmV2ZXJzZUZhY3RvcnkodGhpcywgZmFsc2UpKTtcbiAgICB9LFxuXG4gICAgc2xpY2U6IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBzbGljZUZhY3RvcnkodGhpcywgYmVnaW4sIGVuZCwgZmFsc2UpKTtcbiAgICB9LFxuXG4gICAgc3BsaWNlOiBmdW5jdGlvbihpbmRleCwgcmVtb3ZlTnVtIC8qLCAuLi52YWx1ZXMqLykge1xuICAgICAgdmFyIG51bUFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgcmVtb3ZlTnVtID0gTWF0aC5tYXgocmVtb3ZlTnVtIHwgMCwgMCk7XG4gICAgICBpZiAobnVtQXJncyA9PT0gMCB8fCAobnVtQXJncyA9PT0gMiAmJiAhcmVtb3ZlTnVtKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIC8vIElmIGluZGV4IGlzIG5lZ2F0aXZlLCBpdCBzaG91bGQgcmVzb2x2ZSByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGVcbiAgICAgIC8vIGNvbGxlY3Rpb24uIEhvd2V2ZXIgc2l6ZSBtYXkgYmUgZXhwZW5zaXZlIHRvIGNvbXB1dGUgaWYgbm90IGNhY2hlZCwgc29cbiAgICAgIC8vIG9ubHkgY2FsbCBjb3VudCgpIGlmIHRoZSBudW1iZXIgaXMgaW4gZmFjdCBuZWdhdGl2ZS5cbiAgICAgIGluZGV4ID0gcmVzb2x2ZUJlZ2luKGluZGV4LCBpbmRleCA8IDAgPyB0aGlzLmNvdW50KCkgOiB0aGlzLnNpemUpO1xuICAgICAgdmFyIHNwbGljZWQgPSB0aGlzLnNsaWNlKDAsIGluZGV4KTtcbiAgICAgIHJldHVybiByZWlmeShcbiAgICAgICAgdGhpcyxcbiAgICAgICAgbnVtQXJncyA9PT0gMSA/XG4gICAgICAgICAgc3BsaWNlZCA6XG4gICAgICAgICAgc3BsaWNlZC5jb25jYXQoYXJyQ29weShhcmd1bWVudHMsIDIpLCB0aGlzLnNsaWNlKGluZGV4ICsgcmVtb3ZlTnVtKSlcbiAgICAgICk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIE1vcmUgY29sbGVjdGlvbiBtZXRob2RzXG5cbiAgICBmaW5kTGFzdEluZGV4OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLnRvS2V5ZWRTZXEoKS5maW5kTGFzdEtleShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gLTEgOiBrZXk7XG4gICAgfSxcblxuICAgIGZpcnN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgwKTtcbiAgICB9LFxuXG4gICAgZmxhdHRlbjogZnVuY3Rpb24oZGVwdGgpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBmbGF0dGVuRmFjdG9yeSh0aGlzLCBkZXB0aCwgZmFsc2UpKTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbihpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgIHJldHVybiAoaW5kZXggPCAwIHx8ICh0aGlzLnNpemUgPT09IEluZmluaXR5IHx8XG4gICAgICAgICAgKHRoaXMuc2l6ZSAhPT0gdW5kZWZpbmVkICYmIGluZGV4ID4gdGhpcy5zaXplKSkpID9cbiAgICAgICAgbm90U2V0VmFsdWUgOlxuICAgICAgICB0aGlzLmZpbmQoZnVuY3Rpb24oXywga2V5KSAge3JldHVybiBrZXkgPT09IGluZGV4fSwgdW5kZWZpbmVkLCBub3RTZXRWYWx1ZSk7XG4gICAgfSxcblxuICAgIGhhczogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgIHJldHVybiBpbmRleCA+PSAwICYmICh0aGlzLnNpemUgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgIHRoaXMuc2l6ZSA9PT0gSW5maW5pdHkgfHwgaW5kZXggPCB0aGlzLnNpemUgOlxuICAgICAgICB0aGlzLmluZGV4T2YoaW5kZXgpICE9PSAtMVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgaW50ZXJwb3NlOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBpbnRlcnBvc2VGYWN0b3J5KHRoaXMsIHNlcGFyYXRvcikpO1xuICAgIH0sXG5cbiAgICBpbnRlcmxlYXZlOiBmdW5jdGlvbigvKi4uLml0ZXJhYmxlcyovKSB7XG4gICAgICB2YXIgaXRlcmFibGVzID0gW3RoaXNdLmNvbmNhdChhcnJDb3B5KGFyZ3VtZW50cykpO1xuICAgICAgdmFyIHppcHBlZCA9IHppcFdpdGhGYWN0b3J5KHRoaXMudG9TZXEoKSwgSW5kZXhlZFNlcS5vZiwgaXRlcmFibGVzKTtcbiAgICAgIHZhciBpbnRlcmxlYXZlZCA9IHppcHBlZC5mbGF0dGVuKHRydWUpO1xuICAgICAgaWYgKHppcHBlZC5zaXplKSB7XG4gICAgICAgIGludGVybGVhdmVkLnNpemUgPSB6aXBwZWQuc2l6ZSAqIGl0ZXJhYmxlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgaW50ZXJsZWF2ZWQpO1xuICAgIH0sXG5cbiAgICBsYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgtMSk7XG4gICAgfSxcblxuICAgIHNraXBXaGlsZTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc2tpcFdoaWxlRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIGZhbHNlKSk7XG4gICAgfSxcblxuICAgIHppcDogZnVuY3Rpb24oLyosIC4uLml0ZXJhYmxlcyAqLykge1xuICAgICAgdmFyIGl0ZXJhYmxlcyA9IFt0aGlzXS5jb25jYXQoYXJyQ29weShhcmd1bWVudHMpKTtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCB6aXBXaXRoRmFjdG9yeSh0aGlzLCBkZWZhdWx0WmlwcGVyLCBpdGVyYWJsZXMpKTtcbiAgICB9LFxuXG4gICAgemlwV2l0aDogZnVuY3Rpb24oemlwcGVyLyosIC4uLml0ZXJhYmxlcyAqLykge1xuICAgICAgdmFyIGl0ZXJhYmxlcyA9IGFyckNvcHkoYXJndW1lbnRzKTtcbiAgICAgIGl0ZXJhYmxlc1swXSA9IHRoaXM7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgemlwV2l0aEZhY3RvcnkodGhpcywgemlwcGVyLCBpdGVyYWJsZXMpKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgSW5kZXhlZEl0ZXJhYmxlLnByb3RvdHlwZVtJU19JTkRFWEVEX1NFTlRJTkVMXSA9IHRydWU7XG4gIEluZGV4ZWRJdGVyYWJsZS5wcm90b3R5cGVbSVNfT1JERVJFRF9TRU5USU5FTF0gPSB0cnVlO1xuXG5cblxuICBtaXhpbihTZXRJdGVyYWJsZSwge1xuXG4gICAgLy8gIyMjIEVTNiBDb2xsZWN0aW9uIG1ldGhvZHMgKEVTNiBBcnJheSBhbmQgTWFwKVxuXG4gICAgZ2V0OiBmdW5jdGlvbih2YWx1ZSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhcyh2YWx1ZSkgPyB2YWx1ZSA6IG5vdFNldFZhbHVlO1xuICAgIH0sXG5cbiAgICBpbmNsdWRlczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhcyh2YWx1ZSk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIE1vcmUgc2VxdWVudGlhbCBtZXRob2RzXG5cbiAgICBrZXlTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVTZXEoKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgU2V0SXRlcmFibGUucHJvdG90eXBlLmhhcyA9IEl0ZXJhYmxlUHJvdG90eXBlLmluY2x1ZGVzO1xuXG5cbiAgLy8gTWl4aW4gc3ViY2xhc3Nlc1xuXG4gIG1peGluKEtleWVkU2VxLCBLZXllZEl0ZXJhYmxlLnByb3RvdHlwZSk7XG4gIG1peGluKEluZGV4ZWRTZXEsIEluZGV4ZWRJdGVyYWJsZS5wcm90b3R5cGUpO1xuICBtaXhpbihTZXRTZXEsIFNldEl0ZXJhYmxlLnByb3RvdHlwZSk7XG5cbiAgbWl4aW4oS2V5ZWRDb2xsZWN0aW9uLCBLZXllZEl0ZXJhYmxlLnByb3RvdHlwZSk7XG4gIG1peGluKEluZGV4ZWRDb2xsZWN0aW9uLCBJbmRleGVkSXRlcmFibGUucHJvdG90eXBlKTtcbiAgbWl4aW4oU2V0Q29sbGVjdGlvbiwgU2V0SXRlcmFibGUucHJvdG90eXBlKTtcblxuXG4gIC8vICNwcmFnbWEgSGVscGVyIGZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIGtleU1hcHBlcih2LCBrKSB7XG4gICAgcmV0dXJuIGs7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRyeU1hcHBlcih2LCBrKSB7XG4gICAgcmV0dXJuIFtrLCB2XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5lZyhwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gLXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHF1b3RlU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRaaXBwZXIoKSB7XG4gICAgcmV0dXJuIGFyckNvcHkoYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHROZWdDb21wYXJhdG9yKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAxIDogYSA+IGIgPyAtMSA6IDA7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNoSXRlcmFibGUoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUuc2l6ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgb3JkZXJlZCA9IGlzT3JkZXJlZChpdGVyYWJsZSk7XG4gICAgdmFyIGtleWVkID0gaXNLZXllZChpdGVyYWJsZSk7XG4gICAgdmFyIGggPSBvcmRlcmVkID8gMSA6IDA7XG4gICAgdmFyIHNpemUgPSBpdGVyYWJsZS5fX2l0ZXJhdGUoXG4gICAgICBrZXllZCA/XG4gICAgICAgIG9yZGVyZWQgP1xuICAgICAgICAgIGZ1bmN0aW9uKHYsIGspICB7IGggPSAzMSAqIGggKyBoYXNoTWVyZ2UoaGFzaCh2KSwgaGFzaChrKSkgfCAwOyB9IDpcbiAgICAgICAgICBmdW5jdGlvbih2LCBrKSAgeyBoID0gaCArIGhhc2hNZXJnZShoYXNoKHYpLCBoYXNoKGspKSB8IDA7IH0gOlxuICAgICAgICBvcmRlcmVkID9cbiAgICAgICAgICBmdW5jdGlvbih2ICkgeyBoID0gMzEgKiBoICsgaGFzaCh2KSB8IDA7IH0gOlxuICAgICAgICAgIGZ1bmN0aW9uKHYgKSB7IGggPSBoICsgaGFzaCh2KSB8IDA7IH1cbiAgICApO1xuICAgIHJldHVybiBtdXJtdXJIYXNoT2ZTaXplKHNpemUsIGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbXVybXVySGFzaE9mU2l6ZShzaXplLCBoKSB7XG4gICAgaCA9IHNyY19NYXRoX19pbXVsKGgsIDB4Q0M5RTJENTEpO1xuICAgIGggPSBzcmNfTWF0aF9faW11bChoIDw8IDE1IHwgaCA+Pj4gLTE1LCAweDFCODczNTkzKTtcbiAgICBoID0gc3JjX01hdGhfX2ltdWwoaCA8PCAxMyB8IGggPj4+IC0xMywgNSk7XG4gICAgaCA9IChoICsgMHhFNjU0NkI2NCB8IDApIF4gc2l6ZTtcbiAgICBoID0gc3JjX01hdGhfX2ltdWwoaCBeIGggPj4+IDE2LCAweDg1RUJDQTZCKTtcbiAgICBoID0gc3JjX01hdGhfX2ltdWwoaCBeIGggPj4+IDEzLCAweEMyQjJBRTM1KTtcbiAgICBoID0gc21pKGggXiBoID4+PiAxNik7XG4gICAgcmV0dXJuIGg7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNoTWVyZ2UoYSwgYikge1xuICAgIHJldHVybiBhIF4gYiArIDB4OUUzNzc5QjkgKyAoYSA8PCA2KSArIChhID4+IDIpIHwgMDsgLy8gaW50XG4gIH1cblxuICB2YXIgSW1tdXRhYmxlID0ge1xuXG4gICAgSXRlcmFibGU6IEl0ZXJhYmxlLFxuXG4gICAgU2VxOiBTZXEsXG4gICAgQ29sbGVjdGlvbjogQ29sbGVjdGlvbixcbiAgICBNYXA6IHNyY19NYXBfX01hcCxcbiAgICBPcmRlcmVkTWFwOiBPcmRlcmVkTWFwLFxuICAgIExpc3Q6IExpc3QsXG4gICAgU3RhY2s6IFN0YWNrLFxuICAgIFNldDogc3JjX1NldF9fU2V0LFxuICAgIE9yZGVyZWRTZXQ6IE9yZGVyZWRTZXQsXG5cbiAgICBSZWNvcmQ6IFJlY29yZCxcbiAgICBSYW5nZTogUmFuZ2UsXG4gICAgUmVwZWF0OiBSZXBlYXQsXG5cbiAgICBpczogaXMsXG4gICAgZnJvbUpTOiBmcm9tSlNcblxuICB9O1xuXG4gIHJldHVybiBJbW11dGFibGU7XG5cbn0pKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuQ29udGFpbmVyID0gcmVxdWlyZSgnLi9saWIvRmx1eENvbnRhaW5lcicpO1xubW9kdWxlLmV4cG9ydHMuTWFwU3RvcmUgPSByZXF1aXJlKCcuL2xpYi9GbHV4TWFwU3RvcmUnKTtcbm1vZHVsZS5leHBvcnRzLk1peGluID0gcmVxdWlyZSgnLi9saWIvRmx1eE1peGluTGVnYWN5Jyk7XG5tb2R1bGUuZXhwb3J0cy5SZWR1Y2VTdG9yZSA9IHJlcXVpcmUoJy4vbGliL0ZsdXhSZWR1Y2VTdG9yZScpO1xubW9kdWxlLmV4cG9ydHMuU3RvcmUgPSByZXF1aXJlKCcuL2xpYi9GbHV4U3RvcmUnKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudFF1ZXVlO1xuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbaV0oKTtcbiAgICAgICAgfVxuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG59XG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHF1ZXVlLnB1c2goZnVuKTtcbiAgICBpZiAoIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXX0=
