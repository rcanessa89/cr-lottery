import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseGraphQlConfig, baseTypeOrmConfig } from '@cr-lottery/gql-base';
import { DrawLibModule } from '@cr-lottery/draw-lib';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    DrawLibModule,
  ],
})
export class AppModule {}
