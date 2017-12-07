const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
	// Tell webpack the root file of our
	// server application
	entry: './src/client/client.js',

	// Tell webpack where to put the putput file
	// that is generated
	output: {
		filename: 'bundle.js',
		// will automatically generate build folder
		path: path.resolve(__dirname, 'public')
	}
}

module.exports = merge(baseConfig, config)
