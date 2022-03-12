'use strict'

import axios from 'axios'

import logger from './../common/helpers/logger.js'
import { sleep } from './../common/helpers/sleep.js'

const URL = 'http://localhost:1203'

async function getData(id, name) {
  logger.info(`params: ${id}, ${name}`)
  return axios.get(`${URL}/data`)
}

async function postData(body) {
  logger.info(`body: ${JSON.stringify(body)}`)
  return axios.post(`${URL}/data`, body)
}

async function recursiveFn(params, callback, tries = 3) {
  if (tries === 0) {
    throw new Error('All request tries failed');
  }

  const res = await callback.apply(this, params)
  logger.info(`response: ${JSON.stringify(res.data)}`)

  sleep(500)

  await recursiveFn(params, callback, tries - 1)

  logger.info(tries - 1)
}

;(async () => {
  const body =[{ name: 'Balu', age: 27 }]

  return Promise.all([
   recursiveFn([1, 'balu'], getData),
   recursiveFn(body, postData)
  ])
})()

