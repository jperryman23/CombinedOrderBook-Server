
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bittrex_orderbook', (table) =>{
      table.text('type')
      table.float('quantity')
      table.float('rate')
      table.text('exchange')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bittrex_orderbook')
};
