// Various helper modules
var gulp = require("gulp");
var webserver = require('gulp-webserver');
var ngAnnotate = require('gulp-ng-annotate');


gulp.task('webserver', function() {
	return gulp.src('app')								// root
		.pipe(webserver({
			livereload: true,							// livereload
			directoryListing: true,
			open: "http://localhost:8000/index.html"	// index.html
	}));
});


gulp.task('ngAnnotate', function () {
	return gulp.src(['app/**/*.js', "!app/vendor/**/*.*"])
		.pipe(ngAnnotate())
		.pipe(gulp.dest('dist'));
});

// The default task is 'webserver'
gulp.task("default", ["webserver"]);