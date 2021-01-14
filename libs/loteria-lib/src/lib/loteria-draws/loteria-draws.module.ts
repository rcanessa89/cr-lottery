import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoteriaDrawsService } from './loteria-draws.service';
import { LoteriaDrawsResolver } from './loteria-draws.resolver';
import { LoteriaDraw } from './loteria-draw.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ LoteriaDraw ])
  ],
  providers: [
    LoteriaDrawsResolver,
    LoteriaDrawsService
  ]
})
export class LoteriaDrawsModule {}
