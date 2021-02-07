import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/be-api-base/base-entity-service';
import { Draw } from '@cr-lottery/models/draw/draw.entity';
import { CreateDrawInput } from '@cr-lottery/models/draw/create-draw.input';
import { UpdateDrawInput } from '@cr-lottery/models/draw/update-draw-input';

@Injectable()
export class DrawsService extends BaseEntityService<
  Draw,
  CreateDrawInput,
  UpdateDrawInput
> {
  constructor(
    @InjectRepository(Draw)
    private readonly drawRepository: Repository<Draw>
  ) {
    super(drawRepository);
  }
}
