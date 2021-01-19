import { ObjectType, Field, registerEnumType, Int } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

import { DrawTime } from '@cr-lottery/types';
import { DrawBaseEntity } from '@cr-lottery/be-api-base/draw-base-entity';

registerEnumType(DrawTime, {
  name: 'DrawTime',
});

@ObjectType()
@Entity()
export class MonazosDraw extends DrawBaseEntity {
  @Field(() => DrawTime)
  @Column({
    type: 'enum',
    enum: DrawTime,
    nullable: false,
  })
  time: DrawTime;

  @Field(() => [Int])
  @Column('simple-array')
  numbers: number;
}
