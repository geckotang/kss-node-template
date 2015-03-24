var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var exec = require('child_process').exec;
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var del = require('del');
var runSequence = require('run-sequence');

var demoDir = 'demo/';
var sassSrc  = 'src/scss/**/*.scss';
var sassDestDir = 'demo/css/';

gulp.task('serve', function() {
  var timer;
  browserSync({
      server: demoDir
  });
  gulp.watch(sassSrc, ['sass']);
  gulp.watch(
    [
      sassSrc,
      "custom-template/helpers/*.js",
      "custom-template/index.html",
      "custom-template/public/styles.css"
    ], ['kss']).on('change', function(){
      clearTimeout(timer);
      timer = setTimeout(function() { 
        reload();
      }, 500);
    });
});

gulp.task('kss', function(){
  exec('./node_modules/.bin/kss-node --config ./kss-template-settings.json', function (error, stdout, stderr) {
    if(stdout){
        console.log('stdout: ' + stdout);
    }
    if(stderr){
        console.error('stderr: ' + stderr);
    }
    if (error !== null) {
      console.error('Exec error: ' + error);
    }
  });
});

gulp.task('clean', del.bind(null, [demoDir]));

gulp.task('build', function(cb){
  runSequence('clean', ['sass', 'kss'], cb);
});

gulp.task('sass', function(){
  var supportBrowsers = [ 'ie >= 9', 'ios >= 7', 'android >= 4.0' ];
  return gulp.src(sassSrc)
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer(supportBrowsers))
    .pipe(gulp.dest(sassDestDir));
});
