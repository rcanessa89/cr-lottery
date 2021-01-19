import { InputType, Int, Field } from '@nestjs/graphql';

import { CreateDrawInputBase } from '@cr-lottery/be-api-base/create-draw-input-base';
import { CreateLottoPrizeInput } from '../lotto-prizes/create-lotto-prize.input';

@InputType()
export class CreateLottoDrawInput extends CreateDrawInputBase {
  @Field(() => [Int])
  numbers: number[];

  @Field(() => [Int])
  numbersRevenge: number[];

  @Field(() => CreateLottoPrizeInput)
  prizes: CreateLottoPrizeInput;
}
