import { gql, LazyQueryHookOptions } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';

import {
  MonazosResult,
  Product,
  QueryMonazosResultsArgs,
} from '@cr-lottery/types';

export interface MonazosQueryResponse {
  monazosResults: MonazosResult[];
}

export const MONAZOS_QUERY = gql`
  query MonazosResults($FindAllOptions: FindAllMonazosResultOptions) {
    monazosResults(FindAllOptions: $FindAllOptions) {
      id
      numbers
      time
    }
  }
`;

export const useMonazosLazyQuery = (options: LazyQueryHookOptions = {}) => {
  return useLazyQuery<MonazosQueryResponse, QueryMonazosResultsArgs>(
    MONAZOS_QUERY,
    {
      context: {
        clientType: Product.Monazos,
      },
      ...options,
    }
  );
};
