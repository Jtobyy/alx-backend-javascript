import Subjects from './Teacher'

namespace Subjects {
  class Subject {
    constructor() {}

    teacher implements Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
