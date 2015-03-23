var gulp = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
    var timer;
    browserSync({
        server: "./demo"
    });
    gulp.watch(
      [
        "src/**/*.scss",
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

gulp.task('kss',function(){
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
