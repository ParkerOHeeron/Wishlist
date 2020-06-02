var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

require('dotenv').config();

var app = express();


require('./config/database');
require('./config/passport');


var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'MySecret',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialized());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});



app.use('/', indexRoutes);
app.use('/', usersRoutes);

app.use(function(req, res) {
    res.status(404).send('404 not found');
});

module.exports = app;