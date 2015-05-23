module.exports = function(grunt) {
	grunt.registerTask('build-js', [ 'babel:ALL-ES6' ]);
	
	grunt.config.merge({
		babel: {
			'ALL-ES6': {
				files: [
					{ 
						src: 'src/angular-modules/**/*.es6.js',
						dest: 'dist/js/angular-modules.combined.js'
					}
				]
			}
		},
		watch: {
			'BUILD-JS': {
				src: [ 'src/angular-modules/**/*.es6.js' ],
				tasks: [ 'build-js' ]
			},
			'ALL-ES6-livereload': {
				src: [ 'dist/js/**/*.js' ],
				options: { livereload: true }
			}
		}
	});
};