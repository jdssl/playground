const log = require('debug')('queue:foo:process-queue')
const Queue = require('./src/libs/queue-foo')

log('[QUEUE] [FOO] [PROCESS QUEUE]')

Queue.processQueue()
