import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base';
import { ChancesResult } from './chances-result.entity';
import { CreateChancesResultInput } from './create-chances-result.input';

@Injectable()
export class ChancesResultsService extends BaseEntityService<
  ChancesResult,
  CreateChancesResultInput
> {
  constructor(
    @InjectRepository(ChancesResult)
    private readonly chancesResultRepository: Repository<ChancesResult>
  ) {
    super(chancesResultRepository);
  }
}
