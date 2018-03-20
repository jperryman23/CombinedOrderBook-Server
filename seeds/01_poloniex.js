exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('poloniex_orderbook').del().then(function() {
        // Inserts seed entries
        return knex('poloniex_orderbook').insert([
            {
                id: 1,
                type: 'asks',
                rate: '0.06441',
                quantity: '7.01',
                exchange: 'poloniex'
            },
            {
                id: 2,
                type: 'asks',
                rate: '0.04441',
                quantity: '5.01',
                exchange: 'poloniex'
            }


        ]);
    });
};
