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
	
	//watching HTML changes
	watch('./app/index.html', function() {
		browsersync.reload();
	});
	
	//watching CSS changes
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
	
	//watching JS changes
	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
	
});

//cssInject: see CSS changes without browser refresh
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browsersync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browsersync.reload();
})