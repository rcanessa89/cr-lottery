import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';

import { DrawTime } from '@cr-lottery/types';
import { CreateDrawInputBase } from '@cr-lottery/be-api-base';

registerEnumType(DrawTime, {
  name: 'DrawTime'
});

@InputType()
export class CreateMonazosDrawInput extends CreateDrawInputBase {
  @Field(() => DrawTime)
  time: DrawTime;

  @Field(() => [Int])
  numbers: number;
}
