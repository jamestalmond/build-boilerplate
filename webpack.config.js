const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

// input
// output
// plugins
// loaders
// resolve

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
					use: extractTextPlugin.extract(
						{
							use: [
								'css-loader',
								'sass-loader'
							]
						}
					),
					// use: [
					// 	'style-loader',
					// 	'css-loader',
					// 	'sass-loader'
					// ]
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
					filename: 'css/deals-page.bundle.css'
				}
			)
		]
	}
}