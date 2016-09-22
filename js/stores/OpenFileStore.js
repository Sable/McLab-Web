import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import SelectedFileStore from './SelectedFileStore';

class OpenFileStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._filePath = null;
  }

  __onDispatch(payload) {
    this.getDispatcher().waitFor([SelectedFileStore.getDispatchToken()]);
    if (SelectedFileStore.hasChanged()) {
      if (SelectedFileStore.getSelectionType() === 'FILE') {
        this._filePath = SelectedFileStore.getSelectionPath();
        this.__emitChange();
      }
    }
  }

  getFilePath() {
    return this._filePath;
  }
}

module.exports = new OpenFileStore(Dispatcher);
