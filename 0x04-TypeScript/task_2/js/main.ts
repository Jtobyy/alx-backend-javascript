// Task5
interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  constructor () {}

  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  constructor(){}

  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));