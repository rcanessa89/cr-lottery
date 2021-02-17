import { Injectable } from '@nestjs/common';

import {
  LoteriaNacionalProduct,
  LoteriaChancesPrize,
  LottoProduct,
  TresMonazosProduct,
  DrawTimeEnum,
  NuevosTiemposProduct,
  ProductEnum,
  ProductBase,
} from '@cr-lottery/types';

@Injectable()
export class ProductDrawMapper {
  public mapByProduct(product: ProductEnum, data) {
    switch (product) {
      case ProductEnum.CHANCES: {
        return this.chances(data);
      }

      case ProductEnum.LOTERIA: {
        return this.loteria(data);
      }

      case ProductEnum.LOTTO: {
        return this.lotto(data);
      }

      case ProductEnum.MONAZOS: {
        return this.tresmonazos(data);
      }

      case ProductEnum.TIEMPOS: {
        return this.tiempos(data);
      }
    }
  }

  public loteria(product: LoteriaNacionalProduct) {
    return {
      ...this.getDraw(product, ProductEnum.LOTERIA),
      results: product.premios.map((prize: LoteriaChancesPrize) => ({
        draw: product.numeroSorteo,
        order: prize.orden,
        number: prize.numero,
        series: prize.serie,
        prize: prize.monto,
      })),
    };
  }

  public chances(product: LoteriaNacionalProduct) {
    return {
      ...this.getDraw(product, ProductEnum.CHANCES),
      results: product.premios.map((prize: LoteriaChancesPrize) => ({
        draw: product.numeroSorteo,
        order: prize.orden,
        number: prize.numero,
        series: prize.serie,
        prize: prize.monto,
      })),
    };
  }

  public lotto(product: LottoProduct) {
    return {
      ...this.getDraw(product, ProductEnum.LOTTO),
      results: [
        {
          numbers: product.numeros.join(),
          numbersRevenge: product.numerosRevancha.join(),
          draw: product.numeroSorteo,
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
        ...this.getDraw(product.manana, ProductEnum.MONAZOS),
        results: [
          {
            draw: product.manana.numeroSorteo,
            time: DrawTimeEnum.MORNING.toString(),
            numbers: product.manana.numeros.join(),
          },
        ],
      });
    }

    if (product.tarde) {
      data.push({
        ...this.getDraw(product.tarde, ProductEnum.MONAZOS),
        results: [
          {
            draw: product.tarde.numeroSorteo,
            time: DrawTimeEnum.AFTERNOON.toString(),
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
        ...this.getDraw(product.manana, ProductEnum.TIEMPOS),
        results: [
          {
            draw: product.manana.numeroSorteo,
            time: DrawTimeEnum.MORNING.toString(),
            number: product.manana.numero,
            prize: product.manana.premio,
          },
        ],
      });
    }

    if (product.tarde) {
      data.push({
        ...this.getDraw(product.tarde, ProductEnum.TIEMPOS),
        results: [
          {
            draw: product.tarde.numeroSorteo,
            time: DrawTimeEnum.AFTERNOON.toString(),
            number: product.tarde.numero,
            prize: product.tarde.premio,
          },
        ],
      });
    }

    return data;
  }

  private getDraw(product: ProductBase, productType: ProductEnum) {
    return {
      id: product.numeroSorteo,
      date: product.fecha,
      validity: product.vigencia,
      product: productType,
    };
  }
}
