import { Field, ID, InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export abstract class CreateDrawInputBase {
  @Field(() => ID)
  id: number;

  @Field()
  date: Date;

  @Field()
  validity: Date;
}
