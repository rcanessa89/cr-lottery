import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';

import { useApollo } from '@cr-lottery/react-hooks-lib';

const CustomApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <title>CR Lottery</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default CustomApp;
