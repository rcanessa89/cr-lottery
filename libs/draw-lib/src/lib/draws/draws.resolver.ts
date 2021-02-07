import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { DrawsService } from './draws.service';
import { Draw } from '@cr-lottery/models/draw/draw.entity';
import { CreateDrawInput } from '@cr-lottery/models/draw/create-draw.input';
import { UpdateDrawInput } from '@cr-lottery/models/draw/update-draw-input';

const BaseResolver = resolverFactory({
  Entity: Draw,
  CreateInput: CreateDrawInput,
  UpdateInput: UpdateDrawInput,
});

@Resolver()
export class DrawsResolver extends BaseResolver {
  constructor(private readonly drawsService: DrawsService) {
    super(drawsService);
  }
}
