import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseTypeOrmConfig } from '@cr-lottery/be-api-base/base-type-orm-config';
import { ProductResourceLibModule } from '@cr-lottery/product-resource-lib';

@Module({
  imports: [
    TypeOrmModule.forRoot(baseTypeOrmConfig()),
    ProductResourceLibModule,
  ],
})
export class AppModule {}
