const express = require('express');
const router = express.Router();
const inserts = require('../db/queries');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
var request = require('request');
const pg = require('../db/knex')
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




var url = 'https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=10';
https.get(url, (res) => {
    res.setEncoding('utf8');
    let poloOrders = [];

    res.on('data', (data) => {
        poloOrders += data;
        // console.log(JSON.parse(poloOrders));
    });
    res.on('end', () => {
        poloOrders = JSON.parse(poloOrders);
        var poloAsks = poloOrders.asks[0]

        console.log(poloAsks[0]);
        var newOrder = {
        		type: 'asks',
        	    rate: poloAsks[0],
        	    quantity: poloAsks[1],
                exchange: 'poloniex'
            };

            console.log(newOrder);

            function addPoloOrders(obj) {
            return pg('poloniex_asks').insert(obj)
        }

        addPoloOrders(newOrder);


        // router.post('/api/poloniex', (req,res,next) =>{
        //
        //         queries.addPoloOrders(poloAsks)
        //         .then(orders =>{
        //             res.json(orders[0])
        //         })
        // });


})
});


// router.post('/api/poloniex', (req, res) => {
//
// 	const order= {
// 	   boo_title: req.body.book_title,
// 		book_genre: req.body.book_genre,
// 	    book_description: req.body.book_description,
// 	    book_cover_url: req.body.book_cover_url
// 	  }
// 	    pg('books')
// 	    .where('book_id', req.params.book_id)
// 	    .update(books, 'book_id')
// 	    .then(() => {
// 	        res.redirect('/')
// 	        })
// 	      })


module.exports = {
    router,
    app
}


//WILL USER REDUCE TO GET THE ENTIRE VALUE....
