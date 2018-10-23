import { Injectable } from 'injection-js';
import { Topic } from './topics.types';

const topicCollection: Topic[] = [];

@Injectable()
export class TopicsController {
  list(req, res) {
    res.send(topicCollection);
  }
  create(req,res) {
    topicCollection.push(req.body);
    res.status(200);
  }
}
