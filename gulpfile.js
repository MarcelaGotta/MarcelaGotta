/* Dependencias */

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jade = require('gulp-jade'),
	imagemin = require('gulp-imagemin'),
	minifyCSS = require('gulp-minify-css'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass');


var path = {
    jade: ['jade/**/*.jade'],
    html: 'public/'
};


gulp.task('html', function() {
    return gulp.src(path.jade)
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest(path.html))
});

gulp.task('sass', function () {
  gulp.src('scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('js-min', function() {
    return gulp.src(['js/angular.min.js', 'js/angular-route.min.js', 'js/ngDialog.min.js', 'js/jquery.min.js', 'js/modernizr.custom.js', 'js/bootstrap.min.js', 'js/typed.min.js', 'js/elastic_grid.min.js', 'js/script.js' ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'))
});

gulp.task('img-min', function () {
    return gulp.src(['img/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('public/img/'));
});

gulp.task('css-min', function() {
    return gulp.src('css/*.css')
        .pipe(concat('general.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/css/'))
});

gulp.task('default',['sass', 'html', 'img-min', 'js-min', 'css-min'],  function() {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
	gulp.watch('jade/**/*.jade', ['html']);
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('img/*.*', ['img-min']);
	gulp.watch('css/*.css', ['css-min']);
    gulp.watch('js/*.js', ['js-min']);
    gulp.watch("public/**/*.*").on('change', browserSync.reload);
	
});