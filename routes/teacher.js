import express from 'express';
import Teacher from '../models/teacher.js';

const router = express.Router();
const teachers = [];

router.post('/', (req, res) => {
  const { name, subject } = req.body;
  const teacher = new Teacher(name, subject);
  teachers.push(teacher);
  res.status(201).json(teacher);
});

router.get('/', (req, res) => {
  res.json(teachers);
});

export default router;
