import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseGraphQlConfig, baseTypeOrmConfig } from '@cr-lottery/gql-base';
import { TiemposLibModule } from '@cr-lottery/tiempos-lib';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    TiemposLibModule,
  ],
})
export class AppModule {}
