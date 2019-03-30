const gulp = require('gulp');
const fs = require('fs');
const del = require('del');
const $ = require('gulp-load-plugins')();

// Utility to ignore unnecessary files
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!**/REMOVE{,/**}',
    '!node_modules{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store'
  ]);
}

// Remove solutions from exercises
gulp.task('remove-solutions', function () {
  del.sync('dist');
  return gulp.src(addDefSrcIgnore(['**']), {dot: true})
    .pipe($.replace(/^\s*(\/\/|<!--|\/\*)\s*REMOVE-START[\s\S]*?REMOVE-END\s*(\*\/|-->)?\s*$/gm, ''))
    .pipe(gulp.dest('dist'));
});

// Prepare for distribution to students
gulp.task('dist', ['remove-solutions'], function () {
  let npmConfig = require('./package.json');
  npmConfig.scripts.install = 'cd client && npm i .';
  npmConfig.scripts.precommit = 'cd client && ng lint';
  npmConfig = JSON.stringify(npmConfig, null, 2).replace(/-master/g, '');
  fs.writeFileSync('dist/package.json', npmConfig);
});
