import http from 'http'
import { spawn } from 'child_process'
import path from 'path'
import os from 'os'

const PORT = 2602

const systemCpuCore = os.cpus()
const maxParallelProcess = systemCpuCore.length / 2
let runningProcs = []

async function runBigProcessInQueue() {
  if (runningProcs.length >= maxParallelProcess) {
    console.log('queue is full, waiting some process finish')
    await runningProcs[0]
    return runBigProcessInQueue()
  }

  console.log('running process...')

  const promise = bigProcess()
  runningProcs.push(promise)

  function removePromise() {
    console.log('proc done, removing...')
    runningProcs = runningProcs.filter(p => p !== promise)
  }

  let result;

  try {
    result = await promise
  } catch (err) {
    throw err
  } finally {
    removePromise()
  }

  return result
}

async function bigProcess() {
  return new Promise((resolve, reject) => {
    const { pathname: currentFile } = new URL(import.meta.url);
    const cwd = path.dirname(currentFile)

    const proc = spawn('node', [
      path.resolve(cwd, 'sub-process.js')
    ])

    const stderr = []

    proc.stdout.on('data', (chunk) => { /* console.log(chunk.toString()) */ })

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

      // await bigProcess()
      await runBigProcessInQueue()

      console.log(`This process took: ${new Date() - started}ms`)
      return res.end('big')
    }

    res.end('welcome')
  })
  .listen(PORT, () => console.log(`server running at ${PORT}`))
