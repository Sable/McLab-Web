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
      case AT.ASPECT_PANEL.OPEN_PANEL:
        console.log("Apsect");
        this._activePanel = SidePanelKeys.ASPECT_PANEL;
        this.__emitChange();
        break;
      case AT.KIND_ANALYSIS_PANEL.OPEN_PANEL:
        this._activePanel = SidePanelKeys.KIND_ANALYSIS_PANEL;
        this.__emitChange();
        break;
      case AT.JS_COMPILE_PANEL.OPEN_PANEL:
        this._activePanel = SidePanelKeys.JS_COMPILE_PANEL;
        this.__emitChange();
        break;

      case AT.SIDE_PANEL.CLOSE_PANEL:
        this._activePanel = null;
        this.__emitChange();
        break;
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
