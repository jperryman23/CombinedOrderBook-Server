// const pg = require('./pg') the connection
const pg = require('./knex')

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

    deleteAllBittrex() {
        return pg('bittrex_orderbook').del()
    },

    deleteAllPolo() {
        return pg('poloniex_orderbook').del()
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


}
