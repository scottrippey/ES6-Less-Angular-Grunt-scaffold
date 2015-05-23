module.exports = function(grunt) {
	grunt.registerTask('build-css', [ 'less:ALL-LESS' ]);
	grunt.config.merge({
		less: {
			'ALL-LESS': {
				files: [
					{
						src: 'src/less/master.less',
						dest: 'dist/css/master.combined.css' 
					}
				]
			}
		},
		watch: {
			'ALL-LESS': {
				files: [ 'src/**/*.css', 'src/**/*.less' ],
				tasks: [ 'build-css' ]
			},
			'ALL-LESS-livereload': {
				files: [ 'dist/css/**/*.css' ],
				options: { livereload: true }
			}
		}
	});
};