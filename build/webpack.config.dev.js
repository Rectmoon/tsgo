const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = webpackMerge(baseConfig, {
  mode: 'development',

  devServer: {
    hot: true,
    open: false,
    port: 9000
  },

  devtool: 'inline-source-map',

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]
})
