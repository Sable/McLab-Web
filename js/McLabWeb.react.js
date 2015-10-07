var TopNav = React.createClass({
  render: function() {
    return (
      <div className="topnav">
        <div className="ml-logo-container">
          <img src="mclab_logo_360.png" className="ml-logo" />
          <div className="mclab-logo-text">MCLAB <strong>WEB</strong></div>
        </div>
        <div className="buttons-container">
          <a className="pure-button topnav-button" href="#">Compile to Fortran</a>
        </div>
      </div>
    );
  }
});

var FileExplorer = React.createClass({
  render: function() {
    return (
      <div className="file-explorer">
        <div className="file-tile">
          <i className="fa fa-folder-open"></i> Workspace
        </div>
        <div className="file-tile">
          &nbsp; &nbsp;
          <i className="fa fa-file-text-o"></i> cholesky.m
        </div>
        <div className="file-tile">
          &nbsp; &nbsp;
          <i className="fa fa-file-text-o"></i> {'This title is so long it doesn\'t fit into this tiny sidebar'}
        </div>
        <div className="file-tile">
          &nbsp; &nbsp;
          <i className="fa fa-file-text-o"></i> pagerank.m
        </div>
      </div>
    );
  }
});

var CodeContainer = React.createClass({
  componentDidMount: function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/matlab");
    editor.setReadOnly(true);
    editor.setAnimatedScroll(true);
    editor.setShowPrintMargin(false);
  },

  render: function() {
    return (
      <div className="code-container">
        <div className="code-top-bar">
          <div className="title-container">Filename.m</div>
        </div>
        <div className="ace-container">
          <div id="editor">
            % Some rad matlab code right here
          </div>
        </div>
      </div>
    );
  }
})

var McLabWeb = React.createClass({
  render: function() {
    return (
      <div>
        <TopNav />
        <div className="body-container">
          <FileExplorer />
          <CodeContainer />
        </div>
      </div>
    );
  }
})

// React.render(
//   <TopNav />,
//   document.getElementById('topnav-react-container')
// );

// React.render(
//   <FileExplorer />,
//   document.getElementById('file-explorer-react-container')
// );

// React.render(
//   <CodeContainer />,
//   document.getElementById('code-container-react-container')
// );

React.render(
  <McLabWeb />,
  document.getElementById('app-container')
);



