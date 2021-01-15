import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoteriaResultsService } from './loteria-results.service';
import { LoteriaResultsResolver } from './loteria-results.resolver';
import { LoteriaResult } from './loteria-result.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ LoteriaResult ])
  ],
  providers: [
    LoteriaResultsResolver,
    LoteriaResultsService
  ]
})
export class LoteriaResultsModule {}
