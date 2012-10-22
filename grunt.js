module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    concat: {
      dist: {
        src: ['lib/*.js'],
        dest: 'dist/lib/concat.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: false
      },
      globals: {
        exports: true
      }
    },
    min: {
      dist: {
        src: ['dist/lib/concat.js'],
        dest: 'dist/lib/contact.min.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test concat min');

};
