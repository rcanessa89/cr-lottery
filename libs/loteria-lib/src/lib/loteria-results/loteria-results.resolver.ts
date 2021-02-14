import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/gql-base';
import { LoteriaResult } from '@cr-lottery/models/loteria/loteria-result.entity';
import { CreateLoteriaResultInput } from '@cr-lottery/models/loteria/create-loteria-result.input';
import { LoteriaResultsService } from './loteria-results.service';

const BaseResolver = resolverFactory({
  Entity: LoteriaResult,
  CreateInput: CreateLoteriaResultInput,
});

@Resolver()
export class LoteriaResultsResolver extends BaseResolver {
  constructor(private readonly loteriaResultsService: LoteriaResultsService) {
    super(loteriaResultsService);
  }
}
