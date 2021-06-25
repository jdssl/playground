'use strict';

const config = require('./config.json')

const { Client } = require('pg')

const client = new Client({
	user: config.database.POSTGRES_USER,
	host: config.database.POSTGRES_HOST,
	database: config.database.POSTGRES_DB,
	password: config.database.POSTGRES_PASSWORD
})

module.exports = client
