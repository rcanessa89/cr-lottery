import { Controller, Get, Param } from '@nestjs/common';
import uniqBy from 'lodash.uniqby';

import { ProductDrawMapper } from './product-draw-mapper.service';
import { ProductResourceHttpService } from './product-resource-http.service';
import { ResourceDataService } from './resource-data.service';

@Controller()
export class ProductResourceController {
  constructor(
    private readonly productResourceHttpService: ProductResourceHttpService,
    private readonly productDrawMapper: ProductDrawMapper,
    private readonly resourceDataService: ResourceDataService
  ) {}

  @Get('seed/:product/:page')
  async seed(@Param('product') product, @Param('page') page = 0) {
    const data = await this.productResourceHttpService.request(product, page);
    const mappedData: any = data.map((p) =>
      this.productDrawMapper.mapByProduct(product, p)
    );
    const bulkData = uniqBy(
      mappedData.flat().filter((s) => s && s.id),
      'id'
    );

    await this.resourceDataService.bulk(product, bulkData);

    return { saved: bulkData };
  }
}
