const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  res.write('This is the list of our students\n');

  // Monkey patch conosle log
  const originalLog = console.log;
  let captured = '';

  console.log = (msg) => {
    captured += `${msg}\n`;
  };

  countStudents(databasePath)
    .then(() => {
      console.log = originalLog;
      res.end(captured.trim());
    })
    .catch((err) => {
      console.log = originalLog;
      res.end(err.message);
    });
});

app.listen(1245);

module.exports = app;
