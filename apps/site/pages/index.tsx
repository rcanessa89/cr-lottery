import React from 'react';
import { Between } from 'typeorm';

import { QueryDrawsArgs } from '@cr-lottery/types';
import { initializeApollo } from '@cr-lottery/utils/initialize-apollo';
import { Home, DRAWS_QUERY, DrawsQueryResponse } from '../components/Home';

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  const date = new Date();
  const firstDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).toISOString();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).toISOString();

  await apolloClient.query<DrawsQueryResponse, QueryDrawsArgs>({
    query: DRAWS_QUERY,
    variables: {
      FindAllDrawsOptions: {
        where: {
          date: Between(firstDay, lastDay),
        },
      },
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export const Index = () => <Home />;

export default Index;
