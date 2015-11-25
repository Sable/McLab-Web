import classnames from 'classnames';
import ActiveSidePanelStore from './stores/ActiveSidePanelStore';
import AT from './constants/AT';
import Dispatcher from './Dispatcher';
import EditorMarkerStore from './stores/EditorMarkerStore';
import OpenFileStore from './stores/OpenFileStore';
import FileContentsStore from './stores/FileContentsStore';
import {FileExplorer} from './FileExplorer.react';
import CodeTopBar from './CodeTopBar.react';
import AceEditor from './AceEditor.react';
import {Container} from 'flux/utils';
var React = require('react');

class CodeContainer extends React.Component {
  static getStores() {
    return [
      OpenFileStore,
      FileContentsStore,
      ActiveSidePanelStore,
      EditorMarkerStore,
    ];
  }

  static calculateState(prevState) {
    const filePath = OpenFileStore.getFilePath();

    return {
      filePath: filePath,
      fileContents: FileContentsStore.get(filePath),
      sidePanelOpen: ActiveSidePanelStore.isPanelOpen(),
      markerData: EditorMarkerStore.get(filePath),
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
                  data: {filePath: this.state.filePath},
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
        <CodeTopBar selectionPath={this.state.filePath} />
        {codeContent}
      </div>
    );
  }
}

export default Container.create(CodeContainer);
