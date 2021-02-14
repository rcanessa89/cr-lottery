import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

import { pluralize } from '@cr-lottery/utils/pluralize';
import { FindOrder } from './object-types';

const formatName = (name) =>
  name.replace('Create', '').replace('Input', 'Options');

const getWhereType = (Entity) => {
  const entityName = formatName(Entity.name);
  const name = `${entityName}Where`;

  @InputType(name)
  class WhereType extends PartialType(Entity) {}

  return WhereType;
};

export const lowerFirstLetter = (s): string => {
  return s[0].toLowerCase() + s.slice(1);
};

export const getFindOneOptions = (Entity): any => {
  const entityName = formatName(Entity.name);
  const name = `FindOne${entityName}Options`;
  const WhereType = getWhereType(Entity);

  @InputType(name)
  class FindOneOptions {
    @Field(() => WhereType, { nullable: true })
    where?: typeof WhereType;

    @Field(() => [String], { nullable: true })
    relations?: string[];

    @Field(() => FindOrder, { nullable: true })
    order?: FindOrder;
  }

  return FindOneOptions;
};

export const getFindAllOptions = (Entity, FindOneOptions): any => {
  const entityName = formatName(Entity.name);
  const name = `FindAll${entityName}`;

  @InputType(name)
  class FindAllOptions extends FindOneOptions {
    @Field({ nullable: true })
    skip?: number;

    @Field({ nullable: true })
    take?: number;
  }

  return FindAllOptions;
};

export const getNames = (Entity) => {
  const entityName = Entity.name;
  const create = `create${entityName}`;
  const findAll = lowerFirstLetter(pluralize(entityName));
  const findOne = lowerFirstLetter(entityName);
  const count = `count${entityName}`;
  const update = `update${entityName}`;
  const remove = `remove${entityName}`;

  return {
    entity: entityName,
    create,
    findAll,
    findOne,
    count,
    update,
    remove,
  };
};

interface IUpdateInputFactory {
  id: number;
}

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
