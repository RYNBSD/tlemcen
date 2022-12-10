/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/inline-script-id */
import type { AppProps } from 'next/app'

//TOOLS
import { Provider } from 'react-redux';
import React from 'react';
import Script from 'next/script';

//LOGIC
import { store } from '../store/store';
import ThemeContextProvider from '../context/theme';

import { Layout } from '../containers';

//SCSS
import '../styles/_globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <Layout>
          <Script
            type='text/javascript'
            src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
          />
          <Component {...pageProps} />
          <Script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
                }
              `
            }}
          />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
}
