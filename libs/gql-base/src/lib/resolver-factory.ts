import { Resolver, Query, Mutation, Args, ID, Int } from '@nestjs/graphql';

import { pluralize } from '@cr-lottery/utils/pluralize';
import { ResolverFactoryArgs } from './interfaces';
import { RemoveResult } from './object-types';
import { TransformBodyPipe } from './transform-body.pipe';
import {
  getFindOneOptions,
  getFindAllOptions,
  getNames,
  lowerFirstLetter,
  UpdateInputFactory,
} from './utils';

export const resolverFactory = <T, CI, UI extends { id: number }>({
  Entity,
  CreateInput,
  UpdateInput,
}: // eslint-disable-next-line
ResolverFactoryArgs<T, CI, UI>): any => {
  const names = getNames(Entity);
  const FindOneOptions = getFindOneOptions(CreateInput);
  const FindAllOptions = getFindAllOptions(CreateInput, FindOneOptions);

  UpdateInput = UpdateInput || UpdateInputFactory(CreateInput, names.entity);

  @Resolver(() => Entity)
  class BaseResolver {
    protected readonly service;

    constructor(service) {
      this.service = service;
    }

    @Query(() => [Entity], { name: names.findAll })
    findAll(
      @Args(
        {
          name: FindAllOptions.name,
          type: () => FindAllOptions,
          nullable: true,
        },
        TransformBodyPipe
      )
      options?
    ): T[] {
      return this.service.findAll(options);
    }

    @Query(() => Entity, { name: names.findOne })
    findOne(
      @Args({ name: 'id', type: () => Int }) id: number,
      @Args(
        {
          name: FindOneOptions.name,
          type: () => FindOneOptions,
          nullable: true,
        },
        TransformBodyPipe
      )
      options
    ): T {
      return this.service.findOne(id, options);
    }

    @Query(() => Int, { name: names.count })
    count(): number {
      return this.service.count();
    }

    @Mutation(() => Entity, { name: names.create })
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

    @Mutation(() => Entity, { name: names.update })
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

    @Mutation(() => RemoveResult, { name: names.remove })
    remove(@Args('id', { type: () => ID }, TransformBodyPipe) id: number) {
      return this.service.remove(id);
    }
  }

  return BaseResolver;
};
