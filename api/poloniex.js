const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
var request = require('request');
// var url = require('url')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



const url = 'https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=10'

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
            // console.log(body);

            const poloBids = body.bids.map((bid) => {
                return {
                    type: 'bids',
                    rate: parseFloat(bid[0]),
                    quantity: bid[1],
                    exchange: 'poloniex'
                }
            })

            const poloAsks = body.asks.map((ask) => {
                return {
                    type: 'asks',
                    rate: parseFloat(ask[0]),
                    quantity: ask[1],
                    exchange: 'poloniex'
                }
            })

            // response.json(data);

            const poloOrders = poloBids.concat(poloAsks)

            queries.deleteAllPolo().then(() => {
                queries.addOrderPolo(poloOrders).then((rows) => {
                    // console.log(arguments);
                    response.json(rows)
                })
            })

        })
    })

});

module.exports = router;
