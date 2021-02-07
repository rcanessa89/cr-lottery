import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, Index } from 'typeorm';

import { BaseGQLEntity } from '../utils/base-gql-entity';
import { Draw } from '../draw/draw.entity';

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

  @ManyToOne(() => Draw, (draw) => draw.chancesResults, { onDelete: 'CASCADE' })
  @Field(() => Draw)
  draw;
}
