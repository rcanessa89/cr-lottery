import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base';
import { TiemposDraw } from './tiempos-draw.entity';
import { CreateTiemposDrawInput } from './create-tiempos-draw.input';

@Injectable()
export class TiemposDrawsService extends BaseEntityService<
  TiemposDraw,
  CreateTiemposDrawInput
> {
  constructor(
    @InjectRepository(TiemposDraw)
    private readonly tiemposDrawRepository: Repository<TiemposDraw>
  ) {
    super(tiemposDrawRepository);
  }
}
