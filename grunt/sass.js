module.exports = function (grunt, options) {
	// computation...
	return {
		all: {
			options: {
				precision: 2,
				sourceMap: true
			},
			files: {
				'assets/css/workflow-test.css': 'assets/css/sass/workflow-test.scss'
			}
		}
	}
};
