var gulp     = require('gulp'),
    rename   = require('gulp-rename'),
    compress = require('gulp-yuicompressor');

gulp.task('js', function () {
    gulp.src('jquery.redmine-links.js')
        .pipe(compress({
            nomunge : false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js']);
