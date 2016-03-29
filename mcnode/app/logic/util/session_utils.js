"use strict";
var crypto = require('crypto');

// Credit: http://stackoverflow.com/a/2117523
function createUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = crypto.randomBytes(1)[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

module.exports = {
  createUUID
};