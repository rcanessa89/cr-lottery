import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChancesDrawsService } from './chances-draws.service';
import { ChancesDrawsResolver } from './chances-draws.resolver';
import { ChancesDraw } from './chances-draw.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ ChancesDraw ])
  ],
  providers: [
    ChancesDrawsResolver,
    ChancesDrawsService
  ]
})
export class ChancesDrawsModule {}
