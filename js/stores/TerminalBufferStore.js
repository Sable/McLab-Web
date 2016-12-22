import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import AT from '../constants/AT'
import immutable from 'immutable'

class TerminalBufferStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._buffer = immutable.List();
  }

  __onDispatch(payload) {
    switch (payload.action) {
      case AT.TERMINAL.ADD_NEW_LINE:
        this._buffer = this._buffer.push(payload.data.newLine);
        this.__emitChange();
    }
  }

  getBuffer() {
    return this._buffer;
  }

}

module.exports = new TerminalBufferStore(Dispatcher);
