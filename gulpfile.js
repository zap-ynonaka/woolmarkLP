var gulp = require("gulp");
var plumber = require("gulp-plumber");

var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var frontnote = require("gulp-frontnote");

gulp.task("sass", function() {
  gulp.src("sass/**/*scss")
    .pipe(plumber())
    .pipe(frontnote({
        css: '../css/style.css'
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./html/css"));
});


var concat = require('gulp-concat');
gulp.task('scripts', function() {
  return gulp.src(["js/**/*.js","!js/min/**/*.js"])
    .pipe(concat('index.js'))
    .pipe(gulp.dest("./html/js"));
});

gulp.task("default", function() {
  // gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
  gulp.watch(["js/**/*.js","!js/min/**/*.js"],["scripts"]);
  gulp.watch("sass/**/*.scss",["sass"]);});