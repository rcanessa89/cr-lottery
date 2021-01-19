import { Injectable } from '@nestjs/common';

import {
  LoteriaNacionalProduct,
  LoteriaChancesPrize,
  LottoProduct,
  TresMonazosProduct,
  DrawTime,
  NuevosTiemposProduct,
  Product,
} from '@cr-lottery/types';

@Injectable()
export class ProductDrawMapper {
  public mapByProduct(product: Product, data) {
    switch (product) {
      case Product.CHANCES: {
        return this.chances(data);
      }

      case Product.LOTERIA: {
        return this.loteria(data);
      }

      case Product.LOTTO: {
        return this.lotto(data);
      }

      case Product.MONAZOS: {
        return this.tresmonazos(data);
      }

      case Product.TIEMPOS: {
        return this.tiempos(data);
      }
    }
  }

  public loteria(product: LoteriaNacionalProduct) {
    return {
      id: product.numeroSorteo,
      date: product.fecha,
      validity: product.vigencia,
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
      id: product.numeroSorteo,
      date: product.fecha,
      validity: product.vigencia,
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
      id: product.numeroSorteo,
      date: product.fecha,
      validity: product.vigencia,
      numbers: product.numeros.join(),
      numbersRevenge: product.numerosRevancha.join(),
      prizes: {
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
    };
  }

  public tresmonazos(product: TresMonazosProduct) {
    const data = [];

    if (product.manana) {
      data.push({
        time: DrawTime.MORNING.toString(),
        id: product.manana.numeroSorteo,
        date: product.manana.fecha,
        validity: product.manana.vigencia,
        numbers: product.manana.numeros.join(),
      });
    }

    if (product.tarde) {
      data.push({
        time: DrawTime.AFTERNOON.toString(),
        id: product.tarde.numeroSorteo,
        date: product.tarde.fecha,
        validity: product.tarde.vigencia,
        numbers: product.tarde.numeros.join(),
      });
    }

    return data;
  }

  public tiempos(product: NuevosTiemposProduct) {
    const data = [];

    if (product.manana) {
      data.push({
        time: DrawTime.MORNING.toString(),
        id: product.manana.numeroSorteo,
        date: product.manana.fecha,
        validity: product.manana.vigencia,
        number: product.manana.numero,
        prize: product.manana.premio,
      });
    }

    if (product.tarde) {
      data.push({
        time: DrawTime.AFTERNOON.toString(),
        id: product.tarde.numeroSorteo,
        date: product.tarde.fecha,
        validity: product.tarde.vigencia,
        number: product.tarde.numero,
        prize: product.tarde.premio,
      });
    }

    return data;
  }
}
