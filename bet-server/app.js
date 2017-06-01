/*jshint esversion: 6*/
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-routes');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

require('./configs/database');
require('./config/passport')(passport);

const cors = require('cors');

const app = express();

var whitelist = [
  'http://localhost:4200',
];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

const index = require('./routes/index');
const leaguesRoutes = require('./api/league/index');
const oddRoutes = require('./api/odd/index');
const ticketRoutes = require('./api/ticket/index');
const userRoutes = require('./api/user/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const passportSetup = require('./config/passport');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'bet app',
  name: 'BetApp',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  },
  store: new MongoStore({mongooseConnection: mongoose.connection, ttl: 24 * 60 * 60})
}));
passportSetup(passport);

app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/', index);
app.use('/leagues', leaguesRoutes);
app.use('/odds', oddRoutes);
app.use('/auth', authRoutes);
app.use('/ticket', ticketRoutes);
app.use('/user', userRoutes);

// app.use((req, res, next) => {
//   res.sendfile(__dirname + '/public/index.html');
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
