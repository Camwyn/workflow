module.exports = function (grunt, options) {
	// Note: vars must be decalred outside the return!
	var mozjpeg = require('imagemin-mozjpeg');

	return {
		options: {
			interlaced: false,
			use: [mozjpeg({quality: 80})]
		},
		dynamic: {
			files: [{
				expand: true,
				cwd: 'assets/images/src',
				src: ['**/*.{png,jpg,jpeg,gif}'],
				dest: 'assets/images/'
			}]
		}
	}
};

