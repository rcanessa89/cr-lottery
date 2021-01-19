import { Injectable } from '@nestjs/common';
import { Connection, getConnection } from 'typeorm';

import { Product } from '@cr-lottery/types';

@Injectable()
export class ResourceDataService {
  private connection: Connection;

  constructor() {
    this.connection = getConnection();
  }

  public async bulk(product: Product, values) {
    const { drawTable, relationTable, relation } = this.getEntityMetadata(
      product
    );
    const relationValues = relation
      ? values.map((v) => [...v[relation]]).flat()
      : [];
    const drawValues = values.map((v) => {
      const copy = { ...v };

      delete copy[relation];

      return copy;
    });

    await this.connection
      .createQueryBuilder()
      .insert()
      .orIgnore()
      .into(drawTable, Object.keys(drawValues[0]))
      .values(drawValues)
      .execute();

    await this.connection
      .createQueryBuilder()
      .insert()
      .orIgnore()
      .into(relationTable, Object.keys(relationValues[0]))
      .values(relationValues)
      .execute();
  }

  private getEntityMetadata(product: Product) {
    switch (product) {
      case Product.CHANCES: {
        return {
          drawTable: 'chances_draw',
          relationTable: 'chances_result',
          relation: 'results',
        };
      }

      case Product.LOTERIA: {
        return {
          drawTable: 'loteria_draw',
          relationTable: 'loteria_result',
          relation: 'results',
        };
      }

      case Product.LOTTO: {
        return {
          drawTable: 'lotto_draw',
          relationTable: 'lotto_prize',
          relation: 'prizes',
        };
      }

      case Product.MONAZOS: {
        return {
          drawTable: 'monazos_draw',
        };
      }

      case Product.TIEMPOS: {
        return {
          drawTable: 'tiempos_draw',
        };
      }
    }
  }
}
