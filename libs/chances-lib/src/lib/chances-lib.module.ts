import { Module } from '@nestjs/common';

import { ChancesResultsModule } from './chances-results/chances-results.module';

@Module({ imports: [ChancesResultsModule] })
export class ChancesLibModule {}
