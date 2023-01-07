/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/inline-script-id */
import type { AppProps } from 'next/app'

//TOOLS
import { Provider } from 'react-redux';
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

//LOGIC
import { store } from '../store/store';
import { ThemeContextProvider, LanguageContextProvider, AdminContextProvider } from '../context';

import { Layout } from '../containers';

//SCSS
import '../styles/_globals.scss';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <AdminContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AdminContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </Provider>
    </>
  );
}
