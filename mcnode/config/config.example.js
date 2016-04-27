"use strict";
var path = require('path');

const MCNODE_HOME = path.join(__dirname + '/../../');

module.exports = {
    development: {
        app: {
            name: 'McNode',
            host: 'localhost',
            port: 3000
        }
    },
    production: {
        app: {
            name: 'McNode',
            host: 'localhost',
            port: 3000
        }
    }
};

module.exports.MEDIA_ROOT =  path.join(MCNODE_HOME, 'user-files');
module.exports.USER_FILE_FOLDER =  'workspace';

// CHANGE THESE:
module.exports.MCLAB_CORE_JAR_PATH = '/absolute/path/to/McLabCore.jar';
module.exports.AMC_JAR = 'absolute/path/to/amc.jar';
module.exports.MATLAB = '/Path/to/matlab/';
module.exports.MC2FOR_PATH = '/absolute/path/to/Mc2For.jar';
module.exports.MCVM_PATH = '/absolute/path/to/mcvm.js';
module.exports.LINK_SHORTENER_API_KEY = '';