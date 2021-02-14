import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';

import { BaseEntityService } from '@cr-lottery/gql-base';
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

  drawsMonth(month?: Date) {
    let date = null;

    if (month) {
      date = new Date(month);
    } else {
      date = new Date();
    }

    const firstDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).toISOString();
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).toISOString();

    return this.drawRepository.find({
      where: {
        date: Between(firstDay, lastDay),
      },
    });
  }
}
