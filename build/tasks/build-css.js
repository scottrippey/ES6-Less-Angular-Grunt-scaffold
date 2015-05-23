module.exports = function(grunt) {
	grunt.registerTask('build-css', [ 'less:ALL-LESS' ]);
	grunt.config.merge({
		less: {
			'ALL-LESS': {
				files: [
					{
						src: [ 
							'src/less/master.less'
						],
						dest: 'dist/css/master.combined.css' 
					}
				]
			}
		},
		watch: {
			'ALL-LESS': {
				src: [ 'src/**/*.css', 'src/**/*.less' ],
				tasks: [ 'build-css' ]
			},
			'ALL-LESS-livereload': {
				src: [ 'dist/css/**/*.css' ],
				options: { livereload: true }
			}
		}
	});
};