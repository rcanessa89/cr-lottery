import { Module } from '@nestjs/common';

import { MonazosDrawsModule } from './monazos-draws/monazos-draws.module';

@Module({
  imports: [ MonazosDrawsModule ]
})
export class MonazosLibModule {}
