var gulp = require('gulp');
var config = require('../config.js');

gulp.task('watch', ['default'], function() {
    gulp.watch(config.watchScripts, ["scripts"]);
    gulp.watch(config.watchStyles, ["styles"]);
    gulp.watch(config.watchImages, ["images"]);
    gulp.watch(config.watchIcons, ["icons"]);
    gulp.watch(config.watchTemplates, ["templates"]);

    return gulp.start('browser-sync');
});
