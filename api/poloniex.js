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

//POLONIEX ORDERBOOK API
//will run and update when you hit the route:
// http://localhost:5000/api/poloniex

let url = 'https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH'

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

            const poloBids = body.bids.map((bid) => {
                return {
                    type: 'bids',
                    quantity: bid[1],
                    rate: parseFloat(bid[0]),
                    exchange: 'poloniex'
                }
            })

            const poloAsks = body.asks.map((ask) => {
                return {
                    type: 'asks',
                    quantity: ask[1],
                    rate: parseFloat(ask[0]),
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
