var gulp = require('gulp');

//gulp.task('命令名',回调函数);


gulp.task('copy-html',function(){
	gulp.src('*.html').pipe(gulp.dest('D:\\phpStudy\\WWW\\five'));
});

gulp.task('copy-png',function(){
	gulp.src('images/**/*').pipe(gulp.dest('D:\\phpStudy\\WWW\\five\\images'));
})

gulp.task('copy-css',function(){
	gulp.src('css/*.css').pipe(gulp.dest('D:\\phpStudy\\WWW\\five\\css'));
})

gulp.task('copy-js',function(){
	gulp.src('js/*.js').pipe(gulp.dest('D:\\phpStudy\\WWW\\five\\js'));
})

gulp.task('watchall',function(){
	gulp.watch('*.html',['copy-html']);
	gulp.watch('images/**/*',['copy-png']);
	gulp.watch('js/*.js',['copy-js']);
	gulp.watch('css/*.css',['copy-css']);
})
