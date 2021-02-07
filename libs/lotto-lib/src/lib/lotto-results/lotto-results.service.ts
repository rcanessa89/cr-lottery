import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { LottoResult } from '@cr-lottery/models/lotto/lotto-result.entity';
import { CreateLottoPrizeInput } from '@cr-lottery/models/lotto/create-lotto-result.input';

@Injectable()
export class LottoResultsService extends BaseEntityService<
  LottoResult,
  CreateLottoPrizeInput
> {
  constructor(
    @InjectRepository(LottoResult)
    private readonly lottoResultRepository: Repository<LottoResult>
  ) {
    super(lottoResultRepository);
  }
}
