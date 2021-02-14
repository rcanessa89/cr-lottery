import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getDBEntities } from '@cr-lottery/models/utils/get-db-entities';
import { ChancesResultsService } from './chances-results.service';
import { ChancesResultsResolver } from './chances-results.resolver';

@Module({
  imports: [TypeOrmModule.forFeature(getDBEntities())],
  providers: [ChancesResultsResolver, ChancesResultsService],
})
export class ChancesResultsModule {}
