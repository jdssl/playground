'use strict';

const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (let id in cluster.workers) {
    console.log(`Kill ${id}`);
    cluster.workers[id].kill();
  }
}
