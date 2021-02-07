import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';

import { DrawTime } from '@cr-lottery/types';
import { Draw } from '../draw/draw.entity';
import { BaseGQLEntity } from '../utils/base-gql-entity';

registerEnumType(DrawTime, {
  name: 'DrawTime',
});

@ObjectType()
@Entity()
export class TiemposResult extends BaseGQLEntity {
  @Field(() => DrawTime)
  @Column({
    type: 'enum',
    enum: DrawTime,
  })
  time: DrawTime;

  @Field()
  @Column()
  number: number;

  @Field()
  @Column()
  prize: number;

  @ManyToOne(() => Draw, (draw) => draw.tiemposResults, {
    onDelete: 'CASCADE',
  })
  @Field(() => Draw)
  draw;
}
