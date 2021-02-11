import { Injectable } from '@nestjs/common';

import {
  LoteriaNacionalProduct,
  LoteriaChancesPrize,
  LottoProduct,
  TresMonazosProduct,
  DrawTime,
  NuevosTiemposProduct,
  Product,
  ProductBase,
} from '@cr-lottery/types';

@Injectable()
export class ProductDrawMapper {
  public mapByProduct(product: Product, data) {
    switch (product) {
      case Product.Chances: {
        return this.chances(data);
      }

      case Product.Loteria: {
        return this.loteria(data);
      }

      case Product.Lotto: {
        return this.lotto(data);
      }

      case Product.Monazos: {
        return this.tresmonazos(data);
      }

      case Product.Tiempos: {
        return this.tiempos(data);
      }
    }
  }

  public loteria(product: LoteriaNacionalProduct) {
    return {
      ...this.getDraw(product, Product.Loteria),
      results: product.premios.map((prize: LoteriaChancesPrize) => ({
        drawId: product.numeroSorteo,
        order: prize.orden,
        number: prize.numero,
        series: prize.serie,
        prize: prize.monto,
      })),
    };
  }

  public chances(product: LoteriaNacionalProduct) {
    return {
      ...this.getDraw(product, Product.Chances),
      results: product.premios.map((prize: LoteriaChancesPrize) => ({
        drawId: product.numeroSorteo,
        order: prize.orden,
        number: prize.numero,
        series: prize.serie,
        prize: prize.monto,
      })),
    };
  }

  public lotto(product: LottoProduct) {
    return {
      ...this.getDraw(product, Product.Lotto),
      results: [
        {
          numbers: product.numeros.join(),
          numbersRevenge: product.numerosRevancha.join(),
          drawId: product.numeroSorteo,
          dosAciertos: product.premiosLotto.dosAciertos,
          tresAciertos: product.premiosLotto.tresAciertos,
          cuatroAciertos: product.premiosLotto.cuatroAciertos,
          cincoAciertos: product.premiosLotto.cincoAciertos,
          acumulado: product.premiosLotto.acumulado,
          dosAciertosRevancha: product.premiosLotto.dosAciertosRevancha,
          tresAciertosRevancha: product.premiosLotto.tresAciertosRevancha,
          cuatroAciertosRevancha: product.premiosLotto.cuatroAciertosRevancha,
          cincoAciertosRevancha: product.premiosLotto.cincoAciertosRevancha,
          acumuladoRevancha: product.premiosLotto.acumuladoRevancha,
        },
      ],
    };
  }

  public tresmonazos(product: TresMonazosProduct) {
    const data = [];

    if (product.manana) {
      data.push({
        ...this.getDraw(product.manana, Product.Monazos),
        results: [
          {
            drawId: product.manana.numeroSorteo,
            time: DrawTime.Morning.toString(),
            numbers: product.manana.numeros.join(),
          },
        ],
      });
    }

    if (product.tarde) {
      data.push({
        ...this.getDraw(product.tarde, Product.Monazos),
        results: [
          {
            drawId: product.tarde.numeroSorteo,
            time: DrawTime.Afternoon.toString(),
            numbers: product.tarde.numeros.join(),
          },
        ],
      });
    }

    return data;
  }

  public tiempos(product: NuevosTiemposProduct) {
    const data = [];

    if (product.manana) {
      data.push({
        ...this.getDraw(product.manana, Product.Tiempos),
        results: [
          {
            drawId: product.manana.numeroSorteo,
            time: DrawTime.Morning.toString(),
            number: product.manana.numero,
            prize: product.manana.premio,
          },
        ],
      });
    }

    if (product.tarde) {
      data.push({
        ...this.getDraw(product.tarde, Product.Tiempos),
        results: [
          {
            drawId: product.tarde.numeroSorteo,
            time: DrawTime.Afternoon.toString(),
            number: product.tarde.numero,
            prize: product.tarde.premio,
          },
        ],
      });
    }

    return data;
  }

  private getDraw(product: ProductBase, productType: Product) {
    return {
      id: product.numeroSorteo,
      date: product.fecha,
      validity: product.vigencia,
      product: productType,
    };
  }
}
