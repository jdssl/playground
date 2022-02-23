require('dotenv/config')

const log = require('debug')('api-triggers:server')
const express = require('express')
const events = require('./src/core/run')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to API TRIGGERS'
  })
})

// RUN
events
  .run()
  .then(() => log('[RUN] - Waiting for database events...'))
  .catch((err) => log('[RUN] <<ERROR>> - ' + err))

app.listen(process.env.API_TRIGGERS_PORT, () => {
  log('[API TRIGGERS] - Listening on ' + process.env.API_TRIGGERS_PORT)
})

