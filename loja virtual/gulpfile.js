var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean')

gulp.task('copy',['clean'], function(){

	gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
	
});

gulp.task('clean', function(){
	return gulp.src('dist')
		.pipe(clean());

})

gulp.task('build-img', function(){
		
gulp.src('src/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('src/img'));	
})

/*npm run gulp build-img
