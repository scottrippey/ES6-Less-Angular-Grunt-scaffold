module.exports = function(grunt) {
	
	// Misc:
	grunt.config.merge({
		concat: { 
			options: {
				sourceMap: true
			}
		},
		watch: {
			options: {

			},
			buildFiles: {
				files: [ 'Gruntfile.js', 'tasks/**/*.js' ],
				options: { reload: true }
			}
		}
	});
	
	// CSS:
	grunt.config.merge({
		less: {
			options: {
				sourceMap: true,
				plugins: [
					new (require('less-plugin-autoprefix'))({ }),
					require('less-plugin-glob')
				]
			}
		}
	});
	
	// JS:
	grunt.config.merge({
		babel: {
			options: {
				sourceMap: true
			}
		},
		uglify: {
			options: {
				sourceMap: true
			}
		}
	});
	
	// Angular HTML:
	grunt.config.merge({
		ngtemplates: {
			options: {
				
			}
		}
	});
	
};