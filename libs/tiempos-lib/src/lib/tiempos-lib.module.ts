import { Module } from '@nestjs/common';

import { TiemposResutsModule } from './tiempos-results/tiempos-results.module';

@Module({ imports: [TiemposResutsModule] })
export class TiemposLibModule {}
