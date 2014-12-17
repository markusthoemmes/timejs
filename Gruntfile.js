module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      test: {
        src : 'time.js',
        options: {
          specs : 'test/**/*spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', 'jasmine');
};