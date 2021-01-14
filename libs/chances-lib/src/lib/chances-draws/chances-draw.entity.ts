import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';

import { DrawBaseEntity } from '@cr-lottery/be-api-base';
import { ChancesResult } from '../chances-results/chances-result.entity';

@ObjectType()
@Entity()
export class ChancesDraw extends DrawBaseEntity {
  @OneToMany(() => ChancesResult, chancesResult => chancesResult.draw, { cascade: true })
  @Field(() => [ChancesResult], { nullable: true })
  results: ChancesResult[];
}