const Merge = require("webpack-merge");
const webpack = require("webpack");

const CommonConfig = require("./webpack.common.js");

const config = Merge(CommonConfig, {
  devtool: "cheap-module-source-map",
  entry: {
    main: "./fabric-react.js"
  },
  output: {
    filename: "fabric-react.js",
    library: "fabric-react",
    libraryTarget: "umd"
  },
  externals: [
    {
      "fabricjs": {
        root: "fabric",
        commonjs: "fabric",
        commonjs2: "fabric",
        amd: "fabric"
      },
      "react": {
        root: "React",
        commonjs: "react",
        commonjs2: "react",
        amd: "react"
      }
    }
  ],
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
});

module.exports = config;
