import { FindManyOptions, FindOneOptions, SaveOptions } from 'typeorm';

export interface ResolverFactoryOptions<T> {
  create?: SaveOptions;
  findAll?: FindManyOptions<T>;
  findOne?: FindOneOptions<T>;
}

export interface ResolverFactoryArgs<T, CI, UI> {
  Entity: { new (): T };
  CreateInput: { new (): CI };
  UpdateInput?: { new (): UI };
}

export interface ControllerSwaggerFactoryArgs<T, C, U> {
  Entity: { new (): T };
  CreateVM?: { new (): C };
  UpdateVM?: { new (): U };
  ApiException?: { new (): any }; // eslint-disable-line
}
