import { Module } from '@nestjs/common';

import { ChancesDrawsModule } from './chances-draws/chances-draws.module';
import { ChancesResultsModule } from './chances-results/chances-results.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [ChancesDrawsModule, ChancesResultsModule],
})
export class ChancesLibModule {}
