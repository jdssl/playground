const log = require('debug')('queue:job:foo:update-subscriber')
const axios = require('axios')

class UpdateSubscriber {
  get key() {
    return 'UpdateSubscriber'
  }

  async handle({ data }) {
    log('[JOB] [FOO] [UPDATE SUBSCRIBER]')

    await axios.post(`http://${process.env.API_TRIGGERS_API_HOOKS_URL}:3500/update/subscriber`, {
      data: data.finalObject
    })
      .then((response) => {
        log('[JOB] [FOO] [UPDATE SUBSCRIBER] - ((SUCCESS))')
      })
      .catch((err) => {
        log('[JOB] [FOO] [UPDATE SUBSCRIBER] - <<ERROR>> : ' + err)
      })
  }
}

module.exports = new UpdateSubscriber()
