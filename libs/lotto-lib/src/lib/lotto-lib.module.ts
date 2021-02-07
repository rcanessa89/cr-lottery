import { Module } from '@nestjs/common';

import { LottoResultsModule } from './lotto-results/lotto-results.module';

@Module({ imports: [LottoResultsModule] })
export class LottoLibModule {}
