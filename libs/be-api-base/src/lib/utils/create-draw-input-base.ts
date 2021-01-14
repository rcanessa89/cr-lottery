import { Field, InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true
})
export abstract class CreateDrawInputBase {
  @Field()
  drawNumber: number;

  @Field()
  date: Date;

  @Field()
  validity: Date;
}
