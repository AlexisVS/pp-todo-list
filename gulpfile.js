const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')


let plugins = [
    require('postcss-import'),
    require('tailwindcss')
]
gulp.task('css', async () => {
    return gulp.src("./src/**/*.css")
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css/'))
})