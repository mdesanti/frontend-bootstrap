var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('jsx', function () {
    return gulp.src('./src/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./tmp/'));
});
