var gulp = require('gulp'),
clean = require('gulp-clean'),
concat = require('gulp-concat'),
htmlReplace = require('gulp-html-replace'),
uglify = require('gulp-uglify'),
cssmin = require('gulp-cssmin');


gulp.task('default', ['copy'], function(){
	gulp.start('build-js', 'build-html', 'build-css');
});

gulp.task('copy', ['clean'], function(){

	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
	
});

gulp.task('clean', function(){	

	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('build-js', function(){
	gulp.src(['dist/js/modulos/main.js', 'dist/js/modulos/produtos.js', 'dist/js/controllers/produtosCtrl.js'])
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', function(){
	gulp.src('src/**/*.html')
		.pipe(htmlReplace({
			js: 'js/all.js'
		}))
		.pipe(gulp.dest('dist'))	
})

gulp.task('build-css', function(){
	gulp.src('src/**/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dist'))
})