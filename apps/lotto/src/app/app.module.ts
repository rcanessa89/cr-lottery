import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseGraphQlConfig, baseTypeOrmConfig } from '@cr-lottery/gql-base';
import { LottoLibModule } from '@cr-lottery/lotto-lib';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    LottoLibModule,
  ],
})
export class AppModule {}
