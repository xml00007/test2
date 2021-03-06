let gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    del = require('del');


//压缩css
// gulp.task('minify_css', ["clean"], function () {
//     let cssSrc = ['./css/*.css'];
//
//     return gulp.src(cssSrc)      //压缩的文件
//         .pipe(concat('all.css'))    //合并所有css到all.css
//         .pipe(gulp.dest('./main/css'))   //输出文件夹
//         .pipe(rename({suffix: '.min'}))
//         .pipe(minifycss())
//         .pipe(gulp.dest('./main/css')); //执行压缩
// });

//压缩js
gulp.task('minify_js', ["clean"], function () {
    let jsSrc = ['./lib/*.js', '!./lib/*.src.js'];

    return gulp.src(jsSrc)
        .pipe(concat('all.js'))    //合并所有js到all.js
        .pipe(babel())
        .pipe(gulp.dest('../lib'))    //输出all.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('../lib'));  //输出
});


//执行压缩前，先删除以前压缩的文件
gulp.task('clean', function () {
    return del(['./css/all.css', './css/all.min.css', '../lib/all.js', '../lib/all.min.js'])
});

// 默认任务
gulp.task('default', function () {
    gulp.run('minify_js');
});