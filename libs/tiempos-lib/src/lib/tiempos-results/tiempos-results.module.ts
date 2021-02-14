import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getDBEntities } from '@cr-lottery/models/utils/get-db-entities';
import { TiemposResultsService } from './tiempos-results.service';
import { TiemposResultsResolver } from './tiempos-results.resolver';

@Module({
  imports: [TypeOrmModule.forFeature(getDBEntities())],
  providers: [TiemposResultsResolver, TiemposResultsService],
})
export class TiemposResutsModule {}
