import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TiemposDrawsService } from './tiempos-draws.service';
import { TiemposDrawsResolver } from './tiempos-draws.resolver';
import { TiemposDraw } from './tiempos-draw.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ TiemposDraw ])
  ],
  providers: [
    TiemposDrawsResolver,
    TiemposDrawsService
  ]
})
export class TiemposDrawsModule {}
