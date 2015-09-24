module.exports = function( grunt ) {
	'use strict';

	// PostCSS Specifica Variables
	var autoprefixer = require('autoprefixer');

	require('load-grunt-config')(grunt, {
		pkg: grunt.file.readJSON('package.json')
	});
};
