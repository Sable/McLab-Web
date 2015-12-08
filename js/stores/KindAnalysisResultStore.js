import {MapStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import {Record, Map} from 'immutable';
import LS from '../constants/LS';
import AT from '../constants/AT';

class KindAnalysisResultStore extends MapStore {

  // action: AT.KIND_ANALYSIS.DATA_LOADED,
  // data: {
  //   filePath: "/Workspace/foo/bar",
  //   variables: [
  //     {
  //       position: {
  //       startRow: 6,
  //       startColumn: 0,
  //       endColumn: 1,
  //       endRow: 6
  //       },
  //     name: "m"
  //     },
  //     {
  //     position: {
  //     startRow: 6,
  //     startColumn: 7,
  //     endColumn: 8,
  //     endRow: 6
  //     },
  //     name: "m"
  //     },
  //   ],
  //   functions: [
  //     {
  //     position: {
  //     startRow: 6,
  //     startColumn: 0,
  //     endColumn: 1,
  //     endRow: 6
  //     },
  //     name: "m"
  //     },
  //     {
  //     position: {
  //     startRow: 6,
  //     startColumn: 7,
  //     endColumn: 8,
  //     endRow: 6
  //     },
  //     name: "m"
  //     },
  //   ],
  // }

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
