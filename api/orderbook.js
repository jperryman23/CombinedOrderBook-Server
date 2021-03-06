const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const request = require('request')

const path = require('path');
const bodyParser = require('body-parser');
const pg = require('../db/knex')
const https = require('https');





function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validOrder(order) {
    const hasType = typeof order.type == 'buy' || 'sell' || 'asks' || 'bids' && order.type.trim() !='';
    const hasQuantity = !isNaN(order.quantity)

    const hasExchange = typeof order.type === "Poloniex" || "Bittrex";
    return hasType && hasExchange && hasExchange;
}



router.get('/:id', isValidId, (req, res, next)=> {
    queries.getOne(req.params.id).then(order => {
        if(order){
            res.json(order)
        } else {
            res.status(404);
            next();
        }

    })
})

router.post('/', (req,res,next) =>{
    if(validOrder(req.body)){
        queries.addOrder(req.body).then(orders =>{
            res.json(orders[0])
        })
    } else {
        next(new Error('Invalid order'))
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if(validOrder(req.body)){
        queries.update(req.params.id, req.body).then(orders =>{
            res.json(orders[0])
        })
    } else {
        next(new Error('Invalid order'))
    }
})

router.delete('/:id', isValidId,  (req, res) =>{
    queries.delete(req.params.id).then(()=>{
        res.json({
            delete:true
        })
    })
})

// router.get('/', (req, res) =>{
//     queries.test()
//     .then(() => {
//         console.log(req.params);
//     })
// })
module.exports = router;
