import classnames from 'classnames';
import SelectedFileStore from './stores/SelectedFileStore';
import FileContentsStore from './stores/FileContentsStore'
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
    ];
  }

  static calculateState(prevState) {
    const selectionType = SelectedFileStore.getSelectionType();
    if (selectionType === 'DIR') {
      return prevState;
    }

    const filepath = SelectedFileStore.getSelectionPath();

    return {
      selectionPath: filepath,
      selectionType: SelectedFileStore.getSelectionType(),
      fileContents: FileContentsStore.get(filepath),
    };
  }

  render() {
    let codeContent;
    if (!!this.state.fileContents) {
      if (this.state.fileContents['error']) {
        codeContent = <strong> Error loading file </strong>;
      } else {
        codeContent = <AceEditor codeText={this.state.fileContents['text']} />;
      }
    } else {
      // TODO: differentiate between loading and not loaded
      // TODO: Fix this monstrocity
      codeContent = <div>Select a file</div>;
    }

    return (
      <div className={classnames({
        "code-container": true,
        "side-panel-open": true,
      })}>
        <CodeTopBar
          selectionPath={this.state.selectionPath}
          selectionType={this.state.selectionType}
        />
        {codeContent}
      </div>
    );
  }
}

export default Container.create(CodeContainer);
