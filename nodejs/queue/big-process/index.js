import http from 'http'
import { spawn } from 'child_process'
import path from 'path'

const PORT = 2602

async function bigProcess() {
  return new Promise((resolve, reject) => {

    const { pathname: currentFile } = new URL(import.meta.url);
    const cwd = path.dirname(currentFile)

    const proc = spawn('node', [
      path.resolve(cwd, 'sub-process.js')
    ])

    const stderr = []

    proc.stdout.on('data', (chunk) => console.log(chunk.toString()))

    proc.stderr.on('data', (chunk) => stderr.push(chunk))

    proc.on('error', reject)

    proc.on('close', () => {
      if (stderr.length) {
        return reject(stderr.join(''))
      }

      resolve()
    })
  })
}

http
  .createServer(async (req, res) => {
    if (req.url === '/big') {
      const started = new Date()

      await bigProcess()

      console.log(`This process took: ${new Date() - started}ms`)
      return res.end('big')
    }

    res.end('welcome')
  })
  .listen(PORT, () => console.log(`server running at ${PORT}`))
