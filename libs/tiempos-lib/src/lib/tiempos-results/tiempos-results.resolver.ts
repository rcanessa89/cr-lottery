import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/gql-base';
import { TiemposResult } from '@cr-lottery/models/tiempos/tiempos-result.entity';
import { CreateTiemposResultInput } from '@cr-lottery/models/tiempos/create-tiempos-result.input';
import { TiemposResultsService } from './tiempos-results.service';

const BaseResolver = resolverFactory({
  Entity: TiemposResult,
  CreateInput: CreateTiemposResultInput,
});

@Resolver()
export class TiemposResultsResolver extends BaseResolver {
  constructor(private readonly tiemposResultsService: TiemposResultsService) {
    super(tiemposResultsService);
  }
}
