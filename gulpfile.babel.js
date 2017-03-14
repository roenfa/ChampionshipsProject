import fs from 'fs';
import gulp from 'gulp';
//import sass from 'gulp-sass';

/*gulp.task('styles', function() {
    gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});*/

//Watch task
/*gulp.task('compile_sass',function() {
    gulp.watch('*.scss',['styles']);
});
*/

fs.readdirSync('./gulp_tasks').filter(function(file){
	return (/\.(js)$/i).test(file);
}).map(function(file) {
	require('./gulp_tasks/'+ file);
});

gulp.task('default', ['clean'], function(){
	gulp.start('develop');
});