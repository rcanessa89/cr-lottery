import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChancesLibModule } from '@cr-lottery/chances-lib';
import { baseGraphQlConfig, baseTypeOrmConfig } from '@cr-lottery/be-api-base';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    ChancesLibModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
