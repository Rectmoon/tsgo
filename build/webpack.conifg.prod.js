const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { name, author, description, version } = require('../package.json')

const baseConfig = require('./webpack.conifg.base')
const commonOptions = {
  chunks: 'all',
  reuseExistingChunk: true
}

module.exports = webpackMerge(baseConfig, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    filename: '[name].min.[chunkhash:6].js'
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),

    new webpack.BannerPlugin({
      banner: [
        `@project: ${name}`,
        `@author: ${author}`,
        `@date: ${new Date()}`,
        `@description: ${description}`,
        `@version: ${version}`
      ].join('\n'),
      entryOnly: true,
      exclude: /^(polyfill|manifest)/
    })
  ],

  optimization: {
    moduleIds: 'hashed',

    runtimeChunk: {
      name: 'manifest'
    },

    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        polyfill: {
          test: /[\\/]node_modules[\\/](core-js|raf|@babel|babel)[\\/]/,
          name: 'polyfill',
          priority: 30,
          ...commonOptions
        },
        styles: {
          name: 'styles',
          test: /(reset|common|base)\.(s?css|sass|styl|less)/,
          enforce: true,
          ...commonOptions
        }
      }
    },

    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_debugger: false,
            drop_console: false
          }
        }
      })
    ]
  }
})
