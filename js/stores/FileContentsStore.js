import {MapStore} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import LS from '../constants/LS'
import AT from '../constants/AT'

class FileContentsStore extends MapStore {

  // data: {
  //   success: true | false,
  //   filepath: /* always exists */,
  //   fileContents: /* only if success is true */
  //   error: /* only if success is false */
  // }

  reduce(map, payload) {
    switch (payload.action) {
      // TODO: The two 'DATA_LOADED' names clash
      // It is urgent to implement KeyMirrorRecursive
      case 'AT.FILE_CONTENT.DATA_LOADED':
        const filepath = payload.data.filepath;
        if (payload.data.success) {
          console.log("hello ", payload);
          return map.set(filepath, { text: payload.data.fileContents });
        } else {
          return map.set(filepath, { error: payload.data.error });
        }
    }

    return map;
  }

}

module.exports = new FileContentsStore(Dispatcher);
