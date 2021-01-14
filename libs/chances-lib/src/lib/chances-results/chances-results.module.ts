import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChancesResultsService } from './chances-results.service';
import { ChancesResultsResolver } from './chances-results.resolver';
import { ChancesResult } from './chances-result.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ ChancesResult ])
  ],
  providers: [
    ChancesResultsResolver,
    ChancesResultsService
  ]
})
export class ChancesResultsModule {}
