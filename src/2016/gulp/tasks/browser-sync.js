var gulp = require('gulp');
var config = require('../config.js');
var browserSync = require('browser-sync');

gulp.task("browser-sync", function () {
    browserSync({
        server: {
            baseDir: config.distPath
        }
    });
});
