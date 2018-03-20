exports.up = function(knex, Promise) {
  return knex.schema.createTable('poloniex_asks', (table) =>{
      table.increments()
      table.text('type')
      table.float('rate')
      table.float('quantity')
      table.text('exchange')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('poloniex_asks')
};