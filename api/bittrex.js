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

var url = 'https://bittrex.com/api/v1.1/public/getorderbook?&market=BTC-ETH&type=both';



router.get('/', (req, response, next) =>{
    var url = 'https://bittrex.com/api/v1.1/public/getorderbook?&market=BTC-ETH&type=both';
    https.get(url, (res) =>{
        res.setEncoding('utf8');
        let body = "";

        res.on('data', (data)=>{
            body += data;
    });
        res.on('end', ()=>{
            body = JSON.parse(body);
             // response.json(body.result.buy)

             const data = body.result.buy.map( (buy)=>{
                 return {
                     type: 'bids',
                     quantity: buy.Quantity,
                     rate: buy.Rate,
                     exchange: 'bittrex'
                 }
             })

            queries.deleteAll().then(()=>{
                queries.addOrder(data)
                .then( (rows) =>{
                    // console.log(arguments);
                    response.json(rows)
                })
            })


        })
    })

});




module.exports = router;
