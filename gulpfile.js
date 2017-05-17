'use strict';

const gulp    = require('gulp');
const plugins = require('gulp-load-plugins')();

gulp.task('vendor-js', vendorJs(gulp, plugins));
gulp.task('vendor-css', vendorCss(gulp, plugins));
gulp.task('inject', inject(gulp, plugins));

function vendorJs(gulp, plugins) {
    return function() {
        gulp.src([
            './bower_components/angular/angular.js',
            './bower_components/angular-resource/angular-resource.js',
            './bower_components/angular-ui-router/release/angular-ui-router.js',
            './bower_components/ngstorage/ngStorage.js',
            './bower_components/lodash/dist/lodash.js',
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './bower_components/moment/moment.js',
        ])
        .pipe(plugins.concat('vendor.js'))
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.uglifyjs())
        .pipe(gulp.dest('public/assets/js'));
    }
}

function inject(gulp, plugins) {
    return function() {
        let sources = gulp.src(['./public/app/**/*.js', './public/app/**/*.css'], {read: false});

        gulp.src('./public/index.html')
            .pipe(plugins.inject(sources, {ignorePath: 'public'}))
            .pipe(gulp.dest('public'));
    }
}

function vendorCss(gulp, plugins) {
    return function() {
        gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css'])
            .pipe(plugins.concat('vendor.css'))
            .pipe(plugins.uglifycss())
            .pipe(gulp.dest('public/assets/css'));
    };
}