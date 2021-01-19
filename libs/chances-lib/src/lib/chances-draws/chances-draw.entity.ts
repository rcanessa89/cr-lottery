import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';

import { DrawBaseEntity } from '@cr-lottery/be-api-base/draw-base-entity';
import { ChancesResult } from '../chances-results/chances-result.entity';

@ObjectType()
@Entity()
export class ChancesDraw extends DrawBaseEntity {
  @OneToMany(() => ChancesResult, (chancesResult) => chancesResult.draw)
  @Field(() => [ChancesResult], { nullable: true })
  results: ChancesResult[];
}
