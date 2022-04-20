import Subjects from './Teacher'

export namespace Subjects {
  interface Teacher {
    experienceTeachingJava?: number,
  }

  class Java {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (''') {
        return 'No available teacher'
       }
      return 'Available Teacher: <first name of teacher>';
    }
  }
}