const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    // Use monkey patching
    const originalLog = console.log;
    let capturedOutput = '';

    console.log = (msg) => {
      capturedOutput += `${msg}\n`;
    };

    countStudents(databasePath)
      .then(() => {
        console.log = originalLog;
        res.end(capturedOutput.trim());
      })
      .catch((err) => {
        console.log = originalLog;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);
module.exports = app;
