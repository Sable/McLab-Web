/* ActionTypes */

import keyMirror from 'key-mirror-nested'

export default keyMirror({
  FILE_EXPLORER: {
    DATA_LOADED: '',
    SELECT_FILE: '',
    OPEN_SELECTION_MODE: '',
    CLOSE_SELECTION_MODE: '',
    CONFIRM_SELECTION: ''
  },
  FILE_CONTENT: {
    DATA_LOADED: ''
  },
  TERMINAL: {
    ADD_NEW_LINE: ''
  },
  SIDE_PANEL: {
    CLOSE_PANEL: ''
  },
  FORTRAN_COMPILE_PANEL: {
    OPEN_PANEL: '',
    ADD_ARGUMENT: '',
    DELETE_ARGUMENT: '',
    EDIT_ARGUMENT: '',
    CONFIRM_MAIN_FILE: '',
    OPEN_MAIN_FILE_SELECTION_MODE: '',
    CLOSE_MAIN_FILE_SELECTION_MODE: ''
  },
  EDITOR: {
    SET_MARKERS: '',
    MARKER_VISIBILITY: {
      TURN_ON: '',
      TURN_OFF: ''
    }
  },
  KIND_ANALYSIS: {
    DATA_LOADED: ''
  },
  KIND_ANALYSIS_PANEL: {
    OPEN_PANEL: ''
  },
  TOP_NAV_BUTTONS: {
    SET_SHORTENED_LINK: ''
  },
  JS_COMPILE_PANEL: {
    OPEN_PANEL: ''
  },
});
