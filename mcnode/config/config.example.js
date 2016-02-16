"use strict";
var path = require('path');

const BASE_DIR = path.join(__dirname + '/../../');

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

module.exports.MEDIA_ROOT =  path.join(BASE_DIR, 'user-files');
module.exports.USER_FILE_FOLDER =  'workspace';

// CHANGE THESE:
module.exports.MCLAB_CORE_JAR_PATH = '/absolute/path/to/McLabCore.jar';
module.exports.MC2FOR_PATH = '/absolute/path/to/Mc2For.jar';