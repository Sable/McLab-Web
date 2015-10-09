import SelectedFileStore from './stores/SelectedFileStore';
import {FileExplorer} from './FileExplorer.react';
import CodeTopBar from './CodeTopBar.react';
import AceEditor from './AceEditor.react';
import {Container} from 'flux/utils';
var React = require('react');

class CodeContainer extends React.Component {
  static getStores() {
    return [SelectedFileStore];
  }

  static calculateState(prevState) {
    const selectionType = SelectedFileStore.getSelectionType();
    if (selectionType === 'DIR') {
      return prevState;
    }

    return {
      selectionPath: SelectedFileStore.getSelectionPath(),
      selectionType: SelectedFileStore.getSelectionType(),
    };
  }

  render() {
    return (
      <div className="code-container">
        <CodeTopBar
          selectionPath={this.state.selectionPath}
          selectionType={this.state.selectionType}
        />
        <AceEditor
          selectionPath={this.state.selectionPath}
          selectionType={this.state.selectionType}
        />
      </div>
    );
  }
}

export default Container.create(CodeContainer);
