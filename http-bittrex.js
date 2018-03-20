// const https = require('https')
// var express = require('express')
// const path = require('path');
// const bodyParser = require('body-parser');
//
// var app = express();
//
//
// var port = 4000;
// app.listen(port, () => {
//     console.log('API listening on port ' + port);
// });
//
//
//
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//
// // app.use('/', express.static(path.join(__dirname, '../client')))
//
//
// var url = 'https://bittrex.com/api/v1.1/public/getorderbook?&market=BTC-ETH&type=both';
// // //prolly going to need 4 api calls 1 for each buys , and sells for each exchange for faster results and data return.
//
// https.get(url, (res) =>{
//     res.setEncoding('utf8');
//     let body = "";
//
//     res.on('data', (data)=>{
//         body += data;
// });
//     res.on('end', ()=>{
//         body = JSON.parse(body);
//
//
//          console.log(body.result.buy[0]);// just the first object key pair for the buy orders
//          console.log(body.result.buy[0]["Quantity"]);// just the quantity of the first buy order
//          // console.log(body.result"quantity"]// just the quantity of the first buy order
//          // console.log(body.result.sell[0]); //just the first object key pair for the sell orders
//
//     })
// })
//
// // var http = require('http');
// //
// // var makeRequest = function(message) {
// //   var options = {
// //       host: '127.0.0.1', port: 8080, path: '/', method: 'POST', headers: {
// //       'Content-Type': 'application/text',
// //       'Content-Length': message.length
// //     }
// //   }
// //
// //   var request = http.request(options, function(response) {
// //     response.on('data', function(data) {
// //       console.log(data);
// //     });
// //   });
// //
// //   process.on('uncaughtException', function (err) {
// //     console.log(err);
// //   });
// //
// //   request.write(message);
// //   request.end();
// // }
// //
// // makeRequest('Hi!!!!');
// // app.get('/', (req, res, next) =>{
// //     res.json({'key' : 'value'})
// // })
// //
//
// //
// // app.listen(port, () => {
// //     console.log('API listening on port ' + port);
// // });
