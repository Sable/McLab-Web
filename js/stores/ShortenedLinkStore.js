import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import AT from '../constants/AT';

class ShortenedLinkStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._shortenedLink = null;
  }

  __onDispatch(payload) {
    switch (payload.action) {
      case AT.TOP_NAV_BUTTONS.SET_SHORTENED_LINK:
        this._shortenedLink = payload.data.shortenedLink;
        this.__emitChange();
    }
  }

  getShortenedLink() {
    return this._shortenedLink;
  }
}

module.exports = new ShortenedLinkStore(Dispatcher);
