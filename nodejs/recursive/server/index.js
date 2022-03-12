'use strict'

import express from 'express'
import logger from './../common/helpers/logger.js'

const PORT = 1203
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next)=> {
  logger.info(req)
  next();
})

app.get('/data', (req, res) => {
  res.set({
    'x-ratelimit-reset': new Date().getTime()
  })

  res.json({ message: 'data' })
})

app.post('/data', (req, res) => {
  res.json(req.body)
})

app.all('*', (req, res) => {
  res.status(404)
     .json({ message: 'route not found' })
})

app.listen(PORT, () => {
  logger.info(`app running at ${PORT}`)
})
