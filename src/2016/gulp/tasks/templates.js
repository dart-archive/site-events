var gulp = require('gulp');
var config = require('../config.js');
var mergeStream = require('merge-stream');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('templates', function () {
    var streams = config.bundles.filter(function (b) {
        return b.templates != null;
    }).map(function (b) {

        return gulp.src(b.templates)
            .pipe(gulp.dest(config.templatesDist))
            .pipe(reload({stream:true}));
    });

    return mergeStream(streams);
});
