'use strict'

import pino from 'pino'

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
  // prettyPrint: {
  //   ignore: 'pid,hostname'
  // }
})

export default logger
