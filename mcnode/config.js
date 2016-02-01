var path = require('path');

var config = {};

config.BASE_DIR = path.join(__dirname + '/../');
config.MEDIA_ROOT = path.join(config.BASE_DIR, 'user-files');
config.USER_FILE_FOLDER = 'workspace';
config.MCLAB_CORE_JAR_PATH = '/home/emil/repos/mclab-core/languages/Natlab/McLabCore.jar';
config.MC2FOR_PATH = '/home/emil/repos/mc2for/Mc2For.jar';

module.exports = config;
