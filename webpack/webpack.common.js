const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");

module.exports = () => {
	// call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

	return {
		entry: ["@babel/polyfill", "./src/index.js"],
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ["babel-loader"]
				},
				{
					test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
					use: "url-loader?limit=100000"
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						"postcss-loader",
						"sass-loader"
					]
				}
			]
		},
		resolve: {
			extensions: ["*", ".js", ".jsx"]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				filename: "./index.html"
			}),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css"
			}),
			new webpack.DefinePlugin(envKeys)
		],
		devServer: {
			contentBase: "./dist",
			hot: true
		}
	};
};
