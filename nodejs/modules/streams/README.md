# Streams

## Documentation

- https://nodejs.org/api/stream.html

## Scenarios to use Streams

- Read and write of big files.
- Reports
- Extracting and compressing large files
- Audio and video processing

## Process

1. Node transform data to buffer, a part of file.
2. The file in Nodes is called of chunks.
3. Readable Streams -> Transform Streams -> Writable Streams

## Readable Streams

A data font, a database, a file, a request, or a data font whatever.

## Transform Streams

Used to step of data conversion and mapping.

## Writable Streams

Step final, for every item in chain data it throws in the output of the process.
