import { Field, ID, InputType, OmitType } from '@nestjs/graphql';

import { CreateDrawInput } from './create-draw.input';

const propertiesToOmit: Readonly<Array<keyof CreateDrawInput>> = [
  'id',
  'loteriaResults',
  'chancesResults',
  'lottoResults',
  'monazosResults',
  'tiemposResults',
];

@InputType()
export class UpdateDrawInput extends OmitType(
  CreateDrawInput,
  propertiesToOmit
) {
  @Field(() => ID)
  id: number;
}
