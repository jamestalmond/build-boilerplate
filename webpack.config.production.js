const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const BUNDLE_NAME = 'build-boilerplate';

module.exports = function() {
	return {
		resolve: {
			extensions: ['.js', '.css', '.scss']
		},
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					cache: true,
					parallel: true,
					sourceMap: true
				}),
				new OptimizeCSSAssetsPlugin({})
			]
		},
		module: {
			rules: [
				{
					test: /\.s?css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin('dist'),
			new MiniCssExtractPlugin({
				filename: `css/${BUNDLE_NAME}.bundle.css`
			})
		],
		output: {
			filename: `js/${BUNDLE_NAME}.bundle.js`
		}
	};
};
