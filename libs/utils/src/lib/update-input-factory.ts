import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

// eslint-disable-next-line
export const UpdateInputFactory = (Input, entityName: string): any => {
  const updateInputName = `Update${entityName}Input`;

  @InputType(updateInputName)
  class UpdateInput extends PartialType(Input) {
    @Field(() => ID)
    id: number;
  }

  Object.defineProperty(UpdateInput, 'name', {
    value: updateInputName,
  });

  return UpdateInput;
};
