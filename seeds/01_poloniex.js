exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('poloniex_orderbook').del().then(function() {
        // Inserts seed entries
        return knex('poloniex_orderbook').insert([
            {
                type: 'asks',
                quantity: '7.01',
                rate: '0.06441',
                exchange: 'poloniex'
            },
            {
                type: 'asks',
                quantity: '5.01',
                rate: '0.04441',
                exchange: 'poloniex'
            }


        ]);
    });
};
