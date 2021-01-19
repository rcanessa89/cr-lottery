import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, OneToOne } from 'typeorm';

import { DrawBaseEntity } from '@cr-lottery/be-api-base/draw-base-entity';
import { LottoPrize } from '../lotto-prizes/lotto-prize.entity';

@ObjectType()
@Entity()
export class LottoDraw extends DrawBaseEntity {
  @Field(() => [Int])
  @Column('simple-array')
  numbers: number[];

  @Field(() => [Int])
  @Column('simple-array')
  numbersRevenge: number[];

  @Field(() => LottoPrize)
  @OneToOne(() => LottoPrize, (lottoPrize) => lottoPrize.draw)
  prizes: LottoPrize;
}
