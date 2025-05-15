process.stdout.write('Welcome to ALX, what is your name?\n');

let name = '';

process.stdin.on('data', (data) => {
  name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  if (process.stdin.isTTY) {
    process.exit();
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
