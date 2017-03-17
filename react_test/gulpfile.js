var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require("vinyl-source-stream");
var webserver = require('gulp-webserver');

gulp.task('browserify', function() {
  browserify('./src/app.js', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source("app.js"))
    .pipe(gulp.dest('./app/lib/'))
});

gulp.task('watch', function() {
  gulp.watch('./src/**', ['browserify'])
});

gulp.task('webserver', function() {
  gulp.src('./app/')
    .pipe(webserver({
      host: 'localhost',
      port: 80,
      livereload: true
    })
  );
});

gulp.task('default', ['browserify', 'watch', 'webserver']);
