import fs from 'fs/promises';

function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const headers = lines[0].split(',');
      const fieldIndex = headers.length - 1;
      const firstNameIndex = 0;

      const result = {};

      for (let i = 1; i < lines.length; i += 1) {
        const parts = lines[i].split(',');
        const field = parts[fieldIndex];
        const firstName = parts[firstNameIndex];

        if (!result[field]) result[field] = [];
        result[field].push(firstName);
      }

      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

export default readDatabase;
