exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('bittrex_orderbook').del().then(function() {
        // Inserts seed entries
        return knex('bittrex_orderbook').insert([
            {
                type: 'bids',
                quantity: '2.',
                rate: '0.06',
                exchange: 'Bittrex'
            }, {
                type: 'bids',
                quantity: '1',
                rate: '0.0656',
                exchange: 'Bittrex'
            }, {
                type: 'asks',
                quantity: '5',
                rate: '0.08',
                exchange: 'Bittrex'
            }
        ]);
    });
};
