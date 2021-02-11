import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
} from '@apollo/client';

import { Product } from '@cr-lottery/types';

let apolloClient: ApolloClient<NormalizedCacheObject> = null;
const CHANCES =
  'https://8budx7h3mb.execute-api.us-east-1.amazonaws.com/dev/chances/graphql';
const LOTERIA =
  'https://8budx7h3mb.execute-api.us-east-1.amazonaws.com/dev/loteria/graphql';
const LOTTO =
  'https://8budx7h3mb.execute-api.us-east-1.amazonaws.com/dev/lotto/graphql';
const MONAZOS =
  'https://8budx7h3mb.execute-api.us-east-1.amazonaws.com/dev/monazos/graphql';
const TIEMPOS =
  'https://8budx7h3mb.execute-api.us-east-1.amazonaws.com/dev/tiempos/graphql';
const DRAW =
  'https://8budx7h3mb.execute-api.us-east-1.amazonaws.com/dev/draw/graphql';
const drawLink = new HttpLink({ uri: DRAW });
const chancesLink = ApolloLink.split(
  ({ getContext }) => getContext().clientType === Product.Chances,
  new HttpLink({ uri: CHANCES }),
  drawLink
);
const loteriaLink = ApolloLink.split(
  ({ getContext }) => getContext().clientType === Product.Loteria,
  new HttpLink({ uri: LOTERIA }),
  drawLink
);
const lottoLink = ApolloLink.split(
  ({ getContext }) => getContext().clientType === Product.Lotto,
  new HttpLink({ uri: LOTTO }),
  drawLink
);
const monazosLink = ApolloLink.split(
  ({ getContext }) => getContext().clientType === Product.Monazos,
  new HttpLink({ uri: MONAZOS }),
  drawLink
);
const tiemposLink = ApolloLink.split(
  ({ getContext }) => getContext().clientType === Product.Tiempos,
  new HttpLink({ uri: TIEMPOS }),
  drawLink
);

const createApolloClient = () => {
  const undefinedTypeOf = 'undefined';

  return new ApolloClient({
    ssrMode: typeof window === undefinedTypeOf,
    link: ApolloLink.from([
      chancesLink,
      loteriaLink,
      lottoLink,
      monazosLink,
      tiemposLink,
    ]),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (
  initialState = null
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();
  const undefinedTypeOf = 'undefined';

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === undefinedTypeOf) {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};
