'use strict';

const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000');

ws.on('open', function() {
  ws.send("Hello Balu!");
});

ws.on('message', function(data, flags) {
  console.log(`The server say:`);
  console.log(data.toString());
  ws.close();
});
