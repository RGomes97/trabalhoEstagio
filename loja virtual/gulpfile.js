var gulp = require('gulp'),
clean = require('gulp-clean'),
concat = require('gulp-concat'),
htmlReplace = require('gulp-html-replace'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass'),
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
	gulp.src(['src/js/modulos/main.js', 'src/js/modulos/produtos.js', 'src/js/controllers/produtosCtrl.js', 'src/js/diretivas/faq.js'])
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', function(){
	gulp.src('dist/**/*.html')
		.pipe(htmlReplace({
			js: 'js/all.js'
		}))
		.pipe(gulp.dest('dist'))	
})

gulp.task('build-css', function(){
	gulp.src('src/**/*.scss')
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest('dist'))
})