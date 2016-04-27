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
  return window.location.href.split('/')[4];
}

export default {
  retrieveShortenedLink,
  printShortenedLink,
  getSessionID
}
