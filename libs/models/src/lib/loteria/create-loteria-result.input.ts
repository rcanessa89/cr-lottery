import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoteriaResultInput {
  @Field()
  order: number;

  @Field()
  number: number;

  @Field()
  series: number;

  @Field()
  prize: number;

  @Field()
  draw: number;
}
