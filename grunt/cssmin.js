module.exports = function (grunt, options) {
	// computation...
	return {
		options: {
			banner: '/*! <%= package.title %> - v<%= package.version %>\n' +
				' * <%=package.homepage %>\n' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
				' * Licensed GPLv2+' +
				' */\n'
		},
		minify: {
			expand: true,
			cwd: 'assets/css/',
			src: ['*.css'],
			dest: 'assets/css/',
			//don't use .min.css - requires less logic in the theme
			ext: '.css'
		}
	}
};
