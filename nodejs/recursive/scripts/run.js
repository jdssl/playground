'use strict'

import axios from 'axios'

import logger from './../common/helpers/logger.js'

const URL = 'http://localhost:1203'

async function getData(id, name) {
  logger.info(`${id}, ${name}`)
  return axios.get(`${URL}/data`)
}

async function postData(body) {
  console.log(body)
  return axios.post(`${URL}/data`, JSON.stringify(body))
}

async function recursiveFn(params, callback, tries = 3) {
  const res = await callback.apply(this, params)
  logger.info(res.data)
}

;(async () => {
  const body =[{ name: 'Balu', age: 27 }]
  await recursiveFn([1, 'balu'], getData)
  await recursiveFn(body, postData)
})()
