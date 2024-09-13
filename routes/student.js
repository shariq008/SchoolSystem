import express from 'express';
import Student from '../models/student.js';

const router = express.Router();
const students = [];

router.post('/', (req, res) => {
  const { name, age } = req.body;
  const student = new Student(name, age);
  students.push(student);
  res.status(201).json(student);
});

router.get('/', (req, res) => {
  res.json(students);
});

export default router;
