import React, { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Welcome to site!</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default CustomApp;
