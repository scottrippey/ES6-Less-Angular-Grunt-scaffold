module.exports = function(grunt) {
	
	grunt.registerTask('default', [ 'build-js','build-css' ]);
	grunt.registerTask('dev', [ 'default', 'watch' ]);
	
	require("./tasks/defaults.js")(grunt);
	require("./tasks/build-js.js")(grunt);
	require("./tasks/build-css.js")(grunt);
	
	grunt.loadNpmTasks("grunt-angular-templates");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	
	grunt.file.setBase('../');
	
};