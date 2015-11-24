import EditorMarkerStore from './stores/EditorMarkerStore';
import React from 'react';
import Immutable from 'immutable';


const aceRange = ace.require('ace/range').Range;

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
    this.markerIDs = Immutable.Set();
    window.debug_editor = editor;
  }

  _setEditorText() {
    this.editor.setValue(this.props.codeText);
    this.editor.navigateFileStart();
  }

  _renderMarkers() {
    console.log("AceEditor:", "clearing markers!")
    this.markerIDs.forEach(
      id => this.editor.session.removeMarker(id)
    );
    if (!this.props.markerData || !this.props.markerData.visible) {
      return;
    }

    console.log("rendering markers!")
    for (let markerGroup of this.props.markerData.markers) {
      const markerClass = markerGroup[0];
      const markerList = markerGroup[1];
      for (let markerRange of markerList) {
        const range = new aceRange(
          markerRange.startRow,
          markerRange.startColumn,
          markerRange.endRow,
          markerRange.endColumn,
        );
        const id = this.editor.session.addMarker(range, markerClass, 'text');
        this.markerIDs = this.markerIDs.add(id);
      }
    }
  }

  componentDidMount() {
    this._configureEditor();
    this._setEditorText();
    this._renderMarkers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.codeText !== this.props.codeText) {
      this._setEditorText();
    }

    if (prevProps.sidePanelOpen !== this.props.sidePanelOpen) {
      // This is a huge hack. The size panel must finish rendering before
      // the editor container can know its true size.
      // This is the glorious day when we run into a concurrency bug is javascript
      setTimeout(() => this.editor.resize(), 0);
    }

    if (prevProps.markerData !== this.props.markerData) {
      this._renderMarkers();
    }
  }

  render() {
    return (
      <div className="ace-container" onKeyDown={this.props.onKeyDown}>
        <div id="editor"></div>
      }
      </div>
    );
  }

}

AceEditor.propTypes = {
  codeText: PropTypes.string.isRequired,

   // This prop is required because opening or closing the side panel
   // triggers an editor refresh. Otherwise the editor does not resize
   // properly.
  onKeyDown: PropTypes.func,
  sidePanelOpen: PropTypes.bool.isRequired,
  markerData: PropTypes.instanceOf(EditorMarkerStore.getRecordType()),
}

export default AceEditor;
