import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getDBEntities } from '@cr-lottery/be-api-base/base-type-orm-config';
import { LoteriaResultsService } from './loteria-results.service';
import { LoteriaResultsResolver } from './loteria-results.resolver';

@Module({
  imports: [TypeOrmModule.forFeature(getDBEntities())],
  providers: [LoteriaResultsResolver, LoteriaResultsService],
})
export class LoteriaResultsModule {}
