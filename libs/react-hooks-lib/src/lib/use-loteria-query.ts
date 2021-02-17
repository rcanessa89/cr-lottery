import { gql, LazyQueryHookOptions } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';

import {
  LoteriaResult,
  Product,
  QueryLoteriaResultsArgs,
} from '@cr-lottery/types';

export interface LoteriaQueryResponse {
  loteriaResults: LoteriaResult[];
}

export const LOTERIA_QUERY = gql`
  query LoteriaResults($FindAllOptions: FindAllLoteriaResultOptions) {
    loteriaResults(FindAllOptions: $FindAllOptions) {
      id
      number
      order
      prize
      series
    }
  }
`;

export const useLoteriaLazyQuery = (options: LazyQueryHookOptions = {}) => {
  return useLazyQuery<LoteriaQueryResponse, QueryLoteriaResultsArgs>(
    LOTERIA_QUERY,
    {
      context: {
        clientType: Product.Loteria,
      },
      ...options,
    }
  );
};
