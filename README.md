# Combined Order Book

### Full Stack Coding Challenge

#### Instructions:
> Build a combined order book that takes the full order books from Bittrex and Poloniex for the BTC_ETH market and displays them in a way that shows combined volume at each price point.

###### Other Considerations / Requirements:
- [ ] Complete the challenge in NodeJS.
- [ ] Clearly label which is the *Ask* book and which is the *Bids* book.
- [ ] Clearly label which exchange has order volume at each price point.
- [ ] Deploy or host demo of the code running online i.e. Heroku or Firebase or AWS

###### stretch goals
- [ ] Add More Exchanges
- [ ] Allow user to switch to between different trading pairs
- [ ] Highlight if the books overlap i.e bids on Bittrex overlap with Asks on  Poloniex or GDAX.
- [ ]  Actively updating the combined order book based on actual (live) trades from the exchanges Unit Tests

###### Heroku
- https://combined-order-book.herokuapp.com/ | https://git.heroku.com/combined-order-book.git
- https://combined-order-book.herokuapp.com/
- Created postgresql-fitted-95639 as DATABASE_URL




# CombinedOrderBook-Server
#### Server-Side | Backend for CombinedOrderBook
##### Technology
>   The backend will be build using
    - PostgresSQL Database
    - Knex.JS (for migration, seeds and queries)
    - Express.JS - for JSON Routes
    - Mocha, Chai and SuperTest - to test routes


>REMEMBER front end is simply HTML, CCS, JAVASCRIPT
