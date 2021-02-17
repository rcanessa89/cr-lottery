import { InputType, Field, registerEnumType } from '@nestjs/graphql';

import { DrawTimeEnum } from '@cr-lottery/types';

registerEnumType(DrawTimeEnum, {
  name: 'DrawTime',
});

@InputType()
export class CreateTiemposResultInput {
  @Field(() => DrawTimeEnum)
  time: DrawTimeEnum;

  @Field()
  number: number;

  @Field()
  prize: number;

  @Field()
  draw: number;
}
