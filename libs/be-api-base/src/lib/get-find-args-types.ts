import { Field, InputType, PartialType } from '@nestjs/graphql';

import { pluralize } from '@cr-lottery/utils/pluralize';
import { FindOrder } from './object-types';

export const getFindArgsTypes = (Entity) => {
  const name = Entity.name.replace('Create', '').replace('Input', '');

  @InputType(`${name}Where`)
  class WhereType extends PartialType(Entity) {}

  @InputType(`FindOne${name}Options`)
  class FindOneOptions {
    @Field(() => WhereType, { nullable: true })
    where?: WhereType;

    @Field(() => [String], { nullable: true })
    relations?: string[];

    @Field(() => FindOrder, { nullable: true })
    order?: FindOrder;
  }

  @InputType(`FindAll${pluralize(name)}Options`)
  class FindAllOptions extends FindOneOptions {
    @Field({ nullable: true })
    skip?: number;

    @Field({ nullable: true })
    take?: number;
  }

  return {
    FindOneOptions,
    FindAllOptions,
  };
};
