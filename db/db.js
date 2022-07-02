
const knex = require('knex')

const knexfile = require('./knexfile')
require('dotenv').config()

const db = knex(knexfile.development)


module.exports = db;

