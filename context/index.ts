import ThemeContextProvider from "./theme";
import LanguageContextProvider from "./languages";
import AdminContextProvider from "./admin";

import { useThemeContext } from "./theme";
import { useLanguageContext } from "./languages";
import { useAdminContext } from "./admin";

export {
    // Containers
    ThemeContextProvider,
    LanguageContextProvider,
    AdminContextProvider,

    //hooks
    useLanguageContext,
    useThemeContext,
    useAdminContext,
}