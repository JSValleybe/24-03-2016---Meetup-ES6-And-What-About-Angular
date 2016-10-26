var gulp    = require('gulp');
var sync    = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');

/*
map of paths for using with the tasks below
 */
var paths = {
  entry: 'src/app/eggly-app.js',
  app: ['src/app/**/*.{js,css,html}'],
  js: 'src/app/**/*!(.spec.js).js',
  styl: 'src/app/**/*.css',
  toCopy: ['src/index.html', 'src/data/*', 'src/assets/img/*'],
  html: ['src/index.html', 'src/app/**/*.html'],
  dest: 'dist'
};

gulp.task('build', function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
  browser({
    port: process.env.PORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

/*
simple task to copy over needed files to dist
 */
gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: 'src' })
    .pipe(gulp.dest(paths.dest));
});

/*
task to watch files for changes and call build and copy tasks
 */
gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy']);
});

gulp.task('default', function(done) {
  sync('build', 'copy', 'serve', 'watch', done)
});
