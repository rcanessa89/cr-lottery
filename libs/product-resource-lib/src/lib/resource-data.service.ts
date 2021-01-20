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
    const { drawTable, relationTable, relation } = this.getEntityMetadata(
      product
    );
    const relationValues = this.getRelationValues(relation, values);
    const relationColumns = this.getColumns(relationValues);
    const drawValues = this.getDrawValues(relation, values);

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

  private getDrawValues(
    relation: string,
    values: ObjectLiteral[]
  ): ObjectLiteral[] {
    return values.map((v) => {
      const copy = { ...v };

      delete copy[relation];

      return copy;
    });
  }

  private getRelationValues(
    relation: string,
    values: ObjectLiteral[]
  ): ObjectLiteral[] {
    return relation
      ? values
          .map((v) => {
            const data: ObjectLiteral[] = v[relation];

            return [...data];
          })
          .flat()
      : [];
  }

  private getColumns(values: ObjectLiteral[]) {
    if (!values.length) {
      return [];
    }

    const columns = Object.keys(values[0]);

    if (columns.indexOf('draw') > -1) {
      columns.push('draw.id');
    }

    return columns;
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
