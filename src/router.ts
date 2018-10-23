import { Injectable } from 'injection-js';
import { Router } from 'express';
import { TopicsController } from './modules/topics/topics.controller';

@Injectable()
export class AppRouter {
  router: Router;
  constructor(topicsController: TopicsController) {
    console.log('Routing...');

    this.router = Router();
    this.router.get('/topics', topicsController.list);
  }
}






