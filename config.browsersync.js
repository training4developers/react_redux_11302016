'use strict';

const historyApiFallback = require('connect-history-api-fallback');

module.exports = {
	files: 'dist',
	server: 'dist',
	injectChanges: false,
	https: false,
	host: 'localhost',
	port: 3000,
	middleware: [ historyApiFallback() ]
};