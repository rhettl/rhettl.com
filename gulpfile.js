/**
 * Created by rhett on 1/9/16.
 */


var gulp       = require('gulp');
var awsPublish = require('gulp-awspublish');



gulp.task('upload', function () {
  var publish = awsPublish.create(require('./credentials.json'));
  return gulp.src([
      './public/**'
    ])
    .pipe(publish.publish())
    .pipe(publish.sync())
    .pipe(awsPublish.reporter())
    ;
});

gulp.task('default', ['upload']);