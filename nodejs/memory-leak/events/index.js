import { createServer } from 'http'
import Events from 'events'
import { randomBytes } from 'crypto'

const PORT = 3000
const myEvent = new Events()

function getBytes() {
  randomBytes(10000)
}

function onData(msg) {
  getBytes()

  const items = []
  setInterval(function myInterval() {
    items.push(msg)
  }, 200)
}

myEvent.on('data', onData)

function handler(req, res) {

  myEvent.emit('data', Date.now())

  res.end('ok')
}

createServer(handler)
.listen(PORT, () => console.log(`server is running at ${PORT}`))
