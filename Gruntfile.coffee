# Generated on 2014-10-16 using generator-bower 0.0.1
'use strict'

mountFolder = (connect, dir) ->
    connect.static require('path').resolve(dir)

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  yeomanConfig =
    src: 'src'
    dist : 'dist'

  grunt.initConfig
    yeoman: yeomanConfig

    
    coffee:
      dist:
        files: [
          expand: true
          cwd: '<%= yeoman.src %>'
          src: '{,*/}*.coffee'
          dest: '<%= yeoman.dist %>'
          ext: '.js'
        ]
    uglify:
      build:
        src: '<%=yeoman.dist %>/angularpersian.js'
        dest: '<%=yeoman.dist %>/angularpersian.min.js'
    mocha_phantomjs:
      options:
        reporter: 'xunit',
        output: 'tests/results/result.xml'
      all: ['test/**/*.html']

    grunt.registerTask 'default', [
      'mocha_phantomjs'
      'coffee'
      'uglify'
    ]