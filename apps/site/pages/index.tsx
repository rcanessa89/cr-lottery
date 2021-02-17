import React from 'react';

import { QueryDrawsArgs } from '@cr-lottery/types';
import { initializeApollo } from '@cr-lottery/utils/initialize-apollo';
import { DRAWS_MONTH_QUERY, DrawMonth } from '@cr-lottery/react-hooks-lib';
import { Home } from '../components/Home';

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<DrawMonth[], QueryDrawsArgs>({
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
  initialApolloState: DrawMonth[];
}) => <Home draws={initialApolloState} />;

export default Index;
