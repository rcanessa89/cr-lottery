import { FindManyOptions, FindOneOptions, SaveOptions } from 'typeorm';

export interface ResolverFactoryOptions<T> {
  create?: (o) => SaveOptions;
  findAll?: (o) => FindManyOptions<T>;
  findOne?: (o) => FindOneOptions<T>;
}

export interface ResolverFactoryArgs<T, CI, UI> {
  Entity: { new (): T };
  CreateInput: { new (): CI };
  UpdateInput?: { new (): UI };
}
