import {MapStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import {Record, Map} from 'immutable';
import LS from '../constants/LS';
import AT from '../constants/AT';

const MarkerRecord = Record({visible: false, markers: Map()})

class EditorMarkerStore extends MapStore {

  // action: AT.EDITOR.ADD_MARKERS,
  // data: {
  //   filepath: "/Workspace/foo/bar",
  //   markers: Immutable.Map({
  //     "ace-code-marker": Immutable.List([
  //       {
  //         startRow: 0,
  //         startColumn: 0,
  //         endRow: 0,
  //         endColumn: 5,
  //       },
  //       {
  //         startRow: 0,
  //         startColumn: 2,
  //         endRow: 0,
  //         endColumn: 9,
  //       },
  //     ]),
  //     "ace-code-marker-class2": Immutable.List([
  //       {
  //         startRow: 0,
  //         startColumn: 0,
  //         endRow: 0,
  //         endColumn: 5,
  //       },
  //       {
  //         startRow: 0,
  //         startColumn: 2,
  //         endRow: 0,
  //         endColumn: 9,
  //       },
  //     ]),
  //   }),
  // }

  reduce(map, payload) {

    switch (payload.action) {
      // The case statements are enclosed in braces to block scope them
      case AT.EDITOR.ADD_MARKERS: {
        const filepath = payload.data.filepath;
        const fileRecord = map.get(filepath, new MarkerRecord());
        const markers = payload.data.markers;
        return map.set(filepath, fileRecord.set('markers', markers));
      }

      case AT.EDITOR.MARKER_VISIBILITY.TURN_ON: {
        const filepath = payload.data.filepath;
        const fileRecord = map.get(filepath, new MarkerRecord());
        return map.set(filepath, fileRecord.set('visible', true));
      }

      case AT.EDITOR.MARKER_VISIBILITY.TURN_OFF: {
        const filepath = payload.data.filepath;
        const fileRecord = map.get(filepath, new MarkerRecord());
        return map.set(filepath, fileRecord.set('visible', false));
      }

      default:
        return map;
    }
  }

  getRecordType() {
    return MarkerRecord;
  }

}

module.exports = new EditorMarkerStore(Dispatcher);
