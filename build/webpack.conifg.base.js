const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { resolve } = require('./utils')

module.exports = {
  entry: {
    a: resolve('src/a.js'),
    main: resolve('src/main.ts')
  },

  output: {
    filename: '[name].js',
    path: resolve('dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader' }, { loader: 'awesome-typescript-loader' }],
        exclude: /node_modules/
      },

      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: resolve('dist'),
        ignore: ['.*', '**/*-manifest.json']
      }
    ]),

    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: resolve('public/index.html'),
      chunks: ['manifest', 'polyfill', 'main'],
      inject: 'body'
    }),

    new HtmlWebpackPlugin({
      filename: 'a.html',
      template: resolve('public/index.html'),
      chunks: ['manifest', 'polyfill', 'a'],
      inject: 'body'
    }),

    new webpack.ProgressPlugin()
  ]
}
