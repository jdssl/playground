'use strict';

const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
let worker;

const PORT = 3000;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    worker = cluster.fork();

    worker.on('online', () => console.log(`Worker ${worker.id} is online`));

    worker.on('disconnect', () => console.log(`Worker ${worker.id} was disconnected`));

    worker.on('exit', () => console.log(`Worker ${worker.id} was exited`));

    worker.disconnect();
  }
} else {
  http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end('Hi balu');
  })
  .listen(PORT, console.log(`server running at ${PORT}`));
}

