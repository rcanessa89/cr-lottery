import { InputType, Field } from '@nestjs/graphql';

import { CreateDrawInputBase } from '@cr-lottery/be-api-base';
import { CreateChancesResultInput } from '../chances-results/create-chances-result.input';

@InputType()
export class CreateChancesDrawInput extends CreateDrawInputBase {
  @Field(() => [CreateChancesResultInput])
  results: CreateChancesResultInput[];
}
