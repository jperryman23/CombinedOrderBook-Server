const request = require('supertest');
const expect = require('chai').expect;

const knex = require('../db/knex');

const app = require('../app')


describe('CRUD Orderbook', () =>{
    before((done)=>{
        // run migrations
        knex.migrate.latest()
            .then(() =>{
                //run seeds
                return knex.seed.run()
            }).then(() => done());
    });

    it('Lists the entire orderbook', (done) => {
        request(app)
            .get('/api/orderbook')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                // console.log(response.body);
                done();
            })
    });

    it('Show the entire order by id', (done) => {
        request(app)
            .get('/api/orderbook/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                // console.log(response.body);
                done();
            })
    })
})
