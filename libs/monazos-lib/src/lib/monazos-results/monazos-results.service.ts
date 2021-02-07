import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { MonazosResult } from '@cr-lottery/models/monazos/monazos-result.entity';
import { CreateMonazosResultInput } from '@cr-lottery/models/monazos/create-monazos-result.input';

@Injectable()
export class MonazosResultsService extends BaseEntityService<
  MonazosResult,
  CreateMonazosResultInput
> {
  constructor(
    @InjectRepository(MonazosResult)
    private readonly monazosResultsRepository: Repository<MonazosResult>
  ) {
    super(monazosResultsRepository);
  }
}
