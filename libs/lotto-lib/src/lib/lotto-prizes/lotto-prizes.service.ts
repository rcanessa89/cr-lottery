import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { LottoPrize } from './lotto-prize.entity';
import { CreateLottoPrizeInput } from './create-lotto-prize.input';

@Injectable()
export class LottoPrizesService extends BaseEntityService<
  LottoPrize,
  CreateLottoPrizeInput
> {
  constructor(
    @InjectRepository(LottoPrize)
    private readonly lottoPrizeRepository: Repository<LottoPrize>
  ) {
    super(lottoPrizeRepository);
  }
}
