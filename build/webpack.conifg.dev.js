const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.conifg.base')

module.exports = webpackMerge(baseConfig, {
  mode: 'development',

  devServer: {
    open: false,
    port: 9000
  },

  devtool: 'inline-source-map',

  plugins: []
})
