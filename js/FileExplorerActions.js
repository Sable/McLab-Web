import request from 'superagent';
import AT from './constants/AT'
import Dispatcher from './Dispatcher';

function fetchFileTree() {
  var req = request.get('files/filetree/',
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
