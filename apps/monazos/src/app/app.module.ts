import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseGraphQlConfig } from '@cr-lottery/be-api-base/base-graph-ql-config';
import { baseTypeOrmConfig } from '@cr-lottery/be-api-base/base-type-orm-config';
import { MonazosLibModule } from '@cr-lottery/monazos-lib';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    MonazosLibModule,
  ],
})
export class AppModule {}
