import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LottoDrawsService } from './lotto-draws.service';
import { LottoDrawsResolver } from './lotto-draws.resolver';
import { LottoDraw } from './lotto-draw.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ LottoDraw ])
  ],
  providers: [
    LottoDrawsResolver,
    LottoDrawsService
  ]
})
export class LottoDrawsModule {}
