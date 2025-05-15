process.stdout.write('Welcome to Holberton School, what is your name?\n');

let name = '';

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  name += chunk;
});

process.stdin.on('end', () => {
  process.stdout.write(`Your name is: ${name}`);
  process.stdout.write('This important software is now closing\n');
});
