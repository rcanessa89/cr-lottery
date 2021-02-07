import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, Index, ManyToOne } from 'typeorm';

import { Draw } from '../draw/draw.entity';
import { BaseGQLEntity } from '../utils/base-gql-entity';

@ObjectType()
@Entity()
@Index(['order', 'number', 'series', 'draw'], { unique: true })
export class LoteriaResult extends BaseGQLEntity {
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

  @ManyToOne(() => Draw, (draw) => draw.loteriaResults, {
    onDelete: 'CASCADE',
  })
  @Field(() => Draw)
  draw;
}
