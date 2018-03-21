
const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
// var pg = require('pg')
// var format = require('pg-format')
// var PGUSER = 'jperryman'
// var PGDATABASE = 'combined-order-book'
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// var config = {
// user: 'jperryman', // name of the user account
// database: 'combined-order-book', // name of the database
// max: 5, // max number of clients in the pool
// }
//
// var pool = new pg.Pool(config)
// var myClient
//
// pool.connect(function (err, client, done) {
//   if (err) console.log(err)
//   myClient = client
//   var ageQuery = format('SELECT * from poloniex_orderbook')
//   myClient.query(ageQuery, function (err, result) {
//     if (err) {
//       console.log(err)
//     }
//     console.log(result.rows[0])
//   })
// })
//
// require('../db/queries');
// const pg = require('../db/knex')
//
// var bids = pg.raw('select * from poloniex_orderbook where type = bids');
// console.log(bids);
//
// //make request
// //make knex querey
// send it off
// res.send(  () =>{
//
// }

// app.get('/', (req, res, next) =>{
//     db.query('SELECT * FROM poloniex_orderbook', (err, res)=>{
//         if (err){
//             return next(err)
//         }
//         console.log(res);
//         // res.send(res)
//     })
// })


// router.get('/', (req, res, next) => {
//
//     queries.getPoloBids().then((response) => {
//         response.json(rows)
// })
// });


module.exports = app;
