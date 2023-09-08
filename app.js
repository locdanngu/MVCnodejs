var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs'); // Định nghĩa thư viện Handlebars
// const mysql = require('mysql2');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

var homestayRouter = require('./routes/homestay');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false, // Nếu bạn sử dụng HTTPS, hãy đặt true
      maxAge: 365 * 24 * 60 * 60 * 1000 // Thời gian hết hạn là 1 năm
  }
  })
);


app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials/'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/homestay', homestayRouter);
app.use('/users', usersRouter);

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
