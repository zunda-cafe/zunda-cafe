/** reSTファイルの変更を感知、ビルドしてブラウザでLiveReload */

var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  shell = require('gulp-shell');

var SERVER_PORT = 4000;


gulp.task('watch', function () {
  gulp.watch(['./source/*.rst', './source/**/*.rst'],
      shell.task(['make html'])
  );
});

gulp.task('serve', function () {
  gulp.src('./build/html')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: SERVER_PORT
    }));
});

gulp.task('default', ['watch', 'serve']);

