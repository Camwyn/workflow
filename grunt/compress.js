module.exports = function (grunt, options) {
	// computation...
	return {
		main: {
			options: {
				mode: 'zip',
				archive: './release/workflow_test.<%= package.version %>.zip'
			},
			expand: true,
			cwd: 'release/<%= package.version %>/',
			src: ['**/*'],
			dest: 'workflow_test/'
		}
	}
};
