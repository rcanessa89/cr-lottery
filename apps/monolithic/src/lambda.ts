import { Server } from 'http';
import { Context, APIGatewayProxyHandler, Event } from 'aws-lambda';
import { proxy, Response } from 'aws-serverless-express';

import { bootstrap } from '@cr-lottery/utils/bootstrap';
import { AppModule } from './app/app.module';

let cachedServer: Server;

export const handler: APIGatewayProxyHandler = async (
  event: Event,
  context: Context
): Promise<Response> => {
  if (!cachedServer) {
    cachedServer = await bootstrap(AppModule);
  }

  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
