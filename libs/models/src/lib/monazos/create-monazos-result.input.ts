import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';

import { DrawTimeEnum } from '@cr-lottery/types';

registerEnumType(DrawTimeEnum, {
  name: 'DrawTime',
});

@InputType()
export class CreateMonazosResultInput {
  @Field(() => DrawTimeEnum)
  time: DrawTimeEnum;

  @Field(() => [Int])
  numbers: number[];

  @Field()
  draw: number;
}
