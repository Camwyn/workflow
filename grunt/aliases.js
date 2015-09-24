module.exports = {
	'css-deploy': {
		description: 'Compile, post-process and minify css.',
		tasks: [
			'sass',
			'postcss',
			'cssmin'
		]
	},
	'js-deploy': {
		description: 'Error check, concatenate and minify js.',
		tasks: [
			'jshint',
			'concat',
			'uglify'
		]
	},
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
	'deploy': {
		description: 'Compile, post-process and minify css. Error check, concatenate and minify js.',
		tasks: [
			'js-deploy',
			'css-deploy'
		]
	},
	'default': {
		description: 'Compile and post-process css. Error check and concatenate js.',
		tasks: [
			'js',
			'css'
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
