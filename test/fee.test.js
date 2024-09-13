import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';

describe('Fee API', () => {
  it('should create a fee', async () => {
    const response = await request(app)
      .post('/api/fees')
      .send({ studentName: 'Alice', amount: 100 })
      .expect(201);
    
    expect(response.body).to.have.property('amount', 100);
  });

  it('should get all fees', async () => {
    await request(app)
      .post('/api/fees')
      .send({ studentName: 'Bob', amount: 200 });

    const response = await request(app)
      .get('/api/fees')
      .expect(200);
    
    expect(response.body).to.be.an('array').that.is.not.empty;
    expect(response.body[0].student).to.have.property('name', 'Alice');
    expect(response.body[1].student).to.have.property('name', 'Bob');
  });
});
