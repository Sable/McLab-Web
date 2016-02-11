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
module.exports.MCLAB_CORE_JAR_PATH = '/home/emil/repos/mclab-core/languages/Natlab/McLabCore.jar'
module.exports.MC2FOR_PATH = '/home/emil/repos/mc2for/Mc2For.jar';