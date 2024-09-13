import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';

describe('Student API', () => {
  it('should create a student', async () => {
    const response = await request(app)
      .post('/api/students')
      .send({ name: 'Alice', age: 20 })
      .expect(201);
    
    expect(response.body).to.have.property('name', 'Alice');
    expect(response.body).to.have.property('age', 20);
  });

  it('should get all students', async () => {
    await request(app)
      .post('/api/students')
      .send({ name: 'Bob', age: 22 });

    const response = await request(app)
      .get('/api/students')
      .expect(200);
    
    expect(response.body).to.be.an('array').that.is.not.empty;
    expect(response.body[0]).to.have.property('name', 'Alice');
    expect(response.body[1]).to.have.property('name', 'Bob');
  });
});
