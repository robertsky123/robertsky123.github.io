// jshint node:true
'use strict';

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  livereload = require('gulp-livereload'),
  webserver = require('gulp-webserver'),
  md5 = require('gulp-md5'),

  rjs = require('gulp-requirejs');

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


gulp.task('requirejsBuild', function() {
    rjs({
        baseUrl: './js/',
        name : "main" ,
        out: 'main.js',
        shim: {
            // standard require.js shim options 
        },
        paths: {
            app: "app",
            appRoute: "app.route",
            appConifg: 'app.config'
        }
    })
    .pipe(uglify())
    .pipe(md5(10))
    .pipe(gulp.dest('./public/')); // pipe it to the output DIR 
});
// The develop task
gulp.task('default', ['webserver', 'less', 'livereload']);

gulp.task('build',['requirejsBuild']);
//The deploy task
//gulp.task('build', ['less', 'livereload']);