const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const BUNDLE_NAME = 'build-boilerplate';

module.exports = function() {
	return {
		resolve: {
			extensions: [
				'.js',
				'.css',
				'.scss'
			]
		},
		module: {
			rules: [
				{
					test: /\.s?css$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				}
			]
		},
		plugins: [
			new htmlWebpackPlugin({
				template: 'src/index.html',
				minify: {
					collapseWhitespace: process.env.NODE_ENV === 'production'
				}
			}),
			new extractTextPlugin(
				{
					filename: `css/${BUNDLE_NAME}.bundle.css`
				}
			)
		],
		devServer: {
			historyApiFallback: true,
			port: 9000,
			open: true
		}
	}
}