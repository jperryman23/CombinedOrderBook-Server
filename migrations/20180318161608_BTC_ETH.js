
exports.up = function(knex, Promise) {
  return knex.schema.createTable('BTC_ETH', (table) =>{
      table.increments()
      table.text('type')
      table.float('quantity')
      table.float('rate')
      table.text('exchange')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('BTC_ETH')
};
