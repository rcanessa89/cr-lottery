import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { LottoDrawsService } from './lotto-draws.service';
import { LottoDraw } from './lotto-draw.entity';
import { CreateLottoDrawInput } from './create-lotto-draw.input';

const BaseResolver = resolverFactory({
  Entity: LottoDraw,
  CreateInput: CreateLottoDrawInput,
});

@Resolver()
export class LottoDrawsResolver extends BaseResolver {
  constructor(private readonly lottoDrawsService: LottoDrawsService) {
    super(lottoDrawsService);
  }
}
