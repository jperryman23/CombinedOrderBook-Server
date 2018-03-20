const express = require('express');
const router = express.Router();
const inserts = require('../db/inserts');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
var request = require('request');
// var url = require('url')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// var url = 'https://bittrex.com/api/v1.1/public/getorderbook?&market=BTC-ETH&type=buy';


var url = 'https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=10';


//
// router.post('/', (req,res,next) =>{
//     if(validOrder(req.body)){
//         queries.addOrder(req.body).then(orders =>{
//             res.json(orders[0])
//         })
//     } else {
//         next(new Error('Invalid order'))
//     }
// });
//
// router.post('/', (req, res, result) => {
//
// });





https.get(url, (res) => {
    res.setEncoding('utf8');
    let poloOrders = [];

    res.on('data', (data) => {
        poloOrders += data;
        // console.log(JSON.parse(poloOrders));
    });
    res.on('end', () => {
        poloOrders = JSON.parse(poloOrders);
        poloAsks = poloOrders.asks

        // console.log(poloAsks);
})
});



module.exports = {
    router,
    app
}


//WILL USER REDUCE TO GET THE ENTIRE VALUE....
