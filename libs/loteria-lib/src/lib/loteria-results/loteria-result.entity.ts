import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseGQLEntity } from '@cr-lottery/be-api-base';
import { LoteriaDraw } from '../loteria-draws/loteria-draw.entity';

@ObjectType()
@Entity()
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

  @ManyToOne(() => LoteriaDraw, loteriaDraw => loteriaDraw.results)
  @Field(() => [LoteriaDraw])
  draw;
}
