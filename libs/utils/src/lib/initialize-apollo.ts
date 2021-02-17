import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
} from '@apollo/client';

import { Product } from '@cr-lottery/types';

const baseUri = 'https://dxa2mi3m43.execute-api.us-east-1.amazonaws.com/dev';
const getUri = (name: string): string => `${baseUri}/${name}/graphql`;

let apolloClient: ApolloClient<NormalizedCacheObject> = null;
const CHANCES = getUri('chances');
const LOTERIA = getUri('loteria');
const LOTTO = getUri('lotto');
const MONAZOS = getUri('monazos');
const TIEMPOS = getUri('tiempos');
const DRAW = getUri('draw');
const drawLink = new HttpLink({ uri: DRAW });
const chancesLink = ApolloLink.split(
  ({ getContext }) => getContext()?.clientType === Product.Chances,
  new HttpLink({ uri: CHANCES })
);
const loteriaLink = ApolloLink.split(
  ({ getContext }) => getContext()?.clientType === Product.Loteria,
  new HttpLink({ uri: LOTERIA })
);
const lottoLink = ApolloLink.split(
  ({ getContext }) => getContext()?.clientType === Product.Lotto,
  new HttpLink({ uri: LOTTO })
);
const monazosLink = ApolloLink.split(
  ({ getContext, ...x }) => getContext()?.clientType === Product.Monazos,
  new HttpLink({ uri: MONAZOS })
);
const tiemposLink = ApolloLink.split(
  ({ getContext }) => getContext()?.clientType === Product.Tiempos,
  new HttpLink({ uri: TIEMPOS })
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
      drawLink,
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
