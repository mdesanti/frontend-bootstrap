var gulp = require('gulp');

gulp.task('build', ['assets', 'jade', 'sass', 'jsx', 'scripts', 'vendor']);
