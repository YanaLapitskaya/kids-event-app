var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");
var tsProject = ts.createProject("tsconfig.json");
var connect = require('gulp-connect');

gulp.task("tslint", function() {
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report())
});

gulp.task('sass', function() {
    return gulp.src("public/stylesheets/style.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("public/stylesheets"))
        .pipe(connect.reload());
});

gulp.task("ts", ["tslint"], function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task("default", ["ts","sass","connect","watcher"]);

gulp.task('watcher', function() {
    gulp.watch('src/**/*.ts', ['ts']);
    gulp.watch('public/**/stylesheets/*.sass', ['sass']);
});
