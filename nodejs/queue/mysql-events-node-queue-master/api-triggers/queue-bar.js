const log = require('debug')('queue:bar:process-queue')
const Queue = require('./src/libs/queue-bar')

log('[QUEUE] [BAR] [PROCESS QUEUE]')

Queue.processQueue()
