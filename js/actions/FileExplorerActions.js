import request from 'superagent';
import AT from '../constants/AT'
import Dispatcher from '../Dispatcher';

function fetchFileTree(sessionID) {
  const baseURL = window.location.origin;
  request.get(baseURL + '/files/filetree/')
      .set({'SessionID': sessionID})
      .end(
    function(err, res) {
      let data = {};
      if (err) {
        data['success'] = false;
        data['error'] = true;
      } else {
        data['success'] = true;
        data['contents'] = JSON.parse(res.text);
      }
      Dispatcher.dispatch({
        action: AT.FILE_EXPLORER.DATA_LOADED,
        data: data,
      });
    },
  );
}

export default {
  fetchFileTree,
}
