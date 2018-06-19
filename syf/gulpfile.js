var gulp = require('gulp'),
    server = require('gulp-webserver'),
    uglify = require('gulp-uglify');

// 引入json数据
//var data = require('./data/data.json');

// node模块
var fs = require('fs'),
    url = require('url'),
    path = require('path');

// 开启服务

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            host: "localhost",
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                pathname = pathname === '/' ? '/index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                // if (pathname === '/list') {
                //     res.end(JSON.stringify(data));
                // } else {

                //     res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                // }
            }
        }));
});

gulp.task('uglify', function() {
    gulp.src('src/js/app/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/js/common'));
});