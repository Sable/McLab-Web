import {PropTypes, Component} from 'react'

class AceEditor extends Component {

  componentDidMount() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/matlab");
    editor.setReadOnly(true);
    editor.setAnimatedScroll(true);
    editor.setShowPrintMargin(false);
  }

  render() {
    return (
      <div className="ace-container">
        <div id="editor">
          % Herein lies lots of matlab code
        </div>
      </div>
    );
  }

}

AceEditor.propTypes = {
  selectionPath: PropTypes.string.isRequired,
  selectionType: PropTypes.string.isRequired,
};

export default AceEditor;
