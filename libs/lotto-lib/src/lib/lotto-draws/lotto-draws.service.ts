import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { LottoDraw } from './lotto-draw.entity';
import { CreateLottoDrawInput } from './create-lotto-draw.input';

@Injectable()
export class LottoDrawsService extends BaseEntityService<
  LottoDraw,
  CreateLottoDrawInput
> {
  constructor(
    @InjectRepository(LottoDraw)
    private readonly lottoDrawRepository: Repository<LottoDraw>
  ) {
    super(lottoDrawRepository);
  }
}
