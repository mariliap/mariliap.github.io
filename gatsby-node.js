const webpackLodashPlugin = require('lodash-webpack-plugin');

// Add Lodash plugin
exports.onCreateWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};
