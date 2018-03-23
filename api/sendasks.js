
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

router.get('/', (req, res) => {
    // console.log("working");
    Promise.all([
    pg('poloniex_orderbook')
    .select('rate','quantity','exchange')
    .where('type', 'asks')
    .orderBy('rate', 'desc'),

    pg('bittrex_orderbook')
    .select('rate','quantity','exchange')
    .where('type', 'asks')
    .orderBy('rate', 'desc'),

    pg('gdax_orderbook')
    .select('rate','quantity','exchange')
    .where('type', 'asks')
    .orderBy('rate', 'desc'),
    ])
    .then((orderbookAsks) =>{
        // console.log(orderbookAsks);
        res.send(orderbookAsks)
    })

})
module.exports = router;
