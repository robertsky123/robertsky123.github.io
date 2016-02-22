// jshint node:true
'use strict';

var gulp = require('gulp'),
  gulpsync = require('gulp-sync')(gulp),
  gulpUtil = require('gulp-util'),
  clean = require('gulp-clean'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  usemin = require('gulp-usemin'),
  minifyHtml = require('gulp-minify-html'),
  minifyCss = require('gulp-minify-css'),
  rev = require('gulp-rev'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  livereload = require('gulp-livereload'),
  webserver = require('gulp-webserver'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  replace = require('gulp-replace'),
  include = require("gulp-include"),

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


gulp.task('cleanBuild', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

gulp.task('clean', function () {
    return gulp.src('.tmp', {read: false})
        .pipe(clean());
});

var filesToMoveTmp = [
        './js/**/*.*',
        './css/**/*.*',
        'index_dev.html'
    ];

gulp.task('moveToTmp', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  return gulp.src(filesToMoveTmp, { base: './' })
  .pipe(gulp.dest('.tmp'));
});

//r.js 生成main.js
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
                appConifg: 'app.config',
                userInfo: 'component/userInfo',
                bubbleEffect : 'component/bubble-effect'
            }
        })
        .pipe(gulp.dest('./.tmp/js/')); // pipe it to the output DIR 
});

gulp.task('uglifyConfig', function(){
  return gulp.src('./js/siteConfig.js')
    .pipe(uglify())
    .pipe(gulp.dest('./.tmp/js/'));
});

gulp.task('includeConfig', function(){
   return gulp.src(".tmp/index_dev.html")
          .pipe(include())
          .pipe(gulp.dest('.tmp'));
});

gulp.task('usemin', function () {
  return gulp.src('./.tmp/index_dev.html')
      .pipe(replace('<script src="js/siteConfig.js"></script>', ' '))
      .pipe(usemin({
        vendorcss: [minifyCss(), rev()],
        stylecss: [minifyCss(), rev()],
        html: [minifyHtml({empty: true})],
        libjs: [uglify(), rev()],
        appjs: [uglify(), rev()]
      }))
      .pipe(gulp.dest('.tmp/build/'));
});

gulp.task('rename', function () {
   return gulp.src(".tmp/build/index_dev.html")
          .pipe(rename("index.html"))
          .pipe(gulp.dest(".tmp/build/"));
});

var filesToMoveBase = [
        '.tmp/build/build/**/*.*',
        '.tmp/build/index.html'
    ];

gulp.task('moveToBase', function(){
  gulp.src('fonts/**/*.*', { base: './' })
      .pipe(gulp.dest('./build'));
  
  return gulp.src(filesToMoveBase, { base: '.tmp/build/' })
      .pipe(gulp.dest('./'));

  
});

gulp.task('minImg', function(){
   return gulp.src('images/**/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});

// The develop task
gulp.task('default', ['webserver', 'less', 'livereload']);

gulp.task('build',gulpsync.sync(['cleanBuild', 'moveToTmp', 'requirejsBuild','uglifyConfig','includeConfig','usemin', 'rename', 'moveToBase', 'clean']));

//gulp.task('build',gulpsync.sync(['moveToTmp', 'requirejsBuild', 'usemin']));

//The deploy task
//gulp.task('build', ['less', 'livereload']);