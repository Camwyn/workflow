module.exports = function (grunt, options) {
	// computation...
	return {
		main: {
			options: {
				mode: 'zip',
				archive: './release/workflow_test.<%= pkg.version %>.zip'
			},
			expand: true,
			cwd: 'release/<%= pkg.version %>/',
			src: ['**/*'],
			dest: 'workflow_test/'
		}
	}
};
