'use strict';

var jshint = require('gulp-jshint'),
gulp   = require('gulp'),
gutil = require('gulp-util'),
stylish = require('jshint-stylish'),
nodemon = require('gulp-nodemon'),
co =require('co'),
config = require('config'),
mocha = require('gulp-mocha-co');

gulp.task('lint', function() {
  gulp.src(['app/**/*.js', 'test/**/*.js', 'server.js'])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter(stylish));
});

gulp.task('serve', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ignored.js'],
    execMap: {
      'js': 'node --harmony'
    }
  })
  .on('change', ['lint', 'test'])
  .on('restart', function () {
    console.log('restarted!');
  });
});

gulp.task('test', function () {
  gulp.src('test/**/*.js')
  .pipe(mocha({reporter: 'dot'}))
  .on('error', gutil.log);
});
gulp.task('default', ['lint', 'test']);

gulp.task('dbCreate', co(function*(){

}));

gulp.task('dbMigrate', co(function*(){

}));
