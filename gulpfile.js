
var gulp = require('gulp');
const sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');


gulp.task('sass', () =>
	sass('public/stylesheets/sass/index.scss')
		.on('error', sass.logError)
		.pipe(gulp.dest('public/stylesheets/css'))
);
// gulp.task('busdetail', () =>
// sass('public/stylesheets/sass/busdetail.scss')
//     .on('error', sass.logError)
//     .pipe(gulp.dest('public/stylesheets/css'))
// );
    
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['sass','browser-sync'],function () {
    gulp.watch(['**/*.html'], browserSync.reload);
    gulp.watch(['public/stylesheets/css/**/*.css'], browserSync.reload);
    gulp.watch("public/stylesheets/sass/**/*.scss", ['sass']);
});
