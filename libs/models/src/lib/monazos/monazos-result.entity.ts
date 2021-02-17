import { ObjectType, Field, registerEnumType, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';

import { DrawTimeEnum } from '@cr-lottery/types';
import { Draw } from '../draw/draw.entity';
import { BaseGQLEntity } from '../utils/base-gql-entity';

registerEnumType(DrawTimeEnum, {
  name: 'DrawTime',
});

@ObjectType()
@Entity()
export class MonazosResult extends BaseGQLEntity {
  @Field(() => DrawTimeEnum)
  @Column({
    type: 'enum',
    enum: DrawTimeEnum,
    nullable: false,
  })
  time: DrawTimeEnum;

  @Field(() => [Int])
  @Column('simple-array')
  numbers: number[];

  @ManyToOne(() => Draw, (draw) => draw.monazosResults, {
    onDelete: 'CASCADE',
  })
  @Field(() => Draw)
  draw;
}
