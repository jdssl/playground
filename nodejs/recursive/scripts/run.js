'use strict'

import axios from 'axios'

import logger from './../common/helpers/logger.js'
import { sleep } from './../common/helpers/sleep.js'

async function getData(id, name) {
  console.log(id, name)
  return axios.get('http://localhost:1203/data')
}



;(async () => {
  const res = await getData(1, 'balu')
  logger.info(res.data)
  logger.info(res.headers['x-ratelimit-reset'])


})()
