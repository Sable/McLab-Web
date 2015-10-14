import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import AT from '../constants/AT'

class SelectedFileStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._selectionPath = null;
    this._selectionType = null;
  }

  __onDispatch(payload) {
    switch (payload.action) {
      case AT.FILE_EXPLORER.SELECTION_CHANGED:
        this._selectionPath = payload.data.selection;
        this._selectionType = payload.data.type;
        this.__emitChange();
    }
  }

  getSelectionPath() {
    return this._selectionPath;
  }

  getSelectionType() {
    return this._selectionType;
  }
}

module.exports = new SelectedFileStore(Dispatcher);
