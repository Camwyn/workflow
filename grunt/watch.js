module.exports = function (grunt, options) {
	// computation...
	return {
		livereload: {
			files: ['assets/css/*.css', 'assets/js/*.js'],
			options: {
				livereload: true
			}
		},
		styles: {
			files: ['assets/css/sass/**/*.scss'],
			tasks: ['sass', 'autoprefixer', 'cssmin'],
			options: {
				debounceDelay: 500
			}
		},
		scripts: {
			files: ['assets/js/src/**/*.js', 'assets/js/vendor/**/*.js'],
			tasks: ['jshint', 'concat', 'uglify'],
			options: {
				debounceDelay: 500
			}
		}
	}
};
