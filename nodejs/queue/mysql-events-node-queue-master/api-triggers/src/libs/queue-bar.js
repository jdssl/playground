const log = require('debug')('queue:main:bar')

const Bee = require('bee-queue')
const redisConfig = require('../config/redis')

const NewSubscriberBAR = require('../jobs/bar/new-subscriber')
const UpdateSubscriberBAR = require('../jobs/bar/update-subscriber')

const jobs = [NewSubscriberBAR, UpdateSubscriberBAR]

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
    log(`[QUEUE] [BAR] [JOB] [${job.queue.name}] - ((SUCCESS))`)
  }

  fail(job, err) {
    log(`[QUEUE] [BAR] [JOB] [${job.queue.name}] - <<FAIL>> : ${err}`)
  }

  retry(job, err) {
    log(`[QUEUE] [BAR] [JOB] [${job.id}] failed with error ${err.message} but is being retried!`)
  }
}

module.exports = new Queue()
