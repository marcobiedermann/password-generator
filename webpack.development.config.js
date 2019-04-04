/* eslint-disable import/no-extraneous-dependencies */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: 'client',
    historyApiFallback: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
});
