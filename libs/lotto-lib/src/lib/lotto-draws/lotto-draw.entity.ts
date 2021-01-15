import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

import { DrawBaseEntity } from '@cr-lottery/be-api-base';
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
  @OneToOne(() => LottoPrize, prizes => prizes.draw, {
    cascade: true
  })
  @JoinColumn()
  prizes: LottoPrize;
}
