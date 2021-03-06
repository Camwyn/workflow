module.exports = function (grunt, options) {
	// computation...
	return {
		options: {
			stripBanners: true,
			banner: '/*! <%= package.title %> - v<%= package.version %>\n' +
				' * <%= package.homepage %>\n' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
				' * Licensed MIT' +
				' */\n' +
				' \n' +
				';(function( window, undefined ){ \n "use strict"; \n \n ',
				footer: '}( window ));'
		},
		main: {
			src: [
				'assets/js/src/*.js'
			],
			dest: 'assets/js/workflow-test.js'
		}
	}
};
