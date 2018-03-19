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

}
