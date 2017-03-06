import babel from 'gulp-babel';
import gulp from 'gulp'; 
import print from 'gulp-print';
import watch from 'gulp-watch';
import gutil from 'gulp-util';
import changed from 'gulp-changed';
import nodemon from 'gulp-nodemon';

 const SOURCE = './client/**/*',
 SOURCE_JS = './client/**/*.js',
 SOURCE_IGNORE_JS = '!./client/**/*.js',
 TARGET_CLIENT = './build/client';

  //watch files client
 let files_web = ['./client/**/*.html',
 	'./client/**/*.json',
 	'./client/**/*.scss',
 	SOURCE_IGNORE_JS
 ];

 let compile = (source, target) => {
	return gulp.src(source)
		.pipe(babel())
		.pipe(gulp.dest(target));
};

gulp.task('copy:client', () => {
	return gulp.src([SOURCE, SOURCE_IGNORE_JS])
		.pipe(gulp.dest(TARGET_CLIENT));
});

gulp.task('compile:client', () => {
 	return compile(SOURCE_JS, TARGET_CLIENT);
});

gulp.task('watch:client-assets', () => {
	return watch(files_web)
		.pipe(print())
		.pipe(gulp.dest(TARGET_CLIENT));
});

//Watch client js files
gulp.task('watch:client-resource', ()=> {
	gulp.watch(SOURCE_JS, ['sync:client-resource']);
});

gulp.task('sync:client-resource', () => {
	let babelWatch = babel().on('error', (error) => {
		gutil.log(gutil.colors.red('[Compilation Error]'));
		gutil.log(gutil.colors.red(error.message));
		console.log(err.stack);
		babel.emit('end');
	});
	return gulp.src(SOURCE_JS)
		.pipe(changed(TARGET_CLIENT))
		.pipe(print())
		.pipe(babelWatch)
		.pipe(gulp.dest(TARGET_CLIENT));
});
//----------------------------------------------------------

gulp.task('watch:client', [
	'watch:client-assets',
	'watch:client-resource'
]);

gulp.task('build:client-test', [
	'copy:client',
	'compile:client'
]);

