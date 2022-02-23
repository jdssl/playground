require('dotenv/config')

const log = require('debug')('api-triggers:run')
const mysql = require('mysql')
const MySQLEvents = require('@rodrigogs/mysql-events')

async function run() {
  // FOO CONNECTION AUDIT
  const connectionMySQLFOOAudit = mysql.createConnection({
    host: process.env.API_TRIGGERS_DB_MYSQL_AUDIT_FOO_HOST,
    user: process.env.API_TRIGGERS_DB_MYSQL_AUDIT_FOO_USER,
    password: process.env.API_TRIGGERS_DB_MYSQL_AUDIT_FOO_PASSWORD,
    database: process.env.API_TRIGGERS_DB_MYSQL_AUDIT_FOO_DATABASE
  })

  connectionMySQLFOOAudit.connect((err) => {
    if (err) {
      log('[CONNECTION] [MYSQL] [FOO AUDIT] - <<ERROR>> : ' + err)
    } else {
      log('[CONNECTION] [MYSQL] [FOO AUDIT] - ((SUCCESS))')
    }
  })

  // BAR CONNECTION AUDIT
  const connectionMySQLBARAudit = mysql.createConnection({
    host: process.env.API_TRIGGERS_DB_MYSQL_AUDIT_BAR_HOST,
    user: process.env.API_TRIGGERS_DB_MYSQL_AUDIT_BAR_USER,
    password: process.env.API_TRIGGERS_DB_MYSQL_AUDIT_BAR_PASSWORD,
    database: process.env.API_TRIGGERS_DB_MYSQL_AUDIT_BAR_DATABASE
  })

  connectionMySQLBARAudit.connect((err) => {
    if (err) {
      log('[CONNECTION] [MYSQL] [BAR AUDIT] - <<ERROR>> : ' + err)
    } else {
      log('[CONNECTION] [MYSQL] [BAR AUDIT] - ((SUCCESS))')
    }
  })

  // FOO
  const connectionMySQLFOO = mysql.createConnection({
    host: process.env.API_TRIGGERS_DB_MYSQL_FOO_HOST,
    user: process.env.API_TRIGGERS_DB_MYSQL_FOO_USER,
    password: process.env.API_TRIGGERS_DB_MYSQL_FOO_PASSWORD,
    database: process.env.API_TRIGGERS_DB_MYSQL_FOO_DATABASE
  })

  const instanceMySQLFOO = new MySQLEvents(connectionMySQLFOO, {
    serviceId: process.env.API_TRIGGERS_SERVER_ID_FOO,
    startAtEnd: process.env.API_TRIGGERS_START_AT_END_FOO
  })

  // FOO TRIGGER
  const newSubscriberFOO = require('../triggers/foo/new-subscriber')(MySQLEvents, connectionMySQLFOOAudit)
  const updateSubscriberFOO = require('../triggers/foo/update-subscriber')(MySQLEvents, connectionMySQLFOOAudit)


  // BAR TRIGGER
  const newSubscriberBAR = require('../triggers/bar/new-subscriber')(MySQLEvents, connectionMySQLBARAudit)
  const updateSubscriberBAR = require('../triggers/bar/update-subscriber')(MySQLEvents, connectionMySQLBARAudit)

  await instanceMySQLFOO.start()

  instanceMySQLFOO.addTrigger(newSubscriberFOO)
  instanceMySQLFOO.addTrigger(updateSubscriberFOO)

  instanceMySQLFOO.on(MySQLEvents.EVENTS.CONNECTION_ERROR, (err) =>
    log('[connectionMySQLFOO ERROR] - ' + err),
  )

  instanceMySQLFOO.on(MySQLEvents.EVENTS.ZONGJI_ERROR, (err) =>
    log('[ZONGJI FOO ERROR] - ' + err),
  )

  // BAR
  const connectionMySQLBAR = mysql.createConnection({
    host: process.env.API_TRIGGERS_DB_MYSQL_BAR_HOST,
    user: process.env.API_TRIGGERS_DB_MYSQL_BAR_USER,
    password: process.env.API_TRIGGERS_DB_MYSQL_BAR_PASSWORD,
    database: process.env.API_TRIGGERS_DB_MYSQL_BAR_DATABASE
  })

  const instanceMySQLBAR = new MySQLEvents(connectionMySQLBAR, {
    serviceId: process.env.API_TRIGGERS_SERVER_ID_BAR,
    startAtEnd: process.env.API_TRIGGERS_START_AT_END_BAR
  })

  await instanceMySQLBAR.start()

  instanceMySQLBAR.addTrigger(newSubscriberBAR)
  instanceMySQLBAR.addTrigger(updateSubscriberBAR)

  instanceMySQLBAR.on(MySQLEvents.EVENTS.CONNECTION_ERROR, (err) =>
    log('[connectionMySQLBAR ERROR] - ' + err),
  )

  instanceMySQLBAR.on(MySQLEvents.EVENTS.ZONGJI_ERROR, (err) =>
    log('[ZONGJI BAR ERROR] - ' + err),
  )
}

module.exports = { run }
