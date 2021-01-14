import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base';
import { ChancesDrawsService } from './chances-draws.service';
import { ChancesDraw } from './chances-draw.entity';
import { CreateChancesDrawInput } from './create-chances-draw.input';

const BaseResolver = resolverFactory({
  Entity: ChancesDraw,
  CreateInput: CreateChancesDrawInput
});

@Resolver(() => ChancesDraw)
export class ChancesDrawsResolver extends BaseResolver {
  constructor(private readonly chancesDrawsService: ChancesDrawsService) {
    super(chancesDrawsService);
  }
}
