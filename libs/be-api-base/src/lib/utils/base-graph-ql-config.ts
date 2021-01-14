import { GqlModuleOptions } from '@nestjs/graphql';

import { isProd } from '@cr-lottery/utils';

const isProdStage = isProd();

/**
 * Set the base configuration of the GraphQL module configuration
 * to share between the different projects of the mono-repository
 * NOTE: Can be altered depending on the project necessities
 */
const BASE_CONFIG = Object.freeze({
  autoSchemaFile: true,
  sortSchema: true,
  debug: !isProdStage,
  playground: !isProdStage,
  introspection: !isProdStage
});

export const baseGraphQlConfig = (c: Partial<GqlModuleOptions> = {}): GqlModuleOptions => ({
  ...BASE_CONFIG,
  ...c
});
