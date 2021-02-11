import { gql } from '@apollo/client';

export const DRAWS_QUERY = gql`
  query Draws($findAllDrawsOptions: FindAllDrawsOptions) {
    draws(FindAllDrawsOptions: $findAllDrawsOptions) {
      id
      date
      product
    }
  }
`;
