import 'reflect-metadata';
import { ReflectiveInjector } from 'injection-js';

import { App } from '../app';
import { AppRouter } from '../router';
import { TopicsController } from '../modules/topics/topics.controller';
import { AppConfig } from '../config';

export function getApp(): App {
  const injector = ReflectiveInjector.resolveAndCreate([
    App,
    AppConfig,
    AppRouter,
    TopicsController,
  ]);

  return injector.get(App);
}
