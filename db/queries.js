// const knex = require('./knex') //the connection
const pg = require('./knex')

// module.exports = {
//     getAll(){
//         return pg('BTC_ETH').select()
//     }
// }


function getAll(){
    return pg('BTC_ETH').select()
}

module.exports = {
    getAll
}
