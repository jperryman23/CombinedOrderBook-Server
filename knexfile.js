// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/combined-order-book'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-combined-order-book'
  },


  // production: {
  // client: 'pg',
  // connection: process.env.DATABASE_URL
  // }


};
