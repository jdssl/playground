import logger from './../common/helpers/logger.js'
import axios from 'axios'

;(async () => {
  const res = await axios.get('http://localhost:1203/data');
  logger.info(res.data)
  logger.info(res.headers['x-ratelimit-reset'])
})()
