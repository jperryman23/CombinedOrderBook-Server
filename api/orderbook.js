const express = require('express');
const router = express.Router();
const queries = require('../db/queries');



function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validOrder(order) {
    const hasType = typeof order.type == 'buy' || 'sell' || 'asks' || 'bids' && order.type.trim() !='';
    return hasType;
}

router.get('/', (req, res) =>{
    queries.getAll().then(orderbook =>{
        res.json(orderbook)
    })
})

router.get('/:id', isValidId, (req,res, next)=> {
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

module.exports = router;
