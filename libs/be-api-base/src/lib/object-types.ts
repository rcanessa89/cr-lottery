import { Field, registerEnumType, ObjectType } from '@nestjs/graphql';

export enum FindOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

registerEnumType(FindOrder, { name: 'FindOrder' });

@ObjectType()
export class RemoveResult {
  @Field({
    nullable: true,
  })
  affected?: number;
}
