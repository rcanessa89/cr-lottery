import { Module } from '@nestjs/common';

import { MonazosResultsModule } from './monazos-results/monazos-results.module';

@Module({ imports: [MonazosResultsModule] })
export class MonazosLibModule {}
