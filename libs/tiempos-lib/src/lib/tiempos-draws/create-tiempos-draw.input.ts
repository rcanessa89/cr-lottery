import { InputType, Field, registerEnumType } from '@nestjs/graphql';

import { DrawTime } from '@cr-lottery/types';
import { CreateDrawInputBase } from '@cr-lottery/be-api-base';

registerEnumType(DrawTime, {
  name: 'DrawTime'
});

@InputType()
export class CreateTiemposDrawInput extends CreateDrawInputBase {
  @Field(() => DrawTime)
  time: DrawTime;

  @Field()
  number: number;

  @Field()
  prize: number;
}
