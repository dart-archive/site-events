var gulp = require('gulp');
var config = require('../config.js');
var mergeStream = require('merge-stream');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function () {
    var streams = config.bundles.filter(function (b) {
        return b.styles != null;
    }).map(function (b) {
        var ignores = b.ignorePlugins != null ? b.ignorePlugins : [];

        var useSourcemaps = ignores.indexOf("sourcemaps") == -1;

        return gulp.src(b.styles)
            .pipe(plugins.plumber(config.errorHandler("styles")))
            .pipe(plugins.if(useSourcemaps, plugins.sourcemaps.init({ loadMaps: true })))
            .pipe(plugins.less())
            .pipe(plugins.concat(b.name + ".min.css"))
            .pipe(plugins.minifyCss({keepBreaks:false}))
            .pipe(plugins.if(useSourcemaps, plugins.sourcemaps.write('.')))
            .pipe(gulp.dest(config.stylesDist))
            .pipe(reload({stream:true}));
    });

    return mergeStream(streams);
});