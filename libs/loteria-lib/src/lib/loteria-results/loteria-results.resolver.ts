import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { LoteriaResultsService } from './loteria-results.service';
import { LoteriaResult } from './loteria-result.entity';
import { CreateLoteriaResultInput } from './create-loteria-result.input';

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
