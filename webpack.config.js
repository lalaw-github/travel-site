const path = require('path');
 
module.exports = {
	entry: {
		App: './app/assets/scripts/App.js',
		Vendor: './app/assets/scripts/Vendor.js'
	},
	output: {
			filename: '[name].js',
			path: path.resolve(__dirname, './app/temp/scripts')
	}, 
	module: {
		rules: [
			{
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				},
				test: /\.js$/, 
				exclude: /node_modules/
			}
		]
	}
};