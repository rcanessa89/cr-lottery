import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { ChancesResult } from '@cr-lottery/models/chances/chances-result.entity';
import { CreateChancesResultInput } from '@cr-lottery/models/chances/create-chances-result.input';
import { ChancesResultsService } from './chances-results.service';

const BaseResolver = resolverFactory({
  Entity: ChancesResult,
  CreateInput: CreateChancesResultInput,
});

@Resolver()
export class ChancesResultsResolver extends BaseResolver {
  constructor(private readonly chancesResultsService: ChancesResultsService) {
    super(chancesResultsService);
  }
}
