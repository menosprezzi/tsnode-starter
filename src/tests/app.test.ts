import { agent } from 'supertest';
import { getApp } from './main';

describe('app', () => {
  test('get(/topics): It should up the server API.', async () => {
    const response = await agent(getApp().server).get('/topics');
    expect(response.status).toBe(200);
  });
});
