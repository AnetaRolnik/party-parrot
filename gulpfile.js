const gulp            = require("gulp");
const sass            = require("gulp-sass");
const autoprefixer    = require("gulp-autoprefixer");
const sourcemaps      = require("gulp-sourcemaps");
const rename          = require("gulp-rename");
const webpack         = require("webpack");
const wait            = require('gulp-wait');
const csso            = require('gulp-csso');
const browserSync     = require('browser-sync').create();

const showError = function(err) {
    console.log(err.messageFormatted);
}

gulp.task("sass", function() {
    return gulp.src("./src/sass/main.scss")
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(
            sass({outputStyle: "compressed"
            }).on("error", showError)
        )
        .pipe(autoprefixer({
            browsers: ["> 1%"]
        }))
        .pipe(csso())
        .pipe(rename({
            suffix: ".min",
            basename: "style"
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream({match: "**/*.css"}));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        browser: "chrome"
    });
});

gulp.task("es6", function(cb) {
    return webpack(require("./webpack.config.js"), function(err, stats) {
        if (err) throw err;
        console.log(stats.toString());
        browserSync.reload();
        cb();
    })
})

gulp.task("watch", function() {
    gulp.watch("src/sass/**/*.scss", ["sass"]);
    gulp.watch("src/js/**/*.js", ["es6"]);
    gulp.watch("dist/**/*.html").on("change", browserSync.reload);
});

gulp.task("default", function() {
    gulp.start(["sass", "es6", "browserSync", "watch"]);
});

