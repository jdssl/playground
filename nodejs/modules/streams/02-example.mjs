{
    const stdin = process.stdin
    .on('data', msg => console.log('data terminal', msg.toString()))

    stdin.pipe(process.stdout)
}
