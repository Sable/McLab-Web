import {MapStore} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import AT from '../constants/AT'

class FileContentsStore extends MapStore {

  reduce(map, payload) {
    switch (payload.action) {
      case AT.FILE_CONTENT.DATA_LOADED:
        const filepath = payload.data.filepath;
        if (payload.data.success) {
          return map.set(filepath, { text: payload.data.fileContents });
        } else {
          return map.set(filepath, { error: payload.data.error });
        }
    }

    return map;
  }
}

module.exports = new FileContentsStore(Dispatcher);
