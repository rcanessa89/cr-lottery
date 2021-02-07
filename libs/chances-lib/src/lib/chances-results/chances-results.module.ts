import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getDBEntities } from '@cr-lottery/be-api-base/base-type-orm-config';
import { ChancesResultsService } from './chances-results.service';
import { ChancesResultsResolver } from './chances-results.resolver';

@Module({
  imports: [TypeOrmModule.forFeature(getDBEntities())],
  providers: [ChancesResultsResolver, ChancesResultsService],
})
export class ChancesResultsModule {}
