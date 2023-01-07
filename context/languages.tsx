import React, { useState, useEffect, useContext, createContext } from 'react';
import { LANGUAGE_LOCAL_STORAGE, EN, AR } from '../constants';

type LanguageContextType = {
    language: string,
    setLanguage: React.Dispatch<React.SetStateAction<string>>,
    toggleLanguage: (language: string) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageContextProviderInterface {
    children: React.ReactNode,
}

const LanguageContextProvider = ({ children }: LanguageContextProviderInterface):JSX.Element => {

    const [language, setLanguage] = useState('en');
    
    const toggleLanguage = (language: string) => {
        if (language === AR) {
            setLanguage(AR);
            localStorage.setItem(LANGUAGE_LOCAL_STORAGE, AR);
        }
        else {
            setLanguage(EN);
            localStorage.setItem(LANGUAGE_LOCAL_STORAGE, EN);
        }
    }
    
    useEffect(() => {

        const checkLocalLanguage = ():void => {
            let localLanguage: string | null = localStorage.getItem(LANGUAGE_LOCAL_STORAGE);
            
            if (localLanguage) {
                localLanguage = localLanguage?.toLocaleLowerCase();
                
                if (localLanguage === EN || localLanguage === AR) {
                    localStorage.setItem(LANGUAGE_LOCAL_STORAGE, localLanguage);
                    setLanguage(localLanguage);
                }
            }
            else {
                localStorage.setItem(LANGUAGE_LOCAL_STORAGE, EN);
                return;
            }
            
            const body:HTMLBodyElement | null = window.document.querySelector("body");
            
            if (language === AR) {
                body?.classList.add(AR);
            }
            else if (body?.classList.contains(AR)) {
                body?.classList.remove(AR);
            }
        }

        checkLocalLanguage();

    }, [language]);

    return (
        <LanguageContext.Provider
            value={{
                language, setLanguage,
                toggleLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguageContext = () => useContext(LanguageContext);

export default LanguageContextProvider;