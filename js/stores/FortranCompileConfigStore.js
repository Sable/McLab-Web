import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import AT from '../constants/AT'
import immutable from 'immutable'

class FortranCompileConfigStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._argumentList = immutable.List();
    this._mainFilePath = null;
    this._unconfirmedMainFilePath = null;
    this._mainFileSelectMode = false;
  }

  __onDispatch(payload) {
    switch (payload.action) {
      case AT.FORTRAN_COMPILE_PANEL.ADD_ARGUMENT:
        this._argumentList =  this._argumentList.push(payload.data['arg']);
        this.__emitChange();
        break;
      case AT.FORTRAN_COMPILE_PANEL.EDIT_ARGUMENT:
        this._argumentList = this._argumentList.set(
          payload.data.argIndex,
          payload.data.arg
        );
        this.__emitChange();
        break;
      case AT.FORTRAN_COMPILE_PANEL.OPEN_MAIN_FILE_SELECTION_MODE:
        console.log("here");
        this._mainFileSelectMode = true;
        break;
      case AT.FORTRAN_COMPILE_PANEL.CLOSE_MAIN_FILE_SELECTION_MODE:
        this._mainFileSelectMode = false;
        break;
      case AT.FILE_EXPLORER.SELECT_FILE:
        if (this._mainFileSelectMode) {
          // TODO: Fix magic string
          if (payload.data.type === 'FILE') {
            this._unconfirmedMainFilePath = payload.data.selection;
            console.log("Changed uncomfirmed main file to ", payload.data.selection);
            this.__emitChange();
          }
        }
        break;
      case AT.FORTRAN_COMPILE_PANEL.CONFIRM_MAIN_FILE:
        if (this._mainFileSelectMode) {
          this._mainFilePath = this._unconfirmedMainFilePath;
          this._unconfirmedMainFilePath = null;
          this._mainFileSelectMode = false;
          this.__emitChange();
        }
        break;
    }
  }

  getMainFilePath() {
    return this._mainFilePath;
  }

  getUnconfirmedMainFilePath() {
    return this._unconfirmedMainFilePath;
  }

  getArgumentList() {
    return this._argumentList;
  }

}

module.exports = new FortranCompileConfigStore(Dispatcher);
