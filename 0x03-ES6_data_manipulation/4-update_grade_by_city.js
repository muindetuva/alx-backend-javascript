export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsFromCity = students.filter((student) => student.location === city);

  return studentsFromCity.map((student) => {
    const studentGradeEntry = newGrades.find((entry) => entry.studentId === student.id);

    return {
      ...student,
      grade: studentGradeEntry ? studentGradeEntry.grade : 'N/A',
    };
  });
}
