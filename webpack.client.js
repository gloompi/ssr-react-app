const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // Tell webpack the root file of our server app and where to output
  entry: './src/client/client.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
};

module.exports = merge(baseConfig, config);