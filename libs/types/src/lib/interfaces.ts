import { INestApplication } from '@nestjs/common';

export interface RdsInstanceSecret {
  password: string;
  engine: string;
  port: string;
  dbInstanceIdentifier: string;
  host: string;
  username: string;
}

export interface ConfigSwaggerArgs {
  app: INestApplication;
  title?: string;
  description?: string;
  version?: string;
}
