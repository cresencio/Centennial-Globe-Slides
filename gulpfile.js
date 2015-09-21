var gulp = require('gulp');
var electron = require('gulp-electron');
var packageJson = require('./app/package.json');

gulp.task('electron', function() {

    gulp.src("")
    .pipe(electron({
        src: './app',
        packageJson: packageJson,
        release: './release',
        cache: './cache',
        version: 'v0.26.1',
        packaging: true,
        platforms: ['win32-ia32', 'darwin-x64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: packageJson.name,
                CFBundleIdentifier: packageJson.name,
                CFBundleName: packageJson.name,
                CFBundleVersion: packageJson.version,
                icon: 'gulp-electron.icns'
            },
            win: {
                "version-string": packageJson.version,
                "file-version": packageJson.version,
                "product-version": packageJson.version,
                "icon": 'gulp-electron.ico'
            }
        }
    }))
    .pipe(gulp.dest(""));
});

// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
//
// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {
//
//     browserSync.init({
//         server: "./app"
//     });
//
//     gulp.watch("app/scss/*.scss", ['sass']);
//     gulp.watch("app/*.html").on('change', browserSync.reload);
// });
//
// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("app/scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("app/css"))
//         .pipe(browserSync.stream());
// });
//
// gulp.task('default', ['serve']);
