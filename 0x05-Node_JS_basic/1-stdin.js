process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

let name = '';

if (process.stdin.isTTY) {
  process.stdin.on('data', (chunk) => {
    name += chunk;
    process.stdout.write(`Your name is: ${name.trim()}\n`);
    process.exit(0); // End immediately after printing
  });
} else {
  process.stdin.on('data', (chunk) => {
    name += chunk;
  });

  process.stdin.on('end', () => {
    process.stdout.write(`Your name is: ${name}`);
    process.stdout.write('This important software is now closing\n');
  });
}
