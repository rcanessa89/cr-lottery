import { Field, registerEnumType, ArgsType, ID, InputType } from '@nestjs/graphql';

export enum FindOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

registerEnumType(FindOrder, { name: 'FindOrder' });

@InputType()
export class FindOneOptions {
  @Field(() => String,{ nullable: true })
  where?;

  @Field(() => [String], { nullable: true })
  relations?: string[];

  @Field(() => FindOrder, { nullable: true })
  order?: FindOrder;
}

@InputType()
export class FindAllOptions extends FindOneOptions {
  @Field({ nullable: true })
  skip?: number;

  @Field({ nullable: true })
  take?: number;
}

@ArgsType()
export class FindOneArgs {
  @Field(() => ID)
  id: number;

  @Field(() => FindOneOptions, { nullable: true })
  options?: FindOneOptions
}

@ArgsType()
export class FindAllArgs {
  @Field(() => FindAllOptions, { nullable: true })
  options?: FindAllOptions
}
