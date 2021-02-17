import { gql, LazyQueryHookOptions } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';

import {
  ChancesResult,
  Product,
  QueryChancesResultsArgs,
} from '@cr-lottery/types';

export interface ChancesQueryResponse {
  chancesResults: ChancesResult[];
}

export const CHANCES_QUERY = gql`
  query ChancesResults($FindAllOptions: FindAllChancesResultOptions) {
    chancesResults(FindAllOptions: $FindAllOptions) {
      id
      number
      order
      prize
      series
    }
  }
`;

export const useChancesLazyQuery = (options: LazyQueryHookOptions = {}) => {
  return useLazyQuery<ChancesQueryResponse, QueryChancesResultsArgs>(
    CHANCES_QUERY,
    {
      context: {
        clientType: Product.Chances,
      },
      ...options,
    }
  );
};
