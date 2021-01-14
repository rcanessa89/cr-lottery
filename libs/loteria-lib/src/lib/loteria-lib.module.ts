import { Module } from '@nestjs/common';
import { LoteriaDrawsModule } from './loteria-draws/loteria-draws.module';
import { LoteriaResultsModule } from './loteria-results/loteria-results.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [LoteriaDrawsModule, LoteriaResultsModule],
})
export class LoteriaLibModule {}
