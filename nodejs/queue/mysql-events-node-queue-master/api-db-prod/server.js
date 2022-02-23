require('dotenv/config')

const log = require('debug')('api-db-prod:server')
const express = require('express')
const mysql = require('mysql')
const faker = require('faker')
const app = express()

app.use(express.json())

const connectionSQLFOO = mysql.createConnection({
  host: process.env.API_DB_PROD_MYSQL_FOO_HOST,
  user: process.env.API_DB_PROD_MYSQL_FOO_USER,
  password: process.env.API_DB_PROD_MYSQL_FOO_PASSWORD,
  database: process.env.API_DB_PROD_MYSQL_FOO_DATABASE
})

const connectionSQLBAR = mysql.createConnection({
  host: process.env.API_DB_PROD_MYSQL_BAR_HOST,
  user: process.env.API_DB_PROD_MYSQL_BAR_USER,
  password: process.env.API_DB_PROD_MYSQL_BAR_PASSWORD,
  database: process.env.API_DB_PROD_MYSQL_BAR_DATABASE
})

connectionSQLFOO.connect((err, args) => {
  if (err) {
    log('[connectionSQLFOO] - <<ERROR>> : ' + err)
  } else {
    log('[connectionSQLFOO] - ((SUCCESS)) ')
  }
})

connectionSQLBAR.connect((err, args) => {
  if (err) {
    log('[connectionSQLBAR] - <<ERROR>> : ' + err)
  } else {
    log('[connectionSQLBAR] - ((SUCCESS))')
  }
})

/**
 * Get all subscribers foo
 */
app.get('/foo/subscribers', (req, res) => {
  connectionSQLFOO.query('SELECT * FROM subscribers', (err, results, fields) => {
    if (err) {
      log('[QUERY] [SQL] [FOO] [SELECT * FROM subscribers] - <<ERROR>> : ' + err)
    } else {
      res.json({ data: results })
      log('[QUERY] [SQL] [FOO] [SELECT * FROM subscribers] - ((SUCCESS))')
    }
  })
})

/**
 * Get all subscribers bar
 */
app.get('/bar/subscribers', (req, res) => {
  connectionSQLBAR.query('SELECT * FROM subscribers', (err, results, fields) => {
    if (err) {
      log('[QUERY] [SQL] [BAR] [SELECT * FROM subscribers] - <<ERROR>> : ' + err)
    } else {
      res.json({ data: results })
      log('[QUERY] [SQL] [BAR] [SELECT * FROM subscribers] - ((SUCCESS))')
    }
  })
})

/**
 * Insert new subscriber foo
 */
app.get('/foo/new/subscriber', (req, res) => {
  const subscriber = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    age: 25,
    status: 2
  }

  connectionSQLFOO.query('INSERT INTO subscribers SET ?', subscriber, (err, results, fields) => {
    if (err) {
      log('[QUERY] [SQL] [FOO] [INSERT subscriber] - <<ERROR>> : ' + err)
    } else {
      res.json({ data: results.insertId })
      log('[QUERY] [SQL] [FOO] [INSERT subscriber] - ((SUCCESS)) - id:' + JSON.stringify(results.insertId))
    } 
  })
})

/**
 * Insert new subscriber bar
 */
app.get('/bar/new/subscriber', (req, res) => {
  const subscriber = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    age: 25,
    status: 2
  }

  connectionSQLBAR.query('INSERT INTO subscribers SET ?', subscriber, (err, results, fields) => {
    if (err) {
      log('[QUERY] [SQL] [BAR] [INSERT subscriber] - <<ERROR>> : ' + err)
    } else {
      res.json({ data: results.insertId })
      log('[QUERY] [SQL] [BAR] [INSERT subscriber] - ((SUCCESS)) - id:' + JSON.stringify(results.insertId))
    } 
  })
})

/**
 * Update subscriber foo
 */
app.post('/foo/update/subscriber', (req, res) => {
  const { id, name } = req.body

  connectionSQLFOO.query(`UPDATE subscribers SET name = '${name}' WHERE subscriber_id = ${id}`, (err, results, fields) => {
    if (err) {
      log('[QUERY] [SQL] [FOO] [UPDATE subscriber] - <<ERROR>> : ' + err)
    } else {
      res.json({ data: results })
      log('[QUERY] [SQL] [FOO] [UPDATE subscriber] - ((SUCCESS)) : ' + JSON.stringify(results))
    } 
  })
})

/**
 * Update subscriber bar
 */
app.post('/bar/update/subscriber', (req, res) => {
  const { id, name } = req.body

  connectionSQLBAR.query(`UPDATE subscribers SET name = '${name}' WHERE subscriber_id = ${id}`, (err, results, fields) => {
    if (err) {
      log('[QUERY] [SQL] [BAR] [UPDATE subscriber] - <<ERROR>> : ' + err)
    } else {
      res.json({ data: results })
      log('[QUERY] [SQL] [BAR] [UPDATE subscriber] - ((SUCCESS)) : ' + JSON.stringify(results))
    } 
  })
})

app.listen(process.env.API_DB_PROD_PORT, () => {
  log('[API DB PROD] - Listening on ' + process.env.API_DB_PROD_PORT)
})
