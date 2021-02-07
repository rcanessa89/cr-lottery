import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';

import { DrawTime } from '@cr-lottery/types';

registerEnumType(DrawTime, {
  name: 'DrawTime',
});

@InputType()
export class CreateMonazosResultInput {
  @Field(() => DrawTime)
  time: DrawTime;

  @Field(() => [Int])
  numbers: number[];

  @Field()
  draw: number;
}
