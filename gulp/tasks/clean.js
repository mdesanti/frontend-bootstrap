var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function (cb) {
  del(['./build', './.tmp'], cb);
});

gulp.task('clean:assets', function (cb) {
  del(['./build/assets'], cb);
});
