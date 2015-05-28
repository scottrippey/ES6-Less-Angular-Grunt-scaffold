module.exports = function(grunt) {
	grunt.registerTask('build-js', [ 'concat:ANGULAR-MODULES-ES6', 'babel:ANGULAR-MODULES-ES6' ]);
	
	grunt.config.merge({
		concat: {
			'ANGULAR-MODULES-ES6': {
				src: 'src/angular-modules/**/*.js',
				dest: 'dist/js/angular-modules.combined.es6.js'
			}
		},
		babel: {
			'ANGULAR-MODULES-ES6': {
				src: 'dist/js/angular-modules.combined.es6.js',
				dest: 'dist/js/angular-modules.combined.js'
			}
		},
		watch: {
			'BUILD-JS': {
				files: [ 'src/angular-modules/**/*.js' ],
				tasks: [ 'build-js' ]
			},
			'ALL-ES6-livereload': {
				files: [ 'dist/js/**/*.js' ],
				options: { livereload: true }
			}
		}
	});
};
