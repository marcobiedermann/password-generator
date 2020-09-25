/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: 'client',
    historyApiFallback: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
});
