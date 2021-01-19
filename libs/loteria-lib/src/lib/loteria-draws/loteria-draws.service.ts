import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { LoteriaDraw } from './loteria-draw.entity';
import { CreateLoteriaDrawInput } from './create-loteria-draw.input';

@Injectable()
export class LoteriaDrawsService extends BaseEntityService<
  LoteriaDraw,
  CreateLoteriaDrawInput
> {
  constructor(
    @InjectRepository(LoteriaDraw)
    private readonly loteriaDrawRepository: Repository<LoteriaDraw>
  ) {
    super(loteriaDrawRepository);
  }
}
