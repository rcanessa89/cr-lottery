import { gql, LazyQueryHookOptions } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';

import {
  TiemposResult,
  Product,
  QueryTiemposResultsArgs,
} from '@cr-lottery/types';

export interface TiemposQueryResponse {
  tiemposResults: TiemposResult[];
}

export const TIEMPOS_QUERY = gql`
  query TiemposResults($FindAllOptions: FindAllTiemposResultOptions) {
    tiemposResults(FindAllOptions: $FindAllOptions) {
      id
      number
      prize
      time
    }
  }
`;

export const useTiemposLazyQuery = (options: LazyQueryHookOptions = {}) => {
  return useLazyQuery<TiemposQueryResponse, QueryTiemposResultsArgs>(
    TIEMPOS_QUERY,
    {
      context: {
        clientType: Product.Tiempos,
      },
      ...options,
    }
  );
};
