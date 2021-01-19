import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { LottoPrizesService } from './lotto-prizes.service';
import { LottoPrize } from './lotto-prize.entity';
import { CreateLottoPrizeInput } from './create-lotto-prize.input';

const BaseResolver = resolverFactory({
  Entity: LottoPrize,
  CreateInput: CreateLottoPrizeInput,
});

@Resolver()
export class LottoPrizesResolver extends BaseResolver {
  constructor(private readonly lottoPrizesService: LottoPrizesService) {
    super(lottoPrizesService);
  }
}
