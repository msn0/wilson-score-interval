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
    },
    clean: ["dist"],
    uglify: {
      target: {
        options: {
          mangle: true
        },
        files: {
          'dist/wilson.js': [
            'src/wilson.js'
          ]
        }
      }
    },
    anonymous: {
      dist : {
        files: {
          'dist/wilson.js': 'dist/wilson.js'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-anonymous');

  grunt.registerTask("test", ['jshint', 'karma', 'clean', 'uglify', 'anonymous']);
  grunt.registerTask("default", ['test']);

};
