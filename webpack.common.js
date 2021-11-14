const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index.js"),
  },

  output: {
    path: path.join(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader?name=/[hash].[ext]"
          }
        ]
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  },

  plugins: [
    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
        {
          from: "./src/fonts/",
          to: "fonts/"
        }
      ]
    }
    ),
    new MiniCssExtractPlugin(),
  ]
};
