var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
require('./models/user');
require('./models/ticket');
require('./models/server');
require('./models/news');
require('./config/passport');

var users = require('./routes/users');
var tickets = require('./routes/tickets');
var servers = require('./routes/servers');
var news = require('./routes/news');
var ping = require('./routes/ping')

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../bower_components')));
app.use('/api/users', users);
app.use('/api/tickets', tickets);
app.use('/api/servers', servers);
app.use('/api/news', news);
app.use('/api/ping', ping);
app.use('*', function(req, res){
    res.render('index', { title: 'my_intraBocal' });
});

mongoose.connect('mongodb://application:gold4life!@ds054128.mongolab.com:54128/036intrabocal');

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
