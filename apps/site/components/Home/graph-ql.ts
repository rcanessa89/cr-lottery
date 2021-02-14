import { gql } from '@apollo/client';

export const DRAWS_MONTH_QUERY = gql`
  query DrawsMonth($month: DateTime) {
    drawsMonth(month: $month) {
      id
      date
    }
  }
`;
