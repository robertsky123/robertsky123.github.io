## 参考网址
* [npm 包地址](https://www.npmjs.com/package/gulp-rev-all)
* [教程](http://segmentfault.com/a/1190000002932998)


```js
//gulp-rev-all比较强大
var gulp        = require('gulp');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var config      = require('../config').rev;


var RevAll = require('gulp-rev-all');
 
gulp.task('revall', function () {
 
    var revAll = new RevAll({ dontRenameFile: [/^\/favicon.ico$/g, '.html'] });
    gulp.src('../www/**')
        .pipe(revAll.revision())
        .pipe(gulp.dest('../cdn'))
        .pipe(revAll.versionFile())
        .pipe(gulp.dest('../cdn'))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('../cdn'));
 
});
/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('rev', function() {
    gulp.src(config.revsrc,{base:'../www'})
    .pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest(config.dest))                               //- 输出文件本地
        .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('../rev'));
});

gulp.task('revCollector', function() {
     gulp.src(['../rev/*.json', '../tmp/**/*.html', '../tmp/**/*.js'],{base:"../tmp"})   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('./tmp'));
});
```
