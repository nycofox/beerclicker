const gulp = require('gulp');
const gulp_concat = require('gulp-concat');
const gulp_rename = require('gulp-rename');
const gulp_uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

const destDir = './public/js/';
// const tempDir = './temp/'
const tempDir = './public/js/' // Revert to the temp directory above before release

gulp.task('compile', function () {
    return gulp.src([
        './src/js/variables_*.js',
        './src/js/definitions_*.js',
        './src/js/function_*.js',
        './src/js/update_*.js',
        './src/js/main.js'
    ])
        .pipe(gulp_concat('game_pretty.js')) //this will concat all the files
        .pipe(gulp.dest(tempDir)) //this will save game_pretty.js in a temp directory defined above
        .pipe(gulp_rename('game.js')) //this will rename game_pretty.js to game.js
        .pipe(gulp_uglify()) //this will uglify/minify game.js
        .pipe(gulp.dest(destDir)); //this will save game.js into destination Directory defined above
});