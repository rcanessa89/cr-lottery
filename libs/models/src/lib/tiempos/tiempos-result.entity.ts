import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';

import { DrawTimeEnum } from '@cr-lottery/types';
import { Draw } from '../draw/draw.entity';
import { BaseGQLEntity } from '../utils/base-gql-entity';

registerEnumType(DrawTimeEnum, {
  name: 'DrawTime',
});

@ObjectType()
@Entity()
export class TiemposResult extends BaseGQLEntity {
  @Field(() => DrawTimeEnum)
  @Column({
    type: 'enum',
    enum: DrawTimeEnum,
  })
  time: DrawTimeEnum;

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
