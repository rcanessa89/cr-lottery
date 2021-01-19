import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { BaseGQLEntity } from '@cr-lottery/be-api-base/base-gql-entity';
import { LottoDraw } from '../lotto-draws/lotto-draw.entity';

@ObjectType()
@Entity()
export class LottoPrize extends BaseGQLEntity {
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

  @Field(() => LottoDraw)
  @OneToOne(() => LottoDraw, (lottoDraw) => lottoDraw.prizes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  draw;
}
