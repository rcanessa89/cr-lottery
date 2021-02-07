import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { TiemposResult } from '@cr-lottery/models/tiempos/tiempos-result.entity';
import { CreateTiemposResultInput } from '@cr-lottery/models/tiempos/create-tiempos-result.input';

@Injectable()
export class TiemposResultsService extends BaseEntityService<
  TiemposResult,
  CreateTiemposResultInput
> {
  constructor(
    @InjectRepository(TiemposResult)
    private readonly tiemposResultsRepository: Repository<TiemposResult>
  ) {
    super(tiemposResultsRepository);
  }
}
