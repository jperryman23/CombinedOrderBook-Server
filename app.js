const express = require('express');
require('dotenv').config()
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const pg = require('./db/knex')
const router = express.Router();
const https = require('https');
const request = require('request');
const cors = require('cors');

// var url = require('url')
// const ezc = require('express-zero-config');
// const router = ezc.createRouter();
// const fetch = require('node-fetch');
// const inserts = require('../db/queries');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));



const app = express();

//MIDDLE WARE


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cookieParser());

app.use(cors({
  origin: 'http://127.0.0.1:8080',
  optionsSuccessStatus: 200
}));



// const poloOrders = require('./routes/poloOrders')

const orderbook = require('./api/orderbook');
const poloniex = require('./api/poloniex');
const bittrex = require('./api/bittrex');
const gdax = require('./api/gdax');
const knexqueries = require('./api/knexqueries');
const sendasks = require('./api/sendasks');




//Mount the router

// app.use('/routes/poloOrders', poloOrders)

app.use('/api/orderbook', orderbook);
app.use('/api/bittrex', bittrex);
app.use('/api/poloniex', poloniex);
app.use('/api/gdax', gdax);
app.use('/api/knexqueries', knexqueries);
app.use('/api/sendasks', sendasks);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: res.locals.error = req.app.get('env') === 'development' ? err : {}
  })
});



module.exports = app;
