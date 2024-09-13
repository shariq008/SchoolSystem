import express from 'express';
import Fee from '../models/fee.js';
import Student from '../models/student.js';

const router = express.Router();
const fees = [];

router.post('/', (req, res) => {
  const { studentName, amount } = req.body;
  const student = new Student(studentName, null); // Assuming student name is sufficient for this example
  const fee = new Fee(student, amount);
  fees.push(fee);
  res.status(201).json(fee);
});

router.get('/', (req, res) => {
  res.json(fees);
});

export default router;
