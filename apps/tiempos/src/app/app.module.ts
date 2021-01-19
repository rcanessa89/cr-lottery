import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseGraphQlConfig } from '@cr-lottery/be-api-base/base-graph-ql-config';
import { baseTypeOrmConfig } from '@cr-lottery/be-api-base/base-type-orm-config';
import { TiemposLibModule } from '@cr-lottery/tiempos-lib';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    TiemposLibModule,
  ],
})
export class AppModule {}
