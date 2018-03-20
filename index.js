const ezc = require('express-zero-config');
const request = require('request');
const router = ezc.createRouter();
const fetch = require('node-fetch');

const url = 'https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=10'
router.get('/', (req, res, next) =>{
    request('https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=10', function(err, result, body){
        console.log(body);
        const json = JSON.parse(body);
        res.json(json);
    })
})

router.get('/fetchOrders', (req, res) =>{
    fetch(url)
    .then(function(res){
        return res.json();
    }).then(function(json){
        res.json(json);
    })
})

ezc.startServer(router);
