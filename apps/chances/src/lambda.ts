import { Server } from 'http';
import { Context, APIGatewayProxyHandler } from 'aws-lambda';
import { createServer, proxy, Response } from 'aws-serverless-express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

import { AppModule } from './app/app.module';

let cachedServer: Server;

const bootstrap = async (): Promise<Server> => {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  app.enableCors();
  await app.init();

  return createServer(expressApp);
};

export const handler: APIGatewayProxyHandler = async (event: any, context: Context): Promise<Response> => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }

  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
