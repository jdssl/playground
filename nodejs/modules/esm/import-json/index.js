import { readFile } from 'fs/promises'

const anyJSON = JSON.parse(
  await readFile(new URL('./any.json', import.meta.url))
)

console.log('anyJSON', anyJSON)
