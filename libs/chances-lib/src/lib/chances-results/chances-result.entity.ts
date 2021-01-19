import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, Index } from 'typeorm';

import { BaseGQLEntity } from '@cr-lottery/be-api-base/base-gql-entity';
import { ChancesDraw } from '../chances-draws/chances-draw.entity';

@ObjectType()
@Entity()
@Index(['order', 'number', 'series', 'draw'], { unique: true })
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

  @ManyToOne(() => ChancesDraw, (chancesDraw) => chancesDraw.results, {
    onDelete: 'CASCADE',
  })
  @Field(() => [ChancesDraw])
  draw;
}
