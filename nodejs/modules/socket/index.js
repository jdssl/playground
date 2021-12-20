'use strict'

const http = require('http')
const connect = require('connect')
const webSocketServer = require('ws').Server

const PORT = 3000
const app = connect()

const server = http.createServer(app)
const wsServer = new webSocketServer({ server: server })

wsServer.on("connection", function(ws) {
  ws.on("message", function(message, flags) {
    ws.send(message, flags)
  })
})

server.listen(PORT, console.log(`socket running at ${PORT}`))
