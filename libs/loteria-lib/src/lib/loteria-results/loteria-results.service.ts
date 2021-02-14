import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/gql-base';
import { LoteriaResult } from '@cr-lottery/models/loteria/loteria-result.entity';
import { CreateLoteriaResultInput } from '@cr-lottery/models/loteria/create-loteria-result.input';

@Injectable()
export class LoteriaResultsService extends BaseEntityService<
  LoteriaResult,
  CreateLoteriaResultInput
> {
  constructor(
    @InjectRepository(LoteriaResult)
    private readonly loteriaResultRepository: Repository<LoteriaResult>
  ) {
    super(loteriaResultRepository);
  }
}
