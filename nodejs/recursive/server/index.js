'use strict'

import express from 'express'
import logger from './../common/helpers/logger.js'

const PORT = 1203
const app = express()

app.use(express.json())

app.get('/data', (req, res) => {
  res.set({
    'x-ratelimit-reset': new Date().getTime()
  })

  res.json({ message: 'data' })
})

app.all('*', (req, res) => {
  res.status(404)
     .json({ message: 'route not found' })
})

app.listen(PORT, () => {
  logger.info(`app running at ${PORT}`)
})
