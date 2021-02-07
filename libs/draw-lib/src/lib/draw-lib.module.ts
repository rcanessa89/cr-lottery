import { Module } from '@nestjs/common';

import { DrawsModule } from './draws/draws.module';

@Module({ imports: [DrawsModule] })
export class DrawLibModule {}
