var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'public'),
  entry: './js/client.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
        presets: ['react', 'env'],
        }
      }
    ]
  }
}