import babel from 'gulp-babel';
import gulp from 'gulp'; 
import print from 'gulp-print';
import watch from 'gulp-watch';
import gutil from 'gulp-util';
import changed from 'gulp-changed';
import nodemon from 'gulp-nodemon';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync'
import spa from 'browser-sync-spa';

 const SOURCE = './src/client/**/*',
 SOURCE_JS = './src/client/**/*.js',
 SOURCE_IGNORE_JS = '!./src/client/**/*.js',
 TARGET_CLIENT = './build/client',
 DEPENDENCIES_IGNORE_LIBRARIES  = '!./src/client/libs/**/*',
 SOURCE_DEPENDENCIES_LIBRARIES = './src/client/libs/**/*',
 TARGET_DEPENDENCIES_LIBRARIES = './build/client/libs';

 let webpackClientFiles = (watch = false) => {
 	let src = ['src/client/**/*.module.js'];
 	let wp = webpack({
 		watch: false,
 		module: {
 			loaders: [{
 				test: /\.js$/,
 				loaders: ['babel-loader?presets[]=es2015', 'eslint-loader']
 			}]
 		},
 		output: { filename: 'index.module.js'}
 	}, 
 	null, 
 	() => {
 		browserSync.reload();
 	}).on('error', (err) => {
 		console.log(err.message);
 		console.log(err.stack);
 		wp.emit('end');
 	});
 	return gulp.src(src)
 		.pipe(wp)
 		.pipe(gulp.dest(SOURCE));
 }
  //watch files client
 let files_web = ['./src/client/**/*.html',
 	'./src//client/**/*.json',
 	'./src/client/**/*.scss',
 	SOURCE_IGNORE_JS,
 	DEPENDENCIES_IGNORE_LIBRARIES

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

gulp.task('copy:dependencies', () => {
	return gulp.src([SOURCE_DEPENDENCIES_LIBRARIES])
		.pipe(gulp.dest(TARGET_DEPENDENCIES_LIBRARIES));
});

gulp.task('compile:client', () => {
 	//return compile(SOURCE_JS, TARGET_CLIENT);
 	return webpackClientFiles(false);
});

gulp.task('watch:client-assets', () => {
	return watch(files_web)
		.pipe(print())
		.pipe(gulp.dest(TARGET_CLIENT));
});

//Watch client js files
gulp.task('watch:client-resource', ()=> {
	gulp.watch([SOURCE_JS, DEPENDENCIES_IGNORE_LIBRARIES], ['compile:client']);
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
gulp.task('browser-sync', () => {
    console.info('BrowserSync config is loading..');
    browserSync.use(spa({
        selector: '[ng-app]'
    }));

    browserSync({
        open: false,
        files: [
            'build/public/**/*.js',
            'build/public/**/*.css',
            'build/public/**/*.json',
            'build/public/**/*.html'
        ],
        https: false
    });
});

//----------------------------------------------------------

gulp.task('watch:client', [
	'watch:client-assets',
	'watch:client-resource',
	'browser-sync'
]);

gulp.task('build:client', [
	'copy:client',
	'copy:dependencies',
	'compile:client'
]);

