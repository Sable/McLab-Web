import React from 'react'
import {Container} from 'flux/utils'
import SelectedFileStore from './stores/SelectedFileStore'
import FileContentsStore from './stores/FileContentsStore'

const {PropTypes, Component} = React;

class AceEditor extends Component {

  _configureEditor() {
    const editor = ace.edit('editor');
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/matlab");
    editor.setReadOnly(true);
    editor.setAnimatedScroll(true);
    editor.setShowPrintMargin(false);
    editor.$blockScrolling = Infinity
    this.editor = editor;
    window.debug_editor = editor;
  }

  componentDidMount(prevProps) {
    this._configureEditor();

    // This is because componentDidUpdate is not called on initial rendering
    this.forceUpdate();
  }

  componentDidUpdate(prevProps) {
    this.editor.setValue(prevProps.codeText, 0);
    this.editor.navigateFileStart();

    // This is a huge hack. The size panel must finish rendering before
    // the editor container can know its true size.
    // This is the glorious day when we run into a concurrency bug is javascript
    setTimeout(() => this.editor.resize(), 0);
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

AceEditor.propTypes = {
  codeText: PropTypes.string,

  /* This prop is required because opening or closing the side panel
   * triggers an editor refresh. Otherwise the editor does not resize
   * properly.
  */
  sidePanelOpen: PropTypes.bool.isRequired,
}

export default AceEditor;
