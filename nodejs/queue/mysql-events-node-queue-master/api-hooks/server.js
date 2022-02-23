require('dotenv/config')

const log = require('debug')('api-hooks:server')
const mysql = require('mysql')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
  host: process.env.API_HOOKS_DB_HOOK_HOST,
  user: process.env.API_HOOKS_DB_HOOK_USER,
  password: process.env.API_HOOKS_DB_HOOK_PASSWORD,
  database: process.env.API_HOOKS_DB_HOOK_DATABASE
})

connection.connect((err, args) => {
  if (err) {
    log('[CONNECTION] - <<ERROR>> : ' + err)
  }
})

app.use(express.json())

app.get('/', (req, res) => {
  log('[API HOOKS] [GET] - Welcome')
  res.json({ message: 'WELCOME TO API HOOKS' })
})

/**
 * Return Promise Reject
 */
app.post('/promise/reject', async (req, res) => {
  // try {
    const err = "Promise reject you need retry"
    return new Promise((_, reject) => reject(new Error(err)))
      .catch(error => log('[API HOOKS] [POST] [/promise/reject] - <<ERROR>> :' + error))
})

/**
 * New Subscriber
 */
app.post('/new/subscriber', (req, res) => {
  try {
    const { before, after, from_database } = req.body.data

    const subscriber = {
      subscriber_id: after.subscriber_id,
      subscriber_before: JSON.stringify({ "before": before }),
      subscriber_after: JSON.stringify({ "after": after }),
      action: 'INSERT',
      from_database
    }

    connection.query('INSERT INTO subscribers_audit SET ?', subscriber, (err, results, fields) => {
      if (err) {
        log('[QUERY] [INSERT subscriber] - <<ERROR>> : ' + err)
        throw new Error(err)
      } else {
        res.json({ message: 'Successfully...' })

        log('[QUERY] [INSERT subscriber] - ((SUCCESS))')
      } 
    })
  } catch (err) {
    log('[API HOOKS] [POST] [/new/subscriber] - <<ERROR>> : ' + err)

    return Promise.reject(err)
  }
})

/**
 * Update Subscriber
 */
app.post('/update/subscriber', (req, res) => {
  try {
    const { before, after, from_database } = req.body.data

    const subscriber = {
      subscriber_before: JSON.stringify({ "before": before }),
      subscriber_after: JSON.stringify({ "after": after }),
      action: 'UPDATE',
      from_database,
      subscriber_id: before.subscriber_id
    }

    connection.query('INSERT INTO subscribers_audit SET ?', subscriber, (err, results, fields) => {
      if (err) {
        log('[QUERY] [UPDATE subscriber] - <<ERROR>> : ' + err)
        throw new Error(err)
      } else {
        res.json({ message: 'Successfully...' })
        log('[QUERY] [UPDATE subscriber] - ((SUCCESS))')
      } 
    })
  } catch (err) {
    log('[API HOOKS] [POST] [/update/subscriber] - <<ERROR>> : ' + err)
    
    return Promise.reject(err)
  }
})

app.listen(process.env.API_HOOKS_PORT, () => {
  log('[API HOOKS] - Listening on ' + process.env.API_HOOKS_PORT)
})
