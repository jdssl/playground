const log = require('debug')('queue:job:bar:new-subscriber')
const axios = require('axios')

class NewSubscriber {
  get key() {
    return 'NewSubscriber'
  }

  async handle({ data }) {
    log('[JOB] [BAR] [NEW SUBSCRIBER]')

    await axios.post(`http://${process.env.API_TRIGGERS_API_HOOKS_URL}:3500/new/subscriber`, {
    // await axios.post(`http://${process.env.API_TRIGGERS_API_HOOKS_URL}:3500/promise/reject`, {
      data: data.finalObject
    })
      .then((response) => {
        log('[JOB] [BAR] [NEW SUBSCRIBER] - ((SUCCESS))')
      })
      .catch((err) => {
        log('[JOB] [BAR] [NEW SUBSCRIBER] - <<ERROR>> : ' + err)
      })
  }
}

module.exports = new NewSubscriber()
