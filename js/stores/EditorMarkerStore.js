import {MapStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import {Record, Map} from 'immutable';
import AT from '../constants/AT';

const MarkerRecord = Record({visible: false, markers: Map()})

class EditorMarkerStore extends MapStore {

  reduce(map, payload) {

    switch (payload.action) {
      // The case statements are enclosed in braces to block scope them
      case AT.EDITOR.SET_MARKERS: {
        const filePath = payload.data.filePath;
        const fileRecord = map.get(filePath, new MarkerRecord());
        const markers = payload.data.markers;
        return map.set(filePath, fileRecord.set('markers', markers));
      }

      case AT.EDITOR.MARKER_VISIBILITY.TURN_ON: {
        const filePath = payload.data.filePath;
        const fileRecord = map.get(filePath, new MarkerRecord());
        return map.set(filePath, fileRecord.set('visible', true));
      }

      case AT.EDITOR.MARKER_VISIBILITY.TURN_OFF: {
        const filePath = payload.data.filePath;
        const fileRecord = map.get(filePath, new MarkerRecord());
        return map.set(filePath, fileRecord.set('visible', false));
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
