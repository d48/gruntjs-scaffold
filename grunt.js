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
      files: ['<config:lint.files>','app/views/*.jade'],
      tasks: 'default lint concat min jade reload'
    },
    concat: {
      dist: {
        src: ['lib/*.js'],
        dest: 'dist/lib/concat.js'
      }
    },

    // Compile jade templates to html
    jade: {
      // Use links to development assets
      html: {
        src: ['app/views/layout.jade'],
        dest: 'dist/lib/views',
        options: {
          client: false,
          pretty: true
        }
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
    },

    // auto-reload web file
    reload: {
      port: 35729,
      proxy: {
        host: 'localhost',
        port: 1234
      },
      liveReload: {}
    },

    // spin up server
    server: {
      port: 1234,
      base: 'dist/lib/views'
    }
  });

  // Load tasks from NPM packages
  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-reload');

  // Default task.
  grunt.registerTask('default', 'lint test concat min jade reload watch');
};

