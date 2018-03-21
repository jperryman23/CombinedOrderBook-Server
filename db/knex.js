const environment = process.env.NODE_ENV || 'development' ;
const config = require('../knexfile')[environment]
// const environmentConfig = config[environment]
// const knex = require('knex')
// const connection = knex(environmentConfig);

// const pg = require('knex')(config[environment])

module.exports = require('knex')(config)
// module.exports = pg;
