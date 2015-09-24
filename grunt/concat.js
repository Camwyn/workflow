module.exports = function (grunt, options) {
	// computation...
	return {
		options: {
			stripBanners: true,
			banner: '/*! <%= pkg.title %> - v<%= pkg.version %>\n' +
				' * <%= pkg.homepage %>\n' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
				' * Licensed GPLv2+' +
				' */\n'
		},
		main: {
			src: [
				'assets/js/src/*.js'
			],
			dest: 'assets/js/workflow-test.js'
		}
	}
};
