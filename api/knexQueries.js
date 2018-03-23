
const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const pg = require('../db/knex')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/// THIS IS WORKING SEND FOR JUST QUANTITY
router.get('/', (req, res) => {
    // console.log("working");
    Promise.all([
    pg('poloniex_orderbook')
    .select('rate','quantity','exchange')
    .where('type', 'bids')
    .orderBy('rate', 'desc'),

    pg('bittrex_orderbook')
    .select('rate','quantity','exchange')
    .where('type', 'bids')
    .orderBy('rate', 'desc'),

    pg('gdax_orderbook')
    .select('rate','quantity','exchange')
    .where('type', 'bids')
    .groupBy('id')
    .having('id', '<', 101)
    ])
    .then((poloBids) =>{
        console.log(poloBids);
        res.send(poloBids)
    })

})

module.exports = router;
// router.get('/', (req, res) => {
//     // console.log("working");
//     pg('poloniex_orderbook')
//     .select('quantity')
//     .where('type', 'bids')
//     .then((knexqueries) =>{
//         // console.log(knexQueries);
//         res.send(knexqueries.map(({quantity}) => quantity))
//     })
// })


// router.get('/', (req, res) => {
//     pg('poloniex_orderbook')
//     .select('rate')
//     .where('type', 'bids')
//     .then((knexqueries2) =>{
//         // res.send(knexqueries2);
//         res.send(knexqueries2.map(({rate}) => rate))
//     })
//
// })

//this limits the rows returned
// router.get('/', (req, res) =>{
//     pg('gdax_orderbook')
//     .select()
//     .groupBy('id')
//     .having('id', '<', 200)
//     .then((gdaxOrders) => {
//         console.log(gdaxOrders);
//     })
// })


// WHAT IS IDEAL but can't quite get the mapping right
// router.get('/', (req, res) => {
//     // console.log("working");
//     pg('poloniex_orderbook', 'bittrex_orderbook', 'gdax_orderbook')
//     .select('quantity', 'rate', 'exchange')
//     .where('type', 'bids')
//     .then((knexqueries) =>{
//         res.send(knexqueries.map(({quantity}, {rate}, {exchange}) => quantity.rate.exchange???? lol )
//     })
// })


// router.get('/', (req, res) => {
//     // console.log("working");
//     pg('poloniex_orderbook')
//     .select('quantity', 'rate')
//     .where('type', 'bids')
//     .then((knexqueries) =>{
//         res.send(knexqueries.map(({quantity}) => quantity))
//
//     }).then((knexqueries =>{
//         res.send(knexqueries.map(({rates}) => rates))
//     }))
// })
