// Ignore all events attached and send to stdout
const stdin = process.stdin
    .on('data', msg => console.log('entrada terminal', msg.toString()))

const stdout = process.stdout
    .on('data', msg => console.log('saida terminal', msg.toString()))

stdin.pipe(stdout)
