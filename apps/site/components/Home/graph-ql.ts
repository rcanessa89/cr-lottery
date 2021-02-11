import { gql } from '@apollo/client';

export const DRAWS_QUERY = gql`
  query Draws($options: FindAllDrawsOptions) {
    draws(options: $options) {
      id
      date
      product
    }
  }
`;
