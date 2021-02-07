import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getDBEntities } from '@cr-lottery/be-api-base/base-type-orm-config';
import { LottoResultsResolver } from './lotto-results.resolver';
import { LottoResultsService } from './lotto-results.service';

@Module({
  imports: [TypeOrmModule.forFeature(getDBEntities())],
  providers: [LottoResultsResolver, LottoResultsService],
})
export class LottoResultsModule {}
