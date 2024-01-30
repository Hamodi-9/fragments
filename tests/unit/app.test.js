const request = require('supertest');
const app = require('../../src/app');

describe('GET /nonexistent-route', () => {
  test('should return a 404 status code', async () => {
    const res = await request(app).get('/nonexistent-route');
    expect(res.statusCode).toBe(404);
  });
});
