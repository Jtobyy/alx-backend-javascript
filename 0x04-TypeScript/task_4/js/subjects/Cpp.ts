import Subjects from './Teacher';

namespace Subjects {
  interface Teacher {
    experienceTeachingC?: number,
  }

  class Cpp extends Subject {
    constructor() { super() }

    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (''') {
        return 'No available teacher';
      }
      return 'Available Teacher: <first name of teacher>';
    }
  }
}