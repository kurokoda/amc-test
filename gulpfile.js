'use strict';

var browserify = require('browserify')
  , del = require('del')
  , source = require('vinyl-source-stream')
  , vinylPaths = require('vinyl-paths')
  , gulp = require('gulp');

// Load all gulp plugins listed in package.json
var gulpPlugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// Define file path variables
var paths = {
  root: 'app/',      // App root path
  src: 'app/js/',   // Source path
  dist: 'app/dist/', // Distribution path
};

/*
 * Useful tasks:
 * - gulp fast:
 *   - linting
 *   - browserification
 *   - no minification, does not start server.
 * - gulp watch:
 *   - starts server with live reload enabled
 *   - lints, browserifies and live-reloads changes in browser
 *   - no minification
 * - gulp:
 *   - linting
 *   - browserification
 *   - minification and browserification of minified sources
 *   - stop server immediately when e2e tests have finished
 *
 * At development time, you should usually just have 'gulp watch' running in the
 * background all the time. Use 'gulp' before releases.
 */

var liveReload = true;

gulp.task('clean', function () {
  return gulp
    .src([paths.root + 'ngAnnotate', paths.dist], {read: false})
    .pipe(vinylPaths(del));
});

gulp.task('lint', function () {
  return gulp
    .src(['gulpfile.js',
      paths.src + '**/*.js',
      paths.test + '**/*.js',
      '!' + paths.src + 'third-party/**',
      '!' + paths.test + 'browserified/**',
    ])
    .pipe(gulpPlugins.eslint())
    .pipe(gulpPlugins.eslint.format());
});

gulp.task('browserify', /*['lint', 'unit'],*/ function () {
  return browserify(paths.src + 'app.js', {debug: true})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(paths.dist))
    .pipe(gulpPlugins.connect.reload());
});

gulp.task('ngAnnotate', ['lint'], function () {
  return gulp.src([
    paths.src + '**/*.js',
    '!' + paths.src + 'third-party/**'
  ])
    .pipe(gulpPlugins.ngAnnotate())
    .pipe(gulp.dest(paths.root + 'ngAnnotate'));
});

gulp.task('browserify-min', ['ngAnnotate'], function () {
  return browserify(paths.src + '/app.js')
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(gulpPlugins.streamify(gulpPlugins.uglify({mangle: false})))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('server', ['browserify'], function () {
  gulpPlugins.connect.server({
    root: 'app',
    livereload: liveReload
  });
});

gulp.task('watch', function () {
  gulp.start('server');
  gulp.watch([
    paths.src + '**/*.js',
    '!' + paths.src + 'third-party/**',
    paths.test + '**/*.js'
  ], ['fast']);
});

gulp.task('fast', ['clean'], function () {
  gulp.start('browserify');
});

gulp.task('default', ['clean'], function () {
  liveReload = false;
  gulp.start('browserify', 'browserify-min');
});
