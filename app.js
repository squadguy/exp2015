var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var fs = require('fs');

//var users = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to mongodb database test
if ('development' == app.get('env')) {
//	app.use(express.errorHandler()); throwing an error
	mongoose.connect('mongodb://localhost:27017/test');
}

//loads(requires) all collections in models when page loads
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
	if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

app.use('/', routes);
// app.use('/users', users);

//Create a user model
//mongoose.model('users', {name: String});
//Moved to model directory

// route get req to /users to users collection in test db
app.get('/users', function(req, res) {
	mongoose.model('users').find(function(err, users) {
	res.send(users);
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
