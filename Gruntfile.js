module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask("test", ['jshint', 'karma']);
  grunt.registerTask("default", ['test']);

};