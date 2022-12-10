import React, { useContext, createContext, useEffect, useState, useReducer } from "react";

import { DARK, LIGHT, THEME_LOCAL_STORAGE } from "../constants";

type ThemeContextType = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    toggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeContextProviderInterface {
    children: React.ReactNode,
}

const ThemeContextProvider = ({ children }:ThemeContextProviderInterface):JSX.Element => {
    
    const [theme, setTheme] = useState<string>('');

    //ToggleTheme 
    //LIGHT to DARK
    //DARK to LIGHT
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const toggleTheme: () => void = () => {
        const body:HTMLBodyElement | null = window.document.querySelector("body");
        
        if (body?.classList.contains(LIGHT)) {
            body?.classList.remove(LIGHT);
        }
        else {
            body?.classList.add(LIGHT);
        }

        setTheme(body?.classList.contains(LIGHT) ? DARK : LIGHT);
        localStorage.setItem(THEME_LOCAL_STORAGE, theme);
    }
    
    //Check If These is the First time the user use the site to set the default theme (light)
    //GET the theme from localStorage
    //Toggle colors in Frontend
    useEffect(() => {
        if (theme === '') {
            const themeInLocalStorage:string | null = localStorage.getItem(THEME_LOCAL_STORAGE);
            const body:HTMLBodyElement | null = window.document.querySelector("body");
        
            switch (themeInLocalStorage?.toLocaleLowerCase()) {
                case LIGHT:
                    body?.classList.add(LIGHT);
                    break;
                case DARK:
                    body?.classList.remove(LIGHT);
                    break;
                default:
                    body?.classList.add(LIGHT);
            }
        }
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme, setTheme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;