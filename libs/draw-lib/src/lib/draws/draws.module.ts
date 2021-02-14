import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getDBEntities } from '@cr-lottery/models/utils/get-db-entities';
import { DrawsService } from './draws.service';
import { DrawsResolver } from './draws.resolver';

@Module({
  imports: [TypeOrmModule.forFeature(getDBEntities())],
  providers: [DrawsResolver, DrawsService],
})
export class DrawsModule {}
