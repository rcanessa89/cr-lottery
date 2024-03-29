import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getDBEntities } from '@cr-lottery/models/utils/get-db-entities';
import { MonazosResultsResolver } from './monazos-results.resolver';
import { MonazosResultsService } from './monazos-results.service';

@Module({
  imports: [TypeOrmModule.forFeature(getDBEntities())],
  providers: [MonazosResultsResolver, MonazosResultsService],
})
export class MonazosResultsModule {}
