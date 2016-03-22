import request from 'superagent';
import OnLoadActions from './OnLoadActions'

function sendCompilationRequest(){
  const postBody = {mainFile: 'demo_matlab/testMain.m'};

  const baseURL = window.location.origin;
  const sessionID = OnLoadActions.getSessionID();
  request.post(baseURL + '/compile/mcvmjs')
      .set({'SessionID': sessionID})
      .send(postBody)
      .end(function(err, res) {
        if(!err){
          console.log('mcvmjs request replied with no error');
          console.log(res);
        }
        else{
          console.log('mcvmjs request replied with no error');
        }
      });
}

export default{
  sendCompilationRequest
}