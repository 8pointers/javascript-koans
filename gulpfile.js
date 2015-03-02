/*global -$ */
(function () {
  'use strict';
  var gulp = require('gulp'),
    browserSync = require('browser-sync');
  gulp.task('serve', function () {
    browserSync({
      port: 9000,
      server: {
        baseDir: ['.']
      }
    });
    gulp.watch([
      '**/*.js'
    ]).on('change', browserSync.reload);
  });
  gulp.task('default', ['serve']);
}());
