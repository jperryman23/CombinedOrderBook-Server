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

var url = 'https://bittrex.com/api/v1.1/public/getorderbook?&market=BTC-ETH&type=both';


//
// https.get(url, (res) => {
//     res.setEncoding('utf8');
//     let bittrexOrders = [];
//
//     res.on('data', (data) => {
//         bittrexOrders += data;
//         // console.log(JSON.parse(poloOrders));
//     });
//     res.on('end', () => {
//         bittrexOrders = JSON.parse(bittrexOrders);
//         // console.log(bittrexOrders);
//         // console.log(bittrexOrders[0];
//
// })
// });

https.get(url, (res) =>{
    res.setEncoding('utf8');
    let body = "";

    res.on('data', (data)=>{
        body += data;
});
    res.on('end', ()=>{
        body = JSON.parse(body);


         console.log(body.result.buy[0]);// just the first object key pair for the buy orders
         console.log(body.result.buy[0]["Quantity"]);// just the quantity of the first buy order
         // console.log(body.result"quantity"]// just the quantity of the first buy order
         // console.log(body.result.sell[0]); //just the first object key pair for the sell orders

    })
})

module.exports = {
    router,
    app
}
