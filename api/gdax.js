

const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();


router.get('/', (req, response, next) => {

publicClient.getProductOrderBook('ETH-BTC', { level: 3 } ).then(book => {
    // response.json(book);
    //var top200Bids  = Array.prototype.slice.call(book.bids, -200)
    // console.log(top200Bids[0]);
    const gdaxBids = book.bids.map((bid) =>{
        return {
            type: 'bids',
            quantity: parseFloat(bid[1]),
            rate: parseFloat(bid[0]),
            exchange: 'gdax'
        }
    })

    // after we get gdaxBids, we then want only the first 200 results

    // var top200Bids  = Array.prototype.slice.call(gdaxBids, -200)
    //     console.log(top200Bids);


    const gdaxAsks = book.asks.map((ask) =>{
        return {
            type: 'asks',
            quantity: parseFloat(ask[1]),
            rate: parseFloat(ask[0]),
            exchange: 'gdax'
        }
    })

    // response.json(gdaxAsks);
    const gdaxOrders = gdaxBids.concat(gdaxAsks)


    queries.deleteAllGDAX().then(() => {
        queries.addOrderGDAX(gdaxOrders).then((rows) => {
            // console.log(arguments);
            response.json(rows)
        })
    })
});

})

module.exports = router;
