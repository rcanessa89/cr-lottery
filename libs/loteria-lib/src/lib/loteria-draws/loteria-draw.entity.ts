import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';

import { DrawBaseEntity } from '@cr-lottery/be-api-base/draw-base-entity';
import { LoteriaResult } from '../loteria-results/loteria-result.entity';

@ObjectType()
@Entity()
export class LoteriaDraw extends DrawBaseEntity {
  @OneToMany(() => LoteriaResult, (loteriaResult) => loteriaResult.draw)
  @Field(() => [LoteriaResult], { nullable: true })
  results: LoteriaResult[];
}
