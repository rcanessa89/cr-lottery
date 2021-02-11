import { NestFactory } from '@nestjs/core';
import { Controller, Get, Param } from '@nestjs/common';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { printSchema } from 'graphql';
import uniqBy from 'lodash.uniqby';

import { ProductDrawMapper } from './product-draw-mapper.service';
import { ProductResourceHttpService } from './product-resource-http.service';
import { ResourceDataService } from './resource-data.service';
import { ChancesResultsResolver } from '@cr-lottery/chances-lib';
import { LoteriaResultsResolver } from '@cr-lottery/loteria-lib';
import { TiemposLibModule } from '@cr-lottery/tiempos-lib';
import { LottoResultsResolver } from '@cr-lottery/lotto-lib';
import { MonazosResultsResolver } from '@cr-lottery/monazos-lib';
import { DrawsResolver } from '@cr-lottery/draw-lib';

@Controller()
export class ProductResourceController {
  constructor(
    private readonly productResourceHttpService: ProductResourceHttpService,
    private readonly productDrawMapper: ProductDrawMapper,
    private readonly resourceDataService: ResourceDataService
  ) {}

  @Get('gen-types')
  async generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);
    await app.init();

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create([
      ChancesResultsResolver,
      LoteriaResultsResolver,
      TiemposLibModule,
      LottoResultsResolver,
      MonazosResultsResolver,
      DrawsResolver,
    ]);

    return printSchema(schema);
  }

  @Get(['seed/:product/:page/:length', 'seed/:product/:page'])
  async seed(
    @Param('product') product,
    @Param('page') page = 0,
    @Param('length') length = 2
  ) {
    const lengthNumber = Number(length);
    const reqDataRes = await this.productResourceHttpService.request(
      product,
      page,
      lengthNumber
    );
    const data = reqDataRes.filter(
      (d) => d.tipoSorteoCode || d?.manana?.numeroSorteo
    );
    const mappedData = data.map((p) =>
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
