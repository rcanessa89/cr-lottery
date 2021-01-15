import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LottoPrizesService } from './lotto-prizes.service';
import { LottoPrizesResolver } from './lotto-prizes.resolver';
import { LottoPrize } from './lotto-prize.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ LottoPrize ])
  ],
  providers: [
    LottoPrizesResolver,
    LottoPrizesService
  ]
})
export class LottoPrizesModule {}
