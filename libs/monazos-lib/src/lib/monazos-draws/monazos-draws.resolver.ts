import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base';
import { MonazosDrawsService } from './monazos-draws.service';
import { MonazosDraw } from './monazos-draw.entity';
import { CreateMonazosDrawInput } from './create-monazos-draw.input';

const BaseResolver = resolverFactory({
  Entity: MonazosDraw,
  CreateInput: CreateMonazosDrawInput
});

@Resolver()
export class MonazosDrawsResolver extends BaseResolver {
  constructor(private readonly monazosDrawsService: MonazosDrawsService) {
    super(monazosDrawsService);
  }
}
