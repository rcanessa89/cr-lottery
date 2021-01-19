import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { ChancesResultsService } from './chances-results.service';
import { ChancesResult } from './chances-result.entity';
import { CreateChancesResultInput } from './create-chances-result.input';

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
