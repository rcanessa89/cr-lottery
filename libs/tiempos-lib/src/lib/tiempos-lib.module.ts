import { Module } from '@nestjs/common';

import { TiemposDrawsModule } from './tiempos-draws/tiempos-draws.module';

@Module({
  imports: [ TiemposDrawsModule ]
})
export class TiemposLibModule {}
