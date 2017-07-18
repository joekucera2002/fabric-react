const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require("webpack-merge");

const CommonConfig = require("./webpack.common.js");

const config = Merge(CommonConfig, {
  entry: {
    app: './sample/index.jsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './sample/index.html',
      inject: 'body'
    })
  ]
});

console.log(config);

module.exports = config;