import {MapStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import AT from '../constants/AT';

class KindAnalysisResultStore extends MapStore {

  reduce(map, payload) {

    switch (payload.action) {
      // The case statements are enclosed in braces to block scope them
      case AT.KIND_ANALYSIS.DATA_LOADED: {
        const filePath = payload.data.filePath;
        return map.set(filePath,
          {
            'variables': payload.data['variables'],
            'functions': payload.data['functions'],
          }
        );
      }

      default:
        return map;
    }
  }

}

module.exports = new KindAnalysisResultStore(Dispatcher);
