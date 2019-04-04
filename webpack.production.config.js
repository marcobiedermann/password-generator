/* eslint-disable import/no-extraneous-dependencies */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = webpackMerge(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
});
