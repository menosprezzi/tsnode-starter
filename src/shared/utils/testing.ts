import express from 'express';
import { RequestHandlerParams } from 'express-serve-static-core';
import { agent } from 'supertest';

export function testHandler(method: 'post' | 'get' | 'put' | 'delete', handler: RequestHandlerParams) {
  const server = express();
  server[method]('/', handler);
  return agent(server)[method]('/');
}
