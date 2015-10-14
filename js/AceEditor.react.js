import {PropTypes, Component} from 'react'
import {Container} from 'flux/utils'
import SelectedFileStore from './stores/SelectedFileStore'
import FileContentsStore from './stores/FileContentsStore'

class AceEditor extends Component {

  _configureEditor() {
    console.log("reconfiguring");

    const editor = ace.edit('editor');
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/matlab");
    editor.setReadOnly(true);
    editor.setAnimatedScroll(true);
    editor.setShowPrintMargin(false);
    editor.$blockScrolling = Infinity
    this.editor = editor;
    console.log("here's your editor", editor);
  }

  componentDidMount(prevProps) {
    this._configureEditor();

    // This is because componentDidUpdate is not called on initial rendering
    this.forceUpdate();
  }

  componentDidUpdate(prevProps) {
    this.editor.setValue(prevProps.codeText, 0);
    this.editor.navigateFileStart();
  }

  render() {
    return (
      <div className="ace-container">
        <div id="editor">
          Select a file from the sidebar
        </div>
      </div>
    );
  }

}

export default AceEditor;
