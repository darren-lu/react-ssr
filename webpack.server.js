const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
	// Inform webpack thay we're building a bundle
	// for nodeJS, rather than for the browser
	target: 'node',

	// Tell webpack the root file of our
	// server application
	entry: './src/index.js',

	// Tell webpack where to put the putput file
	// that is generated
	output: {
		filename: 'bundle.js',
		// will automatically generate build folder
		path: path.resolve(__dirname, 'build')
	}
}
module.exports = merge(baseConfig, config)
