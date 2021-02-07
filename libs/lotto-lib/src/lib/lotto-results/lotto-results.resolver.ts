import { Resolver } from '@nestjs/graphql';

import { resolverFactory } from '@cr-lottery/be-api-base/resolver-factory';
import { LottoResult } from '@cr-lottery/models/lotto/lotto-result.entity';
import { CreateLottoPrizeInput } from '@cr-lottery/models/lotto/create-lotto-result.input';
import { LottoResultsService } from './lotto-results.service';

const BaseResolver = resolverFactory({
  Entity: LottoResult,
  CreateInput: CreateLottoPrizeInput,
});

@Resolver()
export class LottoResultsResolver extends BaseResolver {
  constructor(private readonly lottoResultsService: LottoResultsService) {
    super(lottoResultsService);
  }
}
