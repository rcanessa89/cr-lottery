import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

import { DrawTime } from '@cr-lottery/types';
import { DrawBaseEntity } from '@cr-lottery/be-api-base/draw-base-entity';

registerEnumType(DrawTime, {
  name: 'DrawTime',
});

@ObjectType()
@Entity()
export class TiemposDraw extends DrawBaseEntity {
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
}
