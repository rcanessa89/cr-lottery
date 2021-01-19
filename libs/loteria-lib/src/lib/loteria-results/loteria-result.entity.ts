import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, Index, ManyToOne } from 'typeorm';

import { BaseGQLEntity } from '@cr-lottery/be-api-base/base-gql-entity';
import { LoteriaDraw } from '../loteria-draws/loteria-draw.entity';

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

  @ManyToOne(() => LoteriaDraw, (loteriaDraw) => loteriaDraw.results, {
    onDelete: 'CASCADE',
  })
  @Field(() => [LoteriaDraw])
  draw;
}
