import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/gql-base';
import { MonazosResult } from '@cr-lottery/models/monazos/monazos-result.entity';
import { CreateMonazosResultInput } from '@cr-lottery/models/monazos/create-monazos-result.input';
import { MonazosResultsService } from './monazos-results.service';

const BaseResolver = resolverFactory({
  Entity: MonazosResult,
  CreateInput: CreateMonazosResultInput,
});

@Resolver()
export class MonazosResultsResolver extends BaseResolver {
  constructor(private readonly monazosResultsService: MonazosResultsService) {
    super(monazosResultsService);
  }
}
