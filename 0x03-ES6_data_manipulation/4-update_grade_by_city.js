export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((obj) => obj.location === city)
    .map((temp) => {
      const obj = { ...temp };
      obj.grade = 'N/A';
      for (const grades of newGrades) {
        if (grades.studentId === obj.id) {
          obj.grade = grades.grade;
        }
      }
      return obj;
    });
}
