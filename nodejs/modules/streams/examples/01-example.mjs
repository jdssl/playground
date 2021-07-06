{
    process.stdin.pipe(process.stdout)

    .on('data', msg => console.log('terminal data', msg.toString()))
}
