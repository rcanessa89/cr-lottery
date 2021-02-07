import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateLottoPrizeInput {
  @Field(() => [Int])
  numbers: number[];

  @Field(() => [Int])
  numbersRevenge: number[];

  @Field()
  dosAciertos: number;

  @Field()
  tresAciertos: number;

  @Field()
  cuatroAciertos: number;

  @Field()
  cincoAciertos: number;

  @Field()
  acumulado: number;

  @Field()
  dosAciertosRevancha: number;

  @Field()
  tresAciertosRevancha: number;

  @Field()
  cuatroAciertosRevancha: number;

  @Field()
  cincoAciertosRevancha: number;

  @Field()
  acumuladoRevancha: number;

  @Field()
  draw: number;
}
