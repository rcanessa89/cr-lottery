import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateChancesResultInput {
  @Field()
  order: number;

  @Field()
  number: number;

  @Field()
  series: number;

  @Field()
  prize: number;
}
