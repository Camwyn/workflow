module.exports = function (grunt, options) {
	// computation...
	return {
		dist: {
			options: {
				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'})
				]
			},
			files: [{
				expand: true,
				cwd: 'assets/css',
				src: ['*.css'],
				dest: 'assets/css',
				ext: '.css'
			}]
		}
	}
};
