import { InputType, Field, registerEnumType } from '@nestjs/graphql';

import { DrawTime } from '@cr-lottery/types';

registerEnumType(DrawTime, {
  name: 'DrawTime',
});

@InputType()
export class CreateTiemposResultInput {
  @Field(() => DrawTime)
  time: DrawTime;

  @Field()
  number: number;

  @Field()
  prize: number;

  @Field()
  draw: number;
}
