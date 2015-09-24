module.exports = function (grunt, options) {
	// computation...
	return {
		all: {
			files: {
				'assets/js/workflow-test.min.js': ['assets/js/workflow-test.js']
			},
			options: {
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed GPLv2+' +
					' */\n',
				mangle: {
					except: ['jQuery']
				}
			}
		}
	}
};
