// const knex = require('./knex') the connection
const knex = require('./knex')

// module.exports = {
//     getAll(){
//         return pg('BTC_ETH').select()
//     }
// }

module.exports = {

    getAll() {
        return knex('BTC_ETH').select('*')
    },

    getOne(id) {
        return knex('BTC_ETH').where('id', id).first()
    },

    addOrder(order){
        return knex('BTC_ETH').insert(order, '*');
    },

    update(id, order){
        return knex('BTC_ETH').where('id', id).update(order, '*');
    },

    delete(id) {
        return knex('BTC_ETH').where('id', id).del();
    },

    // addPoloOrders(order){
    //     return knex('BTC_ETH').insert(order,
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


    // addPoloAsks(body)

    //inerting fucntion ()




}
