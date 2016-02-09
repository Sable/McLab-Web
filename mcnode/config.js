"use strict";
var path = require('path');
var Immutable = require('immutable');

const BASE_DIR = path.join(__dirname + '/../');

let config = Immutable.Map({
    MEDIA_ROOT: path.join(BASE_DIR, 'user-files'),
    USER_FILE_FOLDER: 'workspace',
    MCLAB_CORE_JAR_PATH: '/home/emil/repos/mclab-core/languages/Natlab/McLabCore.jar',
    MC2FOR_PATH: '/home/emil/repos/mc2for/Mc2For.jar'
});

module.exports = config;
