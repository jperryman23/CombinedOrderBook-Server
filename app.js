const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const pg = require('./db/knex')

const app = express();

var port = 5000;
app.listen(port, () => {
    console.log('API listening on port ' + port);
});


const orderbook = require('./api/orderbook');
const poloniex = require('./api/poloniex');
const bittrex = require('./api/bittrex');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//Mount the router

app.use('/api/orderbook', orderbook);
// app.use('/api/bittrex', bittrex);
// app.use('/api/poloniex', poloniex);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: res.locals.error = req.app.get('env') === 'development' ? err : {}
  })
});

module.exports = app;
