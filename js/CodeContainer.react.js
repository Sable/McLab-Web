import classnames from 'classnames';
import ActiveSidePanelStore from './stores/ActiveSidePanelStore';
import AT from './constants/AT';
import Dispatcher from './Dispatcher';
import EditorMarkerStore from './stores/EditorMarkerStore';
import SelectedFileStore from './stores/SelectedFileStore';
import FileContentsStore from './stores/FileContentsStore';
import {FileExplorer} from './FileExplorer.react';
import CodeTopBar from './CodeTopBar.react';
import AceEditor from './AceEditor.react';
import {Container} from 'flux/utils';
var React = require('react');

class CodeContainer extends React.Component {
  static getStores() {
    return [
      SelectedFileStore,
      FileContentsStore,
      ActiveSidePanelStore,
      EditorMarkerStore,
    ];
  }

  static calculateState(prevState) {
    const selectionType = SelectedFileStore.getSelectionType();
    if (selectionType === 'DIR') {
      return prevState;
    }

    const filepath = SelectedFileStore.getSelectionPath();

    return {
      filepath: filepath,
      selectionType: SelectedFileStore.getSelectionType(),
      fileContents: FileContentsStore.get(filepath),
      sidePanelOpen: ActiveSidePanelStore.isPanelOpen(),
      markerData: EditorMarkerStore.get(filepath),
    };
  }

  render() {
    let codeContent;
    if (!!this.state.fileContents) {
      if (this.state.fileContents['error']) {
        // TODO: Make this prettier
        codeContent = <strong> Error loading file </strong>;
      } else {
        console.log("CodeContainer: ", "marker data", this.state.markerData);
        codeContent = (
          <AceEditor
            codeText={this.state.fileContents.text}
            sidePanelOpen={this.state.sidePanelOpen}
            markerData={this.state.markerData}
            onKeyDown={event => {
              if (event.key === 'Escape') {
                console.log("turning off markers");
                Dispatcher.dispatch({
                  action: AT.EDITOR.MARKER_VISIBILITY.TURN_OFF,
                  data: {filepath: this.state.filepath},
                })
              }
            }}
          />
        );
      }
    } else {
      // TODO: differentiate between loading and not loaded
      // TODO: Make this pretty
      codeContent = <div>Select a file</div>;
    }

    return (
      <div className="code-container">
        <CodeTopBar selectionPath={this.state.filepath} />
        {codeContent}
      </div>
    );
  }
}

export default Container.create(CodeContainer);
