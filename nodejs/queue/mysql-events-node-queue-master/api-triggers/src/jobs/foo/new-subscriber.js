const log = require('debug')('queue:job:foo:new-subscriber')
const axios = require('axios')

class NewSubscriber {
  get key() {
    return 'NewSubscriber'
  }

  async handle({ data }) {
    log('[JOB] [FOO] [NEW SUBSCRIBER]')

    await axios.post(`http://${process.env.API_TRIGGERS_API_HOOKS_URL}:3500/new/subscriber`, {
    // await axios.post(`http://${process.env.API_TRIGGERS_API_HOOKS_URL}:3500/promise/reject`, {
      data: data.finalObject
    })
      .then((response) => {
        log('[JOB] [FOO] [NEW SUBSCRIBER] - ((SUCCESS))')
      })
      .catch((err) => {
        log('[JOB] [FOO] [NEW SUBSCRIBER] - <<ERROR>> : ' + err)
      })
  }
}

module.exports = new NewSubscriber()
