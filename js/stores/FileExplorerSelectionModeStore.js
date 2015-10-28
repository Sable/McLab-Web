import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import AT from '../constants/AT'

class FileExplorerSelectionModeStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._selectionMode = false;
  }

  __onDispatch(payload) {
    console.log("FESMS::", payload);
    switch (payload.action) {
      case AT.FILE_EXPLORER.OPEN_SELECTION_MODE:
        console.log("FESMS:: in here", payload);
        this._selectionMode = true;
        this.__emitChange();
        break;
      case AT.FILE_EXPLORER.CLOSE_SELECTION_MODE:
      case AT.FILE_EXPLORER.CONFIRM_SELECTION:
      case AT.SIDE_PANEL.CLOSE_PANEL:
      case AT.SIDE_PANEL.OPEN_PANEL:
        this._selectionMode = false;
        this.__emitChange();
        break;
    }
  }

  isInSelectionMode() {
    return this._selectionMode;
  }

}

module.exports = new FileExplorerSelectionModeStore(Dispatcher);
