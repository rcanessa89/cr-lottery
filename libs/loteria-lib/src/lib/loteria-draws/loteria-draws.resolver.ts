import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { LoteriaDrawsService } from './loteria-draws.service';
import { LoteriaDraw } from './loteria-draw.entity';
import { CreateLoteriaDrawInput } from './create-loteria-draw.input';

const BaseResolver = resolverFactory({
  Entity: LoteriaDraw,
  CreateInput: CreateLoteriaDrawInput,
});

@Resolver()
export class LoteriaDrawsResolver extends BaseResolver {
  constructor(private readonly loteriaDrawsService: LoteriaDrawsService) {
    super(loteriaDrawsService);
  }
}
