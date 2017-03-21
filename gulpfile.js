const gulp = require('gulp'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      gutil = require('gulp-util'),
      watch = require('gulp-watch'),
      order = require('gulp-order');

gulp.task('build-css', () => {
  return gulp.src('src/**/*.css')
    .pipe(order([
      "vendor/reset.css",
      "vendor/angular-maerial.css",
      "*.css"
    ]))
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/build'));
});

gulp.task('build-js', () => {
	return gulp.src('src/**/*.js')
    .pipe(order([
      "vendor/angular.js",
      "vendor/*.js",
      "js/app.js",
      "*.js"
    ]))
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/build'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.css', ['build-css']);
  gulp.watch('src/**/*.js', ['build-js']);
});