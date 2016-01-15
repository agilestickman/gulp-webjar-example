//<-- DEPENDENCIES -->
var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssmini = require('gulp-minify-css');
var del = require('del');
var template = require('gulp-template');
var runSequence = require('run-sequence');

//<-- SETTINGS -->
var gav = {
  groupId: 'com.example',
  artifactId: 'ab-test-spa',
  version: '1.0.4'
};

//<-- RESOURCE GENERATION -->
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

//<-- BUILDING -->
gulp.task('fonts', function() {
  return gulp.src('app/font/**/*')
  .pipe(gulp.dest('dist/font'));
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssmini()))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('build', function(callback) {
  runSequence('clean:dist',
    'sass',
    ['useref', 'fonts'],
    callback
  );
});

//<-- MAVENIZING -->
gulp.task('maven:pom', function() {
	return gulp.src('resources/pom.xml')
		.pipe(template(gav))
		.pipe(gulp.dest('maven'));
});

gulp.task('maven:install', function(){
  var installDir = 'maven/src/main/resources/META-INF/resources/webjars/' +
                      gav.artifactId + '-' + gav.version + '/' + gav.version;
  return gulp.src('dist/**')
  .pipe(gulp.dest(installDir));
});

gulp.task('maven:clean', function() {
  return del.sync('maven');
});

gulp.task('maven', function(callback) {
  runSequence(['build', 'maven:clean'],
    ['maven:pom', 'maven:install'],
    callback
  );
});

//<-- TIDYING -->
gulp.task('clean:all', function(){
  runSequence(['maven:clean','clean:dist']);
});
