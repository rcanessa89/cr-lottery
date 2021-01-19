import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { TiemposDrawsService } from './tiempos-draws.service';
import { TiemposDraw } from './tiempos-draw.entity';
import { CreateTiemposDrawInput } from './create-tiempos-draw.input';

const BaseResolver = resolverFactory({
  Entity: TiemposDraw,
  CreateInput: CreateTiemposDrawInput,
});

@Resolver()
export class TiemposDrawsResolver extends BaseResolver {
  constructor(private readonly tiemposDrawsService: TiemposDrawsService) {
    super(tiemposDrawsService);
  }
}
