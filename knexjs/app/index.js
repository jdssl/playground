'use strict';

const config = require('./config');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : config.database.POSTGRES_HOST,
    user : config.database.POSTGRES_USER,
    password : config.database.POSTGRES_PASSWORD,
    database : config.database.POSTGRES_DB
  },
  migrations: {
    tableName: 'migrations'
  }
});

const result = knex('persons')
  .select()
  .toSQL();

console.log(result);
