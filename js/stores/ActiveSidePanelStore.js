import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import AT from '../constants/AT'
import SidePanelKeys from '../constants/SidePanelKeys'

class ActiveSidePanelStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._activePanel = null;
  }

  __onDispatch(payload) {
    switch (payload.action) {
      case AT.FORTRAN_COMPILE_PANEL.OPEN_PANEL:
        this._activePanel = SidePanelKeys.FORTRAN_COMPILE_PANEL;
        this.__emitChange();
        break;
      case AT.SIDE_PANEL.CLOSE_PANEL:
        this._activePanel = null;
        this.__emitChange();
    }
  }

  getActivePanel() {
    return this._activePanel;
  }

  isPanelOpen() {
    return this._activePanel !== null;
  }
}

module.exports = new ActiveSidePanelStore(Dispatcher);
