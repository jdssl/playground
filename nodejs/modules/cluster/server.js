'use strict'

const http = require('http')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const PORT = 3000

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  cluster.on('fork', (worker) => {
    console.log('Trying forking the workers')
  })

  cluster.on('online', (worker) => {
    console.log('Workers forking succeed')
  })

  for (let i = 0; i < numCPUs; i++) {
    console.log('forking')
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${process.pid} died`)
  })

} else {
  http
    .createServer((req, res) => {
      console.log(`${process.pid}: request ${req.url}`)
      res.writeHead(200)
      res.end('Hi Balu')
    })
    .listen(PORT, console.log(`server running at http://localhost:${PORT}`))
}


