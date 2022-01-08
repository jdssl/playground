'use strict';

const http = require('http');
const connect = require('connect');
const { Server } = require('socket.io');
const app = connect();
const PORT = 8000;

const server = http.createServer(app);
// set socket listen the server
const io = new Server(server, { cors: { origin: '*' }});

io.on('connection', function(socket) {
  console.log('connected');
  socket.on('message', function(data) {
    socket.emit('echo', data);
  })
})

server.listen(PORT, console.log(`server running at ${PORT}`));
