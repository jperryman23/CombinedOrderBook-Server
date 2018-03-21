// const pg = require('./pg') the connection
const pg = require('./knex')
const  getPoloBids= require('../lib/validations').getPoloBids

// module.exports = {
//     getAll(){
//         return pg('bittrex_orderbook').select()
//     }
// }

module.exports = {

    getAll() {
        return pg('bittrex_orderbook').select('*')
    },


    addOrderBittrex(order){
        return pg('bittrex_orderbook').insert(order, '*');
    },

    addOrderPolo(order){
        return pg('poloniex_orderbook').insert(order, '*');
    },

    addOrderGDAX(order){
        return pg('gdax_orderbook').insert(order, '*');
    },


    deleteAllBittrex() {
        return pg('bittrex_orderbook').truncate()
    },

    deleteAllPolo() {
        return pg('poloniex_orderbook').truncate()
    },

    deleteAllGDAX() {
        return pg('gdax_orderbook').truncate()
    },


    getOne(id) {
        return pg('bittrex_orderbook').where('id', id).first()
    },

    update(id, order){
        return pg('bittrex_orderbook').where('id', id).update(order, '*');
    },

    delete(id) {
        return pg('bittrex_orderbook').where('id', id).del();
    },


    getPoloBids(){
        return pg('poloniex_orderbook').select('*')
    },

    test(){
        return pg('poloniex_orderbook').select().where('type', 'bids')
    }

    // router.get('/', (req, res) =>{
    //     pg('poloniex_orderbook').select().where('type', 'bids')
    //     .then(() => {
    //         console.log(req);
    //     })
    // })
}
