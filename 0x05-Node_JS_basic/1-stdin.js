// 1-stdin.js
process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.setEncoding('utf8');

let name = '';

process.stdin.on('data', (chunk) => {
  name += chunk;

  if (process.stdin.isTTY) {
    process.stdout.write(`Your name is: ${name}`);
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  process.stdout.write(`Your name is: ${name}`);
  process.stdout.write('This important software is now closing\n');
});
