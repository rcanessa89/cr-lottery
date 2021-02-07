import { Module } from '@nestjs/common';

import { LoteriaResultsModule } from './loteria-results/loteria-results.module';

@Module({ imports: [LoteriaResultsModule] })
export class LoteriaLibModule {}
