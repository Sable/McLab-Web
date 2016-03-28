import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import React from 'react';
import request from 'superagent';
import TerminalActions from './TerminalActions';
import MiscDataStore from '../stores/MiscDataStore';


function retrieveShortenedLink() {
  const currentLink = window.location.href;
  const baseURL = window.location.origin;
  request.get(baseURL + '/shortenURL/' + currentLink)
      .end(function(err, response){
        if(!err){
          const shortenedLink = JSON.parse(response.text).shortenedURL;
          Dispatcher.dispatch({
            action: AT.TOP_NAV_BUTTONS.SET_SHORTENED_LINK,
            data: {shortenedLink},
          });
        }
        else{
          TerminalActions.printerrln(
              <div>
                Could not shorten URL.
              </div>
          )
        }
      });
}

function printShortenedLink(){
  const textToPrint = "Your shortened link: " + MiscDataStore.getShortenedLink();
      TerminalActions.println(
              <div>
                {textToPrint}
            </div>)
}

function getSessionID(){
  const endOfURL = window.location.href.slice(-37); // The sessionID plus a / at the end
  const sessionID = endOfURL.slice(0, 36); // Remove the /
  return sessionID;
}

export default {
  retrieveShortenedLink,
  printShortenedLink,
  getSessionID
}
