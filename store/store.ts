import { configureStore } from "@reduxjs/toolkit";
import { tlemcenApi } from "./reducers/getData";

export const store = configureStore({
    reducer: {
        [tlemcenApi.reducerPath]: tlemcenApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(tlemcenApi.middleware)
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;