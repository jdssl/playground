const log = require('debug')('queue:job:bar:update-subscriber')
const axios = require('axios')

class UpdateSubscriber {
  get key() {
    return 'UpdateSubscriber'
  }

  async handle({ data }) {
    log('[JOB] [BAR] [UPDATE SUBSCRIBER]')

    await axios.post(`http://${process.env.API_TRIGGERS_API_HOOKS_URL}:3500/update/subscriber`, {
      data: data.finalObject
    })
      .then((response) => {
        log('[JOB] [BAR] [UPDATE SUBSCRIBER] - ((SUCCESS))')
      })
      .catch((err) => {
        log('[JOB] [BAR] [UPDATE SUBSCRIBER] - <<ERROR>> : ' + err)
      })
  }
}

module.exports = new UpdateSubscriber()
