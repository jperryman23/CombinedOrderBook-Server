const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/', (req, res) => {

    queries.getPoloBids().then((knexQueries) => {
        res.send(knexQueries)
})
});
