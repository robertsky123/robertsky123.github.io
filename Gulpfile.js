// jshint node:true
'use strict';

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  livereload = require('gulp-livereload'),
  webserver = require('gulp-webserver');

// Rerun the task when a file changes
gulp.task('livereload', function() {
    livereload.listen({ basePath: '.' });

    gulp.src(['css/**/*.css','js/**/*.js','index_dev.html','views/**/*.html'], {read: false})
    .pipe(watch())
    .pipe(livereload());

});

//less
gulp.task('less', function() {

    return gulp.src('./less/*.less')
      .pipe(plumber())
      .pipe(watch({ emit: 'all' }))
      .pipe(less())
      .pipe(gulp.dest('./css'));

});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: false,
      directoryListing: true,
      open: true
    }));
});


// The develop task
gulp.task('default', ['webserver', 'less', 'livereload']);

//The deploy task
//gulp.task('build', ['less', 'livereload']);