import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';

describe('Teacher API', () => {
  it('should create a teacher', async () => {
    const response = await request(app)
      .post('/api/teachers')
      .send({ name: 'Mr. Smith', subject: 'Math' })
      .expect(201);
    
    expect(response.body).to.have.property('name', 'Mr. Smith');
    expect(response.body).to.have.property('subject', 'Math');
  });

  it('should get all teachers', async () => {
    await request(app)
      .post('/api/teachers')
      .send({ name: 'Ms. Johnson', subject: 'Science' });

    const response = await request(app)
      .get('/api/teachers')
      .expect(200);
    
    expect(response.body).to.be.an('array').that.is.not.empty;
    expect(response.body[0]).to.have.property('name', 'Mr. Smith');
    expect(response.body[1]).to.have.property('name', 'Ms. Johnson');
  });
});
