module.exports = function (grunt, options) {
	// computation...
	return {
		all: {
			files: {
				'assets/js/workflow-test.js': ['assets/js/workflow-test.js'],
			},
			options: {
				banner: '/*! <%= package.title %> - v<%= package.version %>\n' +
					' * <%= package.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed MIT' +
					' */\n',
				mangle: {
					except: ['jQuery']
				}
			}
		}
	}
};
