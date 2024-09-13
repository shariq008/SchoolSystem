import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';

describe('Class API', () => {
  it('should create a class', async () => {
    const response = await request(app)
      .post('/api/classes')
      .send({ name: 'Math 101', teacherName: 'Mr. Smith', teacherSubject: 'Math' })
      .expect(201);
    
    expect(response.body).to.have.property('name', 'Math 101');
    expect(response.body.teacher).to.have.property('name', 'Mr. Smith');
  });

  it('should add a student to a class', async () => {
    await request(app)
      .post('/api/classes')
      .send({ name: 'Science 101', teacherName: 'Ms. Johnson', teacherSubject: 'Science' });

    await request(app)
      .post('/api/classes/add-student')
      .send({ className: 'Science 101', studentName: 'Alice', studentAge: 20 });

    const response = await request(app)
      .get('/api/classes')
      .expect(200);
    
    expect(response.body).to.be.an('array').that.is.not.empty;
    expect(response.body[1].students).to.deep.include({ name: 'Alice', age: 20 });
  });
});
