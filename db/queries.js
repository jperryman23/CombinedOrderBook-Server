// const pg = require('./pg') the connection
const pg = require('./knex')

// module.exports = {
//     getAll(){
//         return pg('BTC_ETH').select()
//     }
// }

module.exports = {

    getAll() {
        return pg('BTC_ETH').select('*')
    },

    getOne(id) {
        return pg('BTC_ETH').where('id', id).first()
    },

    addOrder(order){
        return pg('BTC_ETH').insert(order, '*');
    },

    update(id, order){
        return pg('BTC_ETH').where('id', id).update(order, '*');
    },

    delete(id) {
        return pg('BTC_ETH').where('id', id).del();
    },

    // addPoloOrders(order){
    //     return pg('BTC_ETH').insert(order,
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
	return pg('poloniex_asks').insert(obj)
}


    // addPoloAsks(body)

    //inerting fucntion ()





}
