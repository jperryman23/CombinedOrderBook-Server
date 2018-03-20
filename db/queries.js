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

    getOne(id) {
        return pg('bittrex_orderbook').where('id', id).first()
    },

    addOrder(order){
        return pg('bittrex_orderbook').insert(order, '*');
    },

    addOrderPolo(order){
        return pg('poloniex_orderbook').insert(order, '*');
    },


    update(id, order){
        return pg('bittrex_orderbook').where('id', id).update(order, '*');
    },

    delete(id) {
        return pg('bittrex_orderbook').where('id', id).del();
    },

    deleteAll() {
        return pg('bittrex_orderbook').del()
    },

    deleteAllPolo() {
        return pg('bittrex_orderbook').del()
    },

    // addPoloOrders(order){
    //     return pg('poloniex_orderbook').insert(order,
    //         {
    //             type: 'asks',
    //             rate: poloAsks[0],
    //             quantity: poloAsks[1],
    //             exchange: 'poloniex'
    //         }
    //     ).then(result) => {
    //         res.json({succes: true, message: 'added'})
    //     })
    // },

    addPoloOrders(obj) {
	return pg('poloniex_orderbook').insert(obj, '*')
}


    // addPoloAsks(body)

    //inerting fucntion ()





}
