import {
  Field,
  ID,
  InputType,
  registerEnumType,
  OmitType,
} from '@nestjs/graphql';

import { ProductEnum } from '@cr-lottery/types';
import { mapTypes } from '@cr-lottery/utils/map-types';
import { CreateChancesResultInput } from '../chances/create-chances-result.input';
import { CreateLoteriaResultInput } from '../loteria/create-loteria-result.input';
import { CreateLottoPrizeInput } from '../lotto/create-lotto-result.input';
import { CreateMonazosResultInput } from '../monazos/create-monazos-result.input';
import { CreateTiemposResultInput } from '../tiempos/create-tiempos-result.input';

registerEnumType(ProductEnum, { name: 'Product' });

const drawResults = {
  CreateChancesResultInput,
  CreateLoteriaResultInput,
  CreateLottoPrizeInput,
  CreateMonazosResultInput,
  CreateTiemposResultInput,
};

const inputMap = mapTypes<typeof drawResults>(
  (c) => ({
    Decorator: InputType,
    metadata: [c.name.replace('Result', '').replace('Prize', '')],
  }),
  // eslint-disable-next-line
  (c) => OmitType(c, ['draw'] as any),
  drawResults
);

@InputType()
export class CreateDrawInput {
  @Field(() => ID, { nullable: true })
  id: number;

  @Field()
  date: Date;

  @Field()
  validity: Date;

  @Field(() => ProductEnum)
  product: ProductEnum;

  @Field(() => [inputMap.CreateLoteriaResultInput], { nullable: true })
  loteriaResults: Omit<CreateLoteriaResultInput, 'draw'>[];

  @Field(() => [inputMap.CreateChancesResultInput], { nullable: true })
  chancesResults: Omit<CreateChancesResultInput, 'draw'>[];

  @Field(() => inputMap.CreateLottoPrizeInput, { nullable: true })
  lottoResults: Omit<CreateLottoPrizeInput, 'draw'>;

  @Field(() => [inputMap.CreateMonazosResultInput], { nullable: true })
  monazosResults: Omit<CreateMonazosResultInput, 'draw'>[];

  @Field(() => [inputMap.CreateTiemposResultInput], { nullable: true })
  tiemposResults: Omit<CreateTiemposResultInput, 'draw'>[];
}
