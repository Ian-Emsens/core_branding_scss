// -------------------------------------------------------------------
// :: GULP CONFIGURATION
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// :: COMMON TASKS
// -------------------------------------------------------------------
//
// - gulp: defaults to 'gulp server' and opens it in the browser

'use strict';

var gulp = require('gulp');

var clean = require('./gulp/clean'),
    server = require('./gulp/server'),
    styles = require('./gulp/styles'),
    templates = require('./gulp/templates');


// -------------------------------------------------------------------
// :: GULP DEFAULT
// -------------------------------------------------------------------

gulp.task('default', ['server'], function () {
    // Auto-open browser window
    // - https://www.npmjs.org/package/opn

    require('opn')('http://localhost:9000');
});
