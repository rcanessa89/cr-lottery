import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MonazosDrawsService } from './monazos-draws.service';
import { MonazosDrawsResolver } from './monazos-draws.resolver';
import { MonazosDraw } from './monazos-draw.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ MonazosDraw ])
  ],
  providers: [
    MonazosDrawsResolver,
    MonazosDrawsService
  ]
})
export class MonazosDrawsModule {}
