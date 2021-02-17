import { QueryLazyOptions, useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client';

import { QueryDrawsMonthArgs, Product } from '@cr-lottery/types';

export interface DrawMonth {
  id: number;
  date: string;
  product: Product;
}
export interface DrawsQueryResponse {
  drawsMonth: DrawMonth[];
}

export const DRAWS_MONTH_QUERY = gql`
  query DrawsMonth($month: DateTime) {
    drawsMonth(month: $month) {
      id
      date
      product
    }
  }
`;

export const useHomeLazyQuery = (
  options?: QueryLazyOptions<QueryDrawsMonthArgs>
) => {
  return useLazyQuery<DrawsQueryResponse, QueryDrawsMonthArgs>(
    DRAWS_MONTH_QUERY,
    options
  );
};
