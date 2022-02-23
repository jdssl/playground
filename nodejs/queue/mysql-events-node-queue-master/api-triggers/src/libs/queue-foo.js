const log = require('debug')('queue:main:foo')

const Bee = require('bee-queue')
const redisConfig = require('../config/redis')

const NewSubscriberFOO = require('../jobs/foo/new-subscriber')
const UpdateSubscriberFOO = require('../jobs/foo/update-subscriber')

const jobs = [NewSubscriberFOO, UpdateSubscriberFOO]

class Queue {
  constructor() {
    this.queues = {}

    this.init()
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig
        }),
        handle,
      }
    })
  }

  add(queue, job) {
    return this.queues[queue].bee
      .createJob(job)
      // .timeout(60000)
      .timeout(4000)
      .retries(6)
      .save()
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key]

      bee
        .on('succeeded', this.ok)
        .on('failed', this.fail)
        .on('retrying', this.retry)
        .process(handle)
    })
  }

  ok(job, result) {
    log(`[QUEUE] [FOO] [JOB] [${job.queue.name}] - ((SUCCESS))`)
  }

  fail(job, err) {
    log(`[QUEUE] [FOO] [JOB] [${job.queue.name}] - <<FAIL>> : ${err}`)
  }

  retry(job, err) {
    log(`[QUEUE] [FOO] [JOB] [${job.id}] failed with error ${err.message} but is being retried!`)
  }
}

module.exports = new Queue()
