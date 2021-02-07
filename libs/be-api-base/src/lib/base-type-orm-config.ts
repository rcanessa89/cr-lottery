import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { envValues } from '@cr-lottery/utils/env-values';
import { isProd } from '@cr-lottery/utils/is-prod';
import { ObjectLiteral } from '@cr-lottery/types';
import { Draw } from '@cr-lottery/models/draw/draw.entity';
import { LoteriaResult } from '@cr-lottery/models/loteria/loteria-result.entity';
import { ChancesResult } from '@cr-lottery/models/chances/chances-result.entity';
import { LottoResult } from '@cr-lottery/models/lotto/lotto-result.entity';
import { MonazosResult } from '@cr-lottery/models/monazos/monazos-result.entity';
import { TiemposResult } from '@cr-lottery/models/tiempos/tiempos-result.entity';

const isProdStage = isProd();

export const dbEntities = {
  Draw,
  LoteriaResult,
  ChancesResult,
  LottoResult,
  MonazosResult,
  TiemposResult,
};

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
  username: envValues.dbUsername,
  keepConnectionAlive: true,
});

export const baseTypeOrmConfig = (
  c: Partial<TypeOrmModuleOptions> = {}
): TypeOrmModuleOptions => {
  let config: ObjectLiteral = {};

  try {
    config = JSON.parse(envValues.dbSecret);
    config.type = config.engine;
    config.database = config.dbname;
  } catch {
    config = BASE_CONFIG;
  }

  const baseConfig = {
    ...BASE_CONFIG,
    ...config,
    ...c,
  };

  return baseConfig as TypeOrmModuleOptions;
};

export const getDBEntities = (
  config: { [key in keyof typeof dbEntities]?: boolean } = {}
) => {
  return Object.entries(dbEntities)
    .filter(([k]) => config[k] !== false)
    .map(([, v]) => v);
};
