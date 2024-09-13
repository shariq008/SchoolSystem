import Student from './student.js';
import Teacher from './teacher.js';

export default class SchoolClass {
  constructor(name, teacher) {
    this.name = name;
    this.teacher = teacher;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }
}
