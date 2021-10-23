let gulp = require('gulp'),
  sass = require('gulp-sass');

const paths = {
  scss: {
    src: 'scss/*.scss',
    dest: 'dist/css',
    watch: 'scss/*.scss'
  }
};

// Compile sass into CSS & auto-inject into browsers
function compile () {
  var sassOptions = {
    outputStyle: 'expanded',
    indentType: 'space',
    indentWidth: 2,
    linefeed: 'lf'
  };

  // Compile all .scss to .css .
  return gulp.src([paths.scss.src])
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest(paths.scss.dest));
}

// Watching scss files.
function watch() {
  gulp.watch([paths.scss.watch], compile);
}

const build = gulp.series(compile, gulp.parallel(watch));

exports.compile = compile;
exports.watch = watch;

exports.default = build;
