import express from 'express';
import SchoolClass from '../models/class.js';
import Teacher from '../models/teacher.js';
import Student from '../models/student.js';

const router = express.Router();
const classes = [];

router.post('/', (req, res) => {
  const { name, teacherName, teacherSubject } = req.body;
  const teacher = new Teacher(teacherName, teacherSubject);
  const schoolClass = new SchoolClass(name, teacher);
  classes.push(schoolClass);
  res.status(201).json(schoolClass);
});

router.post('/add-student', (req, res) => {
  const { className, studentName, studentAge } = req.body;
  const schoolClass = classes.find(cls => cls.name === className);
  if (schoolClass) {
    const student = new Student(studentName, studentAge);
    schoolClass.addStudent(student);
    res.status(200).json(schoolClass);
  } else {
    res.status(404).send('Class not found');
  }
});

router.get('/', (req, res) => {
  res.json(classes);
});

export default router;
