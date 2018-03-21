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

// BITTREX ORDERBOOK API
// will run and update when you hit the route:
// http://localhost:5000/api/bittrex

let url = 'https://bittrex.com/api/v1.1/public/getorderbook?&market=BTC-ETH&type=both';

router.get('/', (req, response, next) => {

    https.get(url, (res) => {
        res.setEncoding('utf8');
        let body = "";

        res.on('data', (data) => {
            body += data;
        });
        res.on('end', () => {
            body = JSON.parse(body);
            // response.json(body.result.buy)

            const bittrexBids = body.result.buy.map((buy) => {
                return {type: 'bids', quantity: buy.Quantity, rate: buy.Rate, exchange: 'bittrex'}
            })

            const bittrexAsks = body.result.sell.map((sell) => {
                return {type: 'asks', quantity: sell.Quantity, rate: sell.Rate, exchange: 'bittrex'}
            })

            const bittrexOrders = bittrexBids.concat(bittrexAsks);

            queries.deleteAllBittrex().then(() => {
                queries.addOrderBittrex(bittrexOrders).then((rows) => {
                    response.json(rows)
                })
            })

        })
    })
});



module.exports = router;
