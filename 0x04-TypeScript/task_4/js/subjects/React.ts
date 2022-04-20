import Subjects from './Teacher'

namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number,
  }

  class React {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (''') {
        return 'No available teacher'
       }
      return 'Available Teacher: <first name of teacher>';
    }
  }
}