import { HttpService, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { Product } from '@cr-lottery/types';
import { JPS_API_URL_BASE, JPS_API_LAST_ROUTE } from './constants';

@Injectable()
export class ProductResourceHttpService {
  constructor(private readonly httpService: HttpService) {}

  public async request(product: Product, page = 0, length = 300) {
    const lastProductUrl = this.getRequestUrl(product, JPS_API_LAST_ROUTE);
    const lastProductRes = await this.httpService
      .get(lastProductUrl)
      .toPromise();
    const lastDrawNumber = this.getLastDrawNumber(lastProductRes.data);
    const drawsNumbers = this.getDrawsNumbers(lastDrawNumber, page, length);
    const productsDataPromises = drawsNumbers.map((dn) => {
      const requestUrl = this.getRequestUrl(product, dn);

      return this.httpService
        .get(requestUrl)
        .pipe(
          map((r) => r.data),
          catchError(() => of(false))
        )
        .toPromise();
    });

    return Promise.all(productsDataPromises);
  }

  private getDrawsNumbers(
    lastDrawNumber: number,
    page: number,
    length: number
  ): number[] {
    const start = lastDrawNumber - page * length;
    const end = start - length;
    const result = [];

    for (let index = start; index > end; index--) {
      result.push(index);
    }

    return result;
  }

  private getLastDrawNumber(productData): number {
    return (
      productData.numeroSorteo ||
      productData?.tarde?.numeroSorteo ||
      productData?.manana?.numeroSorteo
    );
  }

  private getRequestUrl(product: Product, sufix: string | number): string {
    return `${JPS_API_URL_BASE}/${product}/${sufix}`;
  }
}
