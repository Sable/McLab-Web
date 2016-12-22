import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import LS from '../constants/LS'
import AT from '../constants/AT'

class FileTreeStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._fileTree = null;
    this._loadState = LS.LOADING;
  }

  __onDispatch(payload) {
    switch (payload.action) {
      case AT.FILE_EXPLORER.DATA_LOADED:
        if (payload.data.success) {
          this._fileTree = payload.data.contents;
          this._loadState = LS.LOADED;
        } else {
          this._fileTree = null;
          this._loadState = LS.LOAD_ERROR;
        }
        this.__emitChange();
    }
  }

  getFileTree() {
    return this._fileTree;
  }

  getLoadState() {
    return this._loadState;
  }
}

module.exports = new FileTreeStore(Dispatcher);
