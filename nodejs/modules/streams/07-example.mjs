import { pipeline, Readable, Writable } from 'stream'
import { promisify } from 'util'

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

await pipelineAsync(
  readableStream,
  process.stdout
)

console.log('end process')
