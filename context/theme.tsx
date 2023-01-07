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
    
    const [theme, setTheme] = useState<string>(LIGHT);

    //ToggleTheme 
    //LIGHT to DARK
    //DARK to LIGHT
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const toggleTheme = (): void => {
        const newTheme = theme === LIGHT ? DARK : LIGHT;

        localStorage.setItem(THEME_LOCAL_STORAGE, newTheme);
        setTheme(newTheme);
    }
    
    //Check If These is the First time the user use the site to set the default theme (light)
    //GET the theme from localStorage
    //Toggle colors in Frontend
    useEffect(() => { 

        const checkLocalTheme = ():void => {
            let themeInLocalStorage:string | null = localStorage.getItem(THEME_LOCAL_STORAGE);
            
            if (themeInLocalStorage) {
                themeInLocalStorage = themeInLocalStorage?.toLocaleLowerCase();
                
                if (themeInLocalStorage === DARK || themeInLocalStorage === LIGHT) {
                    localStorage.setItem(THEME_LOCAL_STORAGE, themeInLocalStorage);
                    setTheme(themeInLocalStorage);
                }
            }
            else {
                localStorage.setItem(THEME_LOCAL_STORAGE, LIGHT);
                return;
            }

            const body:HTMLBodyElement | null = window.document.querySelector("body");
            
            if (themeInLocalStorage === DARK) {
                body?.classList.add(LIGHT);
            }
            else if (body?.classList.contains(LIGHT)) {
                body?.classList.remove(LIGHT);
            }
        }

        checkLocalTheme();

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