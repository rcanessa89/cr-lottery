import { gql } from '@apollo/client';

export const DRAWS_QUERY = gql`
  query Draws($FindAllDrawsOptions: FindAllDrawsOptions) {
    draws(FindAllDrawsOptions: $FindAllDrawsOptions) {
      id
      date
      product
    }
  }
`;
