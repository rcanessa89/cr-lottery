import { InputType, Field } from '@nestjs/graphql';

import { CreateDrawInputBase } from '@cr-lottery/be-api-base';
import { CreateLoteriaResultInput } from '../loteria-results/create-loteria-result.input';

@InputType()
export class CreateLoteriaDrawInput extends CreateDrawInputBase {
  @Field(() => [CreateLoteriaResultInput])
  results: CreateLoteriaResultInput[];
}
