import { gql, LazyQueryHookOptions } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';

import { LottoResult, Product, QueryLottoResultsArgs } from '@cr-lottery/types';

export interface LottoQueryResponse {
  lottoResults: LottoResult[];
}

export const LOTO_QUERY = gql`
  query LottoResults($FindAllOptions: FindAllLottoPrizeOptions) {
    lottoResults(FindAllOptions: $FindAllOptions) {
      acumulado
      acumuladoRevancha
      cincoAciertos
      cincoAciertosRevancha
      cuatroAciertos
      cuatroAciertosRevancha
      dosAciertos
      dosAciertosRevancha
      id
      numbers
      numbersRevenge
      tresAciertos
      tresAciertosRevancha
    }
  }
`;

export const useLottoLazyQuery = (options: LazyQueryHookOptions = {}) => {
  return useLazyQuery<LottoQueryResponse, QueryLottoResultsArgs>(LOTO_QUERY, {
    context: {
      clientType: Product.Lotto,
    },
    ...options,
  });
};
