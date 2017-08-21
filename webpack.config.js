var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}