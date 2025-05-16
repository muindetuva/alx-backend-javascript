import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      const fields = Object.keys(data)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let output = 'This is the list of our students';

      for (const field of fields) {
        const students = data[field];
        output += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      }

      res.status(200).type('text/plain').send(output);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(process.argv[2]);
      const students = data[major] || [];
      return res.status(200).type('text/plain').send(`List: ${students.join(', ')}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
