const log = require('debug')('api-triggers:foo:update-subscriber')

const Queue = require('../../libs/queue-foo')
const UpdateSubscriberJob = require('../../jobs/foo/update-subscriber')

module.exports = (MySQLEvents, connection) => ({
  name: 'Update Subscriber',
  expression: 'company.subscribers',
  statement: MySQLEvents.STATEMENTS.UPDATE,
  onEvent: async (event) => {
    const { affectedRows } = event
    const finalObject = {
      after: {},
      before: {},
      from_database: 'FOO'
    }

    affectedRows.forEach((item) => {
      Object.assign(finalObject.after, item.after)
      Object.assign(finalObject.before, item.before)
    })

    await connection.query('INSERT INTO subscribers_audit SET ?', {
      subscriber_id: finalObject.before.subscriber_id,
      from_database: finalObject.from_database,
      action: 'UPDATE',
      subscriber_before: JSON.stringify({ "before": finalObject.before }),
      subscriber_after: JSON.stringify({ "after": finalObject.after }),
    }, (err, results, fields) => {
       if (err) {
        log('[FOO AUDIT] [QUERY] [UPDATE subscriber] - <<ERROR>> : ' + err)
      } else {
        log('[FOO AUDIT] [QUERY] [UPDATE subscriber] - ((SUCCESS))')
      }
    })

    await Queue.add(UpdateSubscriberJob.key, {
      finalObject
    })

    log('[TRIGGER] [FOO] [UPDATE SUBSCRIBER] - ((SUCCESS))')
  }
})
