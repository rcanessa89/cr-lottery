import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { MonazosDraw } from './monazos-draw.entity';
import { CreateMonazosDrawInput } from './create-monazos-draw.input';

@Injectable()
export class MonazosDrawsService extends BaseEntityService<
  MonazosDraw,
  CreateMonazosDrawInput
> {
  constructor(
    @InjectRepository(MonazosDraw)
    private readonly monazosDrawRepository: Repository<MonazosDraw>
  ) {
    super(monazosDrawRepository);
  }
}
