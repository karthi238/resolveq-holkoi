const gulp = require('gulp');
const s3 = require('gulp-s3-upload')({});

gulp.task("upload", function() {
  const argv = require('yargs').argv;
  const isProduction = (argv.prod !== undefined);
  const isDevelopment = (argv.dev !== undefined);
  let bucket = undefined
  if (isProduction) {
    bucket = "app.resolveq.com"
  }
  if (isDevelopment) {
    bucket = "app.dev.resolveq.com"
  }
  console.log(`Using bucket ${bucket}...`)
  return gulp.src("./dist/**", { buffer : false })
    .pipe(s3({
      Bucket: bucket, //  Required
      ACL:    'public-read'       //  Needs to be user-defined
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }));
});
