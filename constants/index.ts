import { SEO } from "../config/SEO";
import { discoverData, featuresData } from "../assets/DATA/index";

//CONSTANT VARIABLES FORM THEME IN /context/theme.ts //
const DARK:string = "dark";
const LIGHT:string = "light";

// LOCAL STORAGE NAME //
//theme LOCAL STORAGE
const THEME_LOCAL_STORAGE: string = "Tlemcen-Theme";

export {
    //./
    DARK,
    LIGHT,
    THEME_LOCAL_STORAGE,
    
    //../ts/SEO
    SEO,

    //../assets/DATA
    discoverData,
    featuresData,

    
}