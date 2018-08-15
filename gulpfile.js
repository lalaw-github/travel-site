var gulp = require('gulp'), 
		watch = require('gulp-watch'),
		postcss = require('gulp-postcss'),
		autoprefixer = require('autoprefixer'),
		cssvars = require('postcss-simple-vars'),
		nested = require('postcss-nested');

//TASKS
//default
gulp.task('default', function() {
	console.log('Hurray');
});

//html
gulp.task('html', function() {
	console.log('Html function');
});

//css
gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

//watch
gulp.task('watch', function() {
	
	//start html
	watch('./app/index.html', function() {
		gulp.start('html');
	});
	
	//start styles
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
	
});