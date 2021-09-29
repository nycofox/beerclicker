const gulp = require('gulp');
const gulp_concat = require('gulp-concat');
const gulp_rename = require('gulp-rename');
const gulp_uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

const destDir = './public/js/';
// const tempDir = './temp/'
const tempDir = './public/js/'

gulp.task('js-uglify', function () {
    return gulp.src([
        './src/js/variables_*.js',
        './src/js/definitions_*.js',
        './src/js/function_*.js',
        './src/js/update_*.js',
        './src/js/main.js'
    ]) //Use wildcards to select all files in a particular folder or be specific
        .pipe(gulp_concat('game_pretty.js')) //this will concat all the files into concat.js
        .pipe(gulp.dest(tempDir)) //this will save concat.js in a temp directory defined above
        .pipe(gulp_rename('game.js')) //this will rename concat.js to uglify.js
        .pipe(gulp_uglify()) //this will uglify/minify uglify.js
        .pipe(gulp.dest(destDir)); //this will save uglify.js into destination Directory defined above
});