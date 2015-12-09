var gulp = require("gulp"),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    eslint = require('gulp-eslint'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    log = util.log;
var streamqueue = require('streamqueue');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('clean', function () {
  return del([
    'dist/**/*',
  ]);
});

//minify css
gulp.task("sass",["clean"], function(){
  log("Generate CSS files " + (new Date()).toString());
   return streamqueue({ objectMode: true },
       gulp.src("sass/style.scss"),
       gulp.src("js/features/**/*.scss"),
       gulp.src("js/directives/**/*.scss")
    )
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
    .pipe(minifycss({compatibility: 'ie9'}))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'));
});


//tasks
gulp.task('default',['sass'])
