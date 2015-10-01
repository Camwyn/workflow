module.exports = {
	'css': {
		description: 'Compile and post-process css.',
		tasks: [
			'sass',
			'postcss'
		]
	},
	'js': {
		description: 'Error check and concatenate js.',
		tasks: [
			'jshint',
			'concat'
		]
	},
	'css-deploy': {
		description: 'Compile, post-process and minify css.',
		tasks: [
			'css',
			'cssmin'
		]
	},
	'js-deploy': {
		description: 'Error check, concatenate and minify js.',
		tasks: [
			'js',
			'uglify'
		]
	},
	'imagemin-deploy': {
		description: 'Compress images',
		tasks: [
			'imagemin'
		]
	},
	'default': {
		description: 'Compile and post-process css. Error check and concatenate js.',
		tasks: [
			'js',
			'css'
		]
	},
	'deploy': {
		description: 'Compile, post-process and minify css. Error check, concatenate and minify js. Minify images.',
		tasks: [
			'js-deploy',
			'css-deploy',
			'imagemin-deploy'
		]
	},
	'test': {
		description: 'Test code via phpunit and qunit.',
		tasks: [
			'phpunit',
			'qunit'
		]
	}
};
