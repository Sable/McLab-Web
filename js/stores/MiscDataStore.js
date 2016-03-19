import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import AT from '../constants/AT';

class MiscDataStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this._shortenedLink = null;
    this._sessionID = null;
  }

  __onDispatch(payload) {
    switch (payload.action) {
      case AT.TOP_NAV_BUTTONS.SET_SHORTENED_LINK:
        this._shortenedLink = payload.data.shortenedLink;
        this.__emitChange();
        break;
    }
  }

  getShortenedLink() {
    return this._shortenedLink;
  }
}

module.exports = new MiscDataStore(Dispatcher);
