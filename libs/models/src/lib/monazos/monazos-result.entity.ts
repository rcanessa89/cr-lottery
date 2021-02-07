import { ObjectType, Field, registerEnumType, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';

import { DrawTime } from '@cr-lottery/types';
import { Draw } from '../draw/draw.entity';
import { BaseGQLEntity } from '../utils/base-gql-entity';

registerEnumType(DrawTime, {
  name: 'DrawTime',
});

@ObjectType()
@Entity()
export class MonazosResult extends BaseGQLEntity {
  @Field(() => DrawTime)
  @Column({
    type: 'enum',
    enum: DrawTime,
    nullable: false,
  })
  time: DrawTime;

  @Field(() => [Int])
  @Column('simple-array')
  numbers: number[];

  @ManyToOne(() => Draw, (draw) => draw.monazosResults, {
    onDelete: 'CASCADE',
  })
  @Field(() => Draw)
  draw;
}
