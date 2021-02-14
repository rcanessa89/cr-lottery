import React from 'react';

import { QueryDrawsArgs } from '@cr-lottery/types';
import { initializeApollo } from '@cr-lottery/utils/initialize-apollo';
import {
  Home,
  DRAWS_MONTH_QUERY,
  DrawsQueryResponse,
} from '../components/Home';

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<DrawsQueryResponse[], QueryDrawsArgs>({
    query: DRAWS_MONTH_QUERY,
  });

  return {
    props: {
      initialApolloState: Object.values(apolloClient.cache.extract()),
    },
  };
};

export const Index = ({
  initialApolloState,
}: {
  initialApolloState: DrawsQueryResponse[];
}) => <Home draws={initialApolloState} />;

export default Index;
