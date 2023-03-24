var createError = require('http-errors');
var express = require('express');
var fs = require('fs')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var networkFolderPath = 'X:\\01 민수 장비 제작\\2023년 진행중 프로젝트';

var app = express();
console.log('hello');

function getFilesInFolder(folderPath, fileList = []) {
  const files = fs.readdirSync(folderPath);

  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      //console.log(filePath);
      //console.log(fileList);
      getFilesInFolder(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}
var fileNames = getFilesInFolder(networkFolderPath)
  .map(file => path.relative(networkFolderPath, file));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/files', (req, res) => {
  const { years } = req.query;
  if (years == '2023') networkFolderPath = 'X:\\01 민수 장비 제작\\2023년 진행중 프로젝트';
  if (years == '2022') networkFolderPath = 'X:\\01 민수 장비 제작\\2022년 진행중 프로젝트';
  console.log(typeof years);

  console.log(years + ' ' + networkFolderPath)
  fileNames = getFilesInFolder(networkFolderPath)
    .map(file => path.relative(networkFolderPath, file));
  res.json(fileNames);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
