/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
});
