import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import AT from '../constants/AT'
import immutable from 'immutable'

class FortranCompileConfigStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._argumentList = immutable.List();
    this._mainFile = null;
    this._unconfirmedMainFile = null;
  }

  __onDispatch(payload) {
    switch (payload.action) {
      case AT.FORTRAN_COMPILE_PANEL.ADD_ARGUMENT:
        this._argumentList.push(payload.data['arg']);
        this.__emitChange();
        break;
    }
  }

  getMainFile() {
    return this._mainFile;
  }

  getUnconfirmedMainFile() {
    return this._unconfirmedMainFile;
  }

  getArgumentList() {
    return this._argumentList;
  }

}

module.exports = new FortranCompileConfigStore(Dispatcher);
