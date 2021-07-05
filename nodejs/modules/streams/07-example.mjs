import { pipeline, Readable, Transform } from 'stream'
import { promisify } from 'util'
import { createWriteStream } from 'fs'

const pipelineAsync = promisify(pipeline)

const readableStream = Readable({
  read () {
    // 1e5 = 100000
    for (let index = 0; index < 1e5; index++) {
      const person = { id: Date.now() + index, name: `Jonatan-${index}` }
      const data = JSON.stringify(person)
      this.push(data)
    }

    // Warns that the processing of data is over
    this.push(null)
  }
})

const writableMapToCSV = Transform({
  transform (chunk, enconding, cb) {
    const data = JSON.parse(chunk)
    const result = `${data.id},${data.name.toUpperCase()}\n`
    cb(null, result)
  }
})

const setHeader = Transform({
  transform (chunk, enconding, cb) {
    this.counter = this.counter ?? 0
    if (this.counter) {
      return cb(null, chunk)
    }
    this.counter += 1

    cb(null, "id,name\n".concat(chunk))
  }
})

await pipelineAsync(
  readableStream,
  writableMapToCSV,
  setHeader,
  // process.stdout
  createWriteStream('my.csv')
)

console.log('end process')
