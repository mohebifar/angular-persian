'use strict'

mountFolder = (connect, dir) ->
    connect.static require('path').resolve(dir)

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  yeomanConfig =
    src: 'src'
    dist: 'dist'
    tmp: '.tmp'

  grunt.initConfig
    yeoman: yeomanConfig

    coffee:
      dist:
        files: [
          expand: true
          cwd: '<%= yeoman.tmp %>'
          src: '{,*/}*.coffee'
          dest: '<%= yeoman.dist %>'
          ext: '.js'
        ]
    concat:
      dist:
        src: ['<%= yeoman.src %>/module.coffee', '<%= yeoman.src %>/fn/*.coffee', '<%= yeoman.src %>/filters.coffee']
        dest: '<%= yeoman.tmp %>/angularpersian.coffee'
    uglify:
      build:
        src: '<%=yeoman.dist %>/angularpersian.js'
        dest: '<%=yeoman.dist %>/angularpersian.min.js'
    mocha_phantomjs:
      options:
        reporter: 'xunit',
        output: 'test/results/result.xml'
      all: ['test/**/*.html']

    grunt.registerTask 'default', [
      'concat'
      'coffee'
    ]

    grunt.registerTask 'build', [
      'default'
      'uglify'
    ]

    grunt.registerTask 'test', [
      'mocha_phantomjs'
    ]
