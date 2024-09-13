import express from 'express';
import bodyParser from 'body-parser';
import studentRoutes from './routes/student.js';
import teacherRoutes from './routes/teacher.js';
import classRoutes from './routes/class.js';
import feeRoutes from './routes/fee.js';

const app = express();
app.use(bodyParser.json());

app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/fees', feeRoutes);

export default app;
