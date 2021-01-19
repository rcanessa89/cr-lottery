import { Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { BaseGQLEntity } from './base-gql-entity';

@ObjectType({
  isAbstract: true,
})
export abstract class DrawBaseEntity extends BaseGQLEntity {
  @Field()
  @Column({ type: 'datetime' })
  date: Date;

  @Field()
  @Column({ type: 'datetime' })
  validity: Date;
}
