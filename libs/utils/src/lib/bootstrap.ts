import { Server } from 'http';
import { createServer } from 'aws-serverless-express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

import { getLambdaGlobalPrefix } from './get-lambda-global-prefix';

export const bootstrap = async (AppModule): Promise<Server> => {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  const globalPrefix = getLambdaGlobalPrefix();

  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  await app.init();

  return createServer(expressApp);
};
