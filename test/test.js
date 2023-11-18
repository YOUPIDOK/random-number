/* jshint esversion: 6 */

const request = require('supertest');
const app = require('../src/index');

describe('Integration Test', () => {
  it('should return a valid JSON response', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('min');
    expect(response.body).toHaveProperty('max');
        expect(response.body).toHaveProperty('random_number');

    expect(typeof response.body.min).toBe('number');
    expect(typeof response.body.max).toBe('number');
    expect(typeof response.body.random_number).toBe('number');
  });
});