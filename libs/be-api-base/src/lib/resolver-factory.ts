import { PipeTransform, Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, ID, Int } from '@nestjs/graphql';

import { pluralize } from '@cr-lottery/utils/pluralize';
import { UpdateInputFactory } from '@cr-lottery/utils/update-input-factory';
import { ResolverFactoryArgs } from './interfaces';
import { RemoveResult } from './object-types';
import { getFindArgsTypes } from './get-find-args-types';

@Injectable()
class TransformBodyPipe implements PipeTransform {
  transform(value) {
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (e) {
      return value;
    }
  }
}

export const resolverFactory = <T, CI, UI extends { id: number }>({
  Entity,
  CreateInput,
  UpdateInput,
}: // eslint-disable-next-line
ResolverFactoryArgs<T, CI, UI>): any => {
  const lowerFirstLetter = (s): string => {
    return s[0].toLowerCase() + s.slice(1);
  };
  const entityName = Entity.name;
  const createName = `create${entityName}`;
  const findAllName = lowerFirstLetter(pluralize(entityName));
  const findOneName = lowerFirstLetter(entityName);
  const countName = `count${entityName}`;
  const updateName = `update${entityName}`;
  const removeName = `remove${entityName}`;
  const { FindOneOptions, FindAllOptions } = getFindArgsTypes(CreateInput);

  UpdateInput = UpdateInput || UpdateInputFactory(CreateInput, entityName);

  @Resolver(() => Entity)
  class BaseResolver {
    protected readonly service;

    constructor(service) {
      this.service = service;
    }

    @Query(() => [Entity], { name: findAllName })
    findAll(
      @Args(
        {
          name: `FindAll${pluralize(entityName)}Options`,
          type: () => FindAllOptions,
          nullable: true,
        },
        TransformBodyPipe
      )
      options?
    ): T[] {
      return this.service.findAll(options);
    }

    @Query(() => Entity, { name: findOneName })
    findOne(
      @Args({ name: 'id', type: () => Int }) id: number,
      @Args(
        {
          name: `FindOne${entityName}Options`,
          type: () => FindOneOptions,
          nullable: true,
        },
        TransformBodyPipe
      )
      options
    ): T {
      return this.service.findOne(id, options);
    }

    @Query(() => Int, { name: countName })
    count(): number {
      return this.service.count();
    }

    @Mutation(() => Entity, { name: createName })
    create(
      @Args(
        lowerFirstLetter(CreateInput.name),
        { type: () => CreateInput },
        TransformBodyPipe
      )
      createInput: CI
    ): T {
      return this.service.create(createInput);
    }

    @Mutation(() => Entity, { name: updateName })
    update(
      @Args(
        lowerFirstLetter(UpdateInput.name),
        { type: () => UpdateInput },
        TransformBodyPipe
      )
      updateInput: UI
    ) {
      return this.service.update(updateInput);
    }

    @Mutation(() => RemoveResult, { name: removeName })
    remove(@Args('id', { type: () => ID }, TransformBodyPipe) id: number) {
      return this.service.remove(id);
    }
  }

  return BaseResolver;
};
