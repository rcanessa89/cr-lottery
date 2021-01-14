import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseGQLEntity } from '@cr-lottery/be-api-base';
import { ChancesDraw } from '../chances-draws/chances-draw.entity';

@ObjectType()
@Entity()
export class ChancesResult extends BaseGQLEntity {
  @Field()
  @Column()
  order: number;

  @Field()
  @Column()
  number: number;

  @Field()
  @Column()
  series: number;

  @Field()
  @Column()
  prize: number;

  @ManyToOne(() => ChancesDraw, chancesDraw => chancesDraw.results)
  @Field(() => [ChancesDraw])
  draw;
}
