import { Injectable } from 'injection-js';
import { Topic } from './topics.types';
import { Bind } from '../../shared/utils/bind';
import { CustomRequest } from '../../shared/utils/express';

const topicCollection: Topic[] = [];

@Injectable()
export class TopicsController {
  @Bind
  list(req, res) {
    res.send(topicCollection);
  }

  @Bind
  create(req: CustomRequest<Topic>, res) {
    topicCollection.push(req.body);
    res.status(200);
  }
}
