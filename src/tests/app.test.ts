import { agent } from 'supertest';
import { app } from './main';

describe('app', () => {
  test('get(/topics): It should up the server API.', async () => {
    const response = await agent(app.server).get('/topics');
    expect(response.status).toBe(200);
  });
});
