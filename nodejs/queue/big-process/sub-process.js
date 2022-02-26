function bigProcess() {
  for (let i = 0; i < 50000; ++i) {
    console.log(i)
    // process.stdout.write(String(i))
  }
}

bigProcess()
