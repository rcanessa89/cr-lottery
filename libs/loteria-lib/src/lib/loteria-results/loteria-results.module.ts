import { Module } from '@nestjs/common';
import { LoteriaResultsService } from './loteria-results.service';
import { LoteriaResultsResolver } from './loteria-results.resolver';

@Module({
  providers: [LoteriaResultsResolver, LoteriaResultsService]
})
export class LoteriaResultsModule {}
