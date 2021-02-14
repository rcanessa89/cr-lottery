import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseGraphQlConfig, baseTypeOrmConfig } from '@cr-lottery/gql-base';
import { LoteriaLibModule } from '@cr-lottery/loteria-lib';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    LoteriaLibModule,
  ],
})
export class AppModule {}
