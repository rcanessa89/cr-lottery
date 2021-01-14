import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base';
import { ChancesDraw } from './chances-draw.entity';
import { CreateChancesDrawInput } from './create-chances-draw.input';

@Injectable()
export class ChancesDrawsService extends BaseEntityService<
  ChancesDraw,
  CreateChancesDrawInput
> {
  constructor(
    @InjectRepository(ChancesDraw)
    private readonly chancesDrawRepository: Repository<ChancesDraw>
  ) {
    super(chancesDrawRepository);
  }
}
