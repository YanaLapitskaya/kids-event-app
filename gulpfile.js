var gulp = require("gulp");
var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("tslint", function() {
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report())
});

gulp.task("ts", ["tslint"], function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("default", ["ts"]);