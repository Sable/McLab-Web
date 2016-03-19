import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';

function setMarkers(filePath, markers) {
  Dispatcher.dispatch({
    action: AT.EDITOR.SET_MARKERS,
    data: {filePath, markers}
  })
}

function show(filePath) {
  Dispatcher.dispatch({
    action: AT.EDITOR.MARKER_VISIBILITY.TURN_ON,
    data: {filePath}
  });
}

function hide(filePath) {
  Dispatcher.dispatch({
    action: AT.EDITOR.MARKER_VISIBILITY.TURN_OFF,
    data: {filePath}
  });
}

export default {
  setMarkers,
  show,
  hide
}
