import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';

import { DrawBaseEntity } from '@cr-lottery/be-api-base';
import { LoteriaResult } from '../loteria-results/loteria-result.entity';

@ObjectType()
@Entity()
export class LoteriaDraw extends DrawBaseEntity {
  @OneToMany(() => LoteriaResult, loteriaResult => loteriaResult.draw, { cascade: true })
  @Field(() => [LoteriaResult], { nullable: true })
  results: LoteriaResult[];
}
