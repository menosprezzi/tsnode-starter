import express, {Application} from 'express';
import bodyParser from 'body-parser';
import { AppRouter } from './router';
import { Injectable } from "injection-js";

@Injectable()
export class App {
  server: Application;
  constructor(appRouter: AppRouter) {
    this.server = express();
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({extended: true}));

    this.server.use(appRouter.router);

    this.server.listen(8080);
    console.log('App listening on 8080');
  }
}
