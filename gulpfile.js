var gulp = require('gulp');
var exec = require('child_process').exec;
var watch = require('gulp-watch');

var externalLib = "src/**/*.ts";


gulp.task('buildtask', function() {
    console.log("started");

    exec('ng build', function(err, output, error) {
        console.log(output);
        console.log(error);

    });
    console.log("Ended");
});
gulp.task('server', function() {
    console.log("server Started");
    exec('node app.js', function(err, output, error) {
        console.log(output);
        console.log(error);
    });
});


gulp.watch(['src/**/*.js', 'src/app/**/*.html', 'src/**/*.html'], ['buildtask']);