import React from 'react';
import { Between } from 'typeorm';

import { Product, QueryDrawsArgs } from '@cr-lottery/types';
import { initializeApollo } from '@cr-lottery/utils/initialize-apollo';
import { Home, DRAWS_QUERY, DrawsQueryResponse } from '../components/Home';
import { ApolloProvider, useQuery } from '@apollo/client';

// export const getServerSideProps = async () => {
//   const apolloClient = initializeApollo();
//   const date = new Date();
//   const firstDay = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     1
//   ).toISOString();
//   const lastDay = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).toISOString();

//   const x = await apolloClient.query<DrawsQueryResponse, QueryDrawsArgs>({
//     query: DRAWS_QUERY,
//     variables: {
//       FindAllDrawsOptions: {
//         where: {
//           date: Between(firstDay, lastDay),
//         },
//       },
//     },
//   });

//   console.log(x)

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// };

export const Index = () => {
  const apolloClient = initializeApollo();
  const date = new Date();
  const firstDay = new Date(
    date.getFullYear() - 1,
    date.getMonth(),
    1
  ).toISOString();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).toISOString();

  console.log(Between(firstDay, lastDay));

  const x = useQuery<DrawsQueryResponse, QueryDrawsArgs>(DRAWS_QUERY, {
    client: apolloClient,
    variables: {
      FindAllDrawsOptions: {
        where: `date > ${firstDay}`,
      },
    },
  });

  console.log(x);

  return (
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  );
};

export default Index;
