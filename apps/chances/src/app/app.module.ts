import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseGraphQlConfig, baseTypeOrmConfig } from '@cr-lottery/gql-base';
import { ChancesLibModule } from '@cr-lottery/chances-lib';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    ChancesLibModule,
  ],
})
export class AppModule {}
