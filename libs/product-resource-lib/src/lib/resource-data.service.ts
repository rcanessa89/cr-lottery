import { Injectable } from '@nestjs/common';
import { Connection, getConnection } from 'typeorm';

import { Product, ObjectLiteral } from '@cr-lottery/types';

@Injectable()
export class ResourceDataService {
  private connection: Connection;

  constructor() {
    this.connection = getConnection();
  }

  public async bulk(product: Product, values: ObjectLiteral[]) {
    const { relationTable } = this.getEntityMetadata(product);
    const drawTable = 'draw';
    const relationValues = this.getRelationValues(values);
    const relationColumns = this.getColumns(relationValues);
    const drawValues = this.getDrawValues(values);

    try {
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
        .into(relationTable, relationColumns)
        .values(relationValues)
        .execute();
    } catch (e) {
      return e;
    }
  }

  private getDrawValues(values: ObjectLiteral[]): ObjectLiteral[] {
    return values.map((v) => {
      const copy = { ...v };

      delete copy.results;

      return copy;
    });
  }

  private getRelationValues(values: ObjectLiteral[]): ObjectLiteral[] {
    return values
      .map((v) => {
        const data: ObjectLiteral[] = v.results;

        return [...data];
      })
      .filter((v) => !!v)
      .flat();
  }

  private getColumns(values: ObjectLiteral[]) {
    if (!values.length) {
      return [];
    }

    const columns = Object.keys(values[0]);
    const drawColumIndex = columns.indexOf('draw');

    if (drawColumIndex > -1) {
      columns[drawColumIndex] = 'draw.id';
    }

    return columns;
  }

  private getEntityMetadata(product: Product) {
    switch (product) {
      case Product.Chances: {
        return {
          relationTable: 'chances_result',
        };
      }

      case Product.Loteria: {
        return {
          relationTable: 'loteria_result',
        };
      }

      case Product.Lotto: {
        return {
          relationTable: 'lotto_result',
        };
      }

      case Product.Monazos: {
        return {
          relationTable: 'monazos_result',
        };
      }

      case Product.Tiempos: {
        return {
          relationTable: 'tiempos_result',
        };
      }
    }
  }
}
