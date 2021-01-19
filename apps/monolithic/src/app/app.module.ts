import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseGraphQlConfig } from '@cr-lottery/be-api-base/base-graph-ql-config';
import { baseTypeOrmConfig } from '@cr-lottery/be-api-base/base-type-orm-config';
import { ChancesLibModule } from '@cr-lottery/chances-lib';
import { LoteriaLibModule } from '@cr-lottery/loteria-lib';
import { MonazosLibModule } from '@cr-lottery/monazos-lib';
import { TiemposLibModule } from '@cr-lottery/tiempos-lib';
import { ProductResourceLibModule } from '@cr-lottery/product-resource-lib';

@Module({
  imports: [
    GraphQLModule.forRoot(baseGraphQlConfig()),
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    ChancesLibModule,
    LoteriaLibModule,
    MonazosLibModule,
    TiemposLibModule,
    ProductResourceLibModule,
  ],
})
export class AppModule {}
