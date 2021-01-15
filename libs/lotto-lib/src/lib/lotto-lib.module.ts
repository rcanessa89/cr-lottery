import { Module } from '@nestjs/common';

import { LottoDrawsModule } from './lotto-draws/lotto-draws.module';
import { LottoPrizesModule } from './lotto-prizes/lotto-prizes.module';

@Module({
  imports: [
    LottoDrawsModule,
    LottoPrizesModule
  ]
})
export class LottoLibModule {}
