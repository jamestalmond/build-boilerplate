const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
	return {
		resolve: {
			extensions: ['.js', '.css', '.scss']
		},
		module: {
			rules: [
				{
					test: /\.s?css$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
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
				template: 'src/index.html'
			})
		],
		devServer: {
			historyApiFallback: true,
			port: 9000,
			open: true
		}
	};
};
