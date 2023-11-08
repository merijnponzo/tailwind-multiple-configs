const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

"babel-plugin-root-import"

module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry,
    'app': path.resolve(process.cwd(), 'src/', 'app.js'),
    'config-a': path.resolve(process.cwd(), 'src/config-a', 'index.js'),
    'config-b': path.resolve(process.cwd(), 'src/config-b', 'index.js')
  },
  resolve: {},
  plugins: [
    ...defaultConfig.plugins
  ],
};
