import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { envValues, isProd } from '@cr-lottery/utils';

const isProdStage = isProd();

/**
 * Set the base configuration of the TypeORM module configuration
 * to share between the different projects of the mono-repository
 * NOTE: Can be altered depending on the project necessities
 */
const BASE_CONFIG = Object.freeze<Partial<TypeOrmModuleOptions>>({
  autoLoadEntities: true,
  migrations: [__dirname + '/migrations/**/*.{.ts,.js}'],
  migrationsRun: isProdStage,
  synchronize: !isProdStage,
  type: 'mysql',
  database: envValues.dbName,
  password: envValues.dbPassword,
  port: Number(envValues.dbPort),
  host: envValues.dbHost,
  username: envValues.dbUsername
});

export const baseTypeOrmConfig = (c: Partial<TypeOrmModuleOptions> = {}): TypeOrmModuleOptions => {
  let config: any = {};

  try {
    config = JSON.parse(envValues.dbSecret);
    config.type = config.engine;
    config.database = config.dbname;
  } catch {
    config = BASE_CONFIG;
  }

  return {
    ...BASE_CONFIG,
    ...config,
    ...c
  }
};
