process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}\n`);
  if (process.stdin.isTTY) {
    process.exit();
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
