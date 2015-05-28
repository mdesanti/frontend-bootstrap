var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    config = require('../config');

var localConfig = {
  src: ['./tmp/**/*.js', './src/js/**/*.js'],
  dest: './build/js/',
  uglify: {
    development: {
      mangle: false,
      compress: false,
      preserveComments: 'all'
    },
    staging: {},
    production: {}
  }
};

gulp.task('scripts', function() {
  gulp.src(localConfig.src, { base: './' })
    .pipe(plumber({errorHandler: config.errorHandler}))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat('all.js'))
      .pipe(gulpif(config.productionlike(),uglify()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(localConfig.dest));
});
