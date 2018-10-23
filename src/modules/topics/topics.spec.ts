import 'reflect-metadata';

import { TopicsController } from './topics.controller';
import { testHandler } from '../../shared/utils/testUtils';

describe('TopicsController', () => {
  test('status: It should return API OK', async () => {
    const response = await testHandler('get', new TopicsController().list);
    expect(response.status).toBe(200);
  });
});
