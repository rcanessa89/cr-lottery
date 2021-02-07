import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { ChancesResult } from '@cr-lottery/models/chances/chances-result.entity';
import { CreateChancesResultInput } from '@cr-lottery/models/chances/create-chances-result.input';

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
