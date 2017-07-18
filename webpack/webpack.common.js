const path = require("path");
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, "../src"),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};

module.exports = config;
