import { Request } from 'express';

export interface CustomRequest<B = {}, Q = {}> extends Request {
  body: B;
  query: Q;
}
