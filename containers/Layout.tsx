/* eslint-disable @next/next/inline-script-id */
import React from 'react'
import Script from 'next/script';

import { NavbarEN, FooterEN, NavbarAR, FooterAR } from '../components/global'
import { useLanguageContext } from '../context';
import { AR } from '../constants';

interface layoutInterface {
  children:React.ReactNode,
}

const Layout = ({ children }:layoutInterface):JSX.Element => {
  // Get the default language from local storage 
  // default language can be set by user 'ar' or 'en'
  // Or get the default value 'en'
  // Check code ../context/languages.tsx
  const defaultLanguage = useLanguageContext();

  return (
    <>
      <Script
        type='text/javascript'
        src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      />

      {(defaultLanguage?.language?.toLocaleLowerCase() === AR) ? <NavbarAR /> : <NavbarEN /> }
      {children}
      {(defaultLanguage?.language?.toLocaleLowerCase() === AR) ? <FooterAR /> : <FooterEN />}

      {
        (defaultLanguage?.language?.toLocaleLowerCase() === AR) && (
          <Script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({pageLanguage: 'ar'}, 'google_translate_element');
                }
              `
            }}
          />
        )
      }
      {
        (defaultLanguage?.language?.toLocaleLowerCase() !== AR) && (
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
        )
      }
    </>
  );
}

export default Layout