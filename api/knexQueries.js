
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


// router.get('/', (req, res) => {
//
//     queries.test().then((knexQueries) => {
//         res.send(knexQueries)
// })
// });

router.get('/', (req, res) => {
    // console.log("working");
    pg('poloniex_orderbook')
    .select('quantity')
    .where('type', 'bids')
    .then((knexqueries) =>{
        // console.log(knexQueries);
        res.send(knexqueries.map(({quantity}) => quantity))
    })
})

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






module.exports = router;
