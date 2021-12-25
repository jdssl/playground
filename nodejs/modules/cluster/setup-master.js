'use strict'

const http = require('http')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const PORT = 3000

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  cluster.setupMaster({
    exec: __filename,
    args: process.argv.slice(2),
    silent: false
  })

  for (let i = 0; i < numCPUs; i++) {
    console.log('forking')
    cluster.fork()
  }
} else {
  http
    .createServer((req, res) => {
      console.log(`${process.pid}: request ${req.url}`)
      res.writeHead(200)
      res.end('Hi Balu')
    })
    .listen(PORT, console.log(`server running at http://localhost:${PORT}`))
}


