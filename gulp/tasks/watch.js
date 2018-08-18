var gulp = require('gulp'), 
		watch = require('gulp-watch'),		
		browsersync = require('browser-sync').create();


//WATCH
gulp.task('watch', function() {
	
	//browsersync
	browsersync.init({
		notify: false, 
		server: {
			baseDir: 'app'
		}
	});
	
	//start html
	watch('./app/index.html', function() {
		browsersync.reload();
	});
	
	//start styles
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
	
});


//cssInject
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browsersync.stream());
});