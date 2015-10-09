import SelectedFileStore from './stores/SelectedFileStore';
import {FileExplorer} from './FileExplorer.react';
import {Container} from 'flux/utils';


type State = {
  tree: Object,
  selection: String,
};

class FileExplorerContainer extends React.Component {
  static getStores() {
    return [SelectedFileStore];
  }

  static calculateState(prevState) {
    return {
      tree: {
        path: "Workspace",
        directories: [
          {
            path: 'Workspace/foo',
            directories: [
              {
                path: 'Workspace/foo/bar',
                directories: [],
                files: [],
              }
            ],
            files: [
              "one",
              "two",
              "three",
            ]
          }
        ],
        files: [
          'cholesky.m',
          'This title is so long it doesn\'t fit into this tiny sidebar',
          'pagerank.m',
        ]
      },
      selection: SelectedFileStore.getSelectionPath(),
    };
  }

  render() {
    return (
      <FileExplorer
        tree={this.state.tree}
        selection={this.state.selection}
      />
    );
  }
}

export default Container.create(FileExplorerContainer);
