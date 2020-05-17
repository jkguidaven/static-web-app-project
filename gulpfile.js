const gulp = require("gulp");
const del = require("del");
const nunjucksRender = require("gulp-nunjucks-render");

gulp.task("clean", function () {
  return del("dist/**", { force: true });
});

gulp.task("build:html", function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src("source/pages/**/*.+(html|nunjucks|njk)")
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ["source/templates"],
        })
      )
      // output files in app folder
      .pipe(gulp.dest("dist"))
  );
});

gulp.task("build:assets", function () {});

gulp.task("build:js", function () {});

gulp.task("build:css", function () {});

gulp.task("deploy", function () {
  // write your script here to deploy app to your server
});

gulp.task(
  "build",
  gulp.series(["clean", "build:assets", "build:html", "build:js", "build:css"])
);
