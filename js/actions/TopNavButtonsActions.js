import AT from '../constants/AT';
import Dispatcher from '../Dispatcher';
import React from 'react';
import request from 'superagent';
import TerminalActions from './TerminalActions';
import ShortenedLinkStore from '../stores/ShortenedLinkStore';


function getShortenedLink() {
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
          console.log('Error');
        }
      });
}

function printShortenedLink(){
  const textToPrint = "Your shortened link: " + ShortenedLinkStore.getShortenedLink();
      TerminalActions.println(
              <div>
                {textToPrint}
            </div>)
}

export default {
  getShortenedLink,
  printShortenedLink
}
