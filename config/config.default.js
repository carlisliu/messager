'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547879168930_8141';

  // add your config here
  config.middleware = [];

  config.development = {
    overrideDefault: true,
    watchDirs: [
      'app/controller',
      'app/router',
      'app/view',
      'app/service',
      'config',
      'mocks',
      'mocks_proxy',
    ].map((dir) => path.join(appInfo.baseDir, dir))
  }

  return config;
};
