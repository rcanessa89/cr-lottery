import { LottoResult } from '@cr-lottery/types';

import { colonesFormat } from '@cr-lottery/utils/colones-format';
import { resultNumberFormat } from '@cr-lottery/utils/result-number-format';
import { LottoItem } from './types';

export const getFormatData = (
  title: string,
  n: number[],
  accumulated: number,
  dos: number,
  tres: number,
  cuatro: number,
  nextAccumulated: number
): LottoItem => ({
  title,
  numbers: n.map((ni) => resultNumberFormat(ni)),
  prizes: [
    `Acumulado para este sorteo: ${colonesFormat(accumulated)}`,
    `Cuatro aciertos paga: ${colonesFormat(cuatro)}`,
    `Tres aciertos paga: ${colonesFormat(tres)}`,
    `Dos aciertos paga: ${colonesFormat(dos)}`,
    `Acumulado para próximo sorteo ${colonesFormat(nextAccumulated)}`,
  ],
});

export const mapData = (d: LottoResult): [LottoItem, LottoItem] => {
  const current = getFormatData(
    'Sorteo',
    d.numbers,
    d.cincoAciertos,
    d.dosAciertos,
    d.tresAciertos,
    d.cuatroAciertos,
    d.acumulado
  );
  const revenge = getFormatData(
    'Revancha',
    d.numbersRevenge,
    d.cincoAciertosRevancha,
    d.dosAciertosRevancha,
    d.tresAciertosRevancha,
    d.cuatroAciertosRevancha,
    d.acumuladoRevancha
  );

  return [current, revenge];
};
