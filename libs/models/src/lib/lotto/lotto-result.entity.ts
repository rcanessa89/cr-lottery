import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';

import { Draw } from '../draw/draw.entity';
import { BaseGQLEntity } from '../utils/base-gql-entity';

@ObjectType()
@Entity()
@Index(
  [
    'dosAciertos',
    'tresAciertos',
    'cuatroAciertos',
    'cincoAciertos',
    'acumulado',
    'dosAciertosRevancha',
    'tresAciertosRevancha',
    'cuatroAciertosRevancha',
    'cincoAciertosRevancha',
    'acumuladoRevancha',
  ],
  { unique: true }
)
export class LottoResult extends BaseGQLEntity {
  @Field(() => [Int])
  @Column('simple-array')
  numbers: number[];

  @Field(() => [Int])
  @Column('simple-array')
  numbersRevenge: number[];

  @Field()
  @Column()
  dosAciertos: number;

  @Field()
  @Column()
  tresAciertos: number;

  @Field()
  @Column()
  cuatroAciertos: number;

  @Field()
  @Column()
  cincoAciertos: number;

  @Field()
  @Column()
  acumulado: number;

  @Field()
  @Column()
  dosAciertosRevancha: number;

  @Field()
  @Column()
  tresAciertosRevancha: number;

  @Field()
  @Column()
  cuatroAciertosRevancha: number;

  @Field()
  @Column()
  cincoAciertosRevancha: number;

  @Field()
  @Column()
  acumuladoRevancha: number;

  @Field(() => Draw)
  @OneToOne(() => Draw, (draw) => draw.lottoResults, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  draw;
}
