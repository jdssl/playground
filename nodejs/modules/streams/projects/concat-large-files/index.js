import { dirname, join } from 'path';
import { promisify } from 'util';
import { promises, createReadStream, createWriteStream } from 'fs';
import { pipeline, Transform } from 'stream';
const pipelineAsync = promisify(pipeline);
const { readdir } = promises;

import csvtojson from 'csvtojson';
import jsontocsv from 'json-to-csv-stream';
import StreamConcat from 'stream-concat';

import debug from 'debug';
const log = debug('app:concat');

const { pathname: currentFile } = new URL(import.meta.url);
const cwd = dirname(currentFile);
const filesDir = `${cwd}/dataset`;
const output = `${cwd}/final.csv`;

console.time('concat-data');
const files = (await readdir(filesDir));

log(`processing ${files}`);
const ONE_SECOND = 1000;

// When all other processes finish, it dies with it
setInterval(() => process.stdout.write('.'), ONE_SECOND).unref();

// const combinedStreams = createReadStream(join(filesDir, files[0]))
const streams = files.map(
  item => createReadStream(join(filesDir, item))
);
const combinedStreams = new StreamConcat(streams);
const finalStream = createWriteStream(output);
const handleStream = new Transform({
  transform: (chunk, enconding, cb) => {
    const data = JSON.parse(chunk);
    const output = {
      id: data.Respondent,
      country: data.Country
    };
    log(`id: ${output.id}`);
    return cb(null, JSON.stringify(output));
  }
})

await pipelineAsync(
  combinedStreams,
  csvtojson(),
  handleStream,
  jsontocsv(),
  finalStream
);

log(`${files.length} files merged! on ${output}`);

console.timeEnd('concat-data');
