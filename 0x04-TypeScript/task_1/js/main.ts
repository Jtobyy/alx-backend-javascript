// Task1
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
}

// Task 2
interface Directors extends Teacher {
  numberOfReports: number,
}

// Task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

let printTeacher: printTeacherFunction

printTeacher = function (firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
}

// Task 4
interface studentInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string,
}

interface studentConstructor {
  new (firstName: string, lastName: string): studentInterface,
}

const StudentClass: studentConstructor = class StudentClass implements studentInterface {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}