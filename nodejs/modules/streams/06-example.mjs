import { pipeline, Readable, Writable } from 'stream'
import { promisify } from 'util'

const pipelineAsync = promisify(pipeline)

const readableStream = Readable({
  read: function () {
    this.push('Dude!! 0')
    this.push('Dude!! 1')
    this.push('Dude!! 2')
    this.push(null)
  }
})

const writableStream = Writable({
  write (chunk, enconding, cb) {
    console.log('msg', chunk.toString())
    cb()
  }
})

await pipelineAsync(
  readableStream,
  // process.stdout,
  writableStream
)

console.log('end process')
