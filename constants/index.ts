import { SEO } from "../config/SEO";
import { discoverDataEN, featuresDataEN, featuresDataAR, discoverDataAR } from "../assets/DATA/index";

//CONSTANT VARIABLES FORM THEME IN /context/theme.tsx //
const DARK: string = "dark";
const LIGHT: string = "light";

//CONSTANT VARIABLES FORM THEME IN /context/language.tsx //
const EN: string = "en";
const AR: string = "ar";

// LOCAL STORAGE NAME //

// theme LOCAL STORAGE
const THEME_LOCAL_STORAGE: string = "Tlemcen-Theme";

// language LOCAL STORAGE
const LANGUAGE_LOCAL_STORAGE: string = "Tlemcen-Language";

// Cookies //
const TLEMCEN_ADMIN_COOKIE: string = "tlemcen-admin";

export {
    //../context/theme.tsx
    DARK,
    LIGHT,
    THEME_LOCAL_STORAGE,

    //../context/languages.tsx
    EN,
    AR,
    LANGUAGE_LOCAL_STORAGE,
    
    //../config/SEO
    SEO,

    //..
    TLEMCEN_ADMIN_COOKIE,

    //../assets/DATA
    discoverDataEN,
    featuresDataEN,
    featuresDataAR,
    discoverDataAR
}