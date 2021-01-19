import { Module, HttpModule } from '@nestjs/common';

import { ProductDrawMapper } from './product-draw-mapper.service';
import { ProductResourceHttpService } from './product-resource-http.service';
import { ResourceDataService } from './resource-data.service';
import { ProductResourceController } from './product-resource.controller';

@Module({
  imports: [HttpModule],
  controllers: [ProductResourceController],
  providers: [
    ProductDrawMapper,
    ProductResourceHttpService,
    ResourceDataService,
  ],
})
export class ProductResourceLibModule {}
