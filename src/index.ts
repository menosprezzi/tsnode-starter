import 'reflect-metadata';
import { ReflectiveInjector } from 'injection-js';

import { App } from './app';
import { AppRouter } from './router';
import { TopicsController } from './modules/topics/topics.controller';
import { AppConfig } from './config';

const injector = ReflectiveInjector.resolveAndCreate([
  App,
  AppConfig,
  AppRouter,
  TopicsController,
]);

injector.get(App);



